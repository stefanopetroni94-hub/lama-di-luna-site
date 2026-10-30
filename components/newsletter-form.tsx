"use client"

import { useState } from "react"
import { leadError, sendLead } from "@/lib/send-lead"

export function NewsletterForm({
  namePlaceholder,
  placeholder,
  button,
  consent,
}: {
  namePlaceholder: string
  placeholder: string
  button: string
  consent: string
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  return (
    <section className="newsletter">
      <form
        className="newsletter-form"
        onSubmit={async (e) => {
          e.preventDefault()
          const form = e.currentTarget
          const val = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | null)?.value ?? ""
          setStatus("sending")
          const ok = await sendLead({ type: "newsletter", name: val("name"), email: val("email"), website: val("website") })
          setStatus(ok ? "done" : "error")
          if (ok) form.reset()
        }}
      >
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
        <div className="newsletter-fields">
          <input type="text" name="name" placeholder={namePlaceholder} aria-label={namePlaceholder} />
          <input type="email" name="email" placeholder={placeholder} required aria-label={placeholder} />
        </div>
        <label className="newsletter-checkbox">
          <input type="checkbox" required />
          <span>{consent}</span>
        </label>
        <button type="submit" disabled={status === "sending"}>{status === "done" ? "✓" : button}</button>
        {status === "error" ? <p className="newsletter-error" role="status">{leadError()}</p> : null}
      </form>
    </section>
  )
}
