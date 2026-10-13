import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CurvedLabel } from "@/components/curved-label"
import Link from "next/link"
import { chrome, isLocale } from "@/lib/i18n"
import { story, YOUTUBE_ID } from "@/lib/content/story"

export default async function StoryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = story[lang]
  const t = chrome[lang]

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

      {c.chapters.map((ch, n) => {
        const image = <div className="image-block" style={{ backgroundImage: `url('${ch.img}')` }} />
        const text = (
          <div className="text-block">
            <div className="script-eyebrow">{ch.eyebrow}</div>
            <h2>{ch.title}</h2>
            {ch.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )
        return (
          <section
            key={ch.title}
            className={`story-chapter${n === c.chapters.length - 1 ? " story-chapter--last" : ""}`}
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
      })}

      <section>
        <CurvedLabel text={c.pietroLabel} />
      </section>

      <section className="founder">
        <div className="founder-grid">
          <div className="founder-video">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&disablekb=1&iv_load_policy=3&start=20`}
              title="Pietro Petroni — Lama di Luna"
              allow="autoplay; encrypted-media"
            />
            <div className="placeholder-note">{c.pietroNote}</div>
          </div>
          <div className="founder-text">
            <div className="script-eyebrow">{c.pietroEyebrow}</div>
            <h2>{c.pietroTitle}</h2>
            <p className="quote">{c.pietroQuote}</p>
            <p className="signature">{c.pietroSignature}</p>
            <p>{c.pietroBody}</p>
          </div>
        </div>
      </section>

      <section className="details">
        <div className="details-header">
          <div className="script-eyebrow">{c.restorationEyebrow}</div>
          <h2>{c.restorationTitle}</h2>
        </div>
        <div className="details-grid">
          {c.details.map((d) => (
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
          <Link href={`/${lang}/book`} className="btn-primary">
            {c.calloutCta}
          </Link>
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
