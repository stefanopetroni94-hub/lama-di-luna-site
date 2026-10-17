import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AddToCart } from "@/components/add-to-cart"
import { isLocale } from "@/lib/i18n"
import { shop } from "@/lib/content/shop"

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
          <Link href={`/${lang}/shop`} className="room-back">
            {lang === "it" ? "← Tutto lo shop" : "← All products"}
          </Link>
          <h1>{product.name}</h1>
          <div className="shop-detail-price">{product.price}</div>
          <p className="shop-detail-text">{product.meta}</p>

          <div className="shop-detail-actions">
            <AddToCart label={c.addLabel} addedLabel={c.addedLabel} />
            <Link href={`/${lang}/contact`} className="book-stay-btn">
              {lang === "it" ? "Acquista ora" : "Buy now"}
            </Link>
          </div>
        </div>
      </article>

      <SiteFooter locale={lang} />
    </>
  )
}
