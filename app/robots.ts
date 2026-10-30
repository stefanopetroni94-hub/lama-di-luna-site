import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

// Only the live site is indexed; Vercel previews stay out of Google.
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV !== "production") return { rules: { userAgent: "*", disallow: "/" } }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/*/booking-preview" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
