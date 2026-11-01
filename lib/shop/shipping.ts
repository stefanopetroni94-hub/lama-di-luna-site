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

// Prices researched 2026-11-01 from live Packlink quotes out of 76013, VAT included (.scratch/lama-seo/shipping-research.md).
// EU split: Ireland, Nordics, Greece, east cost about twice Germany.
const EU_CORE = ["AT", "BE", "DE", "ES", "FR", "LU", "NL", "PT"]
const EU_REST = ["BG", "CY", "CZ", "DK", "EE", "FI", "GR", "HR", "HU", "IE", "LT", "LV", "MT", "PL", "RO", "SE", "SI", "SK"]

// Outer box and padding, added once per order.
export const BOX_GRAMS = 300

// PROVISIONAL numbers, replaced by real carrier quotes before go live (see Website.md hub, Shop row).
export const zones: Zone[] = [
  {
    id: "it",
    countries: ["IT", "SM", "VA"],
    bands: [{ maxGrams: 4000, cents: 1200 }, { maxGrams: 10000, cents: 1600 }, { maxGrams: 20000, cents: 1900 }], // +€2 on the quote: box and padding cost €1 to €3, islands margin was €0.57,
    days: [2, 4],
    kinds: ["oil", "wine", "cosmetic"],
    freeFromCents: 9000,
    open: true,
  },
  {
    id: "eu",
    countries: EU_CORE,
    bands: [{ maxGrams: 4000, cents: 2100 }, { maxGrams: 10000, cents: 2700 }, { maxGrams: 20000, cents: 3500 }],
    days: [3, 7],
    kinds: ["oil", "cosmetic"], // wine: excise is due in the buyer's country, needs a fiscal representative there
    open: true,
  },
  {
    id: "eu-rest",
    countries: EU_REST,
    bands: [{ maxGrams: 4000, cents: 2600 }, { maxGrams: 10000, cents: 3900 }, { maxGrams: 20000, cents: 5900 }],
    days: [4, 9],
    kinds: ["oil", "cosmetic"],
    open: true,
  },
  {
    id: "ch",
    countries: ["CH", "LI"],
    bands: [{ maxGrams: 4000, cents: 2500 }, { maxGrams: 10000, cents: 3500 }, { maxGrams: 20000, cents: 4500 }],
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
  const grams = BOX_GRAMS + lines.reduce((s, l) => s + byId(l.id)!.grams * l.qty, 0)
  const goodsCents = lines.reduce((s, l) => s + byId(l.id)!.priceCents * l.qty, 0)
  const band = zone.bands.find((b) => grams <= b.maxGrams)
  if (!band) return { ok: false, reason: "weight" }
  const free = zone.freeFromCents !== undefined && goodsCents >= zone.freeFromCents
  return { ok: true, zone: zone.id, grams, goodsCents, shippingCents: free ? 0 : band.cents, days: zone.days }
}
