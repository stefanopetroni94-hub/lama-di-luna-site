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

      <section className="statement statement--farm">
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
          className="full-photo farm-photo"
          style={{ backgroundImage: `url('${c.olive.img}')` }}
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
          aria-label={lang === "it" ? "Un raccoglitore al lavoro tra gli ulivi" : "A harvester at work among the olive trees"}
          style={{
            backgroundImage: "url('/whatsapp/20261014_035803_4381306318848943.jpg')",
            backgroundPosition: "45% center",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Olive raccolte sulle reti" : "Olives gathered on the nets"}
          style={{
            backgroundImage: "url('/whatsapp/20261013_182639_39141126622198536.jpg')",
            backgroundPosition: "center 50%",
          }}
        />
      </section>

      <section className="farm-seasons">
        <div className="statement-inner">
          <div className="statement-body">
            <p>{c.seasons}</p>
          </div>
        </div>
      </section>

      <section className="farm-section">
        <div className="text-image farm-organic">
          <div className="text-block">
            <div className="room-name" style={{ marginBottom: "1rem" }}>
              {c.organicLabel}
            </div>
            {c.organic.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div
            className="image-block"
            style={{ backgroundImage: `url('${c.organic.img}')`, backgroundPosition: "center" }}
          />
        </div>
      </section>

      <section className="story-split farm-split-end">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Grappoli d'uva durante la vendemmia" : "Grapes during the harvest"}
          style={{
            backgroundImage: "url('/whatsapp/20261015_133041_2040482263307048.jpg')",
            backgroundPosition: "center 60%",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Chiocciole su un ramo d'ulivo" : "Snails on an olive branch"}
          style={{
            backgroundImage: "url('/whatsapp/20261013_154515_1100237206085509.jpg')",
            backgroundPosition: "65% center",
          }}
        />
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
