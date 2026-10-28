import type React from "react"
import { notFound } from "next/navigation"
import { CookieConsent } from "@/components/cookie-consent"
import { WhatsAppButton } from "@/components/whatsapp-button"
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
      {children}
      <CookieConsent locale={lang} />
      <WhatsAppButton locale={lang} />
    </>
  )
}
