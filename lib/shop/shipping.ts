// Shipping: the buyer picks a country in the cart, we price the parcel by total packed weight
// for that country's zone, and Stripe Checkout is locked to that country.
// Shared by the cart (to show the price) and /api/checkout (to charge it), so they never disagree.
import { byId, type CartLine, type Kind } from "./catalog"

export type Zone = {
  id: string
  countries: string[]
  // price in cents for parcels up to maxGrams; first band that fits wins
  bands: { maxGrams: number; cents: number }[]
  days: [number, number]
  kinds: Kind[] // what may ship to this zone
  freeFromCents?: number // free shipping when goods total reaches this
  open: boolean // false = not sold there yet (see the reason above the zone)
}

const EU = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]

// PROVISIONAL numbers, replaced by real carrier quotes before go live (see Website.md hub, Shop row).
export const zones: Zone[] = [
  {
    id: "it",
    countries: ["IT", "SM", "VA"],
    bands: [{ maxGrams: 3000, cents: 900 }, { maxGrams: 10000, cents: 1200 }, { maxGrams: 20000, cents: 1600 }],
    days: [2, 4],
    kinds: ["oil", "wine", "cosmetic"],
    freeFromCents: 9000,
    open: true,
  },
  {
    id: "eu",
    countries: EU,
    bands: [{ maxGrams: 3000, cents: 1900 }, { maxGrams: 10000, cents: 2900 }, { maxGrams: 20000, cents: 3900 }],
    days: [3, 7],
    kinds: ["oil", "cosmetic"], // wine: excise is due in the buyer's country, needs a fiscal representative there
    open: true,
  },
  {
    id: "ch",
    countries: ["CH", "LI"],
    bands: [{ maxGrams: 3000, cents: 3500 }, { maxGrams: 10000, cents: 5500 }, { maxGrams: 20000, cents: 7500 }],
    days: [4, 8],
    kinds: ["oil", "cosmetic"], // buyer pays Swiss import VAT; seller registration only above CHF 100k a year
    open: true,
  },
  // UK: parcels up to £135 need UK VAT registration before the first sale. Closed until decided.
  {
    id: "uk",
    countries: ["GB"],
    bands: [{ maxGrams: 3000, cents: 3500 }, { maxGrams: 10000, cents: 5500 }, { maxGrams: 20000, cents: 7500 }],
    days: [4, 8],
    kinds: ["oil", "cosmetic"],
    open: false,
  },
  // USA: 15% tariff, no duty free allowance since 29 Aug 2025, FDA facility registration and Prior Notice
  // per food parcel, MoCRA for cosmetics. Closed until a duties paid courier is set up.
  {
    id: "world",
    countries: ["US", "CA", "AU", "JP", "SG", "HK", "AE", "IL", "NZ", "KR"],
    bands: [{ maxGrams: 3000, cents: 5500 }, { maxGrams: 10000, cents: 8900 }, { maxGrams: 20000, cents: 12900 }],
    days: [5, 10],
    kinds: ["oil", "cosmetic"],
    open: false,
  },
]

export const shipCountries = zones.filter((z) => z.open).flatMap((z) => z.countries)
export const zoneOf = (country: string) => zones.find((z) => z.open && z.countries.includes(country.toUpperCase()))

export type Quote =
  | { ok: true; zone: string; grams: number; goodsCents: number; shippingCents: number; days: [number, number] }
  | { ok: false; reason: "country" | "kind" | "weight" | "empty"; blocked?: string[] }

export function quote(lines: CartLine[], country: string): Quote {
  if (!lines.length) return { ok: false, reason: "empty" }
  const zone = zoneOf(country)
  if (!zone) return { ok: false, reason: "country" }
  const blocked = lines.filter((l) => !zone.kinds.includes(byId(l.id)!.kind)).map((l) => l.id)
  if (blocked.length) return { ok: false, reason: "kind", blocked }
  const grams = lines.reduce((s, l) => s + byId(l.id)!.grams * l.qty, 0)
  const goodsCents = lines.reduce((s, l) => s + byId(l.id)!.priceCents * l.qty, 0)
  const band = zone.bands.find((b) => grams <= b.maxGrams)
  if (!band) return { ok: false, reason: "weight" }
  const free = zone.freeFromCents !== undefined && goodsCents >= zone.freeFromCents
  return { ok: true, zone: zone.id, grams, goodsCents, shippingCents: free ? 0 : band.cents, days: zone.days }
}
