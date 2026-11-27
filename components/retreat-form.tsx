"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { leadError, sendLead } from "@/lib/send-lead"
import { retreatForm, type RetreatFormLabels } from "@/lib/content/retreat-form"

// The choices are always sent in English (the value of each option), whatever language the visitor sees,
// so the emails that arrive are all written the same way.
const EN = retreatForm.en

/** Enquiry to reserve the whole masseria (retreats, company meetings, family gatherings). Same way of sending as the
 *  wedding form: /api/lead, with a "RETREAT ENQUIRY" line at the top of the message. */
export function RetreatForm({ privacyHref, labels }: { privacyHref: string; labels: RetreatFormLabels }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  return (
    <form
      className="contact-form wd-form"
      onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const val = (id: string) => (form.elements.namedItem(id) as HTMLInputElement | null)?.value.trim() ?? ""
        const message = [
          `RETREAT ENQUIRY | ${val("names")} | ${val("date")}`,
          "",
          `Name: ${val("names")}`,
          `Country: ${val("country")}`,
          `Preferred dates or period: ${val("date")}`,
          `Number of guests: ${val("guests")}`,
          `Type of stay: ${val("type") || "-"}`,
          `Language of the page: ${document.documentElement.lang}`,
          "",
          val("more") || "(no further notes)",
        ].join("\n")
        setStatus("sending")
        const ok = await sendLead({
          type: "contact",
          name: val("names"),
          surname: "",
          email: val("email"),
          message,
          website: val("website"),
        })
        setStatus(ok ? "sent" : "error")
        if (ok) {
          track("retreat_enquiry")
          form.reset()
        }
      }}
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <div className="wd-form-grid">
        <input className="line-input" name="names" type="text" placeholder={labels.names} aria-label={labels.names} required />
        <input className="line-input" name="email" type="email" placeholder={labels.email} aria-label={labels.email} required />
        <input className="line-input" name="country" type="text" placeholder={labels.country} aria-label={labels.country} required />
        <input className="line-input" name="date" type="text" placeholder={labels.date} aria-label={labels.date} required />
        <div className="field">
          <label htmlFor="rt-guests">{labels.guestsLabel}</label>
          <select className="line-input" id="rt-guests" name="guests" required defaultValue="">
            <option value="" disabled>
              {labels.select}
            </option>
            {labels.guests.map((o, i) => (
              <option key={o} value={EN.guests[i]}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="rt-type">{labels.typeLabel}</label>
          <select className="line-input" id="rt-type" name="type" defaultValue="">
            <option value="">{labels.select}</option>
            {labels.types.map((o, i) => (
              <option key={o} value={EN.types[i]}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="field field--wide">
          <label htmlFor="rt-more">{labels.more}</label>
          <textarea className="box-input" id="rt-more" name="more" rows={6} />
        </div>
      </div>
      <label className="privacy-check">
        <input type="checkbox" name="privacy" value="accepted" required />
        <span>
          {labels.privacyBefore}
          <a href={privacyHref} target="_blank" rel="noopener noreferrer">
            {labels.privacyLink}
          </a>
          {labels.privacyAfter}
        </span>
      </label>
      <div className="submit">
        <button type="submit" className="submit-btn" disabled={status === "sending"}>
          {labels.button}
        </button>
        {status === "sent" || status === "error" ? (
          <div className="submit-note" role="status" aria-live="polite">
            {status === "sent" ? labels.success : leadError()}
          </div>
        ) : null}
      </div>
    </form>
  )
}
