import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { isLocale } from "@/lib/i18n"
import { restaurant } from "@/lib/content/restaurant"
import { farm } from "@/lib/content/farm"

export default async function RestaurantPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = restaurant[lang]
  const f = farm[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />

      <section className="page-header">
        <h1>{c.title}</h1>
        <p>{c.statementTitle}</p>
      </section>

      <section className="statement statement--flush">
        <div className="statement-grid statement-grid--stacked">
          <div className="statement-body">
            {c.statementBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="restaurant-media" aria-label={lang === "it" ? "Sapori di Lama di Luna" : "Flavours of Lama di Luna"}>
        <div
          className="restaurant-media-video-wrap"
          style={{ backgroundImage: `url('${c.mediaPhotos[0]}')` }}
        >
          <video
            className="restaurant-media-video"
            src={c.mediaVideo}
            poster={c.mediaPhotos[0]}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={lang === "it" ? "Preparazione in cucina a Lama di Luna" : "Food preparation at Lama di Luna"}
          />
        </div>
        <div className="restaurant-media-images">
          {c.mediaPhotos.map((photo, index) => (
            <div
              className="restaurant-media-image"
              style={{ backgroundImage: `url('${photo}')` }}
              role="img"
              aria-label={
                lang === "it"
                  ? `Cucina di Lama di Luna, immagine ${index + 1}`
                  : `Lama di Luna food, image ${index + 1}`
              }
              key={photo}
            />
          ))}
        </div>
      </section>

      <section className="book-stay">
        <Link href={`/${lang}/book`} className="book-stay-btn">
          {c.bookingEyebrow}
        </Link>
      </section>

      <section className="photo-split">
        <div className="photo-split-img" style={{ backgroundImage: `url('${c.photos[0]}')` }} />
        <div className="photo-split-img" style={{ backgroundImage: `url('${c.photos[1]}')` }} />
      </section>

      <section>
        <div className="text-image">
          <div className="text-block">
            <div className="room-name" style={{ marginBottom: "1rem" }}>
              {c.sourcingEyebrow}
            </div>
            {c.sourcingBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="image-block" style={{ backgroundImage: `url('${c.sourcingImg}')` }} />
        </div>
      </section>

      <section className="booking-callout">
        <div className="booking-callout-inner">
          <h2>{f.calloutTitle}</h2>
          <p>{f.calloutBody}</p>
          <Link href={`/${lang}/shop`} className="btn-primary btn-primary--pill">
            {f.calloutCta}
          </Link>
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
