"use client"

import { useState } from "react"

type Labels = {
  formEyebrow: string
  formTitle: string
  nameLabel: string
  surnameLabel: string
  emailFieldLabel: string
  phoneFieldLabel: string
  datesLabel: string
  messageLabel: string
  sendLabel: string
  sendNote: string
  successMessage: string
}

export function ContactForm({ labels }: { labels: Labels }) {
  const [sent, setSent] = useState(false)

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="form-eyebrow">{labels.formEyebrow}</div>
      <div className="form-title">{labels.formTitle}</div>
      <div className="form-stack">
        <div className="field">
          <label htmlFor="name">{labels.nameLabel}</label>
          <input id="name" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="surname">{labels.surnameLabel}</label>
          <input id="surname" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="email">{labels.emailFieldLabel}</label>
          <input id="email" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="message">{labels.messageLabel}</label>
          <textarea id="message" rows={5} required />
        </div>
        <div className="submit">
          <button type="submit" className="submit-btn">
            {labels.sendLabel}
          </button>
          <div className="submit-note" role="status" aria-live="polite">
            {sent ? labels.successMessage : labels.sendNote}
          </div>
        </div>
      </div>
    </form>
  )
}
