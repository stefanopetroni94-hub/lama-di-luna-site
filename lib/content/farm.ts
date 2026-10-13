import type { Locale } from "@/lib/i18n"

type Block = { eyebrow: string; title: string; body: string[]; img: string }
type Detail = { num: string; title: string; body: string }

export type FarmContent = {
  heroEyebrow: string
  statementTitle: string
  statementBody: string[]
  oliveLabel: string
  olive: Block
  organicLabel: string
  organic: Block
  principlesEyebrow: string
  principlesTitle: string
  principles: Detail[]
  fullPhoto: string
  calloutEyebrow: string
  calloutTitle: string
  calloutBody: string
  calloutCta: string
}

const IMG = {
  olive: "/whatsapp/20261013_154528_1242395578095023.jpg",
  organic: "/whatsapp/20261013_154515_1100237206085509.jpg",
  full: "/pool-sunset.jpg",
}

export const farm: Record<Locale, FarmContent> = {
  en: {
    heroEyebrow: "The Farm",
    statementTitle: "A working organic farm in Puglia, 210 hectares in the Alta Murgia",
    statementBody: [
      "Lama di Luna is first a farm and only then a place to stay. Around the masseria, built around the 1830s, lie 210 hectares (518 acres) of olive groves, almond groves, vineyards and cherry orchards — all organically cultivated and certified by AIAB-ICEA, Italy's organic-agriculture body, since 1995. Nothing here is decorative. The oil on your bread, the almonds at breakfast, the wine at dinner and the soap in your room are all made from what grows outside the window.",
    ],
    oliveLabel: "The Farm",
    olive: {
      eyebrow: "Coratina olives",
      title: "Planted year after year, for over 35 years",
      body: [
        "The Petroni family has been a family of farmers for several generations, olive growers and winegrowers. When we arrived at Lama di Luna in 1991, the land was barren and abandoned. Over more than 35 years we have planted, year after year, olive trees, almond trees, vines and oaks. Every plant at Lama di Luna was planted by us, to rebuild the territory and, at the same time, to create high-quality products.",
        "We have also preserved a part of the farm that borders the Alta Murgia National Park, to protect all the biodiversity, the fauna and the animal species of our area. Our farm is a mix of organic cultivation and wild nature, which will always find a home at Lama di Luna and will always be welcome.",
      ],
      img: IMG.olive,
    },
    organicLabel: "Why Organic",
    organic: {
      eyebrow: "Certified since 1995",
      title: "Farming that lets the land stay wild",
      body: [
        "Organic here is not a label bought late — it is how the estate has always been run. No synthetic fertilisers, no chemical herbicides or pesticides: the soil is fed by the land itself, cover crops and pruned wood returned to the earth, weeds grazed rather than sprayed.",
        "Because the fields are never poisoned, the wildlife of the Alta Murgia National Park stays: kestrels and little owls nest in the masseria's forty chimneys, foxes cross the olive rows at dusk, wild orchids return each spring. A healthy farm and a living park are, here, the same thing.",
      ],
      img: IMG.organic,
    },
    principlesEyebrow: "How we farm",
    principlesTitle: "Four principles behind the estate",
    principles: [
      {
        num: "01",
        title: "AIAB-ICEA certified organic",
        body: "Every hectare — olives, almonds, vines and cherries — has been certified organic by AIAB-ICEA since 1995. No synthetic chemicals touch the land, and the certification is renewed and inspected every year.",
      },
      {
        num: "02",
        title: "Off the grid, on the sun",
        body: "The whole estate runs on its own energy: 48 solar panels for hot water and heating, 400 photovoltaic panels for electricity. The same sun that ripens the olives powers the masseria — nearly two decades without the grid.",
      },
      {
        num: "03",
        title: "Single-estate, cold-pressed",
        body: "Olives are picked and pressed cold within hours of harvest, never blended with oil from elsewhere. What you taste is one estate, one autumn, one hillside of the Murgia.",
      },
      {
        num: "04",
        title: "Farming for the wildlife",
        body: "We leave the fields unpoisoned and the old trees standing so the birds, foxes and orchids of the national park can share the land. The farm exists inside the park, not against it.",
      },
    ],
    fullPhoto: IMG.full,
    calloutEyebrow: "From the estate",
    calloutTitle: "Taste the farm before you leave",
    calloutBody:
      "Extra virgin olive oil, almonds and wine from the estate are served at the table and available to take home. Join the olive harvest in autumn, or walk the groves any morning of your stay.",
    calloutCta: "Browse the shop",
  },
  it: {
    heroEyebrow: "La Fattoria",
    statementTitle: "Un'azienda agricola biologica in Puglia, 210 ettari nell'Alta Murgia",
    statementBody: [
      "Lama di Luna è prima di tutto una fattoria, e solo poi un luogo dove soggiornare. Attorno alla masseria, costruita intorno al 1830, si estendono 210 ettari di uliveti, mandorleti, vigneti e ciliegeti — tutti coltivati in biologico e certificati AIAB-ICEA, l'ente italiano dell'agricoltura biologica, dal 1995. Qui nulla è decorativo. L'olio sul pane, le mandorle a colazione, il vino a cena e il sapone nella tua camera sono tutti fatti con ciò che cresce fuori dalla finestra.",
    ],
    oliveLabel: "La Fattoria",
    olive: {
      eyebrow: "Olive Coratina",
      title: "Piantata anno dopo anno, per oltre 35 anni",
      body: [
        "La famiglia Petroni è una famiglia di agricoltori da diverse generazioni, olivicoltori e viticoltori. Quando siamo arrivati a Lama di Luna nel 1991, la terra era brulla e abbandonata. In oltre 35 anni abbiamo piantato, anno dopo anno, ulivi, mandorli, viti e querce. Ogni pianta di Lama di Luna è stata piantata da noi, per ricostituire il territorio e, allo stesso tempo, creare prodotti di alta qualità.",
        "Abbiamo inoltre preservato una parte dell'azienda agricola che costeggia il Parco Nazionale dell'Alta Murgia, per proteggere tutta la biodiversità, la fauna e le specie animali della nostra zona. La nostra azienda agricola è un mix tra coltivazioni biologiche e natura selvaggia, che a Lama di Luna troverà sempre una casa e sarà sempre la benvenuta.",
      ],
      img: IMG.olive,
    },
    organicLabel: "Perché Biologico",
    organic: {
      eyebrow: "Certificata dal 1995",
      title: "Un'agricoltura che lascia la terra selvaggia",
      body: [
        "Il biologico qui non è un'etichetta comprata tardi — è il modo in cui la tenuta è sempre stata condotta. Nessun fertilizzante sintetico, nessun erbicida o pesticida chimico: il suolo è nutrito dalla terra stessa, dalle colture di copertura e dal legno di potatura restituito alla terra.",
        "Poiché i campi non vengono mai avvelenati, la fauna del Parco Nazionale dell'Alta Murgia resta: gheppi e civette nidificano nei quaranta camini della masseria, le volpi attraversano i filari al tramonto, le orchidee selvatiche tornano ogni primavera. Una fattoria sana e un parco vivo sono, qui, la stessa cosa.",
      ],
      img: IMG.organic,
    },
    principlesEyebrow: "Come coltiviamo",
    principlesTitle: "Quattro principi dietro la tenuta",
    principles: [
      {
        num: "01",
        title: "Biologico certificato AIAB-ICEA",
        body: "Ogni ettaro — olive, mandorle, vigne e ciliegi — è certificato biologico da AIAB-ICEA dal 1995. Nessun prodotto chimico di sintesi tocca la terra, e la certificazione è rinnovata e ispezionata ogni anno.",
      },
      {
        num: "02",
        title: "Fuori rete, sul sole",
        body: "L'intera tenuta vive della propria energia: 48 pannelli solari per acqua calda e riscaldamento, 400 pannelli fotovoltaici per l'elettricità. Lo stesso sole che matura le olive alimenta la masseria — quasi vent'anni senza rete.",
      },
      {
        num: "03",
        title: "Singola tenuta, spremuto a freddo",
        body: "Le olive si raccolgono e si spremono a freddo entro poche ore, mai miscelate con olio di altrove. Ciò che assaggi è una tenuta, un autunno, una collina della Murgia.",
      },
      {
        num: "04",
        title: "Coltivare per la fauna",
        body: "Lasciamo i campi non avvelenati e gli alberi antichi in piedi affinché uccelli, volpi e orchidee del parco nazionale possano condividere la terra. La fattoria vive dentro il parco, non contro di esso.",
      },
    ],
    fullPhoto: IMG.full,
    calloutEyebrow: "Dalla tenuta",
    calloutTitle: "Assapora la fattoria prima di partire",
    calloutBody:
      "Olio extravergine d'oliva, mandorle e vino della tenuta sono serviti a tavola e disponibili da portare a casa. Unisciti alla raccolta delle olive in autunno, o cammina tra gli uliveti ogni mattina del tuo soggiorno.",
    calloutCta: "Scopri lo shop",
  },
}
