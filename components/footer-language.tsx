"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { isLocale, type Locale } from "@/lib/i18n"

/** Small IT / EN switch in the footer: same page, other language. */
export function FooterLanguage({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`
  const hrefFor = (to: Locale) => {
    const segments = pathname.split("/")
    if (segments[1] && isLocale(segments[1])) segments[1] = to
    return segments.join("/") || `/${to}`
  }

  return (
    <span className="footer-lang">
      <Link href={hrefFor("it")} aria-current={locale === "it" ? "true" : undefined} style={{ opacity: locale === "it" ? 1 : 0.55 }}>
        IT
      </Link>
      {" | "}
      <Link href={hrefFor("en")} aria-current={locale === "en" ? "true" : undefined} style={{ opacity: locale === "en" ? 1 : 0.55 }}>
        EN
      </Link>
    </span>
  )
}
