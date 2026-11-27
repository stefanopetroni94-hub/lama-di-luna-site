import type { Locale } from "@/lib/i18n"

export type RetreatFormLabels = {
  names: string
  email: string
  country: string
  date: string
  guestsLabel: string
  guests: string[]
  typeLabel: string
  types: string[]
  more: string
  select: string
  privacyBefore: string
  privacyLink: string
  privacyAfter: string
  button: string
  success: string
}

export const retreatForm: Record<Locale, RetreatFormLabels> = {
  en: {
    names: "Your name",
    email: "Email",
    country: "Country",
    date: "Preferred dates or period",
    guestsLabel: "Number of guests",
    guests: ["Up to 10", "10–20", "20–27", "More than 27"],
    typeLabel: "Type of stay",
    types: ["Retreat", "Company meeting", "Family gathering", "Something else"],
    more: "Tell us more",
    select: "Select",
    privacyBefore: "I have read and accept the ",
    privacyLink: "Privacy Policy",
    privacyAfter: "",
    button: "Request availability",
    success: "Thank you. We will reply within 24 hours with availability and a proposal for your stay.",
  },
  it: {
    names: "Il tuo nome",
    email: "Email",
    country: "Paese",
    date: "Date o periodo preferito",
    guestsLabel: "Numero di ospiti",
    guests: ["Fino a 10", "10–20", "20–27", "Più di 27"],
    typeLabel: "Tipo di soggiorno",
    types: ["Ritiro", "Riunione aziendale", "Riunione di famiglia", "Altro"],
    more: "Raccontaci di più",
    select: "Seleziona",
    privacyBefore: "Ho letto e accetto la ",
    privacyLink: "Privacy Policy",
    privacyAfter: "",
    button: "Richiedi la disponibilità",
    success: "Grazie. Ti risponderemo entro 24 ore con la disponibilità e una proposta per il tuo soggiorno.",
  },
  fr: {
    names: "Votre nom",
    email: "E-mail",
    country: "Pays",
    date: "Dates ou période souhaitées",
    guestsLabel: "Nombre de personnes",
    guests: ["Jusqu'à 10", "10–20", "20–27", "Plus de 27"],
    typeLabel: "Type de séjour",
    types: ["Retraite", "Réunion d'entreprise", "Réunion de famille", "Autre"],
    more: "Dites-nous en plus",
    select: "Sélectionner",
    privacyBefore: "J'ai lu et j'accepte la ",
    privacyLink: "Privacy Policy",
    privacyAfter: "",
    button: "Demander les disponibilités",
    success: "Merci. Nous vous répondrons sous 24 heures avec nos disponibilités et une proposition pour votre séjour.",
  },
  de: {
    names: "Ihr Name",
    email: "E-Mail",
    country: "Land",
    date: "Gewünschte Daten oder Zeitraum",
    guestsLabel: "Anzahl der Gäste",
    guests: ["Bis 10", "10–20", "20–27", "Mehr als 27"],
    typeLabel: "Art des Aufenthalts",
    types: ["Retreat", "Firmentreffen", "Familientreffen", "Etwas anderes"],
    more: "Erzählen Sie uns mehr",
    select: "Auswählen",
    privacyBefore: "Ich habe die ",
    privacyLink: "Datenschutzerklärung",
    privacyAfter: " gelesen und akzeptiere sie",
    button: "Verfügbarkeit anfragen",
    success: "Vielen Dank. Wir antworten innerhalb von 24 Stunden mit Verfügbarkeit und einem Vorschlag für Ihren Aufenthalt.",
  },
}
