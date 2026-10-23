"use client"

import { useState } from "react"
import { BOOKING_URL } from "@/lib/booking"

type Labels = {
  checkIn: string
  checkOut: string
  guests: string
  guestsValue: string
  addDate: string
  searchCta: string
}

export function QuickSearch({ labels }: { labels: Labels }) {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  return (
    <form
      className="qs-card"
      onSubmit={(e) => {
        e.preventDefault()
        window.open(BOOKING_URL, "_blank", "noopener,noreferrer")
      }}
    >
      <div className="qs-field">
        <label htmlFor="qs-checkin">{labels.checkIn}</label>
        <input
          id="qs-checkin"
          type="date"
          className={`val${checkIn ? "" : " placeholder"}`}
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>
      <div className="qs-field">
        <label htmlFor="qs-checkout">{labels.checkOut}</label>
        <input
          id="qs-checkout"
          type="date"
          className={`val${checkOut ? "" : " placeholder"}`}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>
      <div className="qs-field">
        <label htmlFor="qs-guests">{labels.guests}</label>
        <select id="qs-guests" className="val" defaultValue="2">
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
