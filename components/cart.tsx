"use client"

// The cart lives in the browser (localStorage), like Shopify's. Prices are never stored here:
// the checkout reads them from lib/shop/catalog.ts on the server.
import { useEffect, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import type { CartLine } from "@/lib/shop/catalog"
import type { Locale } from "@/lib/i18n"

const KEY = "lama-cart"
const EVT = "lama-cart"

function read(): CartLine[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || "[]")
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

let cache: CartLine[] = []
let cacheRaw = ""
function snapshot(): CartLine[] {
  let raw = "[]"
  try {
    raw = localStorage.getItem(KEY) || "[]"
  } catch {}
  if (raw !== cacheRaw) {
    cacheRaw = raw
    cache = read()
  }
  return cache
}
const EMPTY: CartLine[] = []

export function writeCart(lines: CartLine[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines.filter((l) => l.qty > 0)))
  } catch {}
  window.dispatchEvent(new Event(EVT))
}

function subscribe(cb: () => void) {
  window.addEventListener(EVT, cb)
  window.addEventListener("storage", cb)
  return () => {
    window.removeEventListener(EVT, cb)
    window.removeEventListener("storage", cb)
  }
}

export function useCart(): CartLine[] {
  return useSyncExternalStore(subscribe, snapshot, () => EMPTY)
}

export function addToCart(id: string, qty = 1) {
  const lines = [...snapshot()]
  const i = lines.findIndex((l) => l.id === id)
  if (i >= 0) lines[i] = { id, qty: Math.min(24, lines[i].qty + qty) }
  else lines.push({ id, qty })
  writeCart(lines)
}

export const T = {
  add: { en: "Add to cart", it: "Aggiungi al carrello", fr: "Ajouter au panier", de: "In den Warenkorb" },
  added: { en: "Added", it: "Aggiunto", fr: "Ajouté", de: "Hinzugefügt" },
  cart: { en: "Cart", it: "Carrello", fr: "Panier", de: "Warenkorb" },
} as const

export function AddToCart({ id, locale, className }: { id: string; locale: Locale; className?: string }) {
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => setDone(false), 1600)
    return () => clearTimeout(t)
  }, [done])
  return (
    <button
      type="button"
      className={className ?? "shop-card-add"}
      onClick={() => {
        addToCart(id)
        setDone(true)
      }}
    >
      {done ? T.added[locale] : T.add[locale]}
    </button>
  )
}

// Floating cart pill, shown on shop pages once something is in the cart.
export function CartPill({ locale }: { locale: Locale }) {
  const lines = useCart()
  const n = lines.reduce((s, l) => s + l.qty, 0)
  if (!n) return null
  return (
    <Link href={`/${locale}/cart`} className="cart-pill" aria-label={`${T.cart[locale]} (${n})`}>
      {T.cart[locale]} <span className="cart-pill-n">{n}</span>
    </Link>
  )
}
