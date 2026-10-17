import type { Locale } from "@/lib/i18n"

export type Product = {
  id: string
  name: string
  meta: string
  price: string
  img: string
  desc?: string
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

// One paragraph per variety, shown on the product page.
const D = {
  en: {
    primitivo:
      "Primitivo is one of the great red grapes of Puglia, grown above all in the warm, sunny south of the region, around Manduria and Gioia del Colle. It ripens early and gives deep, generous wines, with notes of ripe black cherry, plum and spice, a soft, full body and a long, warm finish.",
    troia:
      "Nero di Troia, also called Uva di Troia, is a native Pugliese grape, rooted in the north of the region, in the Foggia area, the Tavoliere and the hills of Castel del Monte, close to the Alta Murgia. It makes structured, elegant reds with firm tannins, notes of black cherry, violet and pepper, and a great capacity to age.",
    rose:
      "The same Nero di Troia grape, picked early and vinified like a white, gives a fresh, lively rosé, coral in colour, with scents of wild strawberry, pomegranate and flowers. It comes from the same northern lands of Puglia as the red and is made to be drunk young and chilled.",
    fiano:
      "Fiano is an ancient white grape of southern Italy, born in Campania and now also grown in Puglia, where the warm days and cool nights keep it fresh. It gives a fragrant, mineral white, with notes of white flowers, citrus, pear and a hint of toasted hazelnut.",
    carolea:
      "Carolea is an olive variety widespread in southern Italy, also found in Puglia. It gives a balanced, harmonious extra virgin olive oil, fruity and gentle, with a sweet start, notes of almond and artichoke and only a light, pleasant bitterness and pungency.",
    coratina:
      "Coratina is the signature olive of Puglia, born around Corato, between Bari and the Alta Murgia, and widely grown in the area of Andria. It gives an intense, green extra virgin olive oil, rich in polyphenols, with notes of fresh grass, tomato leaf and almond, and a pronounced bitterness and pungency.",
  },
  it: {
    primitivo:
      "Il Primitivo è una delle grandi uve rosse della Puglia, coltivata soprattutto nel sud caldo e soleggiato della regione, intorno a Manduria e Gioia del Colle. Matura presto e dà vini profondi e generosi, con note di ciliegia nera matura, prugna e spezie, corpo morbido e pieno e un finale lungo e caldo.",
    troia:
      "Il Nero di Troia, detto anche Uva di Troia, è un'uva autoctona pugliese, radicata nel nord della regione, nella zona di Foggia, nel Tavoliere e sulle colline di Castel del Monte, vicino all'Alta Murgia. Dà rossi strutturati ed eleganti, con tannini decisi, note di ciliegia nera, viola e pepe, e una grande capacità di invecchiamento.",
    rose:
      "La stessa uva Nero di Troia, raccolta presto e vinificata come un bianco, dà un rosato fresco e vivace, color corallo, con profumi di fragolina di bosco, melograno e fiori. Viene dalle stesse terre del nord della Puglia del rosso ed è fatto per essere bevuto giovane e fresco.",
    fiano:
      "Il Fiano è un'antica uva bianca del sud Italia, nata in Campania e oggi coltivata anche in Puglia, dove le giornate calde e le notti fresche la mantengono fresca. Dà un bianco profumato e minerale, con note di fiori bianchi, agrumi, pera e un accenno di nocciola tostata.",
    carolea:
      "La Carolea è una varietà di oliva diffusa nel sud Italia, presente anche in Puglia. Dà un olio extravergine equilibrato e armonioso, fruttato e gentile, con un inizio dolce, note di mandorla e carciofo e solo un leggero e piacevole amaro e piccante.",
    coratina:
      "La Coratina è l'oliva simbolo della Puglia, nata intorno a Corato, tra Bari e l'Alta Murgia, e molto coltivata nella zona di Andria. Dà un olio extravergine intenso e verde, ricco di polifenoli, con note di erba fresca, foglia di pomodoro e mandorla, e un amaro e un piccante spiccati.",
  },
}

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
      { id: "primitivo", name: "Primitivo", meta: "Red wine of Puglia.", desc: D.en.primitivo, price: "€29", img: PH.primitivo, contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Red wine of Puglia.", desc: D.en.troia, price: "€37", img: PH.troia, contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosé", meta: "Rosé wine of Puglia.", desc: D.en.rose, price: "€25", img: PH.rose, contain: true },
      { id: "fiano", name: "Fiano", meta: "White wine.", desc: D.en.fiano, price: "€25", img: PH.fiano, contain: true },
      { id: "carolea-500", name: "Extra Virgin Olive Oil, Carolea", meta: "Carolea cultivar. 500 ml.", desc: D.en.carolea, price: "€23", img: PH.carolea500, contain: true },
      { id: "coratina-500", name: "Extra Virgin Olive Oil, Coratina", meta: "Coratina cultivar. 500 ml.", desc: D.en.coratina, price: "€23", img: PH.coratina500, contain: true },
      { id: "carolea-3l", name: "Extra Virgin Olive Oil, Carolea", meta: "Carolea cultivar. Bag-in-box, 3 litres.", desc: D.en.carolea, price: "€66", img: PH.carolea3l, contain: true, landscape: true, zoom: { size: "168% auto", pos: "50% 94%" } },
      { id: "coratina-3l", name: "Extra Virgin Olive Oil, Coratina", meta: "Coratina cultivar. Bag-in-box, 3 litres.", desc: D.en.coratina, price: "€66", img: PH.coratina3l, contain: true, landscape: true, zoom: { size: "176% auto", pos: "50% 100%" } },
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
      { id: "primitivo", name: "Primitivo", meta: "Vino rosso di Puglia.", desc: D.it.primitivo, price: "€29", img: PH.primitivo, contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Vino rosso di Puglia.", desc: D.it.troia, price: "€37", img: PH.troia, contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosato", meta: "Vino rosato di Puglia.", desc: D.it.rose, price: "€25", img: PH.rose, contain: true },
      { id: "fiano", name: "Fiano", meta: "Vino bianco.", desc: D.it.fiano, price: "€25", img: PH.fiano, contain: true },
      { id: "carolea-500", name: "Olio Extravergine d'Oliva, Carolea", meta: "Cultivar Carolea. 500 ml.", desc: D.it.carolea, price: "€23", img: PH.carolea500, contain: true },
      { id: "coratina-500", name: "Olio Extravergine d'Oliva, Coratina", meta: "Cultivar Coratina. 500 ml.", desc: D.it.coratina, price: "€23", img: PH.coratina500, contain: true },
      { id: "carolea-3l", name: "Olio Extravergine d'Oliva, Carolea", meta: "Cultivar Carolea. Bag-in-box, 3 litri.", desc: D.it.carolea, price: "€66", img: PH.carolea3l, contain: true, landscape: true, zoom: { size: "168% auto", pos: "50% 94%" } },
      { id: "coratina-3l", name: "Olio Extravergine d'Oliva, Coratina", meta: "Cultivar Coratina. Bag-in-box, 3 litri.", desc: D.it.coratina, price: "€66", img: PH.coratina3l, contain: true, landscape: true, zoom: { size: "176% auto", pos: "50% 100%" } },
      { id: "shampoo", name: "Shampoo", meta: "Dalla linea bagno della masseria.", price: "€15", img: PH.shampoo, contain: true },
      { id: "conditioner", name: "Balsamo", meta: "Dalla linea bagno della masseria.", price: "€16", img: PH.conditioner, contain: true },
      { id: "hand-body-soap", name: "Detergente Mani e Corpo", meta: "Dalla linea bagno della masseria.", price: "€15", img: PH.wash, contain: true },
      { id: "bath-set", name: "Set Bagno: Detergente Mani e Corpo, Shampoo e Balsamo", meta: "", price: "€40", img: PH.wash, imgs: [PH.wash, PH.shampoo, PH.conditioner], contain: true },
      { id: "orcio", name: "Orcio di Ceramica con Olio Extravergine d'Oliva", meta: "Un orcio di ceramica pieno del nostro olio extravergine d'oliva. 350 g.", price: "€32", img: PH.orcio, contain: true },
    ],
    note: "Questo è uno shop di anteprima. Ordini e pagamento sicuro possono essere collegati a Stripe quando sarai pronto a vendere online.",
  },
}
