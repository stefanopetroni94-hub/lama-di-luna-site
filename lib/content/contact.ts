export type Distance = { place: string; distance: string }

export type ContactContent = {
  eyebrow: string
  title: string
  intro: string
  phoneLabel: string
  phoneValue: string
  phoneSmall: string
  callLabel: string
  whatsappLabel: string
  emailLabel: string
  emailValue: string
  emailSmall: string
  addressLabel: string
  addressValue: string
  addressSmall: string
  socialLabel: string
  formEyebrow: string
  formTitle: string
  nameLabel: string
  emailFieldLabel: string
  phoneFieldLabel: string
  datesLabel: string
  messageLabel: string
  sendLabel: string
  sendNote: string
  successMessage: string
  findLabel: string
  mapEyebrow: string
  mapTitle: string
  mapBody: string
  distances: Distance[]
}

export const contact: Record<"en" | "it", ContactContent> = {
  en: {
    eyebrow: "Get in touch",
    title: "Contact",
    intro:
      "We answer most messages within a few hours, in English, Italian, German and French. WhatsApp is fastest. Calls welcome between 9am and 8pm Central European Time.",
    phoneLabel: "Phone",
    phoneValue: "+39 0883 569 505",
    phoneSmall: "Reception, 9:00–20:00 CET",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    emailValue: "info@lamadiluna.com",
    emailSmall: "For longer enquiries, group stays, press requests",
    addressLabel: "Address",
    addressValue: "Lama di Luna S.N.C.\nC.da Lama di Luna\n76123 Andria (BT), Italia",
    addressSmall: "In the Alta Murgia National Park · 20 min from Castel del Monte",
    socialLabel: "Social",
    formEyebrow: "Write to us",
    formTitle: "Tell us about your stay",
    nameLabel: "Name",
    emailFieldLabel: "Email",
    phoneFieldLabel: "Phone (optional)",
    datesLabel: "Dates (optional)",
    messageLabel: "Message",
    sendLabel: "Send message",
    sendNote: "We typically reply within a few hours",
    successMessage: "Thanks — we'll reply within a few hours.",
    findLabel: "Find Us",
    mapEyebrow: "In the Alta Murgia",
    mapTitle: "An hour from Bari, 20 minutes from Castel del Monte",
    mapBody:
      "A rented car is the easiest way to reach us. We can also arrange a private transfer from any airport or station — write to us in advance.",
    distances: [
      { place: "Bari Airport (BRI)", distance: "55 min" },
      { place: "Brindisi Airport (BDS)", distance: "2 h 10 min" },
      { place: "Andria train station", distance: "25 min" },
      { place: "Trani & the Adriatic coast", distance: "30 min" },
      { place: "Castel del Monte", distance: "20 min" },
      { place: "Alberobello (trulli)", distance: "1 h 10 min" },
      { place: "Polignano a Mare", distance: "1 h 20 min" },
      { place: "Matera", distance: "1 h 20 min" },
    ],
  },
  it: {
    eyebrow: "Contattaci",
    title: "Contatti",
    intro:
      "Rispondiamo alla maggior parte dei messaggi entro poche ore, in italiano, inglese, tedesco e francese. WhatsApp è il modo più rapido. Chiamate benvenute tra le 9 e le 20, ora dell'Europa centrale.",
    phoneLabel: "Telefono",
    phoneValue: "+39 0883 569 505",
    phoneSmall: "Reception, 9:00–20:00 CET",
    callLabel: "Chiama",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    emailValue: "info@lamadiluna.com",
    emailSmall: "Per richieste più lunghe, soggiorni di gruppo, richieste stampa",
    addressLabel: "Indirizzo",
    addressValue: "Lama di Luna S.N.C.\nC.da Lama di Luna\n76123 Andria (BT), Italia",
    addressSmall: "Nel Parco Nazionale dell'Alta Murgia · 20 min da Castel del Monte",
    socialLabel: "Social",
    formEyebrow: "Scrivici",
    formTitle: "Raccontaci del tuo soggiorno",
    nameLabel: "Nome",
    emailFieldLabel: "Email",
    phoneFieldLabel: "Telefono (opzionale)",
    datesLabel: "Date (opzionale)",
    messageLabel: "Messaggio",
    sendLabel: "Invia messaggio",
    sendNote: "Di solito rispondiamo entro poche ore",
    successMessage: "Grazie — risponderemo entro poche ore.",
    findLabel: "Dove Siamo",
    mapEyebrow: "Nell'Alta Murgia",
    mapTitle: "Un'ora da Bari, 20 minuti da Castel del Monte",
    mapBody:
      "Un'auto a noleggio è il modo più facile per raggiungerci. Possiamo anche organizzare un transfer privato da qualsiasi aeroporto o stazione — scrivici in anticipo.",
    distances: [
      { place: "Aeroporto di Bari (BRI)", distance: "55 min" },
      { place: "Aeroporto di Brindisi (BDS)", distance: "2 h 10 min" },
      { place: "Stazione di Andria", distance: "25 min" },
      { place: "Trani e la costa adriatica", distance: "30 min" },
      { place: "Castel del Monte", distance: "20 min" },
      { place: "Alberobello (trulli)", distance: "1 h 10 min" },
      { place: "Polignano a Mare", distance: "1 h 20 min" },
      { place: "Matera", distance: "1 h 20 min" },
    ],
  },
}
