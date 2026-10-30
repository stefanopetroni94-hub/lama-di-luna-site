import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Lora } from "next/font/google"
import { notFound } from "next/navigation"
import { CookieConsent } from "@/components/cookie-consent"
import { BookingSheet } from "@/components/booking-sheet"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { isLocale, locales } from "@/lib/i18n"
import "../globals.css"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lama di Luna — Masseria in Puglia",
  description:
    "An 18th-century organic masseria in the heart of Puglia. Stay, taste, and take part in authentic countryside experiences.",
  generator: "v0.app",
  // Vercel previews stay out of Google; only production is indexed.
  robots: process.env.VERCEL_ENV === "production" ? undefined : { index: false, follow: false },
}

export const viewport: Viewport = {
  themeColor: "#fdfcf9",
}


export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  // This is the root layout, so each language page declares its own lang (Google reads it).
  return (
    <html lang={lang} className={lora.variable}>
      <body className="antialiased">
        {children}
        <CookieConsent locale={lang} />
        <BookingSheet locale={lang} />
        <WhatsAppButton locale={lang} />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
