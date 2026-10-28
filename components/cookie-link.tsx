"use client"

/** Footer link that reopens the cookie settings. */
export function CookieLink({ label }: { label: string }) {
  return (
    <a
      href="#cookie-settings"
      onClick={(e) => {
        e.preventDefault()
        window.dispatchEvent(new Event("open-cookie-settings"))
      }}
    >
      {label}
    </a>
  )
}
