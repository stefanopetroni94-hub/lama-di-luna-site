import Link from "next/link"

/**
 * Small "back" link, top left of every page (under the menu bar), with a short dash in front.
 * tone "light" sits on a photo, tone "dark" on a plain page.
 */
export function BackLink({ href, label, tone = "dark" }: { href: string; label: string; tone?: "light" | "dark" }) {
  return (
    <div className={`back-link back-link--${tone}`}>
      <Link href={href}>{label}</Link>
    </div>
  )
}
