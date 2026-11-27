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
import type { Metadata } from "next"
import { hotelSchema, pageMetadata } from "@/lib/seo"

// two links under the experiences, to the Weddings and Retreats pages
const HOME_LINKS = {
  weddings: {
    en: { title: "Weddings at Lama di Luna", text: "Say yes in the Valley of the Moon: a whole 1800s masseria, in exclusive, for your wedding only.", cta: "Discover our weddings", alt: "The newlyweds laughing as they leave the dovecote tower, with guests throwing rice and petals" },
    it: { title: "Matrimoni a Lama di Luna", text: "Dite sì nella Valle della Luna: un'intera masseria dell'Ottocento, in esclusiva, solo per il vostro matrimonio.", cta: "Scopri i matrimoni", alt: "Gli sposi escono ridendo dalla torretta della colombaia, con gli ospiti che lanciano riso e petali" },
    fr: { title: "Mariages à Lama di Luna", text: "Dites oui dans la Vallée de la Lune : une masseria entière du XIXe siècle, en exclusivité, pour votre seul mariage.", cta: "Découvrir nos mariages", alt: "Les mariés sortent en riant de la tour du pigeonnier, sous une pluie de riz et de pétales" },
    de: { title: "Hochzeiten in Lama di Luna", text: "Sagen Sie Ja im Tal des Mondes: eine ganze Masseria aus dem 19. Jahrhundert, exklusiv, nur für Ihre Hochzeit.", cta: "Hochzeiten entdecken", alt: "Das Brautpaar verlässt lachend den Taubenturm, Gäste werfen Reis und Blütenblätter" },
  },
  retreats: {
    en: { title: "Retreats at Lama di Luna", text: "Yoga, wellness, company meetings and family gatherings: reserve the whole masseria.", cta: "Discover our retreats" },
    it: { title: "Ritiri a Lama di Luna", text: "Yoga, benessere, riunioni aziendali e di famiglia: riserva l'intera masseria.", cta: "Scopri i ritiri" },
    fr: { title: "Retraites à Lama di Luna", text: "Yoga, bien-être, réunions d'entreprise et de famille : réservez toute la masseria.", cta: "Découvrir nos retraites" },
    de: { title: "Retreats in Lama di Luna", text: "Yoga, Wellness, Firmentreffen und Familientreffen: reservieren Sie die ganze Masseria.", cta: "Retreats entdecken" },
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  return pageMetadata(lang, "")
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = home[lang]
  const t = chrome[lang]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema(lang)) }} />
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
          <Scopri href={`/${lang}/rooms`}>{c.roomsCta}</Scopri>
        </div>
      </section>

      <section>
        <HeroVideo videoId="qzT1XEFQ_FM" poster="/lamadiluna-courtyard-stars.jpg" label={c.videoLabel} />
      </section>

      <PressStrip locale={lang} />

      <section>
        <div className="text-image reverse">
          <div className="image-block image-block--zoom">
            <div style={{ backgroundImage: `url('${c.kitchenImg}')` }} />
          </div>
          <div className="text-block">
            <div className="room-name" style={{ marginBottom: "1rem" }}>
              <Link href={`/${lang}/restaurant`} className="title-link">
                {c.kitchenLabel}
              </Link>
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
              <Link href={`/${lang}/experiences`} className="title-link">
                {c.experiencesLabel}
              </Link>
            </div>
            {c.experiencesText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Scopri href={`/${lang}/experiences`}>{c.experiencesCta}</Scopri>
          </div>
          <div className="image-block image-block--zoom">
            <div
              style={{
                backgroundImage: `url('${c.experiencesImg}')`,
                backgroundSize: "294%",
                backgroundPosition: "13% 64%",
              }}
            />
          </div>
        </div>
      </section>

      <section className="story-split home-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "Prickly pears with ripe fruit", it: "Fichi d'India con i frutti maturi", fr: "Figuiers de Barbarie aux fruits mûrs", de: "Feigenkakteen mit reifen Früchten" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261015_140200_2206459426566152.jpg')",
            backgroundPosition: "center 60%",
          }}
        />
        <div
          className="story-split-img story-split-img--tilt"
          role="img"
          aria-label={{ en: "The large sitting room with the fire lit", it: "Il grande salotto con il camino acceso", fr: "Le grand salon avec la cheminée allumée", de: "Der große Salon mit brennendem Kamin" }[lang]}
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
        namePlaceholder={{ en: "Name", it: "Nome", fr: "Prénom", de: "Vorname" }[lang]}
        placeholder={c.newsletterPlaceholder}
        button={c.newsletterButton}
        consent={c.newsletterConsent}
      />


      <SiteFooter locale={lang} />
    </>
  )
}
