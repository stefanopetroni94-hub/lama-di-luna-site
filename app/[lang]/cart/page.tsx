import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { BackLink } from "@/components/back-link"
import { CartView } from "@/components/cart-view"
import { isLocale, menu } from "@/lib/i18n"
import { shop } from "@/lib/content/shop"

export const metadata: Metadata = { title: "Cart | Lama di Luna", robots: { index: false } }

const TITLE = { en: "Your cart", it: "Il tuo carrello", fr: "Votre panier", de: "Ihr Warenkorb" }

export default async function CartPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const products = shop[lang].products.map((p) => ({ id: p.id, name: p.name, img: p.img }))
  return (
    <>
      <SiteNav locale={lang} variant="solid" />
      <BackLink href={`/${lang}/shop`} label={menu[lang][6].label} />
      <div className="shop-page">
        <section className="page-header">
          <h1>{TITLE[lang]}</h1>
        </section>
        <CartView locale={lang} products={products} />
      </div>
      <SiteFooter locale={lang} />
    </>
  )
}
