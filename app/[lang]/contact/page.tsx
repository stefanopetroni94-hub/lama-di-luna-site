import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { QuickSearch } from "@/components/quick-search"
import { isLocale } from "@/lib/i18n"
import { contact } from "@/lib/content/contact"
import { book } from "@/lib/content/book"
import { home } from "@/lib/content/home"

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = contact[lang]
  const h = home[lang]

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
              emailFieldLabel: c.emailFieldLabel,
              phoneFieldLabel: c.phoneFieldLabel,
              datesLabel: c.datesLabel,
              messageLabel: c.messageLabel,
              sendLabel: c.sendLabel,
              sendNote: c.sendNote,
              successMessage: c.successMessage,
            }}
          />

          <div className="direct direct--row">
            <div className="block">
              <div className="label">{c.phoneLabel}</div>
              <div className="value">
                <a href="tel:+390883569505">{c.phoneValue}</a>
              </div>
              <div className="small phone-small">{c.phoneSmall}</div>
            </div>

            <div className="block">
              <div className="label">{c.emailLabel}</div>
              <div className="value">
                <a href={`mailto:${c.emailValue}`}>{c.emailValue}</a>
              </div>
              <div className="small">{c.emailSmall}</div>
            </div>

            <div className="block">
              <div className="label">{c.addressLabel}</div>
              <div className="value" style={{ whiteSpace: "pre-line" }}>
                {c.addressValue}
              </div>
              <div className="small">{c.addressSmall}</div>
            </div>

          </div>
        </div>
      </section>

      <section className="find-us-intro find-us-intro--first">
        <div className="find-title">{c.findLabel}</div>
        <p>
          {h.mapText.join(" ")} {c.mapBody}
        </p>
      </section>

      <section className="map-section">
        <div className="map-section-inner map-section-inner--destinations">
          <ul className="distance-list distance-list--columns">
            {c.distances.map((d) => (
              <li key={d.place}>
                <span className="place">{d.place}</span>
                <span className="distance">{d.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <iframe
          className="gmap"
          src="https://www.google.com/maps?q=Lama+di+Luna,+Andria,+Italy&z=8&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lama di Luna on Google Maps"
        />
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
