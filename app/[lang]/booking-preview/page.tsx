import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { BackLink } from "@/components/back-link"
import { engineUrl } from "@/lib/booking"
import { HOME, isLocale } from "@/lib/i18n"

const TEXT = {
  en: {
    title: "Book your stay",
    note: "Test page: this is how the booking engine looks inside the new site. Colours and links inside the box come from Amenitiz.",
    frame: "Booking engine",
  },
  it: {
    title: "Prenota il tuo soggiorno",
    note: "Pagina di prova: così appare il motore di prenotazione dentro il nuovo sito. Colori e link dentro il riquadro dipendono da Amenitiz.",
    frame: "Motore di prenotazione",
  },
  fr: {
    title: "Réservez votre séjour",
    note: "Page de test : voici l'aspect du moteur de réservation dans le nouveau site. Les couleurs et les liens dans le cadre dépendent d'Amenitiz.",
    frame: "Moteur de réservation",
  },
}

export default async function BookingPreviewPage({
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
        <p>{t.note}</p>
      </section>

      <section className="booking-frame-wrap">
        <iframe className="booking-frame" src={engineUrl(stay)} title={t.frame} loading="eager" />
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
