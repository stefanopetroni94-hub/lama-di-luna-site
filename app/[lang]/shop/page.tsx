import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AddToCart } from "@/components/add-to-cart"
import { isLocale } from "@/lib/i18n"
import { shop } from "@/lib/content/shop"

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
              <div
                className={`shop-card-img${product.contain ? " shop-card-img--raw" : ""}`}
                style={{
                  backgroundImage: `url('${product.img}')`,
                  ...(product.landscape ? { backgroundSize: "contain", backgroundRepeat: "no-repeat" } : {}),
                }}
              />
              <div className="shop-card-name">{product.name}</div>
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
