import type { Metadata } from "next"
import { locales, menu, type Locale } from "@/lib/i18n"

// The live domain. Same host the old Amenitiz site used, so Google keeps its history.
export const SITE_URL = "https://www.lamadiluna.com"

const BRAND = "Lama di Luna Biomasseria"

// Titles and descriptions carried over from the old Amenitiz site (read 2026-10-30),
// so the pages that rank keep the words they rank for. Brand typos in the old FR copy
// ("MOON LAMA", "Lame de lune") and the English descriptions on two IT pages are fixed.
type Meta = { title: string; description: string }
const pages: Record<string, Record<Locale, Meta>> = {
  "": {
    en: {
      title: "Masseria Puglia: Hotel, organic olive farm Lama di Luna",
      description:
        "18th century masseria Lama di Luna in Apulia: boutique hotel, relais and organic olive farm with restaurant and swimming pool, featured in National Geographic, Stanley Tucci’s Searching for Italy, Lonely Planet close to Bari and Castel del Monte.",
    },
    it: {
      title: "Masseria Puglia: Hotel, agriturismo Lama di Luna",
      description:
        "Lama di Luna è una masseria del 1800 ubicata in Puglia: boutique hotel, relais e azienda agricola biologica con ristorante e piscina, apparsa su National Geographic, nel programma Searching for Italy di Stanley Tucci, e su Lonely Planet, vicina a Bari e al Castel del Monte.",
    },
    fr: {
      title: "Masseria Puglia : Hôtel, agritourisme Lama di Luna",
      description:
        "Le Lama di Luna est une masseria datant des années 1800 située dans les Pouilles : un hôtel de charme, un relais et une ferme biologique avec restaurant et piscine, présenté dans National Geographic, dans le programme Searching for Italy de Stanley Tucci, et sur Lonely Planet, à proximité de Bari et de Castel del Monte.",
    },
  },
  rooms: {
    en: { title: "Rooms | Lama di Luna Biomasseria", description: "Puglia farm house, vineyard, olive groves and hotel" },
    it: { title: "Camere | Lama di Luna - Biomasseria", description: "La Biomasseria Lama di Luna offre 5 camere e suite ad Andria, Puglia." },
    fr: { title: "Chambres | Lama di Luna - Biomasseria", description: "La Biomasseria Lama di Luna propose 5 chambres et suites à Andria, dans les Pouilles." },
  },
  story: {
    en: {
      title: "La Storia | Lama di Luna Biomasseria",
      description:
        "Set on a 210-hectare estate with olive groves and vineyards, Lama di Luna is an 18th-century farmhouse, 19 km from Castel del Monte on the edge of the Alta Murgia National Park.",
    },
    it: {
      title: "La Storia | Lama di Luna Biomasseria",
      description:
        "In una tenuta di 210 ettari con uliveti e vigneti, Lama di Luna è una masseria del Settecento, a 19 km da Castel del Monte, ai margini del Parco Nazionale dell'Alta Murgia.",
    },
    fr: {
      title: "L'histoire de Lama di Luna Biomasseria",
      description:
        "Situé sur un domaine de 210 hectares avec des oliveraies et des vignobles, le Lama di Luna est une masseria du XVIIIe siècle, à 19 km de Castel del Monte, à la limite du parc national de l'Alta Murgia.",
    },
  },
  experiences: {
    en: {
      title: "Services | Lama di Luna, Puglia: Apulia hotel, masseria, organic olive farm",
      description:
        "Discover the services offered at Lama di Luna: restaurant with local ingredients from Puglia's national park the Murgia, swimming pool, library, cinema, private events such as weddings, tastings of local products such as extra virgin olive oil and wine, guided excursions to the Castel of Monte.",
    },
    it: {
      title: "Servizi | Lama di Luna - Biomasseria",
      description:
        "Scopri i servizi di Lama di Luna: ristorante con ingredienti del Parco Nazionale dell'Alta Murgia, piscina, biblioteca, cinema, eventi privati come matrimoni, degustazioni di prodotti locali come olio extravergine e vino, escursioni guidate a Castel del Monte.",
    },
    fr: {
      title: "Services | Lama di Luna - Biomasseria",
      description:
        "Découvrez les services proposés par le Lama di Luna : restaurant avec des ingrédients typiques du parc national des Pouilles, la Murgia, piscine, bibliothèque, cinéma, événements privés tels que mariages, dégustations de produits locaux tels que l'huile d'olive extra vierge et le vin, excursions guidées vers le château de Monte.",
    },
  },
  contact: {
    en: {
      title: "Contact | Lama di Luna",
      description:
        "Contact info@lamadiluna.com, Contrada Lama di Luna, SN, Frazione Montegrosso, Andria, 76123, Italia. Call or send a message at +39 0883569505 / +39 3280117375.",
    },
    it: {
      title: "Contatti | Lama di Luna",
      description:
        "Contatta info@lamadiluna.com, Contrada Lama di Luna, SN, Frazione Montegrosso, Andria, 76123, Italia. Chiamaci o invia un messaggio al +39 0883569505 / +39 3280117375.",
    },
    fr: {
      title: "Contact | Lama di Luna",
      description:
        "Contact info@lamadiluna.com, Contrada Lama di Luna, SN, Frazione Montegrosso, Andria, 76123, Italie. Appelez-nous ou envoyez un message à +39 0883569505 / +39 3280117375.",
    },
  },
  "rooms/masseria": {
    en: { title: "Family Suite Masseria | Lama di Luna Biomasseria", description: "Family suite, sleeps 5, 50 m2, 2 x double bed, TV, Wifi, Minibar, Air conditioning, Jacuzzi, Desk, Bathtub, Hairdryer, Shower, Flat screen TV." },
    it: { title: "Suite familiare masseria | Lama di Luna Biomasseria", description: "Suite Familiare, accoglie 5 persone, 50 m2, 2 x Letto doppio, TV, Wifi, Minibar, Appendiabiti, Aria condizionata, Jacuzzi, Scrivania, Vasca da bagno, Asciugacapelli, Doccia, TV schermo piatto." },
    fr: { title: "Suite familiale Masseria | Lama di Luna Biomasseria", description: "Suite familiale, pour 5 personnes, 50 m2, 2 x lit double, TV, Wifi, Minibar, Climatisation, Jacuzzi, Bureau, Baignoire, Sèche-cheveux, Douche, TV écran plat." },
  },
  "rooms/suite-deluxe-masseria": {
    en: { title: "Suite Deluxe Masseria | Lama di Luna Biomasseria", description: "Deluxe suite, sleeps 4, 60 m2, 1 x sofa bed, 1 x double bed, TV, Wifi, Minibar, Clothes rack, Air conditioning." },
    it: { title: "Suite deluxe masseria | Lama di Luna Biomasseria", description: "Suite deluxe accoglie 4 persone, 60 m2, 1 x Divano letto, 1 x Letto matrimoniale, TV, Wifi, Minibar, Appendiabiti, Aria condizionata." },
    fr: { title: "Suite deluxe masseria | Lama di Luna Biomasseria", description: "Suite de luxe pour 4 personnes, 60 m2, 1 x canapé-lit, 1 x lit double, TV, Wifi, Minibar, penderie, climatisation." },
  },
  "rooms/family-suite": {
    en: { title: "Family Suite | Lama di Luna Biomasseria", description: "Family suite, sleeps 5, 54 m2, 2 x double bed, TV, Wifi, Minibar, Clothes rack, Air conditioning, Desk, Bathtub, Hairdryer, Shower, Flat screen TV." },
    it: { title: "Suite familiare | Lama di Luna Biomasseria", description: "Suite familiare accoglie 5 persone, 54 m2, 2 x Letto doppio, TV, Wifi, Minibar, Appendiabiti, Aria condizionata, Scrivania, Vasca da bagno, Asciugacapelli, Doccia, TV schermo piatto." },
    fr: { title: "Suite familiale | Lama di Luna Biomasseria", description: "Suite familiale pour 5 personnes, 54 m2, 2 x lit double, TV, Wifi, Minibar, Tringle à linge, Climatisation, Bureau, Baignoire, Sèche-cheveux, Douche, Télévision à écran plat." },
  },
  "rooms/murgia": {
    en: { title: "Double Room Murgia | Lama di Luna Biomasseria", description: "Double room, sleeps 3, 1 x double bed, TV, Wifi, Minibar, Clothes rack, Air conditioning, Desk, Bathtub, Hairdryer, Flat screen TV." },
    it: { title: "Camera doppia murgia | Lama di Luna Biomasseria", description: "Camera doppia, accoglie 3 persone, 1 x Letto matrimoniale, TV, Wifi, Minibar, Appendiabiti, Aria condizionata, Scrivania, Vasca da bagno, Asciugacapelli, TV schermo piatto." },
    fr: { title: "Chambre double murgia | Lama di Luna Biomasseria", description: "Chambre double, pour 3 personnes, 1 x lit double, TV, Wifi, Minibar, Climatisation, Bureau, Baignoire, Sèche-cheveux, TV écran plat." },
  },
  "rooms/coloni": {
    en: { title: "Double Room Coloni | Lama di Luna Biomasseria", description: "Double room with a double bed, sleeps 3, with TV, Wifi, Minibar, Clothes rack, Air conditioning, Desk, Hairdryer, Shower, Flat screen TV." },
    it: { title: "Camera doppia coloni | Lama di Luna Biomasseria", description: "Camera doppia con letto doppio, accoglie 3 persone, offre TV, Wifi, Minibar, Appendiabiti, Aria condizionata, Scrivania, Asciugacapelli, Doccia, TV schermo piatto" },
    fr: { title: "Chambre double coloni | Lama di Luna Biomasseria", description: "Chambre double avec lit double, pour 3 personnes, offre TV, Wifi, Minibar, Tringle à linge, Climatisation, Bureau, Sèche-cheveux, Douche, Télévision à écran plat" },
  },
}

// Canonical, hreflang and title for one page. `path` is the part after /[lang], no leading slash.
// Pages the old site never had get "<menu label or name> | Lama di Luna Biomasseria" and the home description.
export function pageMetadata(lang: Locale, path: string, name?: string): Metadata {
  const known = pages[path]?.[lang]
  const label = name ?? menu[lang].find((m) => m.slug === path)?.label
  const title = known?.title ?? (label ? `${label} | ${BRAND}` : BRAND)
  const description = known?.description ?? pages[""][lang].description
  const url = (l: string) => `${SITE_URL}/${l}${path ? `/${path}` : ""}`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url(lang),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, url(l)])),
        "x-default": url("en"),
      },
    },
    openGraph: { title, description, url: url(lang), siteName: BRAND, locale: lang, type: "website" },
  }
}

// schema.org Hotel, on the home page. Facts from the old site's contact page.
export function hotelSchema(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: BRAND,
    url: `${SITE_URL}/${lang}`,
    description: pages[""][lang].description,
    email: "info@lamadiluna.com",
    telephone: "+39 0883569505",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Contrada Lama di Luna, SN, Frazione Montegrosso",
      addressLocality: "Andria",
      postalCode: "76123",
      addressRegion: "BT",
      addressCountry: "IT",
    },
    sameAs: ["https://www.instagram.com/masserialamadiluna/", "https://www.facebook.com/masserialamadiluna"],
  }
}
