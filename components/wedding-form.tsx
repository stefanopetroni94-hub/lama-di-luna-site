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
      className="wd-form"
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
        <label className="wd-field">
          <span>Your names</span>
          <input className="line-input" name="names" type="text" required />
        </label>
        <label className="wd-field">
          <span>Email</span>
          <input className="line-input" name="email" type="email" required />
        </label>
        <label className="wd-field">
          <span>Country</span>
          <input className="line-input" name="country" type="text" required />
        </label>
        <label className="wd-field">
          <span>Preferred date or season</span>
          <input className="line-input" name="date" type="text" required />
        </label>
        <label className="wd-field">
          <span>Number of guests</span>
          <select className="line-input" name="guests" required defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {GUESTS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="wd-field">
          <span>Type of ceremony</span>
          <select className="line-input" name="ceremony" defaultValue="">
            <option value="">Select</option>
            {CEREMONY.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="wd-field">
          <span>Budget</span>
          <select className="line-input" name="budget" defaultValue="">
            <option value="">Select</option>
            {BUDGET.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="wd-field">
          <span>Do you have a planner?</span>
          <select className="line-input" name="planner" defaultValue="">
            <option value="">Select</option>
            {PLANNER.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="wd-field wd-field--wide">
          <span>Tell us more</span>
          <textarea className="box-input" name="more" rows={5} />
        </label>
      </div>
      <label className="wd-consent">
        <input type="checkbox" name="privacy" value="accepted" required />
        <span>
          I have read and accept the{" "}
          <a href={privacyHref} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </span>
      </label>
      <div className="wd-submit">
        <button type="submit" className="wd-btn" disabled={status === "sending"}>
          Request wedding details
        </button>
        {status === "sent" || status === "error" ? (
          <p className="wd-note" role="status" aria-live="polite">
            {status === "sent" ? "Thank you. We will reply within 24 hours with availability and our wedding guide." : leadError()}
          </p>
        ) : null}
      </div>
    </form>
  )
}
