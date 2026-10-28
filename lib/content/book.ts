export type Perk = { icon: "star" | "cup" | "clock" | "olive"; title: string; body: string }
export type Faq = { q: string; a: string }
export type Trust = { name: string; note?: string }

export type BookContent = {
  eyebrow: string
  title: string
  intro: string
  checkIn: string
  checkOut: string
  guests: string
  guestsValue: string
  addDate: string
  searchCta: string
  perksEyebrow: string
  perksTitle: string
  perksIntro: string
  perks: Perk[]
  roomsLabel: string
  widgetPill: string
  widgetTitle: string
  widgetBody: string
  widgetNote: string
  faqEyebrow: string
  faqTitle: string
  faqs: Faq[]
  trust: Trust[]
}

export const book: Record<"en" | "it" | "fr", BookContent> = {
  en: {
    eyebrow: "Best-rate direct booking",
    title: "Reserve your stay",
    intro:
      "Book directly with us — you'll always get the best available rate, plus the small things only the masseria can give you on arrival.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    guestsValue: "2 adults",
    addDate: "Add date",
    searchCta: "Check availability",
    perksEyebrow: "Why book direct",
    perksTitle: "Four small things you only get from us",
    perksIntro: "None of these are available when you book through Booking.com, Expedia or any other OTA.",
    perks: [
      { icon: "star", title: "Best-rate guarantee", body: "If you find a lower price elsewhere within 24 hours of booking, we'll match it." },
      { icon: "cup", title: "Welcome aperitivo", body: "Wine from the estate & small plates in the courtyard on arrival." },
      { icon: "clock", title: "Late checkout", body: "Until 13:00 whenever the next day's bookings allow — we'll confirm at breakfast." },
      { icon: "olive", title: "Olive oil tasting", body: "A 20-minute tasting of the year's extra-virgin pressings, on the first evening." },
    ],
    roomsLabel: "Available Rooms",
    widgetPill: "Engine placeholder",
    widgetTitle: "Little Hotelier booking widget loads here",
    widgetBody:
      "Once the Little Hotelier account is provisioned, this block is replaced by the embedded widget — or this whole section redirects to book.lamadiluna.com on submit. Either flow ends on /booking/thank-you on this domain so the Google Ads + GA4 conversion fires.",
    widgetNote: "Dev hand-off notes are in the HTML <head> comment.",
    faqEyebrow: "Before you book",
    faqTitle: "Honest answers",
    faqs: [
      { q: "What is your cancellation policy?", a: "Free cancellation up to 7 days before arrival. Inside 7 days, the first night is charged. No-shows are charged the full stay. For high-season weeks (June–September) and the Christmas / New Year period, we ask for full pre-payment 30 days before arrival, non-refundable inside 14 days." },
      { q: "Is breakfast included?", a: "Yes — a slow breakfast in the old refectory: almond pastries from the village, fresh ricotta from a neighbouring farm, jams from the estate, eggs from the courtyard hens, our own olive oil on warm bread. Served from 8:30 to 10:30." },
      { q: "Are children welcome?", a: "Children over 12 are welcome in all rooms. The Family Suite and Masseria Family Suite accept younger children. Cots can be added on request. We don't have a kids' programme but the courtyard, the olive grove and the resident farm animals tend to do the work." },
      { q: "Do you have a pool?", a: "Yes — an outdoor pool, set into the olive grove behind the masseria. Open mid-May to late-September. Sun loungers, shade, and the only Wi-Fi-free zone on the property." },
      { q: "Is dinner available?", a: "By arrangement. The kitchen opens in the evening when there's enough advance notice — typical Murgian and Pugliese recipes, simply made with what the estate has given that day. Tell us when you book and we'll arrange." },
      { q: "How do I reach the masseria from Bari airport?", a: "A rented car is easiest (about 55 minutes). Private transfer can be arranged — write to us in advance with your flight number and we'll quote. There's no public-transport route that runs to the masseria." },
      { q: "Do you have Wi-Fi?", a: "Yes, everywhere except the pool. Connection is fast enough for video calls." },
    ],
    trust: [
      { name: "National Geographic" },
      { name: "Stanley Tucci", note: "Searching for Italy" },
      { name: "Lonely Planet" },
      { name: "AIAB · ICEA", note: "Certified organic" },
      { name: "Tripadvisor", note: "Travellers' Choice" },
    ],
  },
  it: {
    eyebrow: "Prenotazione diretta al miglior prezzo",
    title: "Prenota il tuo soggiorno",
    intro:
      "Prenota direttamente con noi — avrai sempre la migliore tariffa disponibile, più le piccole attenzioni che solo la masseria può offrirti all'arrivo.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Ospiti",
    guestsValue: "2 adulti",
    addDate: "Aggiungi data",
    searchCta: "Verifica disponibilità",
    perksEyebrow: "Perché prenotare diretto",
    perksTitle: "Quattro piccole cose che ottieni solo da noi",
    perksIntro: "Nessuna di queste è disponibile prenotando tramite Booking.com, Expedia o qualsiasi altra OTA.",
    perks: [
      { icon: "star", title: "Miglior tariffa garantita", body: "Se trovi un prezzo più basso altrove entro 24 ore dalla prenotazione, lo pareggiamo." },
      { icon: "cup", title: "Aperitivo di benvenuto", body: "Vino della masseria e piccoli assaggi nel cortile all'arrivo." },
      { icon: "clock", title: "Check-out posticipato", body: "Fino alle 13:00 quando le prenotazioni del giorno seguente lo permettono — confermiamo a colazione." },
      { icon: "olive", title: "Degustazione di olio", body: "Una degustazione di 20 minuti degli extravergini dell'anno, la prima sera." },
    ],
    roomsLabel: "Camere Disponibili",
    widgetPill: "Segnaposto motore",
    widgetTitle: "Il widget di prenotazione Little Hotelier si carica qui",
    widgetBody:
      "Una volta attivato l'account Little Hotelier, questo blocco viene sostituito dal widget incorporato — oppure l'intera sezione reindirizza a book.lamadiluna.com all'invio. Entrambi i flussi terminano su /booking/thank-you su questo dominio così da attivare la conversione Google Ads + GA4.",
    widgetNote: "Le note per gli sviluppatori sono nel commento HTML <head>.",
    faqEyebrow: "Prima di prenotare",
    faqTitle: "Risposte sincere",
    faqs: [
      { q: "Qual è la vostra politica di cancellazione?", a: "Cancellazione gratuita fino a 7 giorni prima dell'arrivo. Entro 7 giorni, si addebita la prima notte. I no-show vengono addebitati per l'intero soggiorno. Per le settimane di alta stagione (giugno–settembre) e il periodo di Natale / Capodanno, chiediamo il pagamento anticipato completo 30 giorni prima dell'arrivo, non rimborsabile entro 14 giorni." },
      { q: "La colazione è inclusa?", a: "Sì — una colazione lenta nell'antico refettorio: dolcetti alle mandorle del paese, ricotta fresca di una fattoria vicina, marmellate della masseria, uova delle galline del cortile, il nostro olio d'oliva sul pane caldo. Servita dalle 8:30 alle 10:30." },
      { q: "I bambini sono benvenuti?", a: "I bambini sopra i 12 anni sono benvenuti in tutte le camere. La Family Suite e la Masseria Family Suite accolgono bambini più piccoli. I lettini si aggiungono su richiesta. Non abbiamo un programma per bambini ma il cortile, l'uliveto e gli animali della fattoria tendono a fare il lavoro." },
      { q: "Avete una piscina?", a: "Sì — una piscina esterna, incastonata nell'uliveto dietro la masseria. Aperta da metà maggio a fine settembre. Lettini, ombra, e l'unica zona senza Wi-Fi della proprietà." },
      { q: "È disponibile la cena?", a: "Su richiesta. La cucina apre la sera quando c'è abbastanza preavviso — ricette tipiche murgiane e pugliesi, fatte semplicemente con ciò che la masseria ha dato quel giorno. Diccelo alla prenotazione e organizziamo." },
      { q: "Come raggiungo la masseria dall'aeroporto di Bari?", a: "Un'auto a noleggio è la soluzione più facile (circa 55 minuti). Si può organizzare un transfer privato — scrivici in anticipo con il numero del volo e faremo un preventivo. Non c'è un collegamento con i mezzi pubblici fino alla masseria." },
      { q: "Avete il Wi-Fi?", a: "Sì, ovunque tranne che in piscina. La connessione è abbastanza veloce per le videochiamate." },
    ],
    trust: [
      { name: "National Geographic" },
      { name: "Stanley Tucci", note: "Searching for Italy" },
      { name: "Lonely Planet" },
      { name: "AIAB · ICEA", note: "Certificato biologico" },
      { name: "Tripadvisor", note: "Travellers' Choice" },
    ],
  },
  fr: {
    eyebrow: "Réservation directe au meilleur prix",
    title: "Réservez votre séjour",
    intro:
      "Réservez directement chez nous : vous aurez toujours le meilleur tarif disponible, et les petites attentions que seule la masseria peut vous offrir à votre arrivée.",
    checkIn: "Arrivée",
    checkOut: "Départ",
    guests: "Personnes",
    guestsValue: "2 adultes",
    addDate: "Ajouter une date",
    searchCta: "Vérifier la disponibilité",
    perksEyebrow: "Pourquoi réserver en direct",
    perksTitle: "Quatre petites choses que vous n'aurez que chez nous",
    perksIntro: "Aucune n'est disponible si vous réservez via Booking.com, Expedia ou toute autre OTA.",
    perks: [
      { icon: "star", title: "Meilleur tarif garanti", body: "Si vous trouvez un prix plus bas ailleurs dans les 24 heures suivant la réservation, nous l'alignons." },
      { icon: "cup", title: "Apéritif de bienvenue", body: "Vin du domaine et petites assiettes dans la cour à votre arrivée." },
      { icon: "clock", title: "Départ tardif", body: "Jusqu'à 13 h lorsque les réservations du lendemain le permettent, nous vous le confirmons au petit déjeuner." },
      { icon: "olive", title: "Dégustation d'huile d'olive", body: "Une dégustation de 20 minutes des huiles extra vierges de l'année, le premier soir." },
    ],
    roomsLabel: "Chambres disponibles",
    widgetPill: "Emplacement du moteur",
    widgetTitle: "Le module de réservation Little Hotelier se charge ici",
    widgetBody:
      "Une fois le compte Little Hotelier activé, ce bloc est remplacé par le module intégré, ou toute la section redirige vers book.lamadiluna.com à l'envoi. Les deux parcours se terminent sur /booking/thank-you sur ce domaine afin de déclencher la conversion Google Ads + GA4.",
    widgetNote: "Les notes pour les développeurs sont dans le commentaire HTML <head>.",
    faqEyebrow: "Avant de réserver",
    faqTitle: "Des réponses sincères",
    faqs: [
      { q: "Quelles sont vos conditions d'annulation ?", a: "Annulation gratuite jusqu'à 7 jours avant l'arrivée. Dans les 7 jours, la première nuit est facturée. En cas de non présentation, la totalité du séjour est facturée. Pour les semaines de haute saison (juin à septembre) et la période de Noël et du Nouvel An, nous demandons le paiement intégral 30 jours avant l'arrivée, non remboursable dans les 14 jours." },
      { q: "Le petit déjeuner est-il inclus ?", a: "Oui : un petit déjeuner tranquille dans l'ancien réfectoire, avec des pâtisseries aux amandes du village, de la ricotta fraîche d'une ferme voisine, des confitures du domaine, les œufs des poules de la cour et notre huile d'olive sur du pain chaud. Servi de 8 h 30 à 10 h 30." },
      { q: "Les enfants sont-ils les bienvenus ?", a: "Les enfants de plus de 12 ans sont les bienvenus dans toutes les chambres. La Family Suite et la Masseria Family Suite accueillent les plus petits. Des lits bébé peuvent être ajoutés sur demande. Nous n'avons pas de programme pour enfants, mais la cour, l'oliveraie et les animaux de la ferme s'en chargent très bien." },
      { q: "Avez-vous une piscine ?", a: "Oui : une piscine extérieure, nichée dans l'oliveraie derrière la masseria. Ouverte de mi-mai à fin septembre. Transats, ombre, et la seule zone sans Wi-Fi du domaine." },
      { q: "Peut-on dîner sur place ?", a: "Sur demande. La cuisine ouvre le soir lorsque nous sommes prévenus suffisamment à l'avance : recettes typiques de la Murgia et des Pouilles, préparées simplement avec ce que le domaine a donné ce jour-là. Dites-le-nous lors de la réservation et nous organisons tout." },
      { q: "Comment rejoindre la masseria depuis l'aéroport de Bari ?", a: "Une voiture de location est la solution la plus simple (environ 55 minutes). Un transfert privé peut être organisé : écrivez-nous à l'avance avec votre numéro de vol et nous vous ferons un devis. Aucun transport public ne dessert la masseria." },
      { q: "Avez-vous le Wi-Fi ?", a: "Oui, partout sauf à la piscine. La connexion est assez rapide pour les appels vidéo." },
    ],
    trust: [
      { name: "National Geographic" },
      { name: "Stanley Tucci", note: "Searching for Italy" },
      { name: "Lonely Planet" },
      { name: "AIAB · ICEA", note: "Certifié bio" },
      { name: "Tripadvisor", note: "Travellers' Choice" },
    ],
  },
}
