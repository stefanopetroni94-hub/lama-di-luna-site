// The shop's price list: the only place the checkout reads prices and weights from.
// The browser sends product ids and quantities, never prices.
// grams = packed weight of one unit (filled bottle + its padding). Researched 2026-11-01 (.scratch/lama-seo/shipping-research.md);
// orcio and cosmetics are estimates (no volume found). The outer box is added once per order in shipping.ts (BOX_GRAMS).

export type Kind = "oil" | "wine" | "cosmetic"

export type CatalogItem = {
  id: string
  priceCents: number // VAT included, Italian price
  grams: number
  kind: Kind
  stock?: number // undefined = not tracked
}

export const catalog: CatalogItem[] = [
  { id: "carolea-500", priceCents: 2300, grams: 1000, kind: "oil" },
  { id: "coratina-500", priceCents: 2300, grams: 1000, kind: "oil" },
  { id: "carolea-3l", priceCents: 6600, grams: 3100, kind: "oil" },
  { id: "coratina-3l", priceCents: 6600, grams: 3100, kind: "oil" },
  { id: "orcio", priceCents: 3200, grams: 1000, kind: "oil" },
  { id: "primitivo", priceCents: 2900, grams: 1450, kind: "wine" },
  { id: "nero-di-troia", priceCents: 3700, grams: 1450, kind: "wine" },
  { id: "nero-di-troia-rose", priceCents: 2500, grams: 1450, kind: "wine" },
  { id: "fiano", priceCents: 2500, grams: 1450, kind: "wine" },
  { id: "shampoo", priceCents: 1500, grams: 400, kind: "cosmetic" },
  { id: "conditioner", priceCents: 1600, grams: 400, kind: "cosmetic" },
  { id: "hand-body-soap", priceCents: 1500, grams: 400, kind: "cosmetic" },
  { id: "bath-set", priceCents: 4000, grams: 1100, kind: "cosmetic" },
]

export const byId = (id: string) => catalog.find((p) => p.id === id)

export type CartLine = { id: string; qty: number }

export const MAX_QTY = 24

// Clean a cart from the browser: known ids only, whole quantities 1..MAX_QTY, merged.
export function cleanCart(raw: unknown): CartLine[] {
  if (!Array.isArray(raw)) return []
  const out = new Map<string, number>()
  for (const r of raw.slice(0, 50)) {
    const id = typeof r?.id === "string" ? r.id : ""
    const qty = Math.floor(Number(r?.qty))
    if (!byId(id) || !(qty > 0)) continue
    out.set(id, Math.min(MAX_QTY, (out.get(id) ?? 0) + qty))
  }
  return [...out].map(([id, qty]) => ({ id, qty }))
}
