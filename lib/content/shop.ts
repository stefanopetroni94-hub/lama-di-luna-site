import type { Locale } from "@/lib/i18n"

export type Product = {
  id: string
  name: string
  meta: string
  price: string
  img: string
  imgs?: string[]
  contain?: boolean
  landscape?: boolean
  zoom?: { size: string; pos: string }
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

// Prices still missing are shown as "on request".
const PRICE_EN = "Price on request"
const PRICE_IT = "Prezzo su richiesta"

const PH = {
  primitivo: "/whatsapp/20261017_091513_2448595339307246.jpg",
  troia: "/whatsapp/20261017_091320_1584036386359420.jpg",
  rose: "/whatsapp/20261017_091553_1555549189949038.jpg",
  fiano: "/whatsapp/20261017_092538_2899886223723072.jpg",
  carolea500: "/whatsapp/20261017_092218_1652631183119903.jpg",
  coratina500: "/whatsapp/20261017_091902_1136236775644116.jpg",
  carolea3l: "/whatsapp/20261017_092134_1976526712917485.jpg",
  coratina3l: "/whatsapp/20261017_092258_1562976282185362.jpg",
  shampoo: "/whatsapp/20261017_091816_1467314875313085.jpg",
  conditioner: "/whatsapp/20261017_091736_1116476974179442.jpg",
  wash: "/whatsapp/20261017_092042_1420806822855435.jpg",
  orcio: "/whatsapp/20261017_091405_1131140592814993.jpg",
}

export const shop: Record<Locale, ShopContent> = {
  en: {
    eyebrow: "The Shop",
    title: "A little of the estate, sent to your table",
    intro:
      "Order a taste of Lama di Luna to keep Puglia, and the Alta Murgia, close, wherever you are.",
    addLabel: "Add",
    addedLabel: "Added",
    products: [
      { id: "primitivo", name: "Primitivo", meta: "Red wine of Puglia.", price: "€29", img: PH.primitivo, contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Red wine of Puglia.", price: PRICE_EN, img: PH.troia, contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosé", meta: "Rosé wine of Puglia.", price: PRICE_EN, img: PH.rose, contain: true },
      { id: "fiano", name: "Fiano", meta: "White wine.", price: PRICE_EN, img: PH.fiano, contain: true },
      { id: "carolea-500", name: "Extra Virgin Olive Oil, Carolea", meta: "Carolea cultivar. 500 ml.", price: "€23", img: PH.carolea500, contain: true },
      { id: "coratina-500", name: "Extra Virgin Olive Oil, Coratina", meta: "Coratina cultivar. 500 ml.", price: "€23", img: PH.coratina500, contain: true },
      { id: "carolea-3l", name: "Extra Virgin Olive Oil, Carolea", meta: "Carolea cultivar. Bag-in-box, 3 litres.", price: "€66", img: PH.carolea3l, contain: true, landscape: true, zoom: { size: "168% auto", pos: "50% 94%" } },
      { id: "coratina-3l", name: "Extra Virgin Olive Oil, Coratina", meta: "Coratina cultivar. Bag-in-box, 3 litres.", price: "€66", img: PH.coratina3l, contain: true, landscape: true, zoom: { size: "176% auto", pos: "50% 100%" } },
      { id: "shampoo", name: "Shampoo", meta: "From the masseria's bath line.", price: "€15", img: PH.shampoo, contain: true },
      { id: "conditioner", name: "Conditioner", meta: "From the masseria's bath line.", price: "€16", img: PH.conditioner, contain: true },
      { id: "hand-body-soap", name: "Hand & Body Wash", meta: "From the masseria's bath line.", price: "€15", img: PH.wash, contain: true },
      { id: "bath-set", name: "Bath Set: Body Wash, Shampoo & Conditioner", meta: "", price: "€40", img: PH.wash, imgs: [PH.wash, PH.shampoo, PH.conditioner], contain: true },
      { id: "orcio", name: "Ceramic Orcio with Extra Virgin Olive Oil", meta: "A ceramic orcio filled with our extra virgin olive oil. 350 g.", price: "€32", img: PH.orcio, contain: true },
    ],
    note: "This is a preview shop. Orders and secure checkout can be connected to Stripe whenever you are ready to sell online.",
  },
  it: {
    eyebrow: "Lo Shop",
    title: "Un po' della tenuta, portato alla tua tavola",
    intro:
      "Ordina un assaggio di Lama di Luna per tenere vicine la Puglia e l'Alta Murgia, ovunque tu sia.",
    addLabel: "Aggiungi",
    addedLabel: "Aggiunto",
    products: [
      { id: "primitivo", name: "Primitivo", meta: "Vino rosso di Puglia.", price: "€29", img: PH.primitivo, contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Vino rosso di Puglia.", price: PRICE_IT, img: PH.troia, contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosato", meta: "Vino rosato di Puglia.", price: PRICE_IT, img: PH.rose, contain: true },
      { id: "fiano", name: "Fiano", meta: "Vino bianco.", price: PRICE_IT, img: PH.fiano, contain: true },
      { id: "carolea-500", name: "Olio Extravergine d'Oliva, Carolea", meta: "Cultivar Carolea. 500 ml.", price: "€23", img: PH.carolea500, contain: true },
      { id: "coratina-500", name: "Olio Extravergine d'Oliva, Coratina", meta: "Cultivar Coratina. 500 ml.", price: "€23", img: PH.coratina500, contain: true },
      { id: "carolea-3l", name: "Olio Extravergine d'Oliva, Carolea", meta: "Cultivar Carolea. Bag-in-box, 3 litri.", price: "€66", img: PH.carolea3l, contain: true, landscape: true, zoom: { size: "168% auto", pos: "50% 94%" } },
      { id: "coratina-3l", name: "Olio Extravergine d'Oliva, Coratina", meta: "Cultivar Coratina. Bag-in-box, 3 litri.", price: "€66", img: PH.coratina3l, contain: true, landscape: true, zoom: { size: "176% auto", pos: "50% 100%" } },
      { id: "shampoo", name: "Shampoo", meta: "Dalla linea bagno della masseria.", price: "€15", img: PH.shampoo, contain: true },
      { id: "conditioner", name: "Balsamo", meta: "Dalla linea bagno della masseria.", price: "€16", img: PH.conditioner, contain: true },
      { id: "hand-body-soap", name: "Detergente Mani e Corpo", meta: "Dalla linea bagno della masseria.", price: "€15", img: PH.wash, contain: true },
      { id: "bath-set", name: "Set Bagno: Detergente Mani e Corpo, Shampoo e Balsamo", meta: "", price: "€40", img: PH.wash, imgs: [PH.wash, PH.shampoo, PH.conditioner], contain: true },
      { id: "orcio", name: "Orcio di Ceramica con Olio Extravergine d'Oliva", meta: "Un orcio di ceramica pieno del nostro olio extravergine d'oliva. 350 g.", price: "€32", img: PH.orcio, contain: true },
    ],
    note: "Questo è uno shop di anteprima. Ordini e pagamento sicuro possono essere collegati a Stripe quando sarai pronto a vendere online.",
  },
}
