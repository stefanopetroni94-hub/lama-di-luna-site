"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { chrome, isLocale, menu, type Locale } from "@/lib/i18n"
import { bookingUrl } from "@/lib/booking"

/**
 * Site navigation.
 * - variant "overlay": sits transparently over a hero image, then becomes a
 *   solid bar (Palazzo Daniele style) once the hero scrolls out of view.
 * - variant "solid": opaque bar used on inner pages without a full-bleed hero.
 *
 * Clicking "Menu" reveals the section links inline, directly below the word —
 * plain small text, no panel or overlay.
 */
export function SiteNav({
  locale,
  variant = "overlay",
}: {
  locale: Locale
  variant?: "overlay" | "solid"
}) {
  const t = chrome[locale]
  const items = menu[locale]
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Overlay nav turns solid once the hero has scrolled past the header.
  useEffect(() => {
    if (variant !== "overlay") return
    const hero = document.querySelector(".hero, .exp-hero")
    if (!hero) return
    const onScroll = () => {
      setScrolled(hero.getBoundingClientRect().bottom < 70)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [variant])

  // Close the menu as soon as the page scrolls, so it stays tied to the hero.
  useEffect(() => {
    if (!open) return
    const onScroll = () => setOpen(false)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [open])

  // Close the menu on Escape or a click outside.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("mousedown", onClick)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("mousedown", onClick)
    }
  }, [open])

  const solid = variant === "solid" || scrolled

  // same page, other language
  const pathname = usePathname() || `/${locale}`
  const hrefFor = (to: Locale) => {
    const segments = pathname.split("/")
    if (segments[1] && isLocale(segments[1])) segments[1] = to
    return segments.join("/") || `/${to}`
  }

  return (
    <nav className={`nav${solid ? " nav--solid" : ""}${open ? " nav--open" : ""}`}>
      <div className={`nav-curtain${open ? " is-open" : ""}`} aria-hidden="true" />
      <div className="nav-menu" ref={menuRef}>
        <button
          type="button"
          className="nav-side"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="true"
          aria-expanded={open}
        >
          {t.menu}
        </button>

        <ul className={`nav-dropdown${open ? " is-open" : ""}`} aria-hidden={!open}>
          {items.map((item) => {
            const href = item.slug ? `/${locale}/${item.slug}` : null
            return (
              <li key={item.label}>
                {href ? (
                  <Link href={href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <span className="is-soon">{item.label}</span>
                )}
              </li>
            )
          })}
          <li className="nav-lang">
            {(["en", "it", "fr"] as const).map((l, i) => (
              <span key={l}>
                {i > 0 ? " " : ""}
                <Link
                  href={hrefFor(l)}
                  onClick={() => setOpen(false)}
                  className={l === locale ? "is-current" : ""}
                  aria-current={l === locale ? "true" : undefined}
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </li>
        </ul>
      </div>

      <Link href={`/${locale}`} className="nav-logo" aria-label="Lama di Luna">
        <span className="brand-mark" aria-hidden="true" />
      </Link>

      <a href={bookingUrl(locale)} className="nav-side">
        {t.book}
      </a>
    </nav>
  )
}
