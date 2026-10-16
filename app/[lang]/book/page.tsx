import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CurvedLabel } from "@/components/curved-label"
import { QuickSearch } from "@/components/quick-search"
import { PerkIcon } from "@/components/perk-icon"
import { isLocale } from "@/lib/i18n"
import { book } from "@/lib/content/book"

export default async function BookPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = book[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />

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
        <div className="lh-widget-placeholder" id="lh-widget">
          <span className="pill">{c.widgetPill}</span>
          <h3>{c.widgetTitle}</h3>
          <p>{c.widgetBody}</p>
          <p style={{ marginTop: "1.5rem", fontSize: 13 }}>{c.widgetNote}</p>
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
