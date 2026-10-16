import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { isLocale } from "@/lib/i18n"
import { exclusive } from "@/lib/content/exclusive"
import { WaveLine } from "@/components/wave-line"

export default async function ExclusivePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = exclusive[lang]

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />

      <section className="exp-hero exp-hero--exclusive">
        <div className="exp-counter">{c.counter}</div>
        <h1 className="sr-only">{c.title}</h1>
      </section>

      <section className="statement">
        <div className="statement-grid statement-grid--stacked">
          <div>
            <h2>{c.statementTitle}</h2>
            <div className="statement-body">
              <p>{c.statementBody.join(" ")}</p>
              <p>{c.stay}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="book-stay exclusive-request">
        <Link href={`/${lang}/contact`} className="book-stay-btn">
          {c.bookingCta}
        </Link>
      </div>

      <div className="section-label exclusive-label">
        <WaveLine side="left" />
        <span>{lang === "it" ? "Matrimoni" : "Weddings"}</span>
        <WaveLine side="right" />
      </div>

      <section className="story-split exclusive-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Gli sposi che corrono sul prato" : "The couple running across the lawn"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_164959_2516452998782121.jpg')",
            backgroundPosition: "center 75%",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Il viale per la cerimonia accanto alla masseria" : "The ceremony aisle beside the masseria"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165134_1827109174977754.jpg')",
            backgroundPosition: "50% center",
          }}
        />
      </section>

      <section>
        <div
          className="full-photo"
          role="img"
          aria-label={lang === "it" ? "Gli ospiti all'aperitivo sul prato sotto gli alberi" : "Guests at the aperitivo on the lawn under the trees"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165613_932387559726351.jpg')",
            backgroundPosition: "center 25%",
          }}
        />
      </section>

      <section className="story-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "La sposa accanto al cancello di ferro" : "The bride beside the wrought iron gate"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165422_1913563452860011.jpg')",
            backgroundPosition: "center 60%",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "La lunga tavolata nel cortile della masseria" : "The long table in the masseria courtyard"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165022_1438073468460314.jpg')",
            backgroundPosition: "20% center",
          }}
        />
      </section>

      <div className="section-label exclusive-label">
        <WaveLine side="left" />
        <span>{lang === "it" ? "Ritiri" : "Retreats"}</span>
        <WaveLine side="right" />
      </div>

      <section className="story-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Una lezione di yoga in coppia nella sala di pietra" : "A partner yoga class in the stone hall"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_170231_948891278295936.jpg')",
            backgroundPosition: "center 45%",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Insalata di cavolo rosso con zucchine grigliate" : "Red cabbage salad with grilled courgettes"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_171639_1125112026602459.jpg')",
            backgroundPosition: "center 55%",
          }}
        />
      </section>

      <section>
        <div
          className="full-photo"
          role="img"
          aria-label={lang === "it" ? "Due persone in posizione dell'albero al tramonto" : "Two people in tree pose at sunset"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_170402_1043492342046071.jpg')",
            backgroundPosition: "center 45%",
          }}
        />
      </section>

      <section className="story-split">
        <div
          className="story-split-img story-split-img--tilt"
          role="img"
          aria-label={lang === "it" ? "Preghiera yoga nella sala con la volta di terracotta" : "Yoga prayer pose in the terracotta vaulted hall"}
        >
          <div
            className="story-split-tilt"
            style={{
              backgroundImage: "url('/whatsapp/20261016_170301_1640209704278679.jpg')",
              backgroundPosition: "center 32%",
            }}
          />
        </div>
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Meditazione in cerchio sul prato" : "Meditation circle on the lawn"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_170251_1143278934896797.jpg')",
            backgroundPosition: "40% center",
          }}
        />
      </section>

      <div className="section-label exclusive-label">
        <WaveLine side="left" />
        <span>{lang === "it" ? "Riunioni di famiglia" : "Family Gatherings"}</span>
        <WaveLine side="right" />
      </div>

      <section className="story-split exclusive-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Due donne bevono spritz e rosato al tramonto" : "Two women drinking spritz and rosé at sunset"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172602_1427118046225898.jpg')",
            backgroundPosition: "45% center",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Il setter rosso davanti alla casa di pietra" : "The red setter in front of the stone house"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_173131_1811619126525486.jpg')",
            backgroundPosition: "45% center",
          }}
        />
      </section>

      <section>
        <div
          className="full-photo"
          role="img"
          aria-label={lang === "it" ? "Il pizzaiolo lancia l'impasto davanti al forno a legna" : "The pizza maker tossing dough in front of the wood-fired oven"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172729_1805563020681449.jpg')",
            backgroundPosition: "center 40%",
          }}
        />
      </section>

      <section className="story-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Due bambini accarezzano un cavallo al tramonto" : "Two children stroking a horse at sunset"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172701_1655107209547771.jpg')",
            backgroundPosition: "55% center",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Gli ospiti seduti sul prato" : "Guests sitting on the lawn"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172717_1032419336533992.jpg')",
            backgroundPosition: "45% center",
          }}
        />
      </section>

      <section className="booking-callout exclusive-callout">
        <div className="booking-callout-inner">
          <div className="eyebrow">{c.bookingEyebrow}</div>
          <h2>{c.bookingTitle}</h2>
          <p>{c.bookingText}</p>
          <Link href={`/${lang}/contact`} className="btn-primary">
            {c.bookingCta}
          </Link>
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
