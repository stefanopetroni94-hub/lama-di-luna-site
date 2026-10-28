// Booking engine (Amenitiz) used by the current Lama di Luna site.
// The one place to change when the property moves off Amenitiz.
import type { Locale } from "@/lib/i18n"

const BOOKING_HOST = "https://lama-di-luna-biomasseria.amenitiz.io"

export type Stay = {
  checkIn: string // yyyy-mm-dd
  checkOut: string // yyyy-mm-dd
  adults: number
}

function validStay(stay?: Stay): stay is Stay {
  return !!stay && !!stay.checkIn && !!stay.checkOut && stay.checkOut > stay.checkIn
}

// Address of the Amenitiz engine itself (the one shown inside the frame on our booking page).
// With a valid stay, Amenitiz opens straight on the available rooms
// (start_date, end_date, adults, children: the params its own engine reads).
// Without one, it opens on its date picker.
export function engineUrl(stay?: { start_date?: string; end_date?: string; adults?: string }) {
  const base = `${BOOKING_HOST}/booking/room`
  if (!stay?.start_date || !stay.end_date || stay.end_date <= stay.start_date) {
    return `${base}#DatesGuests-BE`
  }
  const q = new URLSearchParams({
    start_date: stay.start_date,
    end_date: stay.end_date,
    adults: stay.adults ?? "2",
    children: "0",
  })
  return `${base}?${q}`
}

// Where the Book button and Check availability go: our own booking page, with the engine inside.
// The chosen dates travel in the address and are passed on to the engine.
export function bookingUrl(locale: Locale, stay?: Stay) {
  const base = `/${locale}/booking`
  if (!validStay(stay)) return base
  const q = new URLSearchParams({
    start_date: stay.checkIn,
    end_date: stay.checkOut,
    adults: String(stay.adults),
  })
  return `${base}?${q}`
}
