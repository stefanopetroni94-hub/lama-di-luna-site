import { notFound } from "next/navigation"
import { BackLink } from "@/components/back-link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { QuickSearch } from "@/components/quick-search"
import { rooms } from "@/lib/content/rooms"
import { book } from "@/lib/content/book"
import { isLocale, menu } from "@/lib/i18n"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLocale(lang)) return {}
  const room = rooms[lang].list.find((r) => r.slug === slug)
  return pageMetadata(lang, `rooms/${slug}`, room?.name)
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()
  const c = rooms[lang]
  const room = c.list.find((r) => r.slug === slug)
  if (!room) notFound()

  // First photo is the big hero, the next five go below as 2 + 1 + 2.
  const [hero, ...rest] = room.gallery
  const rows: string[][] = []
  let taken = 0
  for (const size of [2, 1, 2]) {
    const row = rest.slice(taken, taken + size)
    if (row.length) rows.push(row)
    taken += size
  }

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />
      <BackLink href={`/${lang}/rooms`} label={menu[lang][0].label} tone="light" />

      <section
        className="room-hero"
        role="img"
        aria-label={room.name}
        style={{ backgroundImage: `url('${hero ?? room.img}')` }}
      />

      <article className="room-detail room-detail--hero">
        <header className="room-detail-header">
          <h1>{room.name}</h1>

          <div className="room-detail-body">
            <div className="room-detail-copy">
              <p>{room.description.join(" ")}</p>
            </div>
            <aside className="room-detail-aside">
              <div className="room-detail-facts">
                <ul>
                  {room.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="quick-search room-quick-search">
            <QuickSearch labels={book[lang]} />
          </div>
        </header>

        <section className="room-rows" aria-label={`${room.name} gallery`}>
          {rows.flatMap((row, r) =>
            row.map((src, i) => {
              const tilted = src.includes("124829_2560467817806327")
              const cls = `room-rows-img${row.length === 1 ? " room-rows-img--wide" : ""}${tilted ? " room-rows-img--tilt" : ""}`
              return (
                <div
                  key={`${r}-${i}`}
                  className={cls}
                  style={tilted ? undefined : { backgroundImage: `url('${src}')` }}
                  role="img"
                  aria-label={`${room.name}, photo ${r * 2 + i + 2}`}
                >
                  {tilted && <div className="room-rows-tilt" style={{ backgroundImage: `url('${src}')` }} />}
                </div>
              )
            })
          )}
        </section>
      </article>

      <SiteFooter locale={lang} />
    </>
  )
}
