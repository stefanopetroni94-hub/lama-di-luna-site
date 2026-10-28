"use client"

import { useState } from "react"

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
          <textarea className="box-input" id="message" rows={6} required />
        </div>
        <label className="privacy-check">
          <input type="checkbox" name="privacy" value="accepted" required />
          <span>{labels.privacyLabel}</span>
        </label>
        <div className="submit">
          <button type="submit" className="submit-btn">
            {labels.sendLabel}
          </button>
          {sent ? (
            <div className="submit-note" role="status" aria-live="polite">
              {labels.successMessage}
            </div>
          ) : null}
        </div>
      </div>
    </form>
  )
}
