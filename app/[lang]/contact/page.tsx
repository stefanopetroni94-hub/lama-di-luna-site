import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { QuickSearch } from "@/components/quick-search"
import { WaveLine } from "@/components/wave-line"
import { isLocale } from "@/lib/i18n"
import { contact } from "@/lib/content/contact"
import { book } from "@/lib/content/book"

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = contact[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />

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
            labels={{
              formEyebrow: c.formEyebrow,
              formTitle: c.formTitle,
              nameLabel: c.nameLabel,
              surnameLabel: c.surnameLabel,
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

      <div className="section-label find-label">
        <WaveLine side="left" />
        <span>{lang === "it" ? "Posizione" : "Location"}</span>
        <WaveLine side="right" />
      </div>

      <section className="map-wrap">
        <iframe
          className="gmap"
          src="https://www.google.com/maps?q=Lama+di+Luna,+Andria,+Italy&z=8&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lama di Luna on Google Maps"
        />
        <div className="map-card">
          <h2>{lang === "it" ? "Posizione e contatti" : "Location & contact"}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{c.addressValue}</p>
          <p>
            Tel. <a href="tel:+390883569505">{c.phoneValue}</a>
            <br />
            E-mail: <a href={`mailto:${c.emailValue}`}>{c.emailValue}</a>
          </p>
          <a
            className="map-card-btn"
            href="https://www.google.com/maps/search/?api=1&query=Lama+di+Luna,+Andria,+Italy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
