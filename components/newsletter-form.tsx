"use client"

import { useState } from "react"

export function NewsletterForm({
  text,
  namePlaceholder,
  placeholder,
  button,
  consent,
}: {
  text: string
  namePlaceholder: string
  placeholder: string
  button: string
  consent: string
}) {
  const [done, setDone] = useState(false)

  return (
    <section className="newsletter">
      <h2 className="newsletter-title">{text}</h2>
      <form
        className="newsletter-form"
        onSubmit={(e) => {
          e.preventDefault()
          setDone(true)
        }}
      >
        <div className="newsletter-fields">
          <input type="text" placeholder={namePlaceholder} aria-label={namePlaceholder} />
          <input type="email" placeholder={placeholder} required aria-label={placeholder} />
        </div>
        <label className="newsletter-checkbox">
          <input type="checkbox" required />
          <span>{consent}</span>
        </label>
        <button type="submit">{done ? "✓" : button}</button>
      </form>
    </section>
  )
}
