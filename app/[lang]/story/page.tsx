import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { BackLink } from "@/components/back-link"
import { PhotoPair } from "@/components/photo-pair"
import { CrossfadeImage } from "@/components/crossfade-image"
import { HOME, chrome, isLocale } from "@/lib/i18n"
import { story } from "@/lib/content/story"

export default async function StoryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = story[lang]
  const t = chrome[lang]
  const community = c.chapters[1]
  const decline = c.chapters[2]
  const pairText = {
    en: { man: "Photo of Giuseppe Patroni Griffi, Baron of Faivano, owner of Lama di Luna", woman: "Photo of Veneranda Gioia, wife of Giuseppe Patroni Griffi" },
    it: { man: "Foto di Giuseppe Patroni Griffi, barone di Faivano, proprietario di Lama di Luna", woman: "Foto di Veneranda Gioia, moglie di Giuseppe Patroni Griffi" },
    fr: { man: "Photo de Giuseppe Patroni Griffi, baron de Faivano, propriétaire de Lama di Luna", woman: "Photo de Veneranda Gioia, épouse de Giuseppe Patroni Griffi" },
  }[lang]

  const chapter = (ch: (typeof c.chapters)[number], n: number) => {
    const image =
      n === 0 ? (
        <PhotoPair
          openLabel={{ en: "Show caption", it: "Mostra didascalia", fr: "Afficher la légende" }[lang]}
          closeLabel={{ en: "Hide caption", it: "Nascondi didascalia", fr: "Masquer la légende" }[lang]}
          photos={[
            {
              src: "/whatsapp/20261030_075504_982971887620842.jpg",
              alt: pairText.man,
              caption: pairText.man,
              size: "118% auto",
              position: "48.8% 50%",
            },
            {
              src: "/whatsapp/20261030_075517_1121991600569154.jpg",
              alt: pairText.woman,
              caption: pairText.woman,
              size: "118% auto",
              position: "50.3% 50%",
            },
          ]}
        />
      ) : (
        <div className="image-block image-block--zoom">
          <div style={{ backgroundImage: `url('${ch.img}')` }} />
        </div>
      )
    const text = (
      <div className="text-block">
        <div className="room-name" style={{ marginBottom: "1rem" }}>
          {ch.eyebrow}
        </div>
        {ch.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    )
    return (
      <section
        key={ch.title}
        className={`story-chapter${n % 2 === 0 ? " story-chapter--text-left" : ""}${n === 4 ? " story-chapter--overlap" : ""}`}
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
      <BackLink href={`/${lang}`} label={HOME[lang]} tone="light" />

      <section className="hero hero--story">
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
        <CrossfadeImage images={[community.img, c.chapters[0].img]} label={community.title} />
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
            {{
              en: "1800s to 1950s: a community at work, then the decline",
              it: "Dall'Ottocento agli anni Cinquanta: una comunità al lavoro, poi il declino",
              fr: "Du XIXe siècle aux années 1950 : une communauté au travail, puis le déclin",
            }[lang]}
          </div>
          <div className="statement-body">
            <p>{[...community.body, ...decline.body].join(" ")}</p>
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
              backgroundImage: "url('/whatsapp/20261016_173833_1310619667811770.jpg')",
              backgroundPosition: "100% 70%",
              backgroundSize: "118% auto",
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

      <section className="booking-callout booking-callout--story">
        <div className="booking-callout-inner">
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
