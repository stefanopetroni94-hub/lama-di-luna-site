import type { Locale } from "@/lib/i18n"

type Fact = { label: string; value: string }
type Perk = { title: string; body: string }

export type ExclusiveContent = {
  counter: string
  breadcrumbRoot: string
  breadcrumbCurrent: string
  heroEyebrow: string
  title: string
  statementTitle: string
  statementBody: string[]
  facts: Fact[]
  curvedLabel: string
  perksEyebrow: string
  perksTitle: string
  perks: Perk[]
  photos: [string, string]
  occasionsEyebrow: string
  occasionsTitle: string
  occasionsBody: string[]
  fullImg: string
  bookingEyebrow: string
  bookingTitle: string
  bookingText: string
  bookingCta: string
}

const IMG = {
  photo1:
    "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748365479/bao85el3tzzrazwmnjtl.jpg",
  photo2:
    "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1679928582/brqp64y9q5oogzmppcja.jpg",
  full: "https://res.cloudinary.com/amenitiz/image/upload/w_2400,q_auto:best,f_auto,c_fill/v1679928587/vt7xxd7g2xxn5sqk3mkt.jpg",
}

export const exclusive: Record<Locale, ExclusiveContent> = {
  en: {
    counter: "Whole estate",
    breadcrumbRoot: "Home",
    breadcrumbCurrent: "Masseria in exclusive",
    heroEyebrow: "The masseria, entirely yours",
    title: "Masseria in Exclusive",
    statementTitle: "Take the whole masseria for yourself. Every room, every space, every quiet hour.",
    statementBody: [
      "For weddings, family gatherings, retreats or simply the desire to disappear together, Lama di Luna can be reserved in its entirety. The eleven rooms, the courtyards, the pool, the refectory and 210 hectares of organic land become yours alone.",
      "There are no other guests, no fixed schedule, no interruptions. Only your people, the light over the olive groves, and a house that has welcomed travellers for nearly two centuries.",
    ],
    facts: [
      { label: "Sleeps", value: "Up to 22 guests" },
      { label: "Rooms", value: "11 restored rooms" },
      { label: "Land", value: "210 hectares, organic" },
      { label: "Minimum", value: "2 nights, whole estate" },
    ],
    curvedLabel: "Entirely Yours",
    perksEyebrow: "What exclusive use means",
    perksTitle: "The estate, without anyone else",
    perks: [
      {
        title: "Every room",
        body: "All eleven rooms across the masseria, from the settlers' quarters to the deluxe suite, held for your party alone.",
      },
      {
        title: "Private kitchen",
        body: "The Veranda cooks only for you — bespoke menus from the estate garden, long tables under the vaults or the stars.",
      },
      {
        title: "The grounds",
        body: "Courtyards, the panoramic pool, the chapel and the groves — the whole valley open to wander, gather and celebrate.",
      },
      {
        title: "A dedicated host",
        body: "One person to arrange everything: transfers, tastings, music, flowers, and the small details that make a gathering yours.",
      },
      {
        title: "Experiences on request",
        body: "Olive-oil tastings, harvests, cookery lessons and guided trips into the Alta Murgia, arranged around your days.",
      },
      {
        title: "Off the grid, in comfort",
        body: "Powered by the sun and warmed by solar water — quiet, sustainable luxury, without a single compromise on comfort.",
      },
    ],
    photos: [IMG.photo1, IMG.photo2],
    occasionsEyebrow: "For the occasions that matter",
    occasionsTitle: "A place made for gathering",
    occasionsBody: [
      "Couples marry in the courtyard as the light turns gold. Families take the whole house for a summer, children running between the groves. Companies bring their people here to slow down and think clearly for a few days.",
      "Whatever the occasion, the masseria holds it gently — space enough for everyone, quiet enough for the moments that matter.",
    ],
    fullImg: IMG.full,
    bookingEyebrow: "Enquire about exclusive use",
    bookingTitle: "Reserve the whole masseria",
    bookingText:
      "Tell us your dates, the size of your party and the kind of gathering you have in mind. We will prepare a tailored proposal for the estate in exclusive use.",
    bookingCta: "Request a proposal",
  },
  it: {
    counter: "Intera tenuta",
    breadcrumbRoot: "Home",
    breadcrumbCurrent: "Masseria in esclusiva",
    heroEyebrow: "La masseria, tutta per te",
    title: "Masseria in Esclusiva",
    statementTitle: "Prendi l'intera masseria per te. Ogni camera, ogni spazio, ogni ora di quiete.",
    statementBody: [
      "Per matrimoni, riunioni di famiglia, ritiri o semplicemente il desiderio di sparire insieme, Lama di Luna può essere riservata per intero. Le undici camere, i cortili, la piscina, il refettorio e 210 ettari di terra biologica diventano solo tuoi.",
      "Nessun altro ospite, nessun orario fisso, nessuna interruzione. Solo le tue persone, la luce sugli uliveti e una casa che accoglie viaggiatori da quasi due secoli.",
    ],
    facts: [
      { label: "Posti", value: "Fino a 22 ospiti" },
      { label: "Camere", value: "11 camere restaurate" },
      { label: "Terra", value: "210 ettari, biologici" },
      { label: "Minimo", value: "2 notti, intera tenuta" },
    ],
    curvedLabel: "Tutta Tua",
    perksEyebrow: "Cosa significa uso esclusivo",
    perksTitle: "La tenuta, senza nessun altro",
    perks: [
      {
        title: "Ogni camera",
        body: "Tutte le undici camere della masseria, dalle stanze dei coloni alla suite deluxe, riservate solo al tuo gruppo.",
      },
      {
        title: "Cucina privata",
        body: "The Veranda cucina solo per te — menù su misura dall'orto della tenuta, lunghe tavolate sotto le volte o le stelle.",
      },
      {
        title: "Gli spazi aperti",
        body: "Cortili, piscina panoramica, cappella e uliveti — l'intera valle aperta per passeggiare, riunirsi e festeggiare.",
      },
      {
        title: "Un host dedicato",
        body: "Una persona per organizzare tutto: transfer, degustazioni, musica, fiori e i piccoli dettagli che rendono tuo un incontro.",
      },
      {
        title: "Esperienze su richiesta",
        body: "Degustazioni d'olio, raccolte, lezioni di cucina e gite guidate nell'Alta Murgia, organizzate attorno alle tue giornate.",
      },
      {
        title: "Off-grid, nel comfort",
        body: "Alimentata dal sole e riscaldata con acqua solare — un lusso silenzioso e sostenibile, senza alcun compromesso sul comfort.",
      },
    ],
    photos: [IMG.photo1, IMG.photo2],
    occasionsEyebrow: "Per le occasioni che contano",
    occasionsTitle: "Un luogo fatto per riunirsi",
    occasionsBody: [
      "Le coppie si sposano nel cortile mentre la luce si fa dorata. Le famiglie prendono l'intera casa per un'estate, i bambini che corrono tra gli uliveti. Le aziende portano qui le loro persone per rallentare e pensare con chiarezza per qualche giorno.",
      "Qualunque sia l'occasione, la masseria l'accoglie con delicatezza — spazio a sufficienza per tutti, quiete a sufficienza per i momenti che contano.",
    ],
    fullImg: IMG.full,
    bookingEyebrow: "Richiedi l'uso esclusivo",
    bookingTitle: "Riserva l'intera masseria",
    bookingText:
      "Indicaci le date, il numero di ospiti e il tipo di incontro che hai in mente. Prepareremo una proposta su misura per la tenuta in uso esclusivo.",
    bookingCta: "Richiedi una proposta",
  },
}
