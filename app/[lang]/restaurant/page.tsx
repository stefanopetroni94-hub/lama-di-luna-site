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

      <section className="restaurant-media" aria-label={{ en: "Flavours of Lama di Luna", it: "Sapori di Lama di Luna", fr: "Saveurs de Lama di Luna" }[lang]}>
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
            aria-label={{ en: "Food preparation at Lama di Luna", it: "Preparazione in cucina a Lama di Luna", fr: "Préparation en cuisine à Lama di Luna" }[lang]}
          />
        </div>
        <div className="restaurant-media-images">
          {c.mediaPhotos.map((photo, index) => (
            <div
              className="restaurant-media-image"
              style={{ backgroundImage: `url('${photo}')` }}
              role="img"
              aria-label={
                {
                  en: `Lama di Luna food, image ${index + 1}`,
                  it: `Cucina di Lama di Luna, immagine ${index + 1}`,
                  fr: `Cuisine de Lama di Luna, image ${index + 1}`,
                }[lang]
              }
              key={photo}
            />
          ))}
        </div>
      </section>

      <section className="restaurant-extra">
        <div className="statement-inner">
          <div className="statement-body">
            <p>{c.veranda}</p>
          </div>
        </div>
      </section>

      <section className="restaurant-toast">
        <div
          className="full-photo"
          role="img"
          aria-label={{ en: "Guests toasting on the veranda at sunset", it: "Ospiti che brindano sulla veranda al tramonto", fr: "Des hôtes trinquent sur la véranda au coucher du soleil" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261014_050216_3074277952905624.jpg')",
            backgroundPosition: "40% 55%",
          }}
        />
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
          <div className="image-block image-block--zoom">
            <div style={{ backgroundImage: `url('${c.sourcingImg}')` }} />
          </div>
        </div>
      </section>

      <section className="story-split restaurant-split restaurant-split--end">
        <div
          className="story-split-img story-split-img--rotated"
          role="img"
          aria-label={{ en: "Focaccia and spritz on the stone table", it: "Focaccia e spritz sul tavolo di pietra", fr: "Focaccia et spritz sur la table en pierre" }[lang]}
        >
          <div
            className="story-split-rotate"
            style={{ backgroundImage: "url('/whatsapp/20261014_043528_2301455727286373.jpg')" }}
          />
        </div>
        <div
          className="story-split-img"
          role="img"
          aria-label={{ en: "Sunset aperitivo on the veranda", it: "Aperitivo al tramonto sulla veranda", fr: "Apéritif au coucher du soleil sur la véranda" }[lang]}
          style={{
            backgroundImage: "url('/whatsapp/20261014_043519_1700647744957278.jpg')",
            backgroundPosition: "center 55%",
          }}
        />
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
