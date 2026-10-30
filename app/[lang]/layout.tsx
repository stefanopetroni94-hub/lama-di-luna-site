import type React from "react"
import { notFound } from "next/navigation"
import { CookieConsent } from "@/components/cookie-consent"
import { BookingSheet } from "@/components/booking-sheet"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HtmlLang } from "@/components/html-lang"
import { isLocale, locales } from "@/lib/i18n"

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

  return (
    <>
      <HtmlLang locale={lang} />
      {children}
      <CookieConsent locale={lang} />
      <BookingSheet locale={lang} />
      <WhatsAppButton locale={lang} />
    </>
  )
}
