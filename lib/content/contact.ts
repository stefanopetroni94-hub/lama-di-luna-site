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
  surnameLabel: string
  privacyLabel: string
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

export const contact: Record<"en" | "it" | "fr" | "de", ContactContent> = {
  en: {
    eyebrow: "Get in touch",
    title: "Contact us",
    intro:
      "We answer most messages within a few hours. You can call us between 8am and 8pm Central European Time.",
    phoneLabel: "Phone",
    phoneValue: "+39 0883 569 505",
    phoneSmall: "Reception, 8:00–20:00 CET",
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
    formTitle: "Send us a message using the contact form",
    nameLabel: "Name",
    surnameLabel: "Surname",
    privacyLabel: "I have read and accept the Privacy Policy",
    emailFieldLabel: "Email",
    phoneFieldLabel: "Phone (optional)",
    datesLabel: "Dates (optional)",
    messageLabel: "Message",
    sendLabel: "Send message",
    sendNote: "We typically reply within a few hours",
    successMessage: "Thanks — we'll reply within a few hours.",
    findLabel: "Where to find us",
    mapEyebrow: "In the Alta Murgia",
    mapTitle: "An hour from Bari, 20 minutes from Castel del Monte",
    mapBody:
      "A rented car is the easiest way to reach us. We can also arrange a private transfer from any airport or station — write to us in advance. We also have charging points for electric vehicles.",
    distances: [
      { place: "Bari Airport (BRI)", distance: "55 min" },
      { place: "Brindisi Airport (BDS)", distance: "2 h 10 min" },
      { place: "Andria train station", distance: "25 min" },
      { place: "Trani & the Adriatic coast", distance: "35 min" },
      { place: "Castel del Monte", distance: "20 min" },
      { place: "Alberobello (trulli)", distance: "1 h 30 min" },
      { place: "Polignano a Mare", distance: "1 h 20 min" },
      { place: "Matera", distance: "1 h 20 min" },
    ],
  },
  it: {
    eyebrow: "Contattaci",
    title: "Contattaci",
    intro:
      "Rispondiamo alla maggior parte dei messaggi entro poche ore. Puoi chiamarci tra le 8 e le 20, ora dell'Europa centrale.",
    phoneLabel: "Telefono",
    phoneValue: "+39 0883 569 505",
    phoneSmall: "Reception, 8:00–20:00 CET",
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
    formTitle: "Inviaci un messaggio usando il modulo di contatto",
    nameLabel: "Nome",
    surnameLabel: "Cognome",
    privacyLabel: "Ho letto e accetto la Privacy Policy",
    emailFieldLabel: "Email",
    phoneFieldLabel: "Telefono (opzionale)",
    datesLabel: "Date (opzionale)",
    messageLabel: "Messaggio",
    sendLabel: "Invia messaggio",
    sendNote: "Di solito rispondiamo entro poche ore",
    successMessage: "Grazie — risponderemo entro poche ore.",
    findLabel: "Dove trovarci",
    mapEyebrow: "Nell'Alta Murgia",
    mapTitle: "Un'ora da Bari, 20 minuti da Castel del Monte",
    mapBody:
      "Un'auto a noleggio è il modo più facile per raggiungerci. Possiamo anche organizzare un transfer privato da qualsiasi aeroporto o stazione — scrivici in anticipo. Disponiamo anche di punti di ricarica per veicoli elettrici.",
    distances: [
      { place: "Aeroporto di Bari (BRI)", distance: "55 min" },
      { place: "Aeroporto di Brindisi (BDS)", distance: "2 h 10 min" },
      { place: "Stazione di Andria", distance: "25 min" },
      { place: "Trani e la costa adriatica", distance: "35 min" },
      { place: "Castel del Monte", distance: "20 min" },
      { place: "Alberobello (trulli)", distance: "1 h 30 min" },
      { place: "Polignano a Mare", distance: "1 h 20 min" },
      { place: "Matera", distance: "1 h 20 min" },
    ],
  },
  fr: {
    eyebrow: "Contactez-nous",
    title: "Contactez-nous",
    intro:
      "Nous répondons à la plupart des messages en quelques heures. Vous pouvez nous appeler entre 8 h et 20 h, heure d'Europe centrale.",
    phoneLabel: "Téléphone",
    phoneValue: "+39 0883 569 505",
    phoneSmall: "Réception, 8:00–20:00 CET",
    callLabel: "Appeler",
    whatsappLabel: "WhatsApp",
    emailLabel: "E-mail",
    emailValue: "info@lamadiluna.com",
    emailSmall: "Pour les demandes plus longues, les séjours de groupe, la presse",
    addressLabel: "Adresse",
    addressValue: "Lama di Luna S.N.C.\nC.da Lama di Luna\n76123 Andria (BT), Italia",
    addressSmall: "Dans le Parc national de l'Alta Murgia · à 20 min de Castel del Monte",
    socialLabel: "Réseaux sociaux",
    formEyebrow: "Écrivez-nous",
    formTitle: "Envoyez-nous un message avec le formulaire de contact",
    nameLabel: "Prénom",
    surnameLabel: "Nom",
    privacyLabel: "J'ai lu et j'accepte la Privacy Policy",
    emailFieldLabel: "E-mail",
    phoneFieldLabel: "Téléphone (facultatif)",
    datesLabel: "Dates (facultatif)",
    messageLabel: "Message",
    sendLabel: "Envoyer le message",
    sendNote: "Nous répondons généralement en quelques heures",
    successMessage: "Merci, nous vous répondrons dans quelques heures.",
    findLabel: "Où nous trouver",
    mapEyebrow: "Dans l'Alta Murgia",
    mapTitle: "À une heure de Bari, à 20 minutes de Castel del Monte",
    mapBody:
      "Une voiture de location est le moyen le plus simple de nous rejoindre. Nous pouvons aussi organiser un transfert privé depuis n'importe quel aéroport ou gare, écrivez-nous à l'avance. Nous disposons aussi de bornes de recharge pour véhicules électriques.",
    distances: [
      { place: "Aéroport de Bari (BRI)", distance: "55 min" },
      { place: "Aéroport de Brindisi (BDS)", distance: "2 h 10 min" },
      { place: "Gare d'Andria", distance: "25 min" },
      { place: "Trani et la côte adriatique", distance: "35 min" },
      { place: "Castel del Monte", distance: "20 min" },
      { place: "Alberobello (trulli)", distance: "1 h 30 min" },
      { place: "Polignano a Mare", distance: "1 h 20 min" },
      { place: "Matera", distance: "1 h 20 min" },
    ],
  },
  de: {
    eyebrow: "Kontakt",
    title: "Kontaktieren Sie uns",
    intro:
      "Wir beantworten die meisten Nachrichten innerhalb weniger Stunden. Sie erreichen uns telefonisch zwischen 8 und 20 Uhr mitteleuropäischer Zeit.",
    phoneLabel: "Telefon",
    phoneValue: "+39 0883 569 505",
    phoneSmall: "Rezeption, 8:00–20:00 MEZ",
    callLabel: "Anrufen",
    whatsappLabel: "WhatsApp",
    emailLabel: "E-Mail",
    emailValue: "info@lamadiluna.com",
    emailSmall: "Für ausführlichere Anfragen, Gruppenaufenthalte und Presseanfragen",
    addressLabel: "Adresse",
    addressValue: "Lama di Luna S.N.C.\nC.da Lama di Luna\n76123 Andria (BT), Italia",
    addressSmall: "Im Nationalpark Alta Murgia · 20 Min. von Castel del Monte",
    socialLabel: "Social Media",
    formEyebrow: "Schreiben Sie uns",
    formTitle: "Senden Sie uns eine Nachricht über das Kontaktformular",
    nameLabel: "Vorname",
    surnameLabel: "Nachname",
    privacyLabel: "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie",
    emailFieldLabel: "E-Mail",
    phoneFieldLabel: "Telefon (optional)",
    datesLabel: "Reisedaten (optional)",
    messageLabel: "Nachricht",
    sendLabel: "Nachricht senden",
    sendNote: "Wir antworten in der Regel innerhalb weniger Stunden",
    successMessage: "Vielen Dank, wir antworten Ihnen innerhalb weniger Stunden.",
    findLabel: "So finden Sie uns",
    mapEyebrow: "In der Alta Murgia",
    mapTitle: "Eine Stunde von Bari, 20 Minuten von Castel del Monte",
    mapBody:
      "Mit dem Mietwagen erreichen Sie uns am einfachsten. Wir können auch einen privaten Transfer von jedem Flughafen oder Bahnhof organisieren, schreiben Sie uns dazu vorab. Außerdem gibt es bei uns Ladestationen für Elektroautos.",
    distances: [
      { place: "Flughafen Bari (BRI)", distance: "55 Min." },
      { place: "Flughafen Brindisi (BDS)", distance: "2 Std. 10 Min." },
      { place: "Bahnhof Andria", distance: "25 Min." },
      { place: "Trani und die Adriaküste", distance: "35 Min." },
      { place: "Castel del Monte", distance: "20 Min." },
      { place: "Alberobello (Trulli)", distance: "1 Std. 30 Min." },
      { place: "Polignano a Mare", distance: "1 Std. 20 Min." },
      { place: "Matera", distance: "1 Std. 20 Min." },
    ],
  },
}
