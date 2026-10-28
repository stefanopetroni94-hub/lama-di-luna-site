import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { BackLink } from "@/components/back-link"
import { engineUrl } from "@/lib/booking"
import { HOME, isLocale } from "@/lib/i18n"

const TEXT = {
  en: { title: "Book your stay", frame: "Booking engine" },
  it: { title: "Prenota il tuo soggiorno", frame: "Motore di prenotazione" },
  fr: { title: "Réservez votre séjour", frame: "Moteur de réservation" },
}

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ start_date?: string; end_date?: string; adults?: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const stay = await searchParams
  const t = TEXT[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />
      <BackLink href={`/${lang}`} label={HOME[lang]} />

      <section className="page-header">
        <h1>{t.title}</h1>
      </section>

      <section className="booking-frame-wrap">
        <div className="booking-frame-crop">
          <iframe className="booking-frame" src={engineUrl(stay)} title={t.frame} loading="eager" />
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
