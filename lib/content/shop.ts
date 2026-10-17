import type { Locale } from "@/lib/i18n"

export type Product = {
  id: string
  name: string
  meta: string
  price: string
  img: string
  contain?: boolean
  landscape?: boolean
}

export type ShopContent = {
  eyebrow: string
  title: string
  intro: string
  addLabel: string
  addedLabel: string
  products: Product[]
  note: string
}

const IMG = {
  oil: "/shop/olive-oil.png",
  wine: "/shop/wine.png",
  soap: "/shop/soap.png",
}

// Prices and photos are placeholders until the real ones are sent.
const PRICE_EN = "Price on request"
const PRICE_IT = "Prezzo su richiesta"

export const shop: Record<Locale, ShopContent> = {
  en: {
    eyebrow: "The Shop",
    title: "A little of the estate, sent to your table",
    intro:
      "Everything here is grown, pressed or made on the estate, or by neighbours we have known for years. Order a taste of Lama di Luna to keep the valley close, wherever you are.",
    addLabel: "Add",
    addedLabel: "Added",
    products: [
      { id: "primitivo", name: "Primitivo", meta: "Red wine of Puglia.", price: PRICE_EN, img: "/whatsapp/20261017_091513_2448595339307246.jpg", contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Red wine of Puglia.", price: PRICE_EN, img: "/whatsapp/20261017_091320_1584036386359420.jpg", contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosé", meta: "Rosé wine of Puglia.", price: PRICE_EN, img: "/whatsapp/20261017_091553_1555549189949038.jpg", contain: true },
      { id: "fiano", name: "Fiano", meta: "White wine.", price: PRICE_EN, img: IMG.wine },
      { id: "carolea-500", name: "Extra Virgin Olive Oil, Carolea", meta: "Carolea cultivar. 500 ml.", price: PRICE_EN, img: "/whatsapp/20261017_092218_1652631183119903.jpg", contain: true },
      { id: "coratina-500", name: "Extra Virgin Olive Oil, Coratina", meta: "Coratina cultivar. 500 ml.", price: PRICE_EN, img: "/whatsapp/20261017_091902_1136236775644116.jpg", contain: true },
      { id: "carolea-3l", name: "Extra Virgin Olive Oil, Carolea", meta: "Carolea cultivar. 3 litres.", price: PRICE_EN, img: "/whatsapp/20261017_092134_1976526712917485.jpg", contain: true, landscape: true },
      { id: "coratina-3l", name: "Extra Virgin Olive Oil, Coratina", meta: "Coratina cultivar. 3 litres.", price: PRICE_EN, img: "/whatsapp/20261017_092258_1562976282185362.jpg", contain: true, landscape: true },
      { id: "shampoo", name: "Shampoo", meta: "From the masseria's bath line.", price: PRICE_EN, img: "/whatsapp/20261017_091816_1467314875313085.jpg", contain: true },
      { id: "conditioner", name: "Conditioner", meta: "From the masseria's bath line.", price: PRICE_EN, img: "/whatsapp/20261017_091736_1116476974179442.jpg", contain: true },
      { id: "hand-body-soap", name: "Hand & Body Wash", meta: "From the masseria's bath line.", price: PRICE_EN, img: "/whatsapp/20261017_092042_1420806822855435.jpg", contain: true },
      { id: "orcio", name: "Ceramic Orcio with Extra Virgin Olive Oil", meta: "A ceramic orcio filled with our extra virgin olive oil.", price: PRICE_EN, img: "/whatsapp/20261017_091405_1131140592814993.jpg", contain: true },
    ],
    note: "This is a preview shop. Orders and secure checkout can be connected to Stripe whenever you are ready to sell online.",
  },
  it: {
    eyebrow: "Lo Shop",
    title: "Un po' della tenuta, portato alla tua tavola",
    intro:
      "Tutto qui è coltivato, spremuto o prodotto in tenuta, o da vicini che conosciamo da anni. Ordina un assaggio di Lama di Luna per tenere vicina la valle, ovunque tu sia.",
    addLabel: "Aggiungi",
    addedLabel: "Aggiunto",
    products: [
      { id: "primitivo", name: "Primitivo", meta: "Vino rosso di Puglia.", price: PRICE_IT, img: "/whatsapp/20261017_091513_2448595339307246.jpg", contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Vino rosso di Puglia.", price: PRICE_IT, img: "/whatsapp/20261017_091320_1584036386359420.jpg", contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosato", meta: "Vino rosato di Puglia.", price: PRICE_IT, img: "/whatsapp/20261017_091553_1555549189949038.jpg", contain: true },
      { id: "fiano", name: "Fiano", meta: "Vino bianco.", price: PRICE_IT, img: IMG.wine },
      { id: "carolea-500", name: "Olio Extravergine d'Oliva, Carolea", meta: "Cultivar Carolea. 500 ml.", price: PRICE_IT, img: "/whatsapp/20261017_092218_1652631183119903.jpg", contain: true },
      { id: "coratina-500", name: "Olio Extravergine d'Oliva, Coratina", meta: "Cultivar Coratina. 500 ml.", price: PRICE_IT, img: "/whatsapp/20261017_091902_1136236775644116.jpg", contain: true },
      { id: "carolea-3l", name: "Olio Extravergine d'Oliva, Carolea", meta: "Cultivar Carolea. 3 litri.", price: PRICE_IT, img: "/whatsapp/20261017_092134_1976526712917485.jpg", contain: true, landscape: true },
      { id: "coratina-3l", name: "Olio Extravergine d'Oliva, Coratina", meta: "Cultivar Coratina. 3 litri.", price: PRICE_IT, img: "/whatsapp/20261017_092258_1562976282185362.jpg", contain: true, landscape: true },
      { id: "shampoo", name: "Shampoo", meta: "Dalla linea bagno della masseria.", price: PRICE_IT, img: "/whatsapp/20261017_091816_1467314875313085.jpg", contain: true },
      { id: "conditioner", name: "Balsamo", meta: "Dalla linea bagno della masseria.", price: PRICE_IT, img: "/whatsapp/20261017_091736_1116476974179442.jpg", contain: true },
      { id: "hand-body-soap", name: "Detergente Mani e Corpo", meta: "Dalla linea bagno della masseria.", price: PRICE_IT, img: "/whatsapp/20261017_092042_1420806822855435.jpg", contain: true },
      { id: "orcio", name: "Orcio di Ceramica con Olio Extravergine d'Oliva", meta: "Un orcio di ceramica pieno del nostro olio extravergine d'oliva.", price: PRICE_IT, img: "/whatsapp/20261017_091405_1131140592814993.jpg", contain: true },
    ],
    note: "Questo è uno shop di anteprima. Ordini e pagamento sicuro possono essere collegati a Stripe quando sarai pronto a vendere online.",
  },
}
