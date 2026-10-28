import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { BackLink } from "@/components/back-link"
import { Scopri } from "@/components/scopri"
import { HOME, isLocale } from "@/lib/i18n"
import { exclusive } from "@/lib/content/exclusive"
import { WaveLine } from "@/components/wave-line"

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
        <span>{{ en: "Weddings", it: "Matrimoni", fr: "Mariages" }[lang]}</span>
        <WaveLine side="right" />
      </div>

      <section className="exclusive-text">
        <div className="statement-inner">
          <div className="statement-body">
            <p>{c.weddingsText}</p>
            <Scopri href={`/${lang}/contact`}>{c.bookingCta}</Scopri>
          </div>
        </div>
      </section>

      <section className="story-split exclusive-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "The couple in front of the Pugliese festival lights at sunset", it: "Gli sposi davanti alla luminaria pugliese al tramonto", fr: "Les mariés devant les illuminations de fête des Pouilles au coucher du soleil" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261017_095410_1916693209311624.jpg')",
            backgroundPosition: "50% center",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "The ceremony aisle beside the masseria", it: "Il viale per la cerimonia accanto alla masseria", fr: "L'allée de la cérémonie à côté de la masseria" }[lang]}
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
          aria-label={{ en: "Guests at the aperitivo on the lawn under the trees", it: "Gli ospiti all'aperitivo sul prato sotto gli alberi", fr: "Les invités à l'apéritif sur la pelouse sous les arbres" }[lang]}
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
          aria-label={{ en: "The bride beside the wrought iron gate", it: "La sposa accanto al cancello di ferro", fr: "La mariée près du portail en fer forgé" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165422_1913563452860011.jpg')",
            backgroundPosition: "center 60%",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "The long table in the masseria courtyard", it: "La lunga tavolata nel cortile della masseria", fr: "La longue tablée dans la cour de la masseria" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165022_1438073468460314.jpg')",
            backgroundPosition: "20% center",
          }}
        />
      </section>

      <div className="section-label exclusive-label">
        <WaveLine side="left" />
        <span>{{ en: "Retreats", it: "Ritiri", fr: "Retraites" }[lang]}</span>
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
          aria-label={{ en: "A partner yoga class in the stone hall", it: "Una lezione di yoga in coppia nella sala di pietra", fr: "Un cours de yoga à deux dans la salle en pierre" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_170231_948891278295936.jpg')",
            backgroundPosition: "center 45%",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "Red cabbage salad with grilled courgettes", it: "Insalata di cavolo rosso con zucchine grigliate", fr: "Salade de chou rouge aux courgettes grillées" }[lang]}
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
          aria-label={{ en: "Two people in tree pose at sunset", it: "Due persone in posizione dell'albero al tramonto", fr: "Deux personnes dans la posture de l'arbre au coucher du soleil" }[lang]}
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
          aria-label={{ en: "Yoga prayer pose in the terracotta vaulted hall", it: "Preghiera yoga nella sala con la volta di terracotta", fr: "Posture de la prière en yoga dans la salle voûtée en terre cuite" }[lang]}
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
          aria-label={{ en: "Meditation circle on the lawn", it: "Meditazione in cerchio sul prato", fr: "Méditation en cercle sur la pelouse" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_170251_1143278934896797.jpg')",
            backgroundPosition: "40% center",
          }}
        />
      </section>

      <div className="section-label exclusive-label">
        <WaveLine side="left" />
        <span>{{ en: "Family Gatherings", it: "Riunioni di famiglia", fr: "Réunions de famille" }[lang]}</span>
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
          aria-label={{ en: "Two women drinking spritz and rosé at sunset", it: "Due donne bevono spritz e rosato al tramonto", fr: "Deux femmes buvant un spritz et du rosé au coucher du soleil" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172602_1427118046225898.jpg')",
            backgroundPosition: "45% center",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "The red setter in front of the stone house", it: "Il setter rosso davanti alla casa di pietra", fr: "Le setter roux devant la maison en pierre" }[lang]}
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
          aria-label={{ en: "The pizza maker tossing dough in front of the wood-fired oven", it: "Il pizzaiolo lancia l'impasto davanti al forno a legna", fr: "Le pizzaïolo fait tourner la pâte devant le four à bois" }[lang]}
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
          aria-label={{ en: "Two children stroking a horse at sunset", it: "Due bambini accarezzano un cavallo al tramonto", fr: "Deux enfants caressent un cheval au coucher du soleil" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172701_1655107209547771.jpg')",
            backgroundPosition: "55% center",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "Guests sitting on the lawn", it: "Gli ospiti seduti sul prato", fr: "Les invités assis sur la pelouse" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261016_172717_1032419336533992.jpg')",
            backgroundPosition: "45% center",
          }}
        />
      </section>

      <section className="booking-callout exclusive-callout">
        <div className="booking-callout-inner">
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
