export type Room = {
  slug: string
  name: string
  tagline: string
  meta: string
  price: string
  sleeps: string
  description: string[]
  details: string[]
  img: string
  gallery: string[]
}

export type RoomsContent = {
  eyebrow: string
  title: string
  intro: string
  from: string
  perNight: string
  viewRoom: string
  backToRooms: string
  bookThisRoom: string
  detailsLabel: string
  list: Room[]
}

// Local photography. Gallery images are placeholders drawn from the available
// estate photos — replace per room as dedicated photos come in.
const IMG = {
  coloni: "/room-coloni.jpg",
  murgia: "/room-murgia-real.jpg",
  familySuite: "/room-suite-deluxe-entrance.jpg",
  masseria: "/room-suite-deluxe.jpg",
  suiteDeluxe: "/room-suite-deluxe.jpg",
  entrance: "/room-suite-deluxe-entrance.jpg",
  pool: "/pool-sunset.jpg",
  estate: "/hero-masseria-centered.jpg",
  kitchen: "/kitchen-pomodori.jpg",
}

export const rooms: Record<"en" | "it", RoomsContent> = {
  en: {
    eyebrow: "Eleven rooms, restored",
    title: "Our Rooms",
    intro:
      "Our guest rooms were once settlers' dwellings — spacious and bright, all with fireplaces, opening onto the inner courtyard. Beds in solid pine, olive wood or 1800s brass. Raw cotton sheets. Olive-oil soaps. Power from the sun.",
    from: "From",
    perNight: "/ night",
    viewRoom: "View room →",
    backToRooms: "← All rooms",
    bookThisRoom: "Book this room",
    detailsLabel: "In this room",
    list: [
      {
        slug: "coloni",
        name: "Coloni",
        tagline: "A settler's chamber",
        meta: "Open fireplace, 1800s brass bed, a courtyard view. Sleeps 2.",
        price: "€220",
        sleeps: "Sleeps 2",
        description: [
          "The Coloni room was once home to the families who worked the land. Its thick stone walls keep it cool through the Puglian summer, and an open fireplace warms it when the tramontana blows down off the Murgia.",
          "A brass bed from the 1800s, raw cotton sheets, and a single window opening onto the inner courtyard. Simple, quiet, and full of the masseria's long memory.",
        ],
        details: ["Sleeps 2", "Open fireplace", "1800s brass bed", "Courtyard view", "Solar power"],
        img: IMG.coloni,
        gallery: [
          "/rooms/coloni-1.jpg",
          "/rooms/coloni-4.jpg",
          "/rooms/coloni-3.jpg",
          "/rooms/coloni-2.jpg",
        ],
      },
      {
        slug: "murgia",
        name: "Murgia",
        tagline: "Named for the national park",
        meta: "Olive-wood bed, terracotta basin, north light. Sleeps 2.",
        price: "€240",
        sleeps: "Sleeps 2",
        description: [
          "Named for the Alta Murgia — the wild upland whose silence belongs to it. North-facing windows keep the light soft and even through the day, falling across whitewashed stone and a vaulted ceiling.",
          "An olive-wood bed, a terracotta basin, and natural linen throughout. A room made for slow mornings and long, unhurried rest.",
        ],
        details: ["Sleeps 2", "Vaulted ceiling", "Olive-wood bed", "North light", "Solar power"],
        img: IMG.murgia,
        gallery: [
          "/rooms/murgia-1.jpg",
          "/rooms/murgia-2.jpg",
          "/rooms/murgia-3.jpg",
          "/rooms/murgia-4.jpg",
          "/rooms/murgia-5.jpg",
        ],
      },
      {
        slug: "family-suite",
        name: "Family Suite",
        tagline: "Room for the whole family",
        meta: "Two connecting rooms, garden access, solid pine beds. Sleeps 4.",
        price: "€310",
        sleeps: "Sleeps 4",
        description: [
          "Two connecting rooms with a shared bathroom, opening onto the garden. Solid pine beds, space to spread out, and a doorway straight into the olive grove for the children to roam.",
          "A suite built for longer stays — the kind of place a family arrives, settles in, and forgets the calendar.",
        ],
        details: ["Sleeps 4", "Two connecting rooms", "Garden access", "Solid pine beds", "Shared bathroom"],
        img: IMG.familySuite,
        gallery: [
          "/rooms/family-suite-1.jpg",
          "/rooms/family-suite-2.jpg",
          "/rooms/family-suite-3.jpg",
          "/rooms/family-suite-4.jpg",
          "/rooms/family-suite-5.jpg",
        ],
      },
      {
        slug: "masseria",
        name: "Masseria",
        tagline: "The largest of the suites",
        meta: "A sitting room, open fireplace, two bedrooms, a private courtyard nook. Sleeps 4–5.",
        price: "€380",
        sleeps: "Sleeps 4–5",
        description: [
          "The grandest of the rooms, set into the oldest part of the masseria. A sitting room with an open fireplace, two bedrooms, and a private nook off the inner courtyard.",
          "Stone underfoot and overhead, brass and pine within, and the whole estate a step beyond the door.",
        ],
        details: ["Sleeps 4–5", "Sitting room", "Open fireplace", "Two bedrooms", "Private courtyard nook"],
        img: IMG.masseria,
        gallery: [IMG.masseria, IMG.entrance, IMG.estate, IMG.pool],
      },
      {
        slug: "suite-deluxe-masseria",
        name: "Suite Deluxe Masseria",
        tagline: "The signature suite",
        meta: "King bed, vaulted ceiling, private sauna, panoramic terrace. Sleeps 2.",
        price: "€420",
        sleeps: "Sleeps 2",
        description: [
          "A king bed beneath a vaulted stone ceiling, a private sauna carved into the masseria stone, and a panoramic terrace looking out over the olive groves to the horizon.",
          "The most private and the most complete of the suites — made for the guests who mean to stay a while.",
        ],
        details: ["Sleeps 2", "King bed", "Vaulted ceiling", "Private sauna", "Panoramic terrace"],
        img: IMG.suiteDeluxe,
        gallery: [IMG.suiteDeluxe, IMG.entrance, IMG.pool, IMG.estate],
      },
    ],
  },
  it: {
    eyebrow: "Undici camere, restaurate",
    title: "Le Camere",
    intro:
      "Le nostre camere erano un tempo dimore dei coloni — spaziose e luminose, tutte con camino, affacciate sulla corte interna. Letti in pino massello, legno d'ulivo o ottone dell'Ottocento. Lenzuola di cotone grezzo. Saponi all'olio d'oliva. Energia dal sole.",
    from: "Da",
    perNight: "/ notte",
    viewRoom: "Vedi camera →",
    backToRooms: "← Tutte le camere",
    bookThisRoom: "Prenota questa camera",
    detailsLabel: "In questa camera",
    list: [
      {
        slug: "coloni",
        name: "Coloni",
        tagline: "Una camera dei coloni",
        meta: "Camino aperto, letto in ottone dell'Ottocento, vista sulla corte. Per 2.",
        price: "€220",
        sleeps: "Per 2",
        description: [
          "La camera Coloni era un tempo la dimora delle famiglie che lavoravano la terra. I suoi spessi muri in pietra la mantengono fresca durante l'estate pugliese, e un camino aperto la riscalda quando la tramontana scende dalla Murgia.",
          "Un letto in ottone dell'Ottocento, lenzuola di cotone grezzo e un'unica finestra affacciata sulla corte interna. Semplice, silenziosa e piena della lunga memoria della masseria.",
        ],
        details: ["Per 2", "Camino aperto", "Letto in ottone dell'Ottocento", "Vista sulla corte", "Energia solare"],
        img: IMG.coloni,
        gallery: [
          "/rooms/coloni-1.jpg",
          "/rooms/coloni-4.jpg",
          "/rooms/coloni-3.jpg",
          "/rooms/coloni-2.jpg",
        ],
      },
      {
        slug: "murgia",
        name: "Murgia",
        tagline: "Come il parco nazionale",
        meta: "Letto in ulivo, catino in terracotta, luce da nord. Per 2.",
        price: "€240",
        sleeps: "Per 2",
        description: [
          "Chiamata come l'Alta Murgia — l'altopiano selvaggio il cui silenzio le appartiene. Le finestre a nord mantengono la luce morbida e uniforme durante il giorno, posandosi sulla pietra imbiancata e su una volta a botte.",
          "Un letto in legno d'ulivo, un catino in terracotta e lino naturale ovunque. Una camera fatta per mattine lente e riposo lungo e senza fretta.",
        ],
        details: ["Per 2", "Volta a botte", "Letto in ulivo", "Luce da nord", "Energia solare"],
        img: IMG.murgia,
        gallery: [
          "/rooms/murgia-1.jpg",
          "/rooms/murgia-2.jpg",
          "/rooms/murgia-3.jpg",
          "/rooms/murgia-4.jpg",
          "/rooms/murgia-5.jpg",
        ],
      },
      {
        slug: "family-suite",
        name: "Family Suite",
        tagline: "Spazio per tutta la famiglia",
        meta: "Due camere comunicanti, accesso al giardino, letti in pino massello. Per 4.",
        price: "€310",
        sleeps: "Per 4",
        description: [
          "Due camere comunicanti con bagno condiviso, affacciate sul giardino. Letti in pino massello, spazio per allargarsi e una porta che dà direttamente sull'uliveto perché i bambini possano correre.",
          "Una suite pensata per soggiorni lunghi — il luogo in cui una famiglia arriva, si sistema e dimentica il calendario.",
        ],
        details: ["Per 4", "Due camere comunicanti", "Accesso al giardino", "Letti in pino massello", "Bagno condiviso"],
        img: IMG.familySuite,
        gallery: [
          "/rooms/family-suite-1.jpg",
          "/rooms/family-suite-2.jpg",
          "/rooms/family-suite-3.jpg",
          "/rooms/family-suite-4.jpg",
          "/rooms/family-suite-5.jpg",
        ],
      },
      {
        slug: "masseria",
        name: "Masseria",
        tagline: "La più grande delle suite",
        meta: "Un salotto, camino aperto, due camere, un angolo privato sulla corte. Per 4–5.",
        price: "€380",
        sleeps: "Per 4–5",
        description: [
          "La più maestosa delle camere, ricavata nella parte più antica della masseria. Un salotto con camino aperto, due camere da letto e un angolo privato sulla corte interna.",
          "Pietra sotto i piedi e sopra la testa, ottone e pino all'interno, e l'intera tenuta a un passo dalla porta.",
        ],
        details: ["Per 4–5", "Salotto", "Camino aperto", "Due camere", "Angolo privato sulla corte"],
        img: IMG.masseria,
        gallery: [IMG.masseria, IMG.entrance, IMG.estate, IMG.pool],
      },
      {
        slug: "suite-deluxe-masseria",
        name: "Suite Deluxe Masseria",
        tagline: "La suite d'autore",
        meta: "Letto king, volta in pietra, sauna privata, terrazza panoramica. Per 2.",
        price: "€420",
        sleeps: "Per 2",
        description: [
          "Un letto king sotto una volta in pietra, una sauna privata scavata nella pietra della masseria e una terrazza panoramica affacciata sugli uliveti fino all'orizzonte.",
          "La più privata e la più completa delle suite — pensata per gli ospiti che hanno intenzione di fermarsi a lungo.",
        ],
        details: ["Per 2", "Letto king", "Volta in pietra", "Sauna privata", "Terrazza panoramica"],
        img: IMG.suiteDeluxe,
        gallery: [IMG.suiteDeluxe, IMG.entrance, IMG.pool, IMG.estate],
      },
    ],
  },
}
