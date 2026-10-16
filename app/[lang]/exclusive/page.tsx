import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CurvedLabel } from "@/components/curved-label"
import { isLocale } from "@/lib/i18n"
import { exclusive } from "@/lib/content/exclusive"
import { QuickSearch } from "@/components/quick-search"
import { book } from "@/lib/content/book"

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

      <div className="quick-search exclusive-quick-search">
        <QuickSearch labels={book[lang]} />
      </div>

      <section className="story-split exclusive-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "La lunga tavolata nel cortile della masseria" : "The long table in the masseria courtyard"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165022_1438073468460314.jpg')",
            backgroundPosition: "20% center",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Gli sposi che corrono sul prato" : "The couple running across the lawn"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_164959_2516452998782121.jpg')",
            backgroundPosition: "center 75%",
          }}
        />
      </section>

      <section>
        <div
          className="full-photo"
          role="img"
          aria-label={lang === "it" ? "Il viale per la cerimonia accanto alla masseria" : "The ceremony aisle beside the masseria"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165134_1827109174977754.jpg')",
            backgroundPosition: "center 70%",
          }}
        />
      </section>

      <section className="story-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Gli sposi con la torta nella sala con la volta" : "The couple with the cake in the vaulted hall"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165312_1605521024705475.jpg')",
            backgroundPosition: "center 40%",
          }}
        />
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "La sposa accanto al cancello di ferro" : "The bride beside the wrought iron gate"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165422_1913563452860011.jpg')",
            backgroundPosition: "center 60%",
          }}
        />
      </section>

      <section className="story-split">
        <div
          className="story-split-img"
          role="img"
          aria-label={lang === "it" ? "Gli ospiti all'aperitivo sul prato sotto gli alberi" : "Guests at the aperitivo on the lawn under the trees"}
          style={{
            backgroundImage: "url('/whatsapp/20261016_165613_932387559726351.jpg')",
            backgroundPosition: "35% center",
          }}
        />
      </section>

      <section>
        <CurvedLabel text={c.curvedLabel} />
      </section>

      <section className="menu-course-header" style={{ paddingTop: "1rem" }}>
        <div className="script-eyebrow">{c.perksEyebrow}</div>
        <h2>{c.perksTitle}</h2>
      </section>

      <section className="exclusive-perks">
        {c.perks.map((perk) => (
          <div className="exclusive-perk" key={perk.title}>
            <h3>{perk.title}</h3>
            <p>{perk.body}</p>
          </div>
        ))}
      </section>

      <section className="photo-split">
        <div className="photo-split-img" style={{ backgroundImage: `url('${c.photos[0]}')` }} />
        <div className="photo-split-img" style={{ backgroundImage: `url('${c.photos[1]}')` }} />
      </section>

      <section>
        <div className="text-image reverse">
          <div className="image-block" style={{ backgroundImage: `url('${c.fullImg}')` }} />
          <div className="text-block">
            <div className="script-eyebrow" style={{ marginBottom: "1rem" }}>
              {c.occasionsEyebrow}
            </div>
            {c.occasionsBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-callout">
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
