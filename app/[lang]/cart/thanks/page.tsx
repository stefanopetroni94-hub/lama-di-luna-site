import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ClearCart } from "@/components/clear-cart"
import { isLocale } from "@/lib/i18n"

export const metadata: Metadata = { title: "Thank you | Lama di Luna", robots: { index: false } }

const W = {
  title: { en: "Thank you for your order", it: "Grazie per il tuo ordine", fr: "Merci pour votre commande", de: "Danke für Ihre Bestellung" },
  text: {
    en: "Payment received. You will get a receipt by email, and we will write when your parcel leaves the masseria.",
    it: "Pagamento ricevuto. Riceverai la ricevuta via email e ti scriveremo quando il pacco partirà dalla masseria.",
    fr: "Paiement reçu. Vous recevrez un reçu par email et nous vous écrirons quand le colis quittera la masseria.",
    de: "Zahlung erhalten. Sie bekommen eine Quittung per E-Mail, und wir schreiben Ihnen, sobald das Paket die Masseria verlässt.",
  },
  back: { en: "Back to the shop", it: "Torna allo shop", fr: "Retour à la boutique", de: "Zurück zum Shop" },
}

export default async function ThanksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  return (
    <>
      <SiteNav locale={lang} variant="solid" />
      <ClearCart />
      <div className="shop-page">
        <section className="page-header">
          <h1>{W.title[lang]}</h1>
          <p>{W.text[lang]}</p>
        </section>
        <div className="cart-empty">
          <Link href={`/${lang}/shop`} className="book-stay-btn">{W.back[lang]}</Link>
        </div>
      </div>
      <SiteFooter locale={lang} />
    </>
  )
}
