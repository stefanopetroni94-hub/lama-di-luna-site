import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { BackLink } from "@/components/back-link"
import { Scopri } from "@/components/scopri"
import { HOME, isLocale } from "@/lib/i18n"
import { exclusive } from "@/lib/content/exclusive"
import { WaveLine } from "@/components/wave-line"
import { RetreatForm } from "@/components/retreat-form"
import { retreatForm } from "@/lib/content/retreat-form"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  return pageMetadata(lang, "exclusive")
}

export default async function ExclusivePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = exclusive[lang]

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />
      <BackLink href={`/${lang}`} label={HOME[lang]} tone="light" />

      <section className="exp-hero exp-hero--exclusive">
        <h1 className="sr-only">{c.title}</h1>
      </section>

      <section className="statement statement--exclusive">
        <div className="statement-grid statement-grid--stacked">
          <div>
            <h2>{c.statementTitle}</h2>
            <div className="statement-body">
              <p>{c.statementBody.join(" ")}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-label exclusive-label">
        <WaveLine side="left" />
        <span>{{ en: "Retreats", it: "Ritiri", fr: "Retraites", de: "Retreats" }[lang]}</span>
        <WaveLine side="right" />
      </div>

      <section className="exclusive-text">
        <div className="statement-inner">
          <div className="statement-body">
            <p>{c.retreatsText}</p>
            <Scopri href={`/${lang}/contact`}>{c.bookingCta}</Scopri>
          </div>
        </div>
      </section>

      <section className="story-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "A partner yoga class in the stone hall", it: "Una lezione di yoga in coppia nella sala di pietra", fr: "Un cours de yoga à deux dans la salle en pierre", de: "Partneryoga im steinernen Saal" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_170231_948891278295936.jpg')",
            backgroundPosition: "center 45%",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "Red cabbage salad with grilled courgettes", it: "Insalata di cavolo rosso con zucchine grigliate", fr: "Salade de chou rouge aux courgettes grillées", de: "Rotkohlsalat mit gegrillten Zucchini" }[lang]}
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
          aria-label={{ en: "Two people in tree pose at sunset", it: "Due persone in posizione dell'albero al tramonto", fr: "Deux personnes dans la posture de l'arbre au coucher du soleil", de: "Zwei Personen in der Baumhaltung bei Sonnenuntergang" }[lang]}
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
          aria-label={{ en: "Yoga prayer pose in the terracotta vaulted hall", it: "Preghiera yoga nella sala con la volta di terracotta", fr: "Posture de la prière en yoga dans la salle voûtée en terre cuite", de: "Gebetshaltung im Yoga im Saal mit Terrakottagewölbe" }[lang]}
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
          aria-label={{ en: "Meditation circle on the lawn", it: "Meditazione in cerchio sul prato", fr: "Méditation en cercle sur la pelouse", de: "Meditation im Kreis auf dem Rasen" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_170251_1143278934896797.jpg')",
            backgroundPosition: "40% center",
          }}
        />
      </section>

      <div className="section-label exclusive-label">
        <WaveLine side="left" />
        <span>{{ en: "Family Gatherings", it: "Riunioni di famiglia", fr: "Réunions de famille", de: "Familientreffen" }[lang]}</span>
        <WaveLine side="right" />
      </div>

      <section className="exclusive-text">
        <div className="statement-inner">
          <div className="statement-body">
            <p>{c.gatheringsText}</p>
            <Scopri href={`/${lang}/contact`}>{c.bookingCta}</Scopri>
          </div>
        </div>
      </section>

      <section className="story-split exclusive-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "Two women drinking spritz and rosé at sunset", it: "Due donne bevono spritz e rosato al tramonto", fr: "Deux femmes buvant un spritz et du rosé au coucher du soleil", de: "Zwei Frauen trinken Spritz und Rosé bei Sonnenuntergang" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172602_1427118046225898.jpg')",
            backgroundPosition: "45% center",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "The red setter in front of the stone house", it: "Il setter rosso davanti alla casa di pietra", fr: "Le setter roux devant la maison en pierre", de: "Der rote Setter vor dem Steinhaus" }[lang]}
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
          aria-label={{ en: "The pizza maker tossing dough in front of the wood-fired oven", it: "Il pizzaiolo lancia l'impasto davanti al forno a legna", fr: "Le pizzaïolo fait tourner la pâte devant le four à bois", de: "Der Pizzabäcker wirbelt den Teig vor dem Holzofen" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_175033_1666387138399659.jpg')",
            backgroundPosition: "center 40%",
          }}
        />
      </section>

      <section className="story-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "Two children stroking a horse at sunset", it: "Due bambini accarezzano un cavallo al tramonto", fr: "Deux enfants caressent un cheval au coucher du soleil", de: "Zwei Kinder streicheln bei Sonnenuntergang ein Pferd" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172701_1655107209547771.jpg')",
            backgroundPosition: "55% center",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "Guests sitting on the lawn", it: "Gli ospiti seduti sul prato", fr: "Les invités assis sur la pelouse", de: "Gäste sitzen auf dem Rasen" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172717_1032419336533992.jpg')",
            backgroundPosition: "45% center",
          }}
        />
      </section>

      <section className="wd-section wd-section--line" id="enquire">
        <div className="wd-wrap wd-narrow">
          <h2 className="wd-center">{c.bookingTitle}</h2>
          <p className="wd-center">{c.bookingText}</p>
          <RetreatForm privacyHref={`/${lang}/privacy`} labels={retreatForm[lang]} />
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
