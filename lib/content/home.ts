import type { Locale } from "@/lib/i18n"

type Room = { slug: string; name: string; desc: string; img: string }

export type HomeContent = {
  statementTitle: string
  statementBody: string[]
  discover: string
  roomsLabel: string
  rooms: Room[]
  roomsCta: string
  landLabel: string
  videoLabel: string
  kitchenLabel: string
  kitchenImg: string
  kitchenText: string[]
  kitchenCta: string
  fullPhoto: string
  experiencesLabel: string
  experiencesImg: string
  experiencesText: string[]
  experiencesCta: string
  whereLabel: string
  mapText: string[]
  mapCta: string
  newsletterText: string
  newsletterPlaceholder: string
  newsletterButton: string
  newsletterConsent: string
}

const IMG = {
  coloni: "/room-coloni.jpg",
  murgia: "/room-suite-deluxe.jpg",
  deluxe: "/room-suite-deluxe-entrance.jpg",
  land: "/experiences-hikers.jpg",
  full: "/pool-sunset.jpg",
  kitchen: "/kitchen-pomodori.jpg",
}

export const home: Record<Locale, HomeContent> = {
  en: {
    statementTitle: "Experience Puglia's nature, agriculture and history at its most authentic",
    statementBody: [
      "Our 18th century farmhouse or masseria, restored to its original glory, is nestled in a 518-acre estate of all organic olive groves, almond groves, vineyards and wildlands. Stay in our rustic rooms, formerly inhabited by settler Mezzadri farmers, and refurbished using bioarchitecture and artisanal furniture. Immerse yourself in the tranquility and natural beauty of the sprawling Murgia national park. Languish in our panoramic pool overlooking vast olive fields. Taste our high quality extra virgin olive oil, almonds and local produce at The Veranda restaurant.",
      "Let time stand still at Lama di Luna, our Valley of the Moon.",
    ],
    discover: "Read our story",
    roomsLabel: "Stay at our home",
    rooms: [
      {
        slug: "coloni",
        name: "Coloni",
        desc: "Once a settler's dwelling, the Coloni room opens onto the inner courtyard. Fireplace, pine and olive wood beds, terracotta basin, raw cotton sheets.",
        img: IMG.coloni,
      },
      {
        slug: "murgia",
        name: "Murgia",
        desc: "Named for the wild uplands beyond the walls, the Murgia room looks out over the olive groves and open countryside. Whitewashed stone, a vaulted ceiling, brass bed from the 1800s and natural linen — quiet and full of light.",
        img: IMG.murgia,
      },
      {
        slug: "suite-deluxe-masseria",
        name: "Suite Deluxe",
        desc: "An imperial bed, private sauna and a panoramic terrace over the olive groves — for those who arrive intending to forget the world for a while.",
        img: IMG.deluxe,
      },
    ],
    roomsCta: "Discover the rooms",
    landLabel: "Our story",
    videoLabel: "Watch the film",
    kitchenLabel: "Taste our food",
    kitchenImg: IMG.kitchen,
    kitchenText: [
      "Breakfast arrives slowly, beneath the vaulted ceiling of the old refectory: almond pastries from the village, fresh ricotta from a neighbouring farm, jams pressed from the estate's own fruit, eggs from the courtyard hens, our own olive oil on warm bread.",
      "By arrangement, the kitchen will open for lunch and in the evening — typical Murgian and Pugliese recipes, simply made with what the estate has given that day.",
    ],
    kitchenCta: "The Veranda restaurant",
    fullPhoto: IMG.full,
    experiencesLabel: "Experience our territory",
    experiencesImg: IMG.land,
    experiencesText: [
      "Beyond the table, the estate opens itself to those who wish to explore. Walk the old drovers' paths through the Alta Murgia, ride out among the olive trees, or join the harvest when the season turns.",
      "Guided tastings of our oil and wine, cooking beside the cook in the old refectory, stargazing from the courtyard — each experience is arranged quietly, in its own time.",
    ],
    experiencesCta: "Discover experiences",
    whereLabel: "Where We Are",
    mapText: [
      "Lama di Luna sits at the border of the Alta Murgia National Park, in Contrada Lama di Luna near Andria — twenty minutes from Castel del Monte, fifty-five from Bari airport, and twenty minutes from the Adriatic coast. An ideal base for visiting Castel del Monte, Trani, Matera, Polignano a Mare, Alberobello and the long Pugliese coast.",
    ],
    mapCta: "How to reach us",
    newsletterText: "Subscribe to our newsletter to stay close to the masseria.",
    newsletterPlaceholder: "Email address",
    newsletterButton: "Subscribe to our newsletter",
    newsletterConsent: "I accept the terms & conditions and the privacy policy",
  },
  it: {
    statementTitle: "Vivi la natura, l'agricoltura e la storia della Puglia nella loro forma più autentica",
    statementBody: [
      "La nostra masseria del XVIII secolo, riportata al suo antico splendore, è immersa in una tenuta di 210 ettari di uliveti, mandorleti, vigneti e terre selvagge, tutti biologici. Soggiorna nelle nostre camere rustiche, un tempo abitate da coloni e mezzadri, e ristrutturate con bioarchitettura e arredi artigianali. Immergiti nella tranquillità e nella bellezza naturale dell'immenso Parco Nazionale dell'Alta Murgia. Rilassati nella nostra piscina panoramica affacciata su vasti campi di ulivi. Assapora il nostro olio extravergine d'oliva di alta qualità, le mandorle e i prodotti locali al ristorante The Veranda.",
      "Lascia che il tempo si fermi a Lama di Luna, la nostra Valle della Luna.",
    ],
    discover: "Leggi la nostra storia",
    roomsLabel: "Le Camere",
    rooms: [
      {
        slug: "coloni",
        name: "Coloni",
        desc: "Un tempo dimora di coloni, la camera Coloni si apre sul cortile interno. Camino, letti in pino e legno d'ulivo, lavabo in terracotta, lenzuola di cotone grezzo.",
        img: IMG.coloni,
      },
      {
        slug: "murgia",
        name: "Murgia",
        desc: "Dedicata agli altopiani selvaggi oltre le mura, la camera Murgia si affaccia sugli uliveti e sulla campagna aperta. Pietra imbiancata a calce, volta a botte, letto in ottone dell'Ottocento e lino naturale — silenziosa e piena di luce.",
        img: IMG.murgia,
      },
      {
        slug: "suite-deluxe-masseria",
        name: "Suite Deluxe",
        desc: "Un letto imperiale, sauna privata e una terrazza panoramica sugli uliveti — per chi arriva con l'intenzione di dimenticare il mondo per un po'.",
        img: IMG.deluxe,
      },
    ],
    roomsCta: "Scopri le camere",
    landLabel: "La Terra",
    videoLabel: "Guarda il film",
    kitchenLabel: "La Cucina",
    kitchenImg: IMG.kitchen,
    kitchenText: [
      "La colazione arriva lenta, sotto la volta dell'antico refettorio: dolci alle mandorle del paese, ricotta fresca di una fattoria vicina, marmellate della frutta della tenuta, uova delle galline del cortile, il nostro olio d'oliva sul pane caldo.",
      "Su prenotazione, la cucina si apre la sera — ricette tipiche della Murgia e della Puglia, fatte semplicemente con ciò che la tenuta ha dato quel giorno.",
    ],
    kitchenCta: "Il ristorante The Veranda",
    fullPhoto: IMG.full,
    experiencesLabel: "Esperienze",
    experiencesImg: IMG.land,
    experiencesText: [
      "Oltre la tavola, la tenuta si apre a chi desidera esplorare. Percorri gli antichi tratturi dell'Alta Murgia, cavalca tra gli ulivi o unisciti alla raccolta quando cambia la stagione.",
      "Degustazioni guidate del nostro olio e del nostro vino, cucina accanto alla cuoca nell'antico refettorio, osservazione delle stelle dal cortile — ogni esperienza è organizzata con calma, nel suo tempo.",
    ],
    experiencesCta: "Scopri le esperienze",
    whereLabel: "Dove Siamo",
    mapText: [
      "Lama di Luna sorge nel cuore del Parco Nazionale dell'Alta Murgia, in Contrada Lama di Luna vicino Andria — venti minuti da Castel del Monte, cinquantacinque dall'aeroporto di Bari, un'ora dalla costa adriatica.",
      "Una base ideale per Castel del Monte, Trani, Matera, Polignano a Mare, Alberobello e la lunga costa pugliese.",
    ],
    mapCta: "Come raggiungerci",
    newsletterText: "Iscriviti alla nostra newsletter per restare vicino alla masseria.",
    newsletterPlaceholder: "Indirizzo email",
    newsletterButton: "Iscriviti alla newsletter",
    newsletterConsent: "Accetto i termini e le condizioni e la privacy policy",
  },
  fr: {
    statementTitle: "Vivez la nature, l'agriculture et l'histoire des Pouilles sous leur forme la plus authentique",
    statementBody: [
      "Notre ferme du XVIIIe siècle, ou masseria, rendue à sa splendeur d'origine, est nichée dans un domaine de 210 hectares d'oliveraies, d'amanderaies, de vignes et de terres sauvages, entièrement biologiques. Séjournez dans nos chambres rustiques, autrefois habitées par les métayers, et rénovées selon les principes de la bioarchitecture avec du mobilier artisanal. Plongez dans la tranquillité et la beauté naturelle du vaste Parc national de la Murgia. Prélassez-vous dans notre piscine panoramique qui domine les champs d'oliviers. Goûtez notre huile d'olive extra vierge de grande qualité, nos amandes et les produits locaux au restaurant The Veranda.",
      "Laissez le temps s'arrêter à Lama di Luna, notre Vallée de la Lune.",
    ],
    discover: "Découvrez notre histoire",
    roomsLabel: "Séjournez chez nous",
    rooms: [
      {
        slug: "coloni",
        name: "Coloni",
        desc: "Ancienne demeure de colons, la chambre Coloni donne sur la cour intérieure. Cheminée, lits en pin et en bois d'olivier, vasque en terre cuite, draps en coton brut.",
        img: IMG.coloni,
      },
      {
        slug: "murgia",
        name: "Murgia",
        desc: "Baptisée d'après les hauts plateaux sauvages au delà des murs, la chambre Murgia s'ouvre sur les oliveraies et la campagne. Pierre blanchie à la chaux, plafond voûté, lit en laiton du XIXe siècle et lin naturel : calme et pleine de lumière.",
        img: IMG.murgia,
      },
      {
        slug: "suite-deluxe-masseria",
        name: "Suite Deluxe",
        desc: "Un lit impérial, un sauna privé et une terrasse panoramique sur les oliveraies, pour ceux qui arrivent avec l'envie d'oublier le monde pour un temps.",
        img: IMG.deluxe,
      },
    ],
    roomsCta: "Découvrez les chambres",
    landLabel: "Notre histoire",
    videoLabel: "Regardez le film",
    kitchenLabel: "Goûtez notre cuisine",
    kitchenImg: IMG.kitchen,
    kitchenText: [
      "Le petit déjeuner arrive lentement, sous la voûte de l'ancien réfectoire : pâtisseries aux amandes du village, ricotta fraîche d'une ferme voisine, confitures des fruits du domaine, œufs des poules de la cour, notre huile d'olive sur du pain chaud.",
      "Sur demande, la cuisine ouvre pour le déjeuner et le soir : recettes typiques de la Murgia et des Pouilles, préparées simplement avec ce que le domaine a donné ce jour-là.",
    ],
    kitchenCta: "Le restaurant The Veranda",
    fullPhoto: IMG.full,
    experiencesLabel: "Découvrez notre territoire",
    experiencesImg: IMG.land,
    experiencesText: [
      "Au delà de la table, le domaine s'ouvre à ceux qui souhaitent l'explorer. Parcourez les anciens chemins de transhumance de l'Alta Murgia, partez à cheval parmi les oliviers ou participez à la récolte quand la saison change.",
      "Dégustations guidées de notre huile et de notre vin, cuisine aux côtés de la cuisinière dans l'ancien réfectoire, observation des étoiles depuis la cour : chaque expérience s'organise en douceur, à son rythme.",
    ],
    experiencesCta: "Découvrez les expériences",
    whereLabel: "Où nous trouver",
    mapText: [
      "Lama di Luna se trouve aux portes du Parc national de l'Alta Murgia, dans la Contrada Lama di Luna près d'Andria, à vingt minutes de Castel del Monte, cinquante-cinq de l'aéroport de Bari et vingt de la côte adriatique. Une base idéale pour visiter Castel del Monte, Trani, Matera, Polignano a Mare, Alberobello et la longue côte des Pouilles.",
    ],
    mapCta: "Comment venir",
    newsletterText: "Abonnez-vous à notre newsletter pour rester proche de la masseria.",
    newsletterPlaceholder: "Adresse e-mail",
    newsletterButton: "Abonnez-vous à notre newsletter",
    newsletterConsent: "J'accepte les conditions générales et la politique de confidentialité",
  },
}
