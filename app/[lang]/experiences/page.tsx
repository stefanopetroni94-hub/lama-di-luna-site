import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { WaveLine } from "@/components/wave-line"
import { QuickSearch } from "@/components/quick-search"
import { book } from "@/lib/content/book"
import { experiences, type ExpCard } from "@/lib/content/experiences"
import { BackLink } from "@/components/back-link"
import { HOME, isLocale, type Locale } from "@/lib/i18n"

function Card({ card, lang }: { card: ExpCard; lang: Locale }) {
  const href = card.slug === "#" ? "#" : `/${lang}/experiences/${card.slug}`
  return (
    <Link href={href} className="exp-card">
      <div className="exp-card-img-wrap">
        <div
          className="exp-card-img"
          style={{ backgroundImage: `url('${card.img}')`, backgroundPosition: card.pos ?? "center" }}
        />
      </div>
      <div className="exp-card-name">{card.name}</div>
      <div className="exp-card-meta">{card.meta}</div>
      <span className="exp-card-link">{{ en: "Discover →", it: "Scopri →", fr: "Découvrir →" }[lang]}</span>
    </Link>
  )
}

export default async function ExperiencesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = experiences[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />
      <BackLink href={`/${lang}`} label={HOME[lang]} />

      <section className="page-header page-header--booking">
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
      </section>

      <div className="quick-search experiences-quick-search">
        <QuickSearch labels={book[lang]} />
      </div>

      <div className="section-label">
        <WaveLine side="left" />
        <span>{c.onEstateLabel}</span>
        <WaveLine side="right" />
      </div>
      <section className="grid-4">
        {c.onEstate.map((card) => (
          <Card key={card.name} card={card} lang={lang} />
        ))}
      </section>

      <div className="section-label">
        <WaveLine side="left" />
        <span>{c.inRegionLabel}</span>
        <WaveLine side="right" />
      </div>
      <section className="grid-4">
        {c.inRegion.map((card) => (
          <Card key={card.name} card={card} lang={lang} />
        ))}
      </section>

      <section className="arrange">
        <div className="arrange-inner">
          <div className="eyebrow">{c.arrangeEyebrow}</div>
          <h2>{c.arrangeTitle}</h2>
          <p>{c.arrangeText}</p>
          <Link href={`/${lang}/contact`} className="btn-primary">
            {c.arrangeCta}
          </Link>
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
