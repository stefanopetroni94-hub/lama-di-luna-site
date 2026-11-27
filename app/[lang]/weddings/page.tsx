import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { BackLink } from "@/components/back-link"
import { PhotoSlider } from "@/components/photo-slider"
import { WeddingForm } from "@/components/wedding-form"
import { HOME, chrome, isLocale } from "@/lib/i18n"
import { SITE_URL, pageMetadata } from "@/lib/seo"
import { weddings } from "@/lib/content/weddings"

const OG_IMAGE = "/lamadiluna-courtyard-stars.jpg"
// the example wedding video lives on the photographer's website
const FILM_URL = "https://www.federicocardone.com/portfolio-item/matrimonio-a-masseria-lama-di-luna/"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const base = pageMetadata(lang, "weddings")
  return {
    ...base,
    // the full address of the photo: with a short one the share preview pointed to localhost
    openGraph: { ...base.openGraph, images: [`${SITE_URL}${OG_IMAGE}`] },
  }
}

// the five wedding photos of the Events page, then the ten new ones; the description of each is in the content file.
// The site photo filter is applied by the gallery itself.
const GALLERY = [
  { src: "/whatsapp/20261017_095410_1916693209311624.jpg", position: "50% center" },
  { src: "/whatsapp/20261127_075621_1442278754732944.jpg", position: "center 45%" },
  { src: "/whatsapp/20261127_075626_2054415521874547.jpg", position: "center 40%" },
  { src: "/whatsapp/20261016_165134_1827109174977754.jpg", position: "50% center" },
  { src: "/whatsapp/20261127_075640_1854277828941805.jpg", position: "center 55%" },
  { src: "/whatsapp/20261016_165613_932387559726351.jpg", position: "center 25%" },
  { src: "/whatsapp/20261127_075631_1713082303553822.jpg", position: "center 50%" },
  { src: "/whatsapp/20261127_075649_1744275486669953.jpg", position: "center 45%" },
  { src: "/whatsapp/20261016_165422_1913563452860011.jpg", position: "center 60%" },
  { src: "/whatsapp/20261127_075636_1462725258659477.jpg", position: "center 55%" },
  { src: "/whatsapp/20261127_075658_1769727127855947.jpg", position: "center 40%" },
  { src: "/whatsapp/20261016_165022_1438073468460314.jpg", position: "20% center" },
  { src: "/whatsapp/20261127_075645_1625299038855624.jpg", position: "center 50%" },
  { src: "/whatsapp/20261127_075654_2584698828703681.jpg", position: "center 55%" },
  { src: "/whatsapp/20261127_075702_1558481429668415.jpg", position: "center 50%" },
]

export default async function WeddingsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = chrome[lang]
  const c = weddings[lang]
  const meta = pageMetadata(lang, "weddings")
  const description = typeof meta.description === "string" ? meta.description : ""

  const venueSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Lama di Luna Biomasseria",
    url: `${SITE_URL}/${lang}/weddings`,
    description,
    maximumAttendeeCapacity: 150,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Contrada Lama di Luna, SN, Frazione Montegrosso",
      addressLocality: "Andria",
      postalCode: "76123",
      addressRegion: "BT",
      addressCountry: "IT",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema) }} />
      <SiteNav locale={lang} variant="overlay" />
      <BackLink href={`/${lang}`} label={HOME[lang]} tone="light" />

      <section className="hero hero--wedding wd-hero">
        <div className="hero-scroll">{t.scroll}</div>
      </section>

      <section className="wd-intro">
        <div className="wd-wrap">
          <h1>{c.introTitle}</h1>
          <p className="wd-intro-text">{c.exclusiveText}</p>
        </div>
      </section>

      <section className="wd-section">
        <div className="wd-wrap">
          <dl className="wd-stats">
            {c.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
          <a href="#enquire" className="scopri wd-stats-cta">
            {c.introCta}
            <span className="diamond" />
          </a>
        </div>
      </section>

      <section>
        <PhotoSlider
          photos={GALLERY.map((p, i) => ({ ...p, alt: c.galleryAlts[i] }))}
          label={c.galleryLabel}
          prevLabel={c.galleryPrev}
          nextLabel={c.galleryNext}
        />
      </section>

      <section className="wd-section">
        <div className="wd-wrap">
          <h2 className="wd-title-detail">{c.spacesTitle}</h2>
          <div className="wd-four">
            {c.spaces.map((s) => (
              <div key={s.moment}>
                <div className="wd-label">{s.moment}</div>
                <h3>{s.place}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <a href="#enquire" className="scopri wd-stats-cta">
            {c.introCta}
            <span className="diamond" />
          </a>
        </div>
      </section>

      <section className="wd-section wd-section--dark">
        <div className="wd-wrap wd-narrow">
          <h2 className="wd-title-detail">{c.faqTitle}</h2>
          <div className="wd-faq">
            {c.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
            <details>
              <summary>{c.faqVideo.q}</summary>
              <p>
                {c.faqVideo.a}{" "}
                <a href={FILM_URL} target="_blank" rel="noopener noreferrer">
                  {c.faqVideo.link}
                </a>
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="wd-section wd-section--alt" id="enquire">
        <div className="wd-wrap wd-narrow">
          <h2 className="wd-center">{c.enquireTitle}</h2>
          <p className="wd-center">{c.enquireText}</p>
          <WeddingForm privacyHref={`/${lang}/privacy`} labels={c.form} />
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
