import type { MetadataRoute } from "next"
import { locales } from "@/lib/i18n"
import { SITE_URL } from "@/lib/seo"
import { rooms } from "@/lib/content/rooms"
import { experiences } from "@/lib/content/experiences"
import { shop } from "@/lib/content/shop"
import { SHOP_ONLINE } from "@/lib/shop/online"

const sections = ["", "rooms", "restaurant", "farm", "story", "experiences", "weddings", "retreats", "contact", "booking", "privacy"]

// Every page in every language, each with its hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...sections,
    ...rooms.en.list.map((r) => `rooms/${r.slug}`),
    ...[...experiences.en.onEstate, ...experiences.en.inRegion].map((c) => c.slug).filter((s) => s !== "#").map((s) => `experiences/${s}`),
    ...(SHOP_ONLINE ? ["shop", ...shop.en.products.map((p) => `shop/${p.id}`)] : []),
  ]
  const url = (lang: string, path: string) => `${SITE_URL}/${lang}${path ? `/${path}` : ""}`
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: url(lang, path),
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, url(l, path)])) },
    })),
  )
}
