// Booking engine (Amenitiz) used by the current Lama di Luna site.
// The one place to change when the property moves off Amenitiz.
import type { Locale } from "@/lib/i18n"

const BOOKING_HOST = "https://lama-di-luna-biomasseria.amenitiz.io"

export type Stay = {
  checkIn: string // yyyy-mm-dd
  checkOut: string // yyyy-mm-dd
  adults: number
}

// With a valid stay, Amenitiz opens straight on the available rooms
// (start_date, end_date, adults, children: the params its own engine reads).
// Without one, it opens on its date picker.
export function bookingUrl(locale: Locale, stay?: Stay) {
  void locale // the engine picks its own language
  // the engine's own address, without a language in the path
  const base = `${BOOKING_HOST}/booking/room`
  if (!stay || !stay.checkIn || !stay.checkOut || stay.checkOut <= stay.checkIn) {
    return `${base}#DatesGuests-BE`
  }
  const q = new URLSearchParams({
    start_date: stay.checkIn,
    end_date: stay.checkOut,
    adults: String(stay.adults),
    children: "0",
  })
  return `${base}?${q}`
}
