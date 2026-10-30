import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { BackLink } from "@/components/back-link"
import { isLocale, menu } from "@/lib/i18n"
import { shop } from "@/lib/content/shop"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLocale(lang)) return {}
  const product = shop[lang].products.find((p) => p.id === slug)
  return pageMetadata(lang, `shop/${slug}`, product?.name)
}

const WINE_IDS = ["primitivo", "nero-di-troia", "nero-di-troia-rose", "fiano"]

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()
  const c = shop[lang]
  const product = c.products.find((p) => p.id === slug)
  if (!product) notFound()

  const small = product.contain && !product.landscape && !WINE_IDS.includes(product.id)

  return (
    <>
      <SiteNav locale={lang} variant="solid" />
      <BackLink href={`/${lang}/shop`} label={menu[lang][6].label} />

      <article className="shop-detail">
        {product.imgs ? (
          <div
            className="shop-detail-img shop-detail-img--raw shop-card-img--combo product-shadow product-shadow--wide"
            role="img"
            aria-label={product.name}
          >
            <div className="combo-tiles">
              {product.imgs.map((src) => (
                <div key={src} className="combo-tile" style={{ backgroundImage: `url('${src}')` }} />
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`shop-detail-img${product.contain ? " shop-detail-img--raw" : ""}${
              product.contain && !product.landscape ? " product-shadow" : ""
            }`}
            role="img"
            aria-label={product.name}
            style={{
              backgroundImage: `url('${product.img}')`,
              ...(product.landscape
                ? {
                    backgroundSize: product.zoom?.size ?? "96% auto",
                    backgroundPosition: product.zoom?.pos ?? "center 94%",
                    backgroundRepeat: "no-repeat",
                  }
                : {}),
              ...(small ? { backgroundSize: "auto 73.2%", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat" } : {}),
            }}
          />
        )}

        <div className="shop-detail-info">
          <h1>{product.name}</h1>
          <div className="shop-detail-price">{product.price}</div>
          {product.meta ? <p className="shop-detail-text">{product.meta}</p> : null}
          {product.desc ? <p className="shop-detail-text">{product.desc}</p> : null}

          <div className="shop-detail-actions">
            <Link href={`/${lang}/contact?product=${encodeURIComponent(product.name)}`} className="book-stay-btn">
              {{ en: "Contact us to order", it: "Contattaci per ordinare", fr: "Contactez-nous pour commander", de: "Kontaktieren Sie uns zur Bestellung" }[lang]}
            </Link>
          </div>
        </div>
      </article>

      <SiteFooter locale={lang} />
    </>
  )
}
