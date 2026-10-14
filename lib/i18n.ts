export const locales = ["en", "it"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

// Main navigation menu (opens in the full-screen overlay).
// `slug` is null for sections that don't have a page yet.
export type MenuItem = { label: string; slug: string | null }

export const menu: Record<Locale, MenuItem[]> = {
  en: [
    { label: "Rooms", slug: "rooms" },
    { label: "Kitchen", slug: "restaurant" },
    { label: "Farm", slug: "farm" },
    { label: "Story", slug: "story" },
    { label: "Experiences", slug: "experiences" },
    { label: "Whole Masseria", slug: "exclusive" },
    { label: "Shop", slug: "shop" },
    { label: "Contact", slug: "contact" },
  ],
  it: [
    { label: "Camere", slug: "rooms" },
    { label: "Cucina", slug: "restaurant" },
    { label: "Fattoria", slug: "farm" },
    { label: "Storia", slug: "story" },
    { label: "Esperienze", slug: "experiences" },
    { label: "Masseria Intera", slug: "exclusive" },
    { label: "Shop", slug: "shop" },
    { label: "Contatti", slug: "contact" },
  ],
}

// Shared chrome strings (nav + footer) used on every page.
export const chrome = {
  en: {
    menu: "Menu",
    book: "Book",
    scroll: "Scroll",
    close: "Close",
    menuTitle: "Explore",
    press: "As featured in",
    footer: {
      instagram: "Instagram",
      facebook: "Facebook",
      tripadvisor: "Tripadvisor",
      instagramUrl: "https://www.instagram.com/masserialamadiluna/",
      facebookUrl: "https://www.facebook.com/masserialamadiluna",
      tripadvisorUrl: "https://www.tripadvisor.com/",
      privacy: "Privacy",
      cookies: "Cookies",
      cin: "CIN: IT110001B500020950",
      copyright: "© 2026 Lama di Luna · Andria, BT",
    },
  },
  it: {
    menu: "Menù",
    book: "Prenota",
    scroll: "Scorri",
    close: "Chiudi",
    menuTitle: "Esplora",
    press: "Ne hanno parlato",
    footer: {
      instagram: "Instagram",
      facebook: "Facebook",
      tripadvisor: "Tripadvisor",
      instagramUrl: "https://www.instagram.com/masserialamadiluna/",
      facebookUrl: "https://www.facebook.com/masserialamadiluna",
      tripadvisorUrl: "https://www.tripadvisor.com/",
      privacy: "Privacy",
      cookies: "Cookies",
      cin: "CIN: IT110001B500020950",
      copyright: "© 2026 Lama di Luna · Andria, BT",
    },
  },
} as const
