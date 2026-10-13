import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CurvedLabel } from "@/components/curved-label"
import { chrome, isLocale } from "@/lib/i18n"
import { farm } from "@/lib/content/farm"

export default async function FarmPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = farm[lang]
  const t = chrome[lang]

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />

      <section className="hero hero--farm">
        <div className="hero-eyebrow">{c.heroEyebrow}</div>
        <div className="hero-scroll">{t.scroll}</div>
      </section>

      <section className="statement">
        <div className="statement-inner">
          <h1>{c.statementTitle}</h1>
          <div className="statement-body">
            {c.statementBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="farm-section farm-section--first">
        <CurvedLabel text={c.oliveLabel} />
        <div className="text-image">
          <div className="text-block">
            <div className="script-eyebrow">{c.olive.eyebrow}</div>
            <h2>{c.olive.title}</h2>
            {c.olive.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="image-block" style={{ backgroundImage: `url('${c.olive.img}')` }} />
        </div>
      </section>

      <section className="farm-section">
        <CurvedLabel text={c.organicLabel} />
        <div className="text-image reverse">
          <div className="image-block" style={{ backgroundImage: `url('${c.organic.img}')` }} />
          <div className="text-block">
            <div className="script-eyebrow">{c.organic.eyebrow}</div>
            <h2>{c.organic.title}</h2>
            {c.organic.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="details">
        <div className="details-header">
          <div className="script-eyebrow">{c.principlesEyebrow}</div>
          <h2>{c.principlesTitle}</h2>
        </div>
        <div className="details-grid">
          {c.principles.map((d) => (
            <div className="detail-item" key={d.title}>
              <div className="detail-body">
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="full-photo" style={{ backgroundImage: `url('${c.fullPhoto}')` }} />
      </section>

      <section className="booking-callout">
        <div className="booking-callout-inner">
          <div className="eyebrow">{c.calloutEyebrow}</div>
          <h2>{c.calloutTitle}</h2>
          <p>{c.calloutBody}</p>
          <Link href={`/${lang}/shop`} className="btn-primary">
            {c.calloutCta}
          </Link>
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
