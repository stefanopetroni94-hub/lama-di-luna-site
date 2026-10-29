export type Fact = { label: string; value: string }
export type TimelineItem = { time: string; title: string; body: string }
export type IncludedItem = { text: string; not?: boolean }
export type OtherCard = { img: string; name: string; meta: string }

export type OliveHarvestContent = {
  counter: string
  breadcrumbRoot: string
  breadcrumbCurrent: string
  heroEyebrow: string
  title: string
  statementTitle: string
  statementBody: string[]
  facts: Fact[]
  curvedLabel: string
  timeline: TimelineItem[]
  photos: [string, string]
  includedEyebrow: string
  includedTitle: string
  included: IncludedItem[]
  priceLabel: string
  priceAmount: string
  priceUnit: string
  priceNote: string
  bookingEyebrow: string
  bookingTitle: string
  bookingText: string
  bookingCta: string
  otherEyebrow: string
  otherTitle: string
  other: OtherCard[]
}

const P = {
  olive: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748888083/omou7cxhd8opgelkbeuz.jpg",
  wine: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748365479/bao85el3tzzrazwmnjtl.jpg",
  cooking: "https://res.cloudinary.com/amenitiz/image/upload/w_1000,q_auto:best,f_auto,c_fill/v1748888055/nxskbhvgtpuxzfoqavfb.jpg",
  dawn: "https://res.cloudinary.com/amenitiz/image/upload/w_1000,q_auto:best,f_auto,c_fill/v1679928579/czk5bwys9xduwfefummm.jpg",
  alberobello: "https://res.cloudinary.com/amenitiz/image/upload/w_1000,q_auto:best,f_auto,c_fill/v1747243212/wj7lc1n5p7gpmqnwredd.jpg",
}

export const oliveHarvest: Record<"en" | "it" | "fr", OliveHarvestContent> = {
  en: {
    counter: "Experience 01 / 08",
    breadcrumbRoot: "Experiences",
    breadcrumbCurrent: "Olive Oil Tasting and Tour",
    heroEyebrow: "October – November · estate experience",
    title: "Olive Oil Tasting and Tour",
    statementTitle: "Walk the groves, watch the cold press, taste the first oil of the year",
    statementBody: [
      "A professional tour of the Lama di Luna farm, where you learn the basics of agronomy: from irrigation to the harvest, and the 11 different olive varieties grown at Lama di Luna, from centuries-old trees to very young trees trained on trellises. The tour ends on the veranda, where you taste the extra virgin olive oils of Lama di Luna and learn how to taste an oil, how to recognise its qualities, whether it is good or not, and how to choose one at the supermarket.",
    ],
    facts: [
      { label: "Season", value: "Late Oct – mid Nov" },
      { label: "Duration", value: "4 hours" },
      { label: "Group size", value: "2 – 8 guests" },
      { label: "Language", value: "EN · IT · DE" },
      { label: "Difficulty", value: "Gentle walk" },
      { label: "From", value: "€85 / person" },
    ],
    curvedLabel: "The Morning",
    timeline: [
      { time: "07:30", title: "Coffee in the courtyard", body: "Espresso, almond pastries from the village, a quick brief on what the day's grove will look like. You're given a basket and walking shoes if you didn't bring your own." },
      { time: "08:00", title: "Into the groves", body: "A 15-minute walk through 500-year-old olive trees to the day's harvest section. The hand-picking begins. You'll see traditional Pugliese rakes used to gently drop ripe olives onto nets — never beaten, never machine-shaken." },
      { time: "09:30", title: "The cold press", body: "The first morning's crates are driven to the on-estate mill. You'll watch the olives go in, the paste come out, the centrifuge separate oil from water. Forty-five minutes from grove to oil." },
      { time: "10:30", title: "The first tasting", body: "A breakfast under the loggia: warm focaccia, salt, the just-pressed oil poured over it, a glass of Negroamaro. We discuss what you've tasted — peppery, grassy, almondy — and what tells you it's been pressed within the hour." },
      { time: "11:30", title: "You leave with a bottle", body: "Each guest leaves with a 500ml bottle of the morning's oil, labelled with the day's date. The freshest extra-virgin olive oil you will ever take home." },
    ],
    photos: [P.olive, P.wine],
    includedEyebrow: "Included",
    includedTitle: "What you get",
    included: [
      { text: "Half-day guided morning, sunrise to late morning" },
      { text: "Walk through the historic olive groves with Pietro or the estate manager" },
      { text: "Visit to the on-estate cold-press mill, in season" },
      { text: "Tasting breakfast: focaccia, oil, wine, almond pastries" },
      { text: "A 500ml bottle of the morning's pressed oil to take home" },
      { text: "Photography permitted throughout" },
      { text: "Transport to/from the masseria (we recommend staying with us)", not: true },
      { text: "Lunch (we can arrange separately)", not: true },
    ],
    priceLabel: "Price",
    priceAmount: "€85",
    priceUnit: "per guest",
    priceNote: "Children under 12 free when accompanied by an adult. Minimum 2 guests. Maximum 8 per session for an intimate experience.",
    bookingEyebrow: "October to November only",
    bookingTitle: "Arrange your olive oil tasting and tour",
    bookingText: "Best paired with a 2- or 3-night stay during the harvest season. Tell us your dates and we'll confirm availability and the most likely picking day.",
    bookingCta: "Get in touch",
    otherEyebrow: "Continue",
    otherTitle: "Other Experiences",
    other: [
      { img: P.cooking, name: "Orecchiette & Focaccia", meta: "Cooking class · half-day, on request" },
      { img: P.dawn, name: "Dawn Walk in the Groves", meta: "Sunrise · 90 minutes" },
      { img: P.alberobello, name: "Alberobello & the Trulli", meta: "Day trip · 1h 10 min drive" },
    ],
  },
  it: {
    counter: "Esperienza 01 / 08",
    breadcrumbRoot: "Esperienze",
    breadcrumbCurrent: "Degustazione e Tour dell'Olio d'Oliva",
    heroEyebrow: "Ottobre – Novembre · esperienza in masseria",
    title: "Degustazione e Tour dell'Olio d'Oliva",
    statementTitle: "Cammina tra gli ulivi, osserva la spremitura a freddo, assaggia il primo olio dell'anno",
    statementBody: [
      "Un tour professionale dell'azienda agricola Lama di Luna, in cui si apprendono nozioni agronomiche: dall'irrigazione alla raccolta, fino alle 11 diverse varietà di olive coltivate a Lama di Luna, da alberi centenari ad alberi giovanissimi coltivati a spalliera. Il tour si conclude sulla veranda, dove si assaggiano gli oli extravergine di oliva di Lama di Luna e si impara come assaggiare un olio, come riconoscerne le proprietà, se è buono o meno e come sceglierlo al supermercato.",
    ],
    facts: [
      { label: "Stagione", value: "Fine ott – metà nov" },
      { label: "Durata", value: "4 ore" },
      { label: "Gruppo", value: "2 – 8 ospiti" },
      { label: "Lingua", value: "EN · IT · DE" },
      { label: "Difficoltà", value: "Passeggiata leggera" },
      { label: "Da", value: "€85 / persona" },
    ],
    curvedLabel: "La Mattina",
    timeline: [
      { time: "07:30", title: "Caffè nel cortile", body: "Espresso, dolcetti alle mandorle del paese, una breve introduzione su come sarà l'uliveto della giornata. Ti diamo un cesto e scarpe da camminata se non le hai portate." },
      { time: "08:00", title: "Tra gli ulivi", body: "Una passeggiata di 15 minuti tra ulivi di 500 anni fino alla sezione di raccolta del giorno. Inizia la raccolta a mano. Vedrai i tradizionali rastrelli pugliesi usati per far cadere delicatamente le olive mature sulle reti — mai battute, mai scosse a macchina." },
      { time: "09:30", title: "La spremitura a freddo", body: "Le prime cassette del mattino vengono portate al frantoio della masseria. Vedrai entrare le olive, uscire la pasta, la centrifuga separare l'olio dall'acqua. Quarantacinque minuti dall'uliveto all'olio." },
      { time: "10:30", title: "La prima degustazione", body: "Una colazione sotto la loggia: focaccia calda, sale, l'olio appena spremuto versato sopra, un bicchiere di Negroamaro. Parliamo di ciò che hai assaggiato — piccante, erbaceo, di mandorla — e di cosa ti dice che è stato spremuto da meno di un'ora." },
      { time: "11:30", title: "Parti con una bottiglia", body: "Ogni ospite parte con una bottiglia da 500ml dell'olio del mattino, etichettata con la data del giorno. L'olio extravergine più fresco che porterai mai a casa." },
    ],
    photos: [P.olive, P.wine],
    includedEyebrow: "Incluso",
    includedTitle: "Cosa comprende",
    included: [
      { text: "Mattinata guidata di mezza giornata, dall'alba a tarda mattina" },
      { text: "Passeggiata tra gli uliveti storici con Pietro o il responsabile della masseria" },
      { text: "Visita al frantoio a freddo della masseria, in stagione" },
      { text: "Colazione degustazione: focaccia, olio, vino, dolcetti alle mandorle" },
      { text: "Una bottiglia da 500ml dell'olio spremuto del mattino da portare a casa" },
      { text: "Fotografie consentite ovunque" },
      { text: "Trasporto da/per la masseria (consigliamo di soggiornare da noi)", not: true },
      { text: "Pranzo (possiamo organizzarlo separatamente)", not: true },
    ],
    priceLabel: "Prezzo",
    priceAmount: "€85",
    priceUnit: "a ospite",
    priceNote: "Bambini sotto i 12 anni gratis se accompagnati da un adulto. Minimo 2 ospiti. Massimo 8 per sessione per un'esperienza intima.",
    bookingEyebrow: "Solo da ottobre a novembre",
    bookingTitle: "Organizza la tua degustazione e il tour dell'olio",
    bookingText: "Ideale in abbinamento a un soggiorno di 2 o 3 notti durante la stagione della raccolta. Dicci le tue date e confermeremo la disponibilità e il giorno di raccolta più probabile.",
    bookingCta: "Contattaci",
    otherEyebrow: "Continua",
    otherTitle: "Altre Esperienze",
    other: [
      { img: P.cooking, name: "Orecchiette e Focaccia", meta: "Corso di cucina · mezza giornata, su richiesta" },
      { img: P.dawn, name: "Passeggiata all'Alba tra gli Ulivi", meta: "Alba · 90 minuti" },
      { img: P.alberobello, name: "Alberobello e i Trulli", meta: "Gita · 1h 10 min di macchina" },
    ],
  },
  fr: {
    counter: "Expérience 01 / 08",
    breadcrumbRoot: "Expériences",
    breadcrumbCurrent: "Dégustation d'Huile d'Olive et Visite",
    heroEyebrow: "Octobre à novembre · expérience au domaine",
    title: "Dégustation d'Huile d'Olive et Visite",
    statementTitle: "Marchez dans les oliveraies, assistez à la pression à froid, goûtez la première huile de l'année",
    statementBody: [
      "Une visite professionnelle de la ferme Lama di Luna, où l'on apprend les bases de l'agronomie : de l'irrigation à la récolte, jusqu'aux 11 variétés d'olives différentes cultivées à Lama di Luna, des arbres centenaires aux très jeunes arbres conduits en espalier. La visite se termine sur la véranda, où l'on déguste les huiles d'olive extra vierges de Lama di Luna et où l'on apprend à déguster une huile, à reconnaître ses qualités, à savoir si elle est bonne ou non et à la choisir au supermarché.",
    ],
    facts: [
      { label: "Saison", value: "Fin oct. à mi-nov." },
      { label: "Durée", value: "4 heures" },
      { label: "Groupe", value: "2 à 8 personnes" },
      { label: "Langue", value: "EN · IT · DE" },
      { label: "Difficulté", value: "Marche facile" },
      { label: "À partir de", value: "€85 / personne" },
    ],
    curvedLabel: "La Matinée",
    timeline: [
      { time: "07:30", title: "Café dans la cour", body: "Espresso, pâtisseries aux amandes du village et une courte présentation de l'oliveraie du jour. Nous vous donnons un panier et des chaussures de marche si vous n'en avez pas." },
      { time: "08:00", title: "Dans les oliveraies", body: "Une marche de 15 minutes parmi des oliviers de 500 ans jusqu'à la parcelle récoltée ce jour-là. La cueillette à la main commence. Vous verrez les râteaux traditionnels des Pouilles qui font tomber doucement les olives mûres sur les filets, jamais gaulées, jamais secouées à la machine." },
      { time: "09:30", title: "La pression à froid", body: "Les premières cagettes du matin partent au moulin du domaine. Vous verrez les olives entrer, la pâte sortir, la centrifugeuse séparer l'huile de l'eau. Quarante-cinq minutes de l'oliveraie à l'huile." },
      { time: "10:30", title: "La première dégustation", body: "Un petit déjeuner sous la loggia : focaccia chaude, sel, l'huile tout juste pressée versée dessus, un verre de Negroamaro. Nous parlons de ce que vous avez goûté, poivré, herbacé, amandé, et de ce qui montre qu'elle a été pressée il y a moins d'une heure." },
      { time: "11:30", title: "Vous repartez avec une bouteille", body: "Chaque hôte repart avec une bouteille de 500 ml de l'huile du matin, étiquetée à la date du jour. L'huile d'olive extra vierge la plus fraîche que vous rapporterez jamais chez vous." },
    ],
    photos: [P.olive, P.wine],
    includedEyebrow: "Inclus",
    includedTitle: "Ce qui est compris",
    included: [
      { text: "Matinée guidée d'une demi-journée, de l'aube à la fin de matinée" },
      { text: "Promenade dans les oliveraies historiques avec Pietro ou le responsable du domaine" },
      { text: "Visite du moulin à froid du domaine, en saison" },
      { text: "Petit déjeuner dégustation : focaccia, huile, vin, pâtisseries aux amandes" },
      { text: "Une bouteille de 500 ml de l'huile pressée le matin, à emporter" },
      { text: "Photos autorisées partout" },
      { text: "Transport aller et retour à la masseria (nous conseillons de séjourner chez nous)", not: true },
      { text: "Déjeuner (nous pouvons l'organiser à part)", not: true },
    ],
    priceLabel: "Prix",
    priceAmount: "€85",
    priceUnit: "par personne",
    priceNote: "Gratuit pour les enfants de moins de 12 ans accompagnés d'un adulte. Minimum 2 personnes. Maximum 8 par séance pour une expérience intime.",
    bookingEyebrow: "D'octobre à novembre uniquement",
    bookingTitle: "Organisez votre dégustation d'huile d'olive et votre visite",
    bookingText: "Idéal avec un séjour de 2 ou 3 nuits pendant la saison de la récolte. Indiquez-nous vos dates et nous vous confirmerons la disponibilité et le jour de cueillette le plus probable.",
    bookingCta: "Contactez-nous",
    otherEyebrow: "Continuer",
    otherTitle: "Autres Expériences",
    other: [
      { img: P.cooking, name: "Orecchiette et Focaccia", meta: "Cours de cuisine · demi-journée, sur demande" },
      { img: P.dawn, name: "Promenade à l'aube dans les oliveraies", meta: "Lever du soleil · 90 minutes" },
      { img: P.alberobello, name: "Alberobello et les Trulli", meta: "Excursion · 1h 10 min en voiture" },
    ],
  },
}
