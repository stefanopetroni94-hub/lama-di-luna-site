import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { QuickSearch } from "@/components/quick-search"
import { MapCard } from "@/components/map-card"
import { BackLink } from "@/components/back-link"
import { HOME, isLocale } from "@/lib/i18n"
import { contact } from "@/lib/content/contact"
import { book } from "@/lib/content/book"
import { home } from "@/lib/content/home"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  return pageMetadata(lang, "contact")
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = contact[lang]
  const h = home[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />
      <BackLink href={`/${lang}`} label={HOME[lang]} />

      <section className="page-header">
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
      </section>

      <div className="quick-search availability-placement availability-placement--contact">
        <QuickSearch labels={book[lang]} />
      </div>

      <section className="contact-section">
        <div className="contact-grid contact-grid--stacked">
          <ContactForm
            privacyHref={`/${lang}/privacy`}
            labels={{
              formEyebrow: c.formEyebrow,
              formTitle: c.formTitle,
              nameLabel: c.nameLabel,
              surnameLabel: c.surnameLabel,
              privacyLabel: c.privacyLabel,
              emailFieldLabel: c.emailFieldLabel,
              phoneFieldLabel: c.phoneFieldLabel,
              datesLabel: c.datesLabel,
              messageLabel: c.messageLabel,
              sendLabel: c.sendLabel,
              sendNote: c.sendNote,
              successMessage: c.successMessage,
            }}
          />
        </div>
      </section>

      <section className="find-us-intro find-us-intro--left">
        <div className="find-us-title">{c.findLabel}</div>
        <p>
          {h.mapText.join(" ")} {c.mapBody}
        </p>
        <div className="find-us-title">{c.directionsTitle}</div>
        <p>{c.directions}</p>
      </section>

      <section className="map-wrap">
        <div className="gmap-frame">
          <iframe
            className="gmap"
            src="https://www.google.com/maps?q=Lama+di+Luna,+Andria,+Italy&z=8&output=embed"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lama di Luna on Google Maps"
          />
        </div>
        <MapCard
          title={{ en: "Location & contact", it: "Posizione e contatti", fr: "Adresse et contact", de: "Adresse und Kontakt" }[lang]}
          address={c.addressValue}
          phone={c.phoneValue}
          email={c.emailValue}
        />
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
