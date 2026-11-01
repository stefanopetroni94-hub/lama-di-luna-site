import { NextResponse } from "next/server"
import { byId, cleanCart } from "@/lib/shop/catalog"
import { quote, zoneOf } from "@/lib/shop/shipping"
import { stripe } from "@/lib/shop/stripe"
import { shop } from "@/lib/content/shop"
import { isLocale } from "@/lib/i18n"

// POST {items:[{id,qty}], country, lang} -> {url} of a Stripe Checkout page.
// Prices and shipping come from lib/shop, never from the browser. The buyer is charged
// goods + shipping before anything ships; the order reaches Lama through /api/stripe-webhook.
// STRIPE_TAX=on turns on Stripe Tax (needed once EU sales pass the OSS threshold).
// Stripe Tax product codes: edible oils, wine, shampoo (cosmetics)
const TAX_CODE = { oil: "txcd_40020002", wine: "txcd_41020003", cosmetic: "txcd_32050036" } as const

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY) return NextResponse.json({ error: "not_configured" }, { status: 503 })
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 })
  }
  const lang = typeof body.lang === "string" && isLocale(body.lang) ? body.lang : "en"
  const country = String(body.country || "").toUpperCase()
  const lines = cleanCart(body.items)
  const q = quote(lines, country)
  if (!q.ok) return NextResponse.json({ error: q.reason, blocked: q.blocked }, { status: 400 })

  const origin = new URL(req.url).origin
  const names = shop[lang].products
  const tax = process.env.STRIPE_TAX === "on"
  const zone = zoneOf(country)!
  const cart = lines.map((l) => `${l.id}x${l.qty}`).join(",")

  const params: Record<string, unknown> = {
    mode: "payment",
    locale: lang,
    success_url: `${origin}/${lang}/cart/thanks?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/${lang}/cart`,
    billing_address_collection: "auto",
    phone_number_collection: { enabled: "true" },
    shipping_address_collection: { allowed_countries: [country] },
    automatic_tax: tax ? { enabled: "true" } : undefined,
    metadata: { cart, country, grams: String(q.grams), zone: zone.id },
    payment_intent_data: { metadata: { cart, country } },
    line_items: Object.fromEntries(
      lines.map((l, i) => {
        const p = byId(l.id)!
        const name = names.find((n) => n.id === l.id)?.name ?? l.id
        return [
          i,
          {
            quantity: l.qty,
            price_data: {
              currency: "eur",
              unit_amount: p.priceCents,
              tax_behavior: tax ? "inclusive" : undefined,
              product_data: { name, tax_code: tax ? TAX_CODE[p.kind] : undefined, metadata: { id: l.id, kind: p.kind } },
            },
          },
        ]
      }),
    ),
    shipping_options: {
      0: {
        shipping_rate_data: {
          type: "fixed_amount",
          display_name: { en: "Tracked courier", it: "Corriere tracciato", fr: "Transporteur suivi", de: "Paket mit Sendungsverfolgung" }[lang],
          fixed_amount: { amount: q.shippingCents, currency: "eur" },
          tax_behavior: tax ? "inclusive" : undefined,
          delivery_estimate: {
            minimum: { unit: "business_day", value: q.days[0] },
            maximum: { unit: "business_day", value: q.days[1] },
          },
        },
      },
    },
  }

  try {
    const session = await stripe("checkout/sessions", params)
    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error("checkout: stripe failed", err)
    return NextResponse.json({ error: "stripe" }, { status: 502 })
  }
}
