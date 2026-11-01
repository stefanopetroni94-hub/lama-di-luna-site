// Stripe REST over fetch (no SDK). Secret key from env STRIPE_SECRET_KEY, never the repo.
import crypto from "node:crypto"

export async function stripe(path: string, params: Record<string, unknown>, method = "POST") {
  const body = new URLSearchParams()
  const add = (prefix: string, v: unknown) => {
    if (v === undefined || v === null) return
    if (typeof v === "object") for (const [k, x] of Object.entries(v as object)) add(prefix ? `${prefix}[${k}]` : k, x)
    else body.append(prefix, String(v))
  }
  add("", params)
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method,
    headers: { authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`, "content-type": "application/x-www-form-urlencoded" },
    body: method === "GET" ? undefined : body,
  })
  const d = await res.json()
  if (!res.ok) throw new Error(d.error?.message || `stripe ${res.status}`)
  return d
}

// Stripe-Signature header check (t=..., v1=...), 5 minute tolerance.
export function verifySignature(payload: string, header: string | null, secret: string) {
  if (!header || !secret) return false
  const parts = header.split(",").map((p) => p.split("="))
  const t = parts.find(([k]) => k === "t")?.[1]
  const sigs = parts.filter(([k]) => k === "v1").map(([, v]) => v)
  if (!t || !sigs.length || Math.abs(Date.now() / 1000 - Number(t)) > 300) return false
  const want = crypto.createHmac("sha256", secret).update(`${t}.${payload}`).digest("hex")
  return sigs.some((s) => s.length === want.length && crypto.timingSafeEqual(Buffer.from(s), Buffer.from(want)))
}
