import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { chrome, isLocale } from "@/lib/i18n"
import { story } from "@/lib/content/story"

export default async function StoryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = story[lang]
  const t = chrome[lang]
  const community = c.chapters[1]
  const decline = c.chapters[2]

  const chapter = (ch: (typeof c.chapters)[number], n: number) => {
    const image = <div className="image-block" style={{ backgroundImage: `url('${ch.img}')` }} />
    const text = (
      <div className="text-block">
        <div className="room-name" style={{ marginBottom: "1rem" }}>
          {ch.eyebrow}
        </div>
        <h2>{ch.title}</h2>
        {ch.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    )
    return (
      <section
        key={ch.title}
        className={`story-chapter${n % 2 === 0 ? " story-chapter--text-left" : ""}`}
      >
        <div className="text-image">
          {n % 2 === 0 ? (
            <>
              {text}
              {image}
            </>
          ) : (
            <>
              {image}
              {text}
            </>
          )}
        </div>
      </section>
    )
  }

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />

      <section className="hero hero--story">
        <div className="hero-eyebrow">{c.heroEyebrow}</div>
        <div className="hero-scroll">{t.scroll}</div>
      </section>

      <section className="statement statement--story">
        <div className="statement-inner">
          <h1>{c.statementTitle}</h1>
          <div className="statement-body">
            {c.statementBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {chapter(c.chapters[0], 0)}

      <section className="story-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={community.title}
          style={{ backgroundImage: `url('${community.img}')` }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={decline.title}
          style={{ backgroundImage: `url('${decline.img}')`, backgroundPosition: "45% center" }}
        />
      </section>

      <section className="story-wide">
        <div className="statement-inner">
          <div className="room-name" style={{ marginBottom: "1rem" }}>
            {community.eyebrow}, {decline.eyebrow}
          </div>
          <h2>{lang === "it" ? "Una comunità al lavoro, poi il declino" : "A community at work, then decline"}</h2>
          <div className="statement-body">
            {[...community.body, ...decline.body].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {chapter(c.chapters[3], 3)}
      {chapter(c.chapters[4], 4)}

      <section className="founder">
        <div className="founder-grid">
          <div
            className="founder-video"
            role="img"
            aria-label="Pietro Petroni — Lama di Luna"
            style={{
              backgroundImage: "url('/whatsapp/20261013_162342_4238858946413403.jpg')",
              backgroundPosition: "center 30%",
            }}
          />
          <div className="founder-text">
            <h2>{c.pietroTitle}</h2>
            <p className="quote">{c.pietroQuote}</p>
            <p className="signature">{c.pietroSignature}</p>
            <p>{c.pietroBody}</p>
          </div>
        </div>
      </section>

      <section className="booking-callout">
        <div className="booking-callout-inner">
          <div className="eyebrow">{c.calloutEyebrow}</div>
          <h2>{c.calloutTitle}</h2>
          <p>{c.calloutBody}</p>
          <Link href={`/${lang}/book`} className="btn-primary btn-primary--pill">
            {c.calloutCta}
          </Link>
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
