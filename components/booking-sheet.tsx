"use client"

import { useEffect, useState } from "react"
import { engineUrl } from "@/lib/booking"
import { chrome, type Locale } from "@/lib/i18n"

type Stay = { start_date?: string; end_date?: string; adults?: string }

export const OPEN_BOOKING_EVENT = "open-booking"

/** Opens the booking engine as a full-page sheet that slides up from the bottom. */
export function BookingSheet({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState<string | null>(null)
  const t = chrome[locale]

  useEffect(() => {
    const onOpen = (e: Event) => {
      const stay = (e as CustomEvent<Stay | undefined>).detail
      setSrc(engineUrl(stay))
      setOpen(true)
    }
    window.addEventListener(OPEN_BOOKING_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_BOOKING_EVENT, onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div className={`booking-sheet${open ? " is-open" : ""}`} aria-hidden={!open} role="dialog" aria-label={t.book}>
      <div className="booking-sheet-bar">
        <span>{t.book}</span>
        <button type="button" className="booking-sheet-close" onClick={() => setOpen(false)}>
          {t.close} &times;
        </button>
      </div>
      <div className="booking-sheet-body">
        {src ? <iframe className="booking-sheet-frame" src={src} title={t.book} /> : null}
      </div>
    </div>
  )
}
