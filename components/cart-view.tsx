"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useCart, writeCart } from "@/components/cart"
import { byId, cleanCart } from "@/lib/shop/catalog"
import { quote, shipCountries } from "@/lib/shop/shipping"
import type { Locale } from "@/lib/i18n"

type Info = { id: string; name: string; img: string }

const W = {
  title: { en: "Your cart", it: "Il tuo carrello", fr: "Votre panier", de: "Ihr Warenkorb" },
  empty: { en: "Your cart is empty.", it: "Il carrello è vuoto.", fr: "Votre panier est vide.", de: "Ihr Warenkorb ist leer." },
  back: { en: "Back to the shop", it: "Torna allo shop", fr: "Retour à la boutique", de: "Zurück zum Shop" },
  country: { en: "Ship to", it: "Spedisci in", fr: "Livrer en", de: "Versand nach" },
  pick: { en: "Choose a country", it: "Scegli un paese", fr: "Choisissez un pays", de: "Land wählen" },
  goods: { en: "Products", it: "Prodotti", fr: "Produits", de: "Produkte" },
  ship: { en: "Shipping", it: "Spedizione", fr: "Livraison", de: "Versand" },
  free: { en: "Free", it: "Gratuita", fr: "Offerte", de: "Kostenlos" },
  total: { en: "Total", it: "Totale", fr: "Total", de: "Gesamt" },
  days: { en: "working days", it: "giorni lavorativi", fr: "jours ouvrés", de: "Werktage" },
  pay: { en: "Pay securely", it: "Paga in sicurezza", fr: "Payer en sécurité", de: "Sicher bezahlen" },
  remove: { en: "Remove", it: "Rimuovi", fr: "Retirer", de: "Entfernen" },
  vat: { en: "VAT included. Any import duties outside the EU are paid by the recipient.", it: "IVA inclusa. Eventuali dazi fuori dall'UE sono a carico del destinatario.", fr: "TVA incluse. Les droits d'importation hors UE sont à la charge du destinataire.", de: "Inkl. MwSt. Einfuhrabgaben außerhalb der EU trägt der Empfänger." },
  kind: { en: "Wine ships to Italy only. Remove it to ship abroad.", it: "Il vino si spedisce solo in Italia. Rimuovilo per spedire all'estero.", fr: "Le vin est livré en Italie uniquement. Retirez-le pour livrer à l'étranger.", de: "Wein wird nur innerhalb Italiens versandt. Entfernen Sie ihn für den Versand ins Ausland." },
  weight: { en: "This order is too heavy for one parcel. Please contact us.", it: "Ordine troppo pesante per un pacco. Contattaci.", fr: "Commande trop lourde pour un colis. Contactez-nous.", de: "Zu schwer für ein Paket. Bitte kontaktieren Sie uns." },
  error: { en: "Payment could not start. Please try again or write to info@lamadiluna.com", it: "Il pagamento non è partito. Riprova o scrivi a info@lamadiluna.com", fr: "Le paiement n'a pas pu démarrer. Réessayez ou écrivez à info@lamadiluna.com", de: "Zahlung konnte nicht starten. Bitte erneut versuchen oder an info@lamadiluna.com schreiben." },
} as const

const eur = (c: number, l: Locale) => new Intl.NumberFormat(l, { style: "currency", currency: "EUR" }).format(c / 100)

export function CartView({ locale, products }: { locale: Locale; products: Info[] }) {
  const raw = useCart()
  const lines = useMemo(() => cleanCart(raw), [raw])
  const [country, setCountry] = useState("")
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState(false)

  useEffect(() => {
    try {
      const c = localStorage.getItem("lama-country")
      if (c && shipCountries.includes(c)) setCountry(c)
      else if (locale === "it") setCountry("IT")
    } catch {}
  }, [locale])

  const names = useMemo(() => {
    const dn = new Intl.DisplayNames([locale], { type: "region" })
    return shipCountries.map((c) => ({ c, n: dn.of(c) ?? c })).sort((a, b) => a.n.localeCompare(b.n, locale))
  }, [locale])

  const info = (id: string) => products.find((p) => p.id === id)
  const goods = lines.reduce((s, l) => s + byId(l.id)!.priceCents * l.qty, 0)
  const q = country ? quote(lines, country) : null

  const setQty = (id: string, qty: number) => writeCart(lines.map((l) => (l.id === id ? { id, qty } : l)))

  async function pay() {
    setBusy(true)
    setErr(false)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lines, country, lang: locale }),
      })
      const out = await res.json()
      if (!res.ok || !out.url) throw new Error(out.error)
      window.location.href = out.url
    } catch {
      setErr(true)
      setBusy(false)
    }
  }

  if (!lines.length)
    return (
      <div className="cart-empty">
        <p>{W.empty[locale]}</p>
        <Link href={`/${locale}/shop`} className="book-stay-btn">{W.back[locale]}</Link>
      </div>
    )

  return (
    <div className="cart">
      <ul className="cart-lines">
        {lines.map((l) => {
          const p = info(l.id)
          return (
            <li key={l.id} className="cart-line">
              <div className="cart-line-img" style={{ backgroundImage: p ? `url('${p.img}')` : undefined }} />
              <div className="cart-line-name">
                <Link href={`/${locale}/shop/${l.id}`}>{p?.name ?? l.id}</Link>
                <button type="button" className="cart-remove" onClick={() => setQty(l.id, 0)}>{W.remove[locale]}</button>
              </div>
              <div className="cart-qty">
                <button type="button" aria-label="-" onClick={() => setQty(l.id, l.qty - 1)}>−</button>
                <span>{l.qty}</span>
                <button type="button" aria-label="+" onClick={() => setQty(l.id, Math.min(24, l.qty + 1))}>+</button>
              </div>
              <div className="cart-line-price">{eur(byId(l.id)!.priceCents * l.qty, locale)}</div>
            </li>
          )
        })}
      </ul>

      <div className="cart-summary">
        <label className="cart-country">
          <span>{W.country[locale]}</span>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value)
              try { localStorage.setItem("lama-country", e.target.value) } catch {}
            }}
          >
            <option value="">{W.pick[locale]}</option>
            {names.map(({ c, n }) => <option key={c} value={c}>{n}</option>)}
          </select>
        </label>

        <div className="cart-row"><span>{W.goods[locale]}</span><span>{eur(goods, locale)}</span></div>
        {q?.ok ? (
          <>
            <div className="cart-row">
              <span>{W.ship[locale]} ({q.days[0]} to {q.days[1]} {W.days[locale]})</span>
              <span>{q.shippingCents ? eur(q.shippingCents, locale) : W.free[locale]}</span>
            </div>
            <div className="cart-row cart-total"><span>{W.total[locale]}</span><span>{eur(goods + q.shippingCents, locale)}</span></div>
          </>
        ) : null}
        {q && !q.ok && q.reason === "kind" ? <p className="cart-warn">{W.kind[locale]}</p> : null}
        {q && !q.ok && q.reason === "weight" ? <p className="cart-warn">{W.weight[locale]}</p> : null}
        <p className="cart-note">{W.vat[locale]}</p>
        <button type="button" className="book-stay-btn cart-pay" disabled={!q?.ok || busy} onClick={pay}>
          {busy ? "…" : W.pay[locale]}
        </button>
        {err ? <p className="cart-warn">{W.error[locale]}</p> : null}
      </div>
    </div>
  )
}
