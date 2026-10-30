import { NextResponse } from "next/server"

// Contact and newsletter forms post here. The lead is forwarded to a Google Apps Script
// web app on the info@lamadiluna.com account, which appends it to a Sheet and emails info@.
const WEBHOOK = process.env.LEAD_WEBHOOK_URL
const SECRET = process.env.LEAD_WEBHOOK_SECRET ?? ""

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  // honeypot: real people never fill the hidden "website" field
  if (clip(body.website, 200)) return NextResponse.json({ ok: true })

  const type = body.type === "newsletter" ? "newsletter" : "contact"
  const lead = {
    secret: SECRET,
    type,
    lang: clip(body.lang, 5),
    page: clip(body.page, 300),
    name: clip(body.name, 100),
    surname: clip(body.surname, 100),
    email: clip(body.email, 200),
    message: clip(body.message, 5000),
  }
  if (!EMAIL.test(lead.email) || (type === "contact" && !lead.message)) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  if (!WEBHOOK) {
    console.error("lead: LEAD_WEBHOOK_URL not set, lead dropped", type, lead.email)
    return NextResponse.json({ ok: false }, { status: 503 })
  }

  try {
    const res = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      redirect: "follow",
    })
    const out = await res.json().catch(() => null)
    if (!res.ok || !out?.ok) throw new Error(`webhook ${res.status}`)
  } catch (err) {
    console.error("lead: webhook failed", type, lead.email, err)
    return NextResponse.json({ ok: false }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
