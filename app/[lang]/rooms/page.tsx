import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { QuickSearch } from "@/components/quick-search"
import { rooms, type Room } from "@/lib/content/rooms"
import { book } from "@/lib/content/book"
import { BackLink } from "@/components/back-link"
import { HOME, isLocale, type Locale } from "@/lib/i18n"

function RoomCard({ room, c, lang }: { room: Room; c: (typeof rooms)["en"]; lang: Locale }) {
  return (
    <Link href={`/${lang}/rooms/${room.slug}`} className="room-card rooms-card">
      <div className="room-img-wrap">
        <div className="room-img" style={{ backgroundImage: `url('${room.img}')` }} />
      </div>
      <div className="room-card-name">{room.name}</div>
      <div className="room-card-meta">{room.meta}</div>
      <div className="room-card-footer">
        <div className="room-card-price">
          <small>{c.from}</small>
          {room.price} {c.perNight}
        </div>
        <span className="room-card-link">{c.viewRoom}</span>
      </div>
    </Link>
  )
}

export default async function RoomsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = rooms[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />
      <BackLink href={`/${lang}`} label={HOME[lang]} />

      <div className="rooms-page">
        <section className="page-header">
          <h1>{c.title}</h1>
          <p>{c.intro}</p>
        </section>

        <div className="quick-search rooms-quick-search">
          <QuickSearch labels={book[lang]} />
        </div>

        <section className="rooms-grid">
          {c.list.map((room) => (
            <RoomCard key={room.slug} room={room} c={c} lang={lang} />
          ))}
        </section>
      </div>

      <SiteFooter locale={lang} />
    </>
  )
}
