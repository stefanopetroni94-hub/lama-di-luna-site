import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { WaveLine } from "@/components/wave-line"
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
              <div className="small">{c.phoneSmall}</div>
              <div className="channels">
                <a href="tel:+390883569505" className="channel">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 4l2.5-.5L9 7l-2 1c.5 2 2 3.5 4 4l1-2 3.5 1.5L15 14a8 8 0 01-10-10z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                  {c.callLabel}
                </a>
                <a href="https://wa.me/390883569505" className="channel">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 12a9 9 0 109-9 9 9 0 00-9 9 9 9 0 001.5 4.9L3 21l4.2-1.4A9 9 0 003 12z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                  {c.whatsappLabel}
                </a>
              </div>
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

            <div className="block">
              <div className="label">{c.socialLabel}</div>
              <div className="value">
                <a href="#">Instagram</a> · <a href="#">Facebook</a> · <a href="#">Tripadvisor</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-label find-label">
        <WaveLine side="left" />
        <span>{c.findLabel}</span>
        <WaveLine side="right" />
      </div>

      <section className="find-us-intro">
        <div className="script-eyebrow">{c.mapEyebrow}</div>
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
