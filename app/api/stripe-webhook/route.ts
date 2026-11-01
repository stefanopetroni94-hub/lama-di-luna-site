import { NextResponse } from "next/server"
import { verifySignature } from "@/lib/shop/stripe"

// Stripe calls this when an order is paid. The order goes to Lama's Google Apps Script
// (same one as the contact form): new row in the "Ordini" tab and an email to info@lamadiluna.com
// with the shipping address, so they pack and ship.
// Stripe: Developers > Webhooks > https://www.lamadiluna.com/api/stripe-webhook, events
// checkout.session.completed and checkout.session.async_payment_succeeded. Secret in STRIPE_WEBHOOK_SECRET.
export async function POST(req: Request) {
  const payload = await req.text()
  if (!verifySignature(payload, req.headers.get("stripe-signature"), process.env.STRIPE_WEBHOOK_SECRET ?? ""))
    return NextResponse.json({ error: "bad_signature" }, { status: 400 })

  const event = JSON.parse(payload)
  const s = event.data?.object ?? {}
  const paid =
    (event.type === "checkout.session.completed" && s.payment_status === "paid") ||
    event.type === "checkout.session.async_payment_succeeded"
  if (!paid) return NextResponse.json({ received: true })

  const ship = s.collected_information?.shipping_details ?? s.shipping_details ?? {}
  const a = ship.address ?? s.customer_details?.address ?? {}
  const order = {
    secret: process.env.LEAD_WEBHOOK_SECRET ?? "",
    type: "order",
    session: s.id,
    cart: s.metadata?.cart ?? "",
    totalCents: s.amount_total,
    shippingCents: s.total_details?.amount_shipping ?? 0,
    taxCents: s.total_details?.amount_tax ?? 0,
    name: ship.name ?? s.customer_details?.name ?? "",
    email: s.customer_details?.email ?? "",
    phone: s.customer_details?.phone ?? "",
    address: [a.line1, a.line2, a.postal_code, a.city, a.state, a.country].filter(Boolean).join(", "),
    country: a.country ?? s.metadata?.country ?? "",
    grams: s.metadata?.grams ?? "",
  }

  const url = process.env.LEAD_WEBHOOK_URL
  if (!url) {
    console.error("webhook: LEAD_WEBHOOK_URL not set, order not forwarded", s.id)
    return NextResponse.json({ error: "not_configured" }, { status: 500 })
  }
  try {
    const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(order), redirect: "follow" })
    const out = await res.json().catch(() => null)
    if (!res.ok || !out?.ok) throw new Error(`apps script ${res.status}`)
  } catch (err) {
    // 500 makes Stripe retry for up to 3 days, so an order is never lost
    console.error("webhook: forward failed", s.id, err)
    return NextResponse.json({ error: "forward" }, { status: 500 })
  }
  return NextResponse.json({ received: true })
}
