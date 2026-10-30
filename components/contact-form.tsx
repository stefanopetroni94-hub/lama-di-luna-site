"use client"

import { useEffect, useRef, useState } from "react"
import { leadError, sendLead } from "@/lib/send-lead"

type Labels = {
  formEyebrow: string
  formTitle: string
  nameLabel: string
  surnameLabel: string
  privacyLabel: string
  emailFieldLabel: string
  phoneFieldLabel: string
  datesLabel: string
  messageLabel: string
  sendLabel: string
  sendNote: string
  successMessage: string
}

export function ContactForm({ labels, privacyHref }: { labels: Labels; privacyHref: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [before, after] = labels.privacyLabel.split("Privacy Policy")
  const message = useRef<HTMLTextAreaElement>(null)

  // shop "contact us" buttons link here with ?product=<name>: start the message with it
  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("product")
    if (product && message.current && !message.current.value) message.current.value = `${product}: `
  }, [])

  return (
    <form
      className="contact-form"
      onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const val = (id: string) => (form.elements.namedItem(id) as HTMLInputElement | null)?.value ?? ""
        setStatus("sending")
        const ok = await sendLead({
          type: "contact",
          name: val("name"),
          surname: val("surname"),
          email: val("email"),
          message: val("message"),
          website: val("website"),
        })
        setStatus(ok ? "sent" : "error")
        if (ok) form.reset()
      }}
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <div className="form-title">{labels.formTitle}</div>
      <div className="form-stack">
        <input
          className="line-input"
          id="name"
          type="text"
          placeholder={labels.nameLabel}
          aria-label={labels.nameLabel}
          required
        />
        <input
          className="line-input"
          id="surname"
          type="text"
          placeholder={labels.surnameLabel}
          aria-label={labels.surnameLabel}
          required
        />
        <input
          className="line-input"
          id="email"
          type="email"
          placeholder={labels.emailFieldLabel}
          aria-label={labels.emailFieldLabel}
          required
        />
        <div className="field">
          <label htmlFor="message">{labels.messageLabel}</label>
          <textarea ref={message} className="box-input" id="message" rows={6} required />
        </div>
        <label className="privacy-check">
          <input type="checkbox" name="privacy" value="accepted" required />
          <span>
            {before}
            <a href={privacyHref} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            {after}
          </span>
        </label>
        <div className="submit">
          <button type="submit" className="submit-btn" disabled={status === "sending"}>
            {labels.sendLabel}
          </button>
          {status === "sent" || status === "error" ? (
            <div className="submit-note" role="status" aria-live="polite">
              {status === "sent" ? labels.successMessage : leadError()}
            </div>
          ) : null}
        </div>
      </div>
    </form>
  )
}
