import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { BackLink } from "@/components/back-link"
import { HeroVideo } from "@/components/hero-video"
import { PhotoSlider } from "@/components/photo-slider"
import { WeddingForm } from "@/components/wedding-form"
import { HOME, chrome, isLocale } from "@/lib/i18n"
import { SITE_URL } from "@/lib/seo"

// Hidden page for now: not in the menu, not in the sitemap, and Google is told not to index it.
const TITLE = "Wedding Venue in Puglia | Exclusive Masseria – Lama di Luna"
const DESCRIPTION =
  "Get married at Lama di Luna, an exclusive 1800s masseria on a 200-hectare organic estate near Castel del Monte. Up to 150 guests, 27 sleeping on site."
const OG_IMAGE = "/lamadiluna-courtyard-stars.jpg"
const FILM_ID = "fR4Jeyn2rZc"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (lang !== "en") return {}
  return {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    robots: { index: false, follow: false },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/en/weddings`, images: [OG_IMAGE], type: "website" },
  }
}

const STATS = [
  { value: "150", label: "Guests at dinner" },
  { value: "27", label: "Guests sleep on site" },
  { value: "11", label: "Rooms" },
  { value: "45 min", label: "From Bari airport" },
]

const REASONS = [
  {
    img: "/lamadiluna-courtyard-stars.jpg",
    alt: "The masseria courtyard under the stars",
    title: "A wild, authentic Puglia",
    body: "No town, no neighbours, no noise curfews from next door. Only the Alta Murgia National Park, the olive trees and the night sky.",
  },
  {
    img: "/kitchen-pomodori.jpg",
    alt: "Tomatoes from the estate garden in the kitchen",
    title: "A table from our own land",
    body: "Our extra virgin olive oil, vegetables from the garden and Murgian recipes, served at long candlelit tables.",
  },
  {
    img: "/pool-sunset.jpg",
    alt: "The pool of Lama di Luna at sunset",
    title: "A wedding that leaves light footprints",
    body: "A solar-powered, organic biomasseria built with bio-architecture. Sustainable without giving up comfort.",
  },
]

// the five wedding photos of the Events page, then the ten new ones. The site photo filter is applied by the gallery itself.
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

const SPACES = [
  { moment: "Ceremony", place: "Under the oak trees", body: "Up to 150 seated guests, facing the National Park." },
  { moment: "Aperitivo", place: "Terraces", body: "Up to 150 guests standing, at golden hour." },
  { moment: "Dinner", place: "The inner courtyard", body: "Up to 150 guests at long tables under the stars." },
  { moment: "Rain plan", place: "The 1800s halls", body: "Up to 150 guests indoors, under stone vaults." },
]

const WEEKEND = [
  { day: "Friday", title: "Welcome dinner", body: "Guests arrive and settle in. Pizza from the wood oven or a Murgian supper in the courtyard." },
  { day: "Saturday", title: "The wedding", body: "Ceremony at sunset, aperitivo on the terrace, dinner and dancing in the courtyard." },
  { day: "Sunday", title: "Farewell brunch", body: "A slow brunch, an olive oil tasting or a walk on the old drovers' paths before goodbyes." },
]

const PRICES = [
  { label: "Exclusive use, 3 nights, 27 guests", price: "from € 13,450 + 10% VAT" },
  { label: "Wedding dinner menu", price: "from € 160 + 10% VAT per guest" },
  { label: "Welcome dinner menu", price: "from € 60 per guest" },
  { label: "Farewell brunch menu", price: "from € 45 per guest" },
]

const FAQ = [
  { q: "Do we have to book the whole masseria?", a: "Yes. Every wedding is exclusive, with a minimum stay of three nights." },
  { q: "Where do the other guests sleep?", a: "We host 27 guests on site and suggest partner hotels nearby, with shuttles on request." },
  { q: "Can we bring our own planner and suppliers?", a: "Yes, upon request." },
  { q: "Until what time can we dance?", a: "With no neighbours around, the party can run late." },
  { q: "How do our guests get here?", a: "Bari airport is 45 minutes away. Guests can rent cars at the airport, or we can help arrange private transfers for groups." },
]

export default async function WeddingsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang) || lang !== "en") notFound()
  const t = chrome[lang]

  const venueSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Lama di Luna Biomasseria",
    url: `${SITE_URL}/en/weddings`,
    description: DESCRIPTION,
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
        <div className="wd-hero-text">
          <h1>Say yes in the Valley of the Moon</h1>
          <p>An 1800s masseria with the whole estate to yourselves: 200 hectares of organic olive groves on the edge of the Alta Murgia National Park.</p>
          <a href="#enquire" className="scopri">
            Request the wedding guide
            <span className="diamond" />
          </a>
        </div>
        <div className="hero-scroll">{t.scroll}</div>
      </section>

      <section className="wd-section">
        <div className="wd-wrap wd-two">
          <div>
            <h2 className="wd-title-detail">A Whole Masseria, in Exclusive, for Your Wedding Only</h2>
            <p>
              For your wedding weekend Lama di Luna closes to everyone else. The courtyard, the pool, the library, the cinema room and the old refectory become yours, with our chefs and staff looking after you and your guests from arrival to the farewell brunch.
            </p>
          </div>
          <dl className="wd-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wd-section wd-section--alt">
        <div className="wd-wrap">
          <h2 className="wd-center">Why couples choose Lama di Luna</h2>
          <div className="wd-three">
            {REASONS.map((r) => (
              <article key={r.title}>
                <div className="wd-photo">
                  <Image src={r.img} alt={r.alt} fill sizes="(max-width: 800px) 100vw, 360px" />
                </div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <PhotoSlider
          photos={GALLERY}
          label="Weddings at Lama di Luna"
          prevLabel="Previous photos"
          nextLabel="Next photos"
        />
      </section>

      <section className="wd-section">
        <div className="wd-wrap">
          <h2 className="wd-center">Spaces &amp; capacity</h2>
          <div className="wd-four">
            {SPACES.map((s) => (
              <div key={s.moment}>
                <div className="wd-label">{s.moment}</div>
                <h3>{s.place}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wd-section wd-section--dark">
        <div className="wd-wrap">
          <h2 className="wd-center">Your wedding weekend</h2>
          <div className="wd-three wd-three--text">
            {WEEKEND.map((d) => (
              <div key={d.day}>
                <div className="wd-label">{d.day}</div>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wd-section">
        <div className="wd-wrap wd-two">
          <div>
            <h2>Symbolic, civil or religious</h2>
            <p>
              Symbolic ceremonies take place on the estate, with an English-speaking celebrant on request. Civil ceremonies are held in our ancient library or outdoors, upon request to the Municipality of Andria. Religious ceremonies in a nearby church, with transfers arranged for your guests.
            </p>
          </div>
          <div>
            <h2>Clear prices, from the start</h2>
            <ul className="wd-prices">
              {PRICES.map((p) => (
                <li key={p.label}>
                  <span>{p.label}</span>
                  <span>{p.price}</span>
                </li>
              ))}
            </ul>
            <a href="#enquire" className="scopri">
              Request the full wedding guide
              <span className="diamond" />
            </a>
          </div>
        </div>
      </section>

      <section className="wd-section wd-section--film">
        <div className="wd-wrap wd-center">
          <div className="wd-label">Real weddings</div>
          <h2 className="wd-film-title">An Italian–Norwegian wedding at Lama di Luna</h2>
        </div>
        <div className="wd-film">
          <HeroVideo
            videoId={FILM_ID}
            poster={`https://img.youtube.com/vi/${FILM_ID}/maxresdefault.jpg`}
            label="Watch the wedding film"
          />
        </div>
        <div className="wd-credit-row">
          <p className="wd-credit">
            Film by{" "}
            <a href="https://www.federicocardone.com" target="_blank" rel="noopener noreferrer">
              Federico Cardone
            </a>
          </p>
        </div>
      </section>

      <section className="wd-section">
        <div className="wd-wrap wd-narrow">
          <h2 className="wd-center">Frequently asked</h2>
          <div className="wd-faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="wd-section wd-section--alt" id="enquire">
        <div className="wd-wrap wd-narrow">
          <h2 className="wd-center">Tell us about your day</h2>
          <p className="wd-center">We reply within 24 hours with availability and our wedding guide.</p>
          <WeddingForm privacyHref={`/${lang}/privacy`} />
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
