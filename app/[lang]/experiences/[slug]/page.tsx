import Link from "next/link"
import type { CSSProperties } from "react"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { Scopri } from "@/components/scopri"
import { experiences } from "@/lib/content/experiences"
import { experienceDetails } from "@/lib/content/experience-details"
import { oliveHarvest } from "@/lib/content/olive-harvest"
import { chrome, isLocale } from "@/lib/i18n"

const OLIVE_PHOTO = "/whatsapp/20261028_065214_1516459033640755.jpg"

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()

  const e = experiences[lang]
  const o = oliveHarvest[lang]
  const all = [...e.onEstate, ...e.inRegion]
  const index = all.findIndex((card) => card.slug === slug)
  if (index < 0) notFound()

  const card = all[index]
  const isOlive = slug === "olive-harvest"
  const body = isOlive ? o.statementBody : experienceDetails[slug]?.[lang] ?? []
  const heroImg = isOlive ? OLIVE_PHOTO : card.img.replace("w_1200", "w_2400")
  const heroStyle = {
    "--exp-hero-img": `url("${heroImg}")`,
    "--exp-hero-pos": isOlive ? "center 55%" : card.pos ?? "center",
  } as CSSProperties

  // the next three experiences in the list
  const others = [1, 2, 3].map((n) => all[(index + n) % all.length])

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />

      <section className="exp-hero exp-hero--detail" style={heroStyle}>
        <div className="exp-counter">
          <Link href={`/${lang}/experiences`}>{o.breadcrumbRoot}</Link>
        </div>
        <h1 className="sr-only">{card.name}</h1>
        <div className="hero-scroll">{chrome[lang].scroll}</div>
      </section>

      <section className="statement statement--olive">
        <div className="statement-grid statement-grid--stacked">
          <div>
            <h2>{card.name}</h2>
            <div className="statement-body">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Scopri href={`/${lang}/contact`}>{o.bookingCta}</Scopri>
          </div>
        </div>
      </section>

      <section className="other-exp other-exp--olive">
        <div className="other-exp-header">
          <h2>{o.otherTitle}</h2>
        </div>
        <div className="other-exp-grid">
          {others.map((x) => (
            <Link href={`/${lang}/experiences/${x.slug}`} className="other-card" key={x.slug}>
              <div className="other-card-img" style={{ backgroundImage: `url('${x.img}')` }} />
              <div className="other-card-name">{x.name}</div>
              <div className="other-card-meta">{x.meta}</div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
