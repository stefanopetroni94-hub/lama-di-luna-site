import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { Scopri } from "@/components/scopri"
import { HeroVideo } from "@/components/hero-video"
import { PressStrip } from "@/components/press-strip"
import { NewsletterForm } from "@/components/newsletter-form"
import { QuickSearch } from "@/components/quick-search"
import { chrome, isLocale } from "@/lib/i18n"
import { home } from "@/lib/content/home"
import { book } from "@/lib/content/book"

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = home[lang]
  const t = chrome[lang]

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />

      <section className="hero hero--home">
        <div className="hero-scroll">{t.scroll}</div>
      </section>

      <section className="statement statement--home">
        <div className="container">
          <h1>{c.statementTitle}</h1>
          <div className="statement-body">
            {c.statementBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Scopri href={`/${lang}/story`}>{c.discover}</Scopri>
        </div>
      </section>

      <div className="quick-search availability-placement availability-placement--home">
        <QuickSearch labels={book[lang]} />
      </div>

      <section>
        <div className="rooms-grid">
          {c.rooms.map((room) => (
            <Link href={`/${lang}/rooms/${room.slug}`} className="room-card" key={room.name}>
              <div className="room-img-wrap">
                <div className="room-img" style={{ backgroundImage: `url('${room.img}')` }} />
              </div>
              <div className="room-name">{room.name}</div>
              <p className="room-desc">{room.desc}</p>
            </Link>
          ))}
        </div>
        <div className="rooms-cta">
          <Scopri href={`/${lang}/book`}>{c.roomsCta}</Scopri>
        </div>
      </section>

      <section>
        <HeroVideo videoId="qzT1XEFQ_FM" poster="/lamadiluna-courtyard-stars.jpg" label={c.videoLabel} />
      </section>

      <PressStrip locale={lang} />

      <section>
        <div className="text-image reverse">
          <div className="image-block" style={{ backgroundImage: `url('${c.kitchenImg}')` }} />
          <div className="text-block">
            <div className="room-name" style={{ marginBottom: "1rem" }}>
              {c.kitchenLabel}
            </div>
            {c.kitchenText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Scopri href={`/${lang}/restaurant`}>{c.kitchenCta}</Scopri>
          </div>
        </div>
      </section>

      <section>
        <div className="full-photo" style={{ backgroundImage: `url('${c.fullPhoto}')` }} />
      </section>

      <section>
        <div className="text-image text-image--flush">
          <div className="text-block">
            <div className="room-name" style={{ marginBottom: "1rem" }}>
              {c.experiencesLabel}
            </div>
            {c.experiencesText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Scopri href={`/${lang}/experiences`}>{c.experiencesCta}</Scopri>
          </div>
          <div
            className="image-block"
            style={{
              backgroundImage: `url('${c.experiencesImg}')`,
              backgroundSize: "294%",
              backgroundPosition: "13% 64%",
            }}
          />
        </div>
      </section>

      <section className="story-split home-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Fichi d'India con i frutti maturi" : "Prickly pears with ripe fruit"}
          style={{
            backgroundImage: "url('/whatsapp/20261015_134752_1344147307663104.jpg')",
            backgroundPosition: "center 60%",
          }}
        />
        <div
          className="story-split-img story-split-img--tilt"
          role="img"
          aria-label={lang === "it" ? "Il grande salotto con il camino acceso" : "The large sitting room with the fire lit"}
        >
          <div
            className="story-split-tilt"
            style={{
              backgroundImage: "url('/whatsapp/20261015_132439_1101982209358279.jpg')",
              backgroundPosition: "50% 45%",
            }}
          />
        </div>
      </section>

      <NewsletterForm
        namePlaceholder={lang === "it" ? "Nome" : "Name"}
        placeholder={c.newsletterPlaceholder}
        button={c.newsletterButton}
        consent={c.newsletterConsent}
      />


      <SiteFooter locale={lang} />
    </>
  )
}
