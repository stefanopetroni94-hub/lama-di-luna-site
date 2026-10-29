export type ExpCard = {
  slug: string
  img: string
  num: string
  name: string
  meta: string
  pos?: string
  rotate?: number // degrees, to straighten a photo
  zoom?: number // 1 = as is; more crops the edges (top and bottom included)
}

export type ExperiencesContent = {
  eyebrow: string
  title: string
  intro: string
  onEstateLabel: string
  onEstate: ExpCard[]
  inRegion: ExpCard[]
  arrangeEyebrow: string
  arrangeTitle: string
  arrangeText: string
  arrangeCta: string
}

const IMG = {
  olive: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748888083/omou7cxhd8opgelkbeuz.jpg",
  cooking: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748888055/nxskbhvgtpuxzfoqavfb.jpg",
  wine: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748365479/bao85el3tzzrazwmnjtl.jpg",
  dawn: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1679928579/czk5bwys9xduwfefummm.jpg",
  castel: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1679928582/brqp64y9q5oogzmppcja.jpg",
  alberobello: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1747243212/wj7lc1n5p7gpmqnwredd.jpg",
  polignano: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1679928587/vt7xxd7g2xxn5sqk3mkt.jpg",
  matera: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1679928110/vw8ib8dqkcchw9nqco39.jpg",
}

// Page slug of each experience, in the same order as the cards below (the first one has its own page text).
export const experienceSlugs = {
  onEstate: [
    "olive-harvest",
    "cooking-class",
    "massages",
    "bicycle-ride",
    "cinema-room",
    "yoga",
    "infinity-pool",
    "estate-walk",
    "golf",
    "library",
    "horse-riding",
  ],
  inRegion: [] as string[],
}

const base: Record<"en" | "it" | "fr", ExperiencesContent> = {
  en: {
    eyebrow: "Ways to spend a day",
    title: "Experiences",
    intro:
      "The olive tour, a cooking class, relaxing massages, a bicycle ride — and the trulli, the cliffs, the cave city, the castle on the hill.",
    onEstateLabel: "On the Estate",
    arrangeEyebrow: "Tell us what you'd love",
    arrangeTitle: "We will help you arrange the day",
    arrangeText:
      "All experiences are arranged on request. Many are weather- or season-dependent; some need a few days' notice. Drop us a note with your dates and what you're drawn to.",
    arrangeCta: "Get in touch",
    onEstate: [
      { slug: "olive-harvest", img: "/whatsapp/20261028_065214_1516459033640755.jpg", num: "01 · October–November", name: "Olive Oil Tasting and Tour", meta: "Walk the groves at dawn, watch the cold press, taste the first oil of the year on warm bread." },
      { slug: "#", img: "/whatsapp/20261028_070629_1807431347066448.jpg", pos: "center 35%", num: "02 · Half-day, on request", name: "Fresh Pasta Cooking Class", meta: "A cooking class with our resident cook — orecchiette pasta and Pugliese focaccia, made by hand at the masseria kitchen." },
      { slug: "#", img: "/whatsapp/20261028_085225_1143956144719914.jpg", pos: "center 40%", num: "03 · By arrangement", name: "Relaxing Massages", meta: "Massages by appointment, in the quiet of the masseria." },
      { slug: "#", img: "/whatsapp/20261029_053110_2058236084866524.jpg", pos: "center 55%", num: "04 · Half-day, on request", name: "Bicycle Ride", meta: "A ride through the olive groves and the quiet country roads around the masseria." },
      { slug: "#", img: "/whatsapp/20261029_053509_1420378746847456.jpg", pos: "center 48%", rotate: 1, zoom: 1.2, num: "05 · By arrangement", name: "Cinema Room", meta: "An evening in the masseria's cinema room, by arrangement." },
      { slug: "#", img: IMG.olive, num: "06 · By arrangement", name: "Yoga Practices", meta: "Yoga practices at the masseria, by arrangement." },
      { slug: "#", img: IMG.wine, num: "07 · In season", name: "The Infinity Pool", meta: "Time by the masseria's infinity pool, looking out over the olive groves." },
      { slug: "#", img: IMG.dawn, num: "08 · On request", name: "Walk on the Estate", meta: "A walk through the olive groves, the vineyards and the wild Murgia around the masseria." },
      { slug: "#", img: IMG.olive, num: "09 · By arrangement", name: "Golf Practice", meta: "Practice golf at the masseria, by arrangement." },
      { slug: "#", img: "/whatsapp/20261013_164120_2402422946959771.jpg", num: "10 · By arrangement", name: "The Petroni Family Library", meta: "The masseria's library, a quiet room to read and slow down." },
      { slug: "#", img: "/whatsapp/20261016_172701_1655107209547771.jpg", num: "11 · By arrangement", name: "Horse Riding in the National Park", meta: "Ride out on horseback into the Alta Murgia National Park, beyond the olive groves." },
    ],
    inRegion: [],
  },
  it: {
    eyebrow: "Modi di passare una giornata",
    title: "Esperienze",
    intro:
      "Il tour degli ulivi, un corso di cucina, massaggi rilassanti, un giro in bicicletta — e i trulli, le scogliere, la città di pietra, il castello sulla collina.",
    onEstateLabel: "In Masseria",
    arrangeEyebrow: "Dicci cosa ti piacerebbe",
    arrangeTitle: "Ti aiutiamo a organizzare la giornata",
    arrangeText:
      "Tutte le esperienze si organizzano su richiesta. Molte dipendono dal tempo o dalla stagione; alcune richiedono qualche giorno di preavviso. Scrivici con le tue date e ciò che ti attrae.",
    arrangeCta: "Contattaci",
    onEstate: [
      { slug: "olive-harvest", img: "/whatsapp/20261028_065214_1516459033640755.jpg", num: "01 · Ottobre–Novembre", name: "Degustazione e Tour dell'Olio d'Oliva", meta: "Cammina tra gli ulivi all'alba, osserva la spremitura a freddo, assaggia il primo olio dell'anno sul pane caldo." },
      { slug: "#", img: "/whatsapp/20261028_070629_1807431347066448.jpg", pos: "center 35%", num: "02 · Mezza giornata, su richiesta", name: "Corso di Cucina della Pasta Fresca", meta: "Un corso di cucina con la nostra cuoca — orecchiette e focaccia pugliese, fatte a mano nella cucina della masseria." },
      { slug: "#", img: "/whatsapp/20261028_085225_1143956144719914.jpg", pos: "center 40%", num: "03 · Su prenotazione", name: "Massaggi Rilassanti", meta: "Massaggi su appuntamento, nella quiete della masseria." },
      { slug: "#", img: "/whatsapp/20261029_053110_2058236084866524.jpg", pos: "center 55%", num: "04 · Mezza giornata, su richiesta", name: "Giro in Bicicletta", meta: "Un giro in bicicletta tra gli uliveti e le tranquille strade di campagna intorno alla masseria." },
      { slug: "#", img: "/whatsapp/20261029_053509_1420378746847456.jpg", pos: "center 48%", rotate: 1, zoom: 1.2, num: "05 · Su prenotazione", name: "Sala Cinema", meta: "Una serata nella sala cinema della masseria, su prenotazione." },
      { slug: "#", img: IMG.olive, num: "06 · Su prenotazione", name: "Pratiche di Yoga", meta: "Pratiche di yoga in masseria, su prenotazione." },
      { slug: "#", img: IMG.wine, num: "07 · In stagione", name: "La Piscina a Sfioro", meta: "Un po' di tempo a bordo della piscina a sfioro della masseria, con lo sguardo sugli uliveti." },
      { slug: "#", img: IMG.dawn, num: "08 · Su richiesta", name: "Passeggiata nella Tenuta", meta: "Una passeggiata tra gli uliveti, i vigneti e la Murgia selvaggia intorno alla masseria." },
      { slug: "#", img: IMG.olive, num: "09 · Su prenotazione", name: "Golf Practice", meta: "Practice golf in masseria, su prenotazione." },
      { slug: "#", img: "/whatsapp/20261013_164120_2402422946959771.jpg", num: "10 · Su prenotazione", name: "La Biblioteca della Famiglia Petroni", meta: "La biblioteca della masseria, una sala silenziosa dove leggere e rallentare." },
      { slug: "#", img: "/whatsapp/20261016_172701_1655107209547771.jpg", num: "11 · Su prenotazione", name: "Passeggiate a Cavallo nel Parco Nazionale", meta: "A cavallo nel Parco Nazionale dell'Alta Murgia, oltre gli uliveti." },
    ],
    inRegion: [],
  },
  fr: {
    eyebrow: "Des façons de passer une journée",
    title: "Expériences",
    intro:
      "La visite des oliviers, un cours de cuisine, des massages relaxants, une balade à vélo, et puis les trulli, les falaises, la ville troglodyte, le château sur la colline.",
    onEstateLabel: "Au domaine",
    arrangeEyebrow: "Dites-nous ce qui vous ferait plaisir",
    arrangeTitle: "Nous vous aidons à organiser la journée",
    arrangeText:
      "Toutes les expériences sont organisées sur demande. Beaucoup dépendent de la météo ou de la saison, certaines demandent quelques jours de préavis. Écrivez-nous avec vos dates et ce qui vous attire.",
    arrangeCta: "Contactez-nous",
    onEstate: [
      { slug: "olive-harvest", img: "/whatsapp/20261028_065214_1516459033640755.jpg", num: "01 · Octobre à novembre", name: "Dégustation d'Huile d'Olive et Visite", meta: "Marchez dans les oliveraies à l'aube, assistez à la pression à froid, goûtez la première huile de l'année sur du pain chaud." },
      { slug: "#", img: "/whatsapp/20261028_070629_1807431347066448.jpg", pos: "center 35%", num: "02 · Demi-journée, sur demande", name: "Cours de Cuisine des Pâtes Fraîches", meta: "Un cours de cuisine avec notre cuisinière : orecchiette et focaccia des Pouilles, faites à la main dans la cuisine de la masseria." },
      { slug: "#", img: "/whatsapp/20261028_085225_1143956144719914.jpg", pos: "center 40%", num: "03 · Sur réservation", name: "Massages Relaxants", meta: "Massages sur rendez-vous, dans le calme de la masseria." },
      { slug: "#", img: "/whatsapp/20261029_053110_2058236084866524.jpg", pos: "center 55%", num: "04 · Demi-journée, sur demande", name: "Balade à Vélo", meta: "Une balade à travers les oliveraies et les petites routes de campagne autour de la masseria." },
      { slug: "#", img: "/whatsapp/20261029_053509_1420378746847456.jpg", pos: "center 48%", rotate: 1, zoom: 1.2, num: "05 · Sur réservation", name: "Salle de Cinéma", meta: "Une soirée dans la salle de cinéma de la masseria, sur réservation." },
      { slug: "#", img: IMG.olive, num: "06 · Sur réservation", name: "Séances de Yoga", meta: "Séances de yoga à la masseria, sur réservation." },
      { slug: "#", img: IMG.wine, num: "07 · En saison", name: "La Piscine à Débordement", meta: "Un moment au bord de la piscine à débordement de la masseria, face aux oliveraies." },
      { slug: "#", img: IMG.dawn, num: "08 · Sur demande", name: "Promenade sur le Domaine", meta: "Une promenade à travers les oliveraies, les vignes et la Murgia sauvage autour de la masseria." },
      { slug: "#", img: IMG.olive, num: "09 · Sur réservation", name: "Practice de Golf", meta: "Practice de golf à la masseria, sur réservation." },
      { slug: "#", img: "/whatsapp/20261013_164120_2402422946959771.jpg", num: "10 · Sur réservation", name: "La Bibliothèque de la Famille Petroni", meta: "La bibliothèque de la masseria, une salle calme pour lire et ralentir." },
      { slug: "#", img: "/whatsapp/20261016_172701_1655107209547771.jpg", num: "11 · Sur réservation", name: "Équitation dans le Parc National", meta: "À cheval dans le Parc national de l'Alta Murgia, au delà des oliveraies." },
    ],
    inRegion: [],
  },
}

export const experiences = Object.fromEntries(
  Object.entries(base).map(([lang, c]) => [
    lang,
    {
      ...c,
      onEstate: c.onEstate.map((card, i) => ({ ...card, slug: experienceSlugs.onEstate[i] })),
      inRegion: c.inRegion.map((card, i) => ({ ...card, slug: experienceSlugs.inRegion[i] })),
    },
  ])
) as Record<"en" | "it" | "fr", ExperiencesContent>
