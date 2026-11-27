"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { leadError, sendLead } from "@/lib/send-lead"

const GUESTS = ["Up to 30", "30–80", "80–120", "120–150"]
const CEREMONY = ["Symbolic", "Civil", "Religious", "Not sure yet"]
const BUDGET = ["Under €30,000", "€30,000–60,000", "Over €60,000"]
const PLANNER = ["Not yet", "Yes"]

/** Wedding enquiry. It goes through the same /api/lead as the contact form, so every detail is written into the message,
 *  starting with a "WEDDING ENQUIRY" line that tells it apart from the other requests. */
export function WeddingForm({ privacyHref }: { privacyHref: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  return (
    <form
      className="contact-form wd-form"
      onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const val = (id: string) => (form.elements.namedItem(id) as HTMLInputElement | null)?.value.trim() ?? ""
        const message = [
          `WEDDING ENQUIRY | ${val("names")} | ${val("date")}`,
          "",
          `Names: ${val("names")}`,
          `Country: ${val("country")}`,
          `Preferred date or season: ${val("date")}`,
          `Number of guests: ${val("guests")}`,
          `Type of ceremony: ${val("ceremony") || "-"}`,
          `Budget: ${val("budget") || "-"}`,
          `Planner: ${val("planner") || "-"}`,
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
          track("wedding_enquiry")
          form.reset()
        }
      }}
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <div className="wd-form-grid">
        <input className="line-input" name="names" type="text" placeholder="Your names" aria-label="Your names" required />
        <input className="line-input" name="email" type="email" placeholder="Email" aria-label="Email" required />
        <input className="line-input" name="country" type="text" placeholder="Country" aria-label="Country" required />
        <input
          className="line-input"
          name="date"
          type="text"
          placeholder="Preferred date or season"
          aria-label="Preferred date or season"
          required
        />
        <div className="field">
          <label htmlFor="wd-guests">Number of guests</label>
          <select className="line-input" id="wd-guests" name="guests" required defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {GUESTS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="wd-ceremony">Type of ceremony</label>
          <select className="line-input" id="wd-ceremony" name="ceremony" defaultValue="">
            <option value="">Select</option>
            {CEREMONY.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="wd-budget">Budget</label>
          <select className="line-input" id="wd-budget" name="budget" defaultValue="">
            <option value="">Select</option>
            {BUDGET.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="wd-planner">Do you have a planner?</label>
          <select className="line-input" id="wd-planner" name="planner" defaultValue="">
            <option value="">Select</option>
            {PLANNER.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field field--wide">
          <label htmlFor="wd-more">Tell us more</label>
          <textarea className="box-input" id="wd-more" name="more" rows={6} />
        </div>
      </div>
      <label className="privacy-check">
        <input type="checkbox" name="privacy" value="accepted" required />
        <span>
          I have read and accept the{" "}
          <a href={privacyHref} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </span>
      </label>
      <div className="submit">
        <button type="submit" className="submit-btn" disabled={status === "sending"}>
          Request wedding details
        </button>
        {status === "sent" || status === "error" ? (
          <div className="submit-note" role="status" aria-live="polite">
            {status === "sent" ? "Thank you. We will reply within 24 hours with availability and our wedding guide." : leadError()}
          </div>
        ) : null}
      </div>
    </form>
  )
}
