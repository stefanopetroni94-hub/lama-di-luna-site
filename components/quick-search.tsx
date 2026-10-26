"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { bookingUrl } from "@/lib/booking"
import { isLocale } from "@/lib/i18n"

type Labels = {
  checkIn: string
  checkOut: string
  guests: string
  guestsValue: string
  addDate: string
  searchCta: string
}

// yyyy-mm-dd in local time, the format <input type="date"> uses
function isoDay(d: Date) {
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${d.getFullYear()}-${m}-${day}`
}

function nextDay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return isoDay(new Date(y, m - 1, d + 1))
}

export function QuickSearch({ labels }: { labels: Labels }) {
  const params = useParams<{ lang: string }>()
  const locale = isLocale(params.lang) ? params.lang : "en"
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [adults, setAdults] = useState("2")
  const today = isoDay(new Date())

  return (
    <form
      className="qs-card"
      onSubmit={(e) => {
        e.preventDefault()
        window.location.assign(bookingUrl(locale, { checkIn, checkOut, adults: Number(adults) }))
      }}
    >
      <div className="qs-field">
        <label htmlFor="qs-checkin">{labels.checkIn}</label>
        <input
          id="qs-checkin"
          type="date"
          min={today}
          className={`val${checkIn ? "" : " placeholder"}`}
          value={checkIn}
          onChange={(e) => {
            const v = e.target.value
            setCheckIn(v)
            // keep check out after check in
            if (v && (!checkOut || checkOut <= v)) setCheckOut(nextDay(v))
          }}
        />
      </div>
      <div className="qs-field">
        <label htmlFor="qs-checkout">{labels.checkOut}</label>
        <input
          id="qs-checkout"
          type="date"
          min={checkIn ? nextDay(checkIn) : today}
          className={`val${checkOut ? "" : " placeholder"}`}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>
      <div className="qs-field">
        <label htmlFor="qs-guests">{labels.guests}</label>
        <select id="qs-guests" className="val" value={adults} onChange={(e) => setAdults(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <button type="submit" className="qs-submit">
        {labels.searchCta}
      </button>
    </form>
  )
}
