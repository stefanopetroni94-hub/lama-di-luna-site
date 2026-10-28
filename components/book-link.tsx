"use client"

import { OPEN_BOOKING_EVENT } from "@/components/booking-sheet"

/** A "Book" link: opens the booking sheet; without JavaScript it goes to the booking page. */
export function BookLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent(OPEN_BOOKING_EVENT))
      }}
    >
      {children}
    </a>
  )
}
