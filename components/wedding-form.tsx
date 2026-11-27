"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { leadError, sendLead } from "@/lib/send-lead"
import { CustomSelect } from "@/components/custom-select"
import { weddings, type WeddingsContent } from "@/lib/content/weddings"

// The choices are always sent in English (the value of each option), whatever language the visitor sees,
// so the emails that arrive are all written the same way.
const EN = weddings.en.form

/** Wedding enquiry. It goes through the same /api/lead as the contact form, so every detail is written into the message,
 *  starting with a "WEDDING ENQUIRY" line that tells it apart from the other requests. */
export function WeddingForm({ privacyHref, labels }: { privacyHref: string; labels: WeddingsContent["form"] }) {
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
          track("wedding_enquiry")
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
        {/* the name of each choice is written inside the field, like the other fields; a click opens the list */}
        <CustomSelect
          name="guests"
          label={labels.guestsLabel}
          required
          options={labels.guests.map((o, i) => ({ value: EN.guests[i], label: o }))}
        />
        <CustomSelect
          name="ceremony"
          label={labels.ceremonyLabel}
          options={labels.ceremony.map((o, i) => ({ value: EN.ceremony[i], label: o }))}
        />
        <CustomSelect name="budget" label={labels.budgetLabel} options={labels.budget.map((o, i) => ({ value: EN.budget[i], label: o }))} />
        <CustomSelect
          name="planner"
          label={labels.plannerLabel}
          options={labels.planner.map((o, i) => ({ value: EN.planner[i], label: o }))}
        />
        <div className="field field--wide">
          <label htmlFor="wd-more">{labels.more}</label>
          <textarea className="box-input" id="wd-more" name="more" rows={6} />
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
