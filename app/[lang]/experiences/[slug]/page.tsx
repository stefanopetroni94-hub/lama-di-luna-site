import Link from "next/link"
import type { CSSProperties } from "react"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { Scopri } from "@/components/scopri"
import { experiences } from "@/lib/content/experiences"
import { experienceDetails, experienceFacts } from "@/lib/content/experience-details"
import { oliveHarvest } from "@/lib/content/olive-harvest"
import { chrome, isLocale } from "@/lib/i18n"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLocale(lang)) return {}
  const e = experiences[lang]
  const card = [...e.onEstate, ...e.inRegion].find((c) => c.slug === slug)
  return pageMetadata(lang, `experiences/${slug}`, card?.name)
}

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
  const facts = experienceFacts[slug]?.[lang] ?? []
  const heroImg = isOlive ? OLIVE_PHOTO : card.img.replace("w_1200", "w_2400")
  const heroStyle = {
    "--exp-hero-img": `url("${heroImg}")`,
    "--exp-hero-pos": isOlive ? "center 55%" : card.pos ?? "center",
    "--exp-hero-rotate": `${card.rotate ?? 0}deg`,
    "--exp-hero-zoom": card.zoom ?? 1,
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
        <div className="hero-scroll">{chrome[lang].scroll}</div>
      </section>

      <article className="room-detail room-detail--hero experience-detail">
        <header className="room-detail-header">
          <h1>{card.name}</h1>
          <div className="room-detail-body">
            <div className="room-detail-copy">
              <p>{body.join(" ")}</p>
              <Scopri href={`/${lang}/contact`}>{o.bookingCta}</Scopri>
            </div>
            <aside className="room-detail-aside">
              <div className="room-detail-facts">
                <ul>
                  {facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </header>
      </article>

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
