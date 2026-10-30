import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CurvedLabel } from "@/components/curved-label"
import { QuickSearch } from "@/components/quick-search"
import { PerkIcon } from "@/components/perk-icon"
import { BackLink } from "@/components/back-link"
import { HOME, isLocale } from "@/lib/i18n"
import { book } from "@/lib/content/book"
import { bookingUrl } from "@/lib/booking"
import { BookLink } from "@/components/book-link"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  return pageMetadata(lang, "book", { en: "Book", it: "Prenota", fr: "Réserver" }[lang])
}

export default async function BookPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = book[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />
      <BackLink href={`/${lang}`} label={HOME[lang]} />

      <section className="page-header">
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
      </section>

      <section className="quick-search">
        <QuickSearch
          labels={{
            checkIn: c.checkIn,
            checkOut: c.checkOut,
            guests: c.guests,
            guestsValue: c.guestsValue,
            addDate: c.addDate,
            searchCta: c.searchCta,
          }}
        />
      </section>

      <section className="perks">
        <div className="perks-header">
          <div className="script-eyebrow">{c.perksEyebrow}</div>
          <h2>{c.perksTitle}</h2>
          <p>{c.perksIntro}</p>
        </div>
        <div className="perks-grid">
          {c.perks.map((perk) => (
            <div className="perk" key={perk.title}>
              <div className="perk-icon">
                <PerkIcon icon={perk.icon} />
              </div>
              <h3>{perk.title}</h3>
              <p>{perk.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <CurvedLabel text={c.roomsLabel} />
      </section>

      <section className="lh-widget-wrap">
        <div className="book-direct">
          <BookLink href={bookingUrl(lang)} className="book-stay-btn">
            {{ en: "Book now", it: "Prenota ora", fr: "Réserver" }[lang]}
          </BookLink>
        </div>
      </section>

      <section className="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="script-eyebrow">{c.faqEyebrow}</div>
            <h2>{c.faqTitle}</h2>
          </div>
          {c.faqs.map((faq) => (
            <details className="faq-item" key={faq.q}>
              <summary>{faq.q}</summary>
              <div className="body">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="trust">
        <div className="trust-grid">
          {c.trust.map((t) => (
            <div className="trust-item" key={t.name}>
              {t.name}
              {t.note ? <em>{t.note}</em> : null}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
