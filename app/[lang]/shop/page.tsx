import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AddToCart } from "@/components/add-to-cart"
import { isLocale } from "@/lib/i18n"
import { shop } from "@/lib/content/shop"

const WINE_IDS = ["primitivo", "nero-di-troia", "nero-di-troia-rose", "fiano"]

export default async function ShopPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = shop[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />

      <div className="shop-page">
        <section className="page-header">
          <h1>{c.title}</h1>
          <p>{c.intro}</p>
        </section>

        <section className="shop-grid">
          {c.products.map((product) => (
            <article className="shop-card" key={product.id}>
              <Link href={`/${lang}/shop/${product.id}`} className="shop-card-img-wrap" aria-label={product.name}>
                {product.imgs ? (
                  <div className="shop-card-img shop-card-img--raw shop-card-img--combo">
                    <div className="combo-tiles">
                      {product.imgs.map((src) => (
                        <div key={src} className="combo-tile" style={{ backgroundImage: `url('${src}')` }} />
                      ))}
                    </div>
                  </div>
                ) : (
                <div
                  className={`shop-card-img${product.contain ? " shop-card-img--raw" : ""}`}
                  style={{
                    backgroundImage: `url('${product.img}')`,
                    ...(product.landscape ? { backgroundSize: "contain", backgroundRepeat: "no-repeat" } : {}),
                    // oil and bath bottles are shorter than the wine bottles: scale them down, standing on the same baseline
                    ...(product.contain && !product.landscape && !WINE_IDS.includes(product.id)
                      ? { backgroundSize: "auto 79%", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat" }
                      : {}),
                  }}
                />
                )}
              </Link>
              <Link href={`/${lang}/shop/${product.id}`} className="shop-card-name">
                {product.name}
              </Link>
              <div className="shop-card-meta">{product.meta}</div>
              <div className="shop-card-footer">
                <div className="shop-card-price">{product.price}</div>
                <AddToCart label={c.addLabel} addedLabel={c.addedLabel} />
              </div>
            </article>
          ))}
        </section>

        <p className="shop-note">{c.note}</p>
      </div>

      <SiteFooter locale={lang} />
    </>
  )
}
