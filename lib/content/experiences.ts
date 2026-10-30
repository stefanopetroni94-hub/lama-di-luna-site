export type ExpCard = {
  slug: string
  img: string
  num: string
  name: string
  meta: string
  pos?: string
  rotate?: number // degrees, to straighten a photo (negative = turn it to the left)
  zoom?: number // 1 = as is; more crops the edges (top and bottom included)
  cardPos?: string // framing used only in the Experiences list, when it should differ from the page photo
  cardZoom?: number
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
    "pets",
  ],
  inRegion: [] as string[],
}

// The order the experiences appear in on the page (change it here to move one).
const displayOrder = [
  "olive-harvest",
  "infinity-pool",
  "cooking-class",
  "yoga",
  "massages",
  "cinema-room",
  "bicycle-ride",
  "golf",
  "estate-walk",
  "library",
  "horse-riding",
  "pets",
]

const base: Record<"en" | "it" | "fr" | "de", ExperiencesContent> = {
  en: {
    eyebrow: "Ways to spend a day",
    title: "Experiences",
    intro:
      "The olive tour, a cooking class, relaxing massages, a bicycle ride, and a quiet moment to read in the library.",
    onEstateLabel: "On the Estate",
    arrangeEyebrow: "Tell us what you'd love",
    arrangeTitle: "We will help you arrange the day",
    arrangeText:
      "All experiences are arranged on request. Many are weather- or season-dependent; some need a few days' notice. Drop us a note with your dates and what you're drawn to. Lama di Luna is also a place for business meetings and corporate retreats.",
    arrangeCta: "Get in touch",
    onEstate: [
      { slug: "olive-harvest", img: "/whatsapp/20261028_065214_1516459033640755.jpg", num: "01 · October–November", name: "Olive Oil Tasting and Tour", meta: "A professional tour of the farm, from irrigation to the harvest, ending with an extra virgin olive oil tasting on the veranda." },
      { slug: "#", img: "/whatsapp/20261028_070629_1807431347066448.jpg", pos: "center 35%", num: "02 · Half-day, on request", name: "Fresh Pasta Cooking Class", meta: "An hour with the cooks of Lama di Luna, making traditional Pugliese pasta by hand: orecchiette, strascinati and cavatelli." },
      { slug: "#", img: "/whatsapp/20261028_085225_1143956144719914.jpg", pos: "center 40%", num: "03 · By arrangement", name: "Relaxing Massage", meta: "A massage therapist comes to the masseria on request: relaxing or energising massages in a quiet corner of the estate." },
      { slug: "#", img: "/whatsapp/20261029_053110_2058236084866524.jpg", pos: "center 55%", num: "04 · Half-day, on request", name: "Bicycle Ride", meta: "Pedal bicycles to rent: ride through the estate, the olive groves of Andria or the Alta Murgia National Park." },
      { slug: "#", img: "/whatsapp/20261029_053509_1420378746847456.jpg", pos: "center 48%", rotate: -1.5, zoom: 1.2, cardPos: "74% 45%", cardZoom: 1.1, num: "05 · By arrangement", name: "Cinema Room", meta: "A cinema room with over 900 DVDs of films from the history of cinema, for guests staying at the masseria." },
      { slug: "#", img: "/whatsapp/20261016_170301_1640209704278679.jpg", pos: "center 32%", rotate: -1.5, zoom: 1.1, num: "06 · By arrangement", name: "Yoga Practice", meta: "Yoga in the indoor room from the 1700s, with a heated floor: on your own for free, or with a lesson with Agata." },
      { slug: "#", img: IMG.wine, num: "07 · In season", name: "The Infinity Pool", meta: "A lake-shaped infinity pool, 18 metres long, with salt water, overlooking the monumental olive trees of Andria." },
      { slug: "#", img: "/whatsapp/20261029_055849_1760907208350015.jpg", pos: "center 80%", num: "08 · On request", name: "Walk on the Estate", meta: "Walk the 210 hectares of the estate or out into the National Park: wild Murgia, hawks, foxes and spring flowers." },
      { slug: "#", img: "/whatsapp/20261029_055055_2502652003555281.jpg", pos: "center 15%", zoom: 1.3, num: "09 · By arrangement", name: "Golf Practice", meta: "Two flags 80 metres apart in the meadow next to the masseria, with clubs and balls for a few shots, alone or with Pietro." },
      { slug: "#", img: "/whatsapp/20261029_060653_2451806448686458.jpg", pos: "center 50%", rotate: 0.7, zoom: 1.08, num: "10 · By arrangement", name: "The Petroni Family Library", meta: "A family library of over 3,000 books and old typewriters, open to guests day and night, free of charge." },
      { slug: "#", img: "/whatsapp/20261016_172701_1655107209547771.jpg", num: "11 · By arrangement", name: "Horse Riding in the National Park", meta: "Rides on gentle horses in the Alta Murgia National Park, with stables nearby; children welcome." },
      { slug: "#", img: "/whatsapp/20261029_075305_1107658378700819.jpg", pos: "55% center", num: "12 · All year round", name: "Meet Lama di Luna's Pets", meta: "Meet Allen, Romeo, our 12 cats and the rest of the permanent residents of Lama di Luna." },
    ],
    inRegion: [],
  },
  it: {
    eyebrow: "Modi di passare una giornata",
    title: "Esperienze",
    intro:
      "Il tour degli ulivi, un corso di cucina, massaggi rilassanti, un giro in bicicletta e un momento di quiete per leggere in biblioteca.",
    onEstateLabel: "In Masseria",
    arrangeEyebrow: "Dicci cosa ti piacerebbe",
    arrangeTitle: "Ti aiutiamo a organizzare la giornata",
    arrangeText:
      "Tutte le esperienze si organizzano su richiesta. Molte dipendono dal tempo o dalla stagione; alcune richiedono qualche giorno di preavviso. Scrivici con le tue date e ciò che ti attrae. Lama di Luna è anche un luogo per meeting aziendali e ritiri aziendali.",
    arrangeCta: "Contattaci",
    onEstate: [
      { slug: "olive-harvest", img: "/whatsapp/20261028_065214_1516459033640755.jpg", num: "01 · Ottobre–Novembre", name: "Degustazione e Tour dell'Olio d'Oliva", meta: "Un tour professionale dell'azienda, dall'irrigazione alla raccolta, che si conclude con la degustazione di olio extravergine sulla veranda." },
      { slug: "#", img: "/whatsapp/20261028_070629_1807431347066448.jpg", pos: "center 35%", num: "02 · Mezza giornata, su richiesta", name: "Corso di Cucina della Pasta Fresca", meta: "Un'ora con le cuoche di Lama di Luna, per fare a mano la pasta tradizionale pugliese: orecchiette, strascinati e cavatelli." },
      { slug: "#", img: "/whatsapp/20261028_085225_1143956144719914.jpg", pos: "center 40%", num: "03 · Su prenotazione", name: "Massaggio Rilassante", meta: "Un massaggiatore viene in masseria su richiesta: massaggi rilassanti o energizzanti in un angolo tranquillo della tenuta." },
      { slug: "#", img: "/whatsapp/20261029_053110_2058236084866524.jpg", pos: "center 55%", num: "04 · Mezza giornata, su richiesta", name: "Giro in Bicicletta", meta: "Biciclette a pedali da noleggiare: per girare tra la tenuta, gli uliveti di Andria o il Parco Nazionale dell'Alta Murgia." },
      { slug: "#", img: "/whatsapp/20261029_053509_1420378746847456.jpg", pos: "center 48%", rotate: -1.5, zoom: 1.2, cardPos: "74% 45%", cardZoom: 1.1, num: "05 · Su prenotazione", name: "Sala Cinema", meta: "Una sala cinema con oltre 900 DVD di film della storia del cinema, per gli ospiti che dormono in masseria." },
      { slug: "#", img: "/whatsapp/20261016_170301_1640209704278679.jpg", pos: "center 32%", rotate: -1.5, zoom: 1.1, num: "06 · Su prenotazione", name: "Pratica di Yoga", meta: "Yoga nella sala interna del 1700, con il pavimento riscaldato: da soli gratuitamente, oppure con una lezione con Agata." },
      { slug: "#", img: IMG.wine, num: "07 · In stagione", name: "La Piscina a Sfioro", meta: "Una piscina a sfioro a forma di lago, lunga 18 metri, con acqua salata, affacciata sugli olivi monumentali di Andria." },
      { slug: "#", img: "/whatsapp/20261029_055849_1760907208350015.jpg", pos: "center 80%", num: "08 · Su richiesta", name: "Passeggiata nella Tenuta", meta: "Cammina nei 210 ettari della tenuta o fuori, nel Parco Nazionale: Murgia selvaggia, falchi, volpi e fiori di primavera." },
      { slug: "#", img: "/whatsapp/20261029_055055_2502652003555281.jpg", pos: "center 15%", zoom: 1.3, num: "09 · Su prenotazione", name: "Golf Practice", meta: "Due bandierine a 80 metri nel prato accanto alla masseria, con mazze e palline per due tiri, da soli o con Pietro." },
      { slug: "#", img: "/whatsapp/20261029_060653_2451806448686458.jpg", pos: "center 50%", rotate: 0.7, zoom: 1.08, num: "10 · Su prenotazione", name: "La Biblioteca della Famiglia Petroni", meta: "Una biblioteca di famiglia con oltre 3.000 libri e vecchie macchine da scrivere, aperta agli ospiti giorno e notte, gratuita." },
      { slug: "#", img: "/whatsapp/20261016_172701_1655107209547771.jpg", num: "11 · Su prenotazione", name: "Passeggiate a Cavallo nel Parco Nazionale", meta: "Passeggiate su cavalli mansueti nel Parco Nazionale dell'Alta Murgia, con maneggi vicini; bambini benvenuti." },
      { slug: "#", img: "/whatsapp/20261029_075305_1107658378700819.jpg", pos: "55% center", num: "12 · Tutto l'anno", name: "Incontra gli Animali di Lama di Luna", meta: "Incontra Allen, Romeo, i nostri 12 gatti e gli altri residenti permanenti di Lama di Luna." },
    ],
    inRegion: [],
  },
  fr: {
    eyebrow: "Des façons de passer une journée",
    title: "Expériences",
    intro:
      "La visite des oliviers, un cours de cuisine, des massages relaxants, une balade à vélo et un moment de calme pour lire à la bibliothèque.",
    onEstateLabel: "Au domaine",
    arrangeEyebrow: "Dites-nous ce qui vous ferait plaisir",
    arrangeTitle: "Nous vous aidons à organiser la journée",
    arrangeText:
      "Toutes les expériences sont organisées sur demande. Beaucoup dépendent de la météo ou de la saison, certaines demandent quelques jours de préavis. Écrivez-nous avec vos dates et ce qui vous attire. Lama di Luna accueille aussi des réunions d'entreprise et des retraites professionnelles.",
    arrangeCta: "Contactez-nous",
    onEstate: [
      { slug: "olive-harvest", img: "/whatsapp/20261028_065214_1516459033640755.jpg", num: "01 · Octobre à novembre", name: "Dégustation d'Huile d'Olive et Visite", meta: "Une visite professionnelle de la ferme, de l'irrigation à la récolte, qui se termine par une dégustation d'huile d'olive extra vierge sur la véranda." },
      { slug: "#", img: "/whatsapp/20261028_070629_1807431347066448.jpg", pos: "center 35%", num: "02 · Demi-journée, sur demande", name: "Cours de Cuisine des Pâtes Fraîches", meta: "Une heure avec les cuisinières de Lama di Luna, pour faire à la main la pâte traditionnelle des Pouilles : orecchiette, strascinati et cavatelli." },
      { slug: "#", img: "/whatsapp/20261028_085225_1143956144719914.jpg", pos: "center 40%", num: "03 · Sur réservation", name: "Massage Relaxant", meta: "Un masseur vient à la masseria sur demande : massages relaxants ou énergisants dans un coin calme du domaine." },
      { slug: "#", img: "/whatsapp/20261029_053110_2058236084866524.jpg", pos: "center 55%", num: "04 · Demi-journée, sur demande", name: "Balade à Vélo", meta: "Des vélos à pédales à louer : pour rouler dans le domaine, les oliveraies d'Andria ou le Parc national de l'Alta Murgia." },
      { slug: "#", img: "/whatsapp/20261029_053509_1420378746847456.jpg", pos: "center 48%", rotate: -1.5, zoom: 1.2, cardPos: "74% 45%", cardZoom: 1.1, num: "05 · Sur réservation", name: "Salle de Cinéma", meta: "Une salle de cinéma avec plus de 900 DVD de films de l'histoire du cinéma, pour les hôtes qui dorment à la masseria." },
      { slug: "#", img: "/whatsapp/20261016_170301_1640209704278679.jpg", pos: "center 32%", rotate: -1.5, zoom: 1.1, num: "06 · Sur réservation", name: "Séance de Yoga", meta: "Du yoga dans la salle intérieure du XVIIIe siècle, au sol chauffant : seul et gratuitement, ou avec un cours avec Agata." },
      { slug: "#", img: IMG.wine, num: "07 · En saison", name: "La Piscine à Débordement", meta: "Une piscine à débordement en forme de lac, de 18 mètres de long, à l'eau salée, face aux oliviers monumentaux d'Andria." },
      { slug: "#", img: "/whatsapp/20261029_055849_1760907208350015.jpg", pos: "center 80%", num: "08 · Sur demande", name: "Promenade sur le Domaine", meta: "Marchez dans les 210 hectares du domaine ou dans le Parc national : Murgia sauvage, faucons, renards et fleurs du printemps." },
      { slug: "#", img: "/whatsapp/20261029_055055_2502652003555281.jpg", pos: "center 15%", zoom: 1.3, num: "09 · Sur réservation", name: "Practice de Golf", meta: "Deux drapeaux à 80 mètres dans le pré à côté de la masseria, avec clubs et balles pour quelques coups, seul ou avec Pietro." },
      { slug: "#", img: "/whatsapp/20261029_060653_2451806448686458.jpg", pos: "center 50%", rotate: 0.7, zoom: 1.08, num: "10 · Sur réservation", name: "La Bibliothèque de la Famille Petroni", meta: "Une bibliothèque de famille de plus de 3 000 livres et de vieilles machines à écrire, ouverte aux hôtes jour et nuit, gratuite." },
      { slug: "#", img: "/whatsapp/20261016_172701_1655107209547771.jpg", num: "11 · Sur réservation", name: "Équitation dans le Parc National", meta: "Balades à cheval sur des chevaux dociles dans le Parc national de l'Alta Murgia, avec des centres équestres à proximité ; enfants bienvenus." },
      { slug: "#", img: "/whatsapp/20261029_075305_1107658378700819.jpg", pos: "55% center", num: "12 · Toute l'année", name: "Rencontrez les Animaux de Lama di Luna", meta: "Rencontrez Allen, Romeo, nos 12 chats et les autres résidents permanents de Lama di Luna." },
    ],
    inRegion: [],
  },
  de: {
    eyebrow: "Wie man einen Tag verbringen kann",
    title: "Erlebnisse",
    intro:
      "Die Olivenführung, ein Kochkurs, entspannende Massagen, eine Radtour und ein ruhiger Moment zum Lesen in der Bibliothek.",
    onEstateLabel: "Auf dem Gut",
    arrangeEyebrow: "Sagen Sie uns, was Ihnen gefallen würde",
    arrangeTitle: "Wir helfen Ihnen, den Tag zu planen",
    arrangeText:
      "Alle Erlebnisse werden auf Anfrage organisiert. Viele hängen vom Wetter oder der Jahreszeit ab, manche brauchen ein paar Tage Vorlauf. Schreiben Sie uns Ihre Reisedaten und was Sie interessiert. Lama di Luna ist auch ein Ort für Firmentreffen und Firmenretreats.",
    arrangeCta: "Kontakt aufnehmen",
    onEstate: [
      { slug: "olive-harvest", img: "/whatsapp/20261028_065214_1516459033640755.jpg", num: "01 · Oktober bis November", name: "Olivenölverkostung und Führung", meta: "Eine fachkundige Führung über den Hof, von der Bewässerung bis zur Ernte, mit einer Verkostung von nativem Olivenöl extra auf der Veranda zum Abschluss." },
      { slug: "#", img: "/whatsapp/20261028_070629_1807431347066448.jpg", pos: "center 35%", num: "02 · Halber Tag, auf Anfrage", name: "Kochkurs für frische Pasta", meta: "Eine Stunde mit den Köchinnen von Lama di Luna, um traditionelle apulische Pasta von Hand zu machen: Orecchiette, Strascinati und Cavatelli." },
      { slug: "#", img: "/whatsapp/20261028_085225_1143956144719914.jpg", pos: "center 40%", num: "03 · Nach Vereinbarung", name: "Entspannende Massage", meta: "Auf Anfrage kommt ein Masseur in die Masseria: entspannende oder belebende Massagen in einer ruhigen Ecke des Gutes." },
      { slug: "#", img: "/whatsapp/20261029_053110_2058236084866524.jpg", pos: "center 55%", num: "04 · Halber Tag, auf Anfrage", name: "Radtour", meta: "Fahrräder zum Ausleihen: für Touren über das Gut, durch die Olivenhaine von Andria oder in den Nationalpark Alta Murgia." },
      { slug: "#", img: "/whatsapp/20261029_053509_1420378746847456.jpg", pos: "center 48%", rotate: -1.5, zoom: 1.2, cardPos: "74% 45%", cardZoom: 1.1, num: "05 · Nach Vereinbarung", name: "Kinoraum", meta: "Ein Kinoraum mit über 900 DVDs aus der Geschichte des Films, für Gäste, die in der Masseria übernachten." },
      { slug: "#", img: "/whatsapp/20261016_170301_1640209704278679.jpg", pos: "center 32%", rotate: -1.5, zoom: 1.1, num: "06 · Nach Vereinbarung", name: "Yoga", meta: "Yoga im Innenraum aus dem 18. Jahrhundert mit Fußbodenheizung: allein und kostenlos oder mit einer Stunde bei Agata." },
      { slug: "#", img: IMG.wine, num: "07 · In der Saison", name: "Der Infinity Pool", meta: "Ein Infinity Pool in Form eines Sees, 18 Meter lang, mit Salzwasser und Blick auf die monumentalen Olivenbäume von Andria." },
      { slug: "#", img: "/whatsapp/20261029_055849_1760907208350015.jpg", pos: "center 80%", num: "08 · Auf Anfrage", name: "Spaziergang über das Gut", meta: "Wandern Sie über die 210 Hektar des Gutes oder hinaus in den Nationalpark: wilde Murgia, Falken, Füchse und Frühlingsblumen." },
      { slug: "#", img: "/whatsapp/20261029_055055_2502652003555281.jpg", pos: "center 15%", zoom: 1.3, num: "09 · Nach Vereinbarung", name: "Golfübung", meta: "Zwei Fahnen im Abstand von 80 Metern auf der Wiese neben der Masseria, mit Schlägern und Bällen für ein paar Schläge, allein oder mit Pietro." },
      { slug: "#", img: "/whatsapp/20261029_060653_2451806448686458.jpg", pos: "center 50%", rotate: 0.7, zoom: 1.08, num: "10 · Nach Vereinbarung", name: "Die Bibliothek der Familie Petroni", meta: "Eine Familienbibliothek mit über 3.000 Büchern und alten Schreibmaschinen, Tag und Nacht für Gäste geöffnet, kostenlos." },
      { slug: "#", img: "/whatsapp/20261016_172701_1655107209547771.jpg", num: "11 · Nach Vereinbarung", name: "Reiten im Nationalpark", meta: "Ausritte auf sanften Pferden im Nationalpark Alta Murgia, mit Reitställen in der Nähe; Kinder willkommen." },
      { slug: "#", img: "/whatsapp/20261029_075305_1107658378700819.jpg", pos: "55% center", num: "12 · Das ganze Jahr", name: "Die Tiere von Lama di Luna", meta: "Lernen Sie Allen, Romeo, unsere 12 Katzen und die anderen ständigen Bewohner von Lama di Luna kennen." },
    ],
    inRegion: [],
  },
}

export const experiences = Object.fromEntries(
  Object.entries(base).map(([lang, c]) => [
    lang,
    {
      ...c,
      onEstate: c.onEstate
        .map((card, i) => ({ ...card, slug: experienceSlugs.onEstate[i] }))
        .sort((a, b) => displayOrder.indexOf(a.slug) - displayOrder.indexOf(b.slug))
        .map((card, i) => ({ ...card, num: card.num.replace(/^\d+/, String(i + 1).padStart(2, "0")) })),
      inRegion: c.inRegion.map((card, i) => ({ ...card, slug: experienceSlugs.inRegion[i] })),
    },
  ])
) as Record<"en" | "it" | "fr" | "de", ExperiencesContent>
