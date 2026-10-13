import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
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

      <section className="farm-intro-section">
        <div
          className="full-photo"
          style={{ backgroundImage: `url('${c.olive.img}')`, backgroundPosition: "30% 40%" }}
        />
        <div className="statement-inner farm-intro">
          <div className="statement-body">
            <p>{c.olive.body.join(" ")}</p>
          </div>
        </div>
      </section>

      <section className="story-split farm-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Olive versate durante la raccolta" : "Olives poured during the harvest"}
          style={{ backgroundImage: "url('/whatsapp/20261013_182457_1659058318905589.jpg')" }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Un raccoglitore guarda gli ulivi" : "A harvester looking up at the olive trees"}
          style={{
            backgroundImage: "url('/whatsapp/20261013_182516_28960209283602816.jpg')",
            backgroundPosition: "65% 35%",
          }}
        />
      </section>

      <section className="farm-section">
        <div className="book-stay">
          <Link href={`/${lang}/book`} className="book-stay-btn">
            {lang === "it" ? "Prenota il tuo soggiorno" : "Book your stay"}
          </Link>
        </div>
        <div className="text-image">
          <div
            className="image-block"
            style={{ backgroundImage: `url('${c.organic.img}')`, backgroundPosition: "65% center" }}
          />
          <div className="text-block">
            <div className="room-name" style={{ marginBottom: "1rem" }}>
              {c.organicLabel}
            </div>
            {c.organic.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-callout">
        <div className="booking-callout-inner">
          <h2>{c.calloutTitle}</h2>
          <p>{c.calloutBody}</p>
          <Link href={`/${lang}/shop`} className="btn-primary btn-primary--pill">
            {c.calloutCta}
          </Link>
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
