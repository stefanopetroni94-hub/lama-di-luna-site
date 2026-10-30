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
  stay: string
  weddingsText: string
  retreatsText: string
  gatheringsText: string
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
    statementTitle: "Take the whole masseria for yourself",
    statementBody: [
      "For weddings, family gatherings, retreats or simply the desire to disappear together, Lama di Luna can be reserved in its entirety. The eleven rooms, which sleep up to 27 people, the courtyard, the pool, the library, the cinema room and the refectory become yours alone. There are no other guests, no fixed schedule, no interruptions. With our chefs and our staff at your disposal, from the concierge to the reception, organising your time in Puglia becomes effortless. To reserve the whole masseria we ask for a minimum stay of three nights.",
    ],
    stay: "",
    weddingsText:
      "The masseria can host weddings of up to 150 guests. There are several areas to choose from: dinners in the courtyard and, indoors, beautiful historic rooms from the 1800s where you can celebrate sheltered from the weather.",
    retreatsText:
      "Yoga retreats, wellness retreats, business retreats, and personal growth retreats: we welcome every kind of retreat that looks for a place of peace and harmony, set in an organic farm run with care by a family. The food comes from our area, follows the seasons and is prepared with love.",
    gatheringsText:
      "The rooms that open onto the inner courtyard are a perfect place for friends or families to come together and spend time in peace and happiness, among the sunsets and the olive trees of Puglia. With a private kitchen and a dedicated staff, every stay becomes a magical experience.",
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
    bookingCta: "Make an inquiry",
  },
  it: {
    counter: "Intera tenuta",
    breadcrumbRoot: "Home",
    breadcrumbCurrent: "Masseria in esclusiva",
    heroEyebrow: "La masseria, tutta per te",
    title: "Masseria in Esclusiva",
    statementTitle: "Prendi l'intera masseria per te",
    statementBody: [
      "Per matrimoni, riunioni di famiglia, ritiri o semplicemente il desiderio di sparire insieme, Lama di Luna può essere riservata per intero. Le undici camere, che accolgono fino a 27 persone, il cortile, la piscina, la biblioteca, la sala cinema e il refettorio diventano solo tuoi. Nessun altro ospite, nessun orario fisso, nessuna interruzione. Con i nostri cuochi e il nostro staff a tua disposizione, dal concierge alla reception, organizzare il tuo tempo in Puglia diventa semplice. Per prendere l'intera masseria chiediamo un soggiorno minimo di tre notti.",
    ],
    stay: "",
    weddingsText:
      "La masseria può ospitare matrimoni fino a 150 persone. Ci sono diverse aree tra cui scegliere: cene nella corte e, al chiuso, bellissimi spazi storici dell'Ottocento dove festeggiare al riparo dal maltempo.",
    retreatsText:
      "Ritiri di yoga, di benessere, aziendali e di crescita personale: accogliamo ogni tipo di ritiro che cerchi un luogo di pace e armonia, immerso in un'azienda biologica curata con attenzione da una famiglia. Il cibo viene dalla nostra zona, segue le stagioni ed è preparato con amore.",
    gatheringsText:
      "Le camere che si affacciano sulla corte interna sono un luogo perfetto per riunirsi tra amici o tra famiglie e passare del tempo in tranquillità e felicità, tra i tramonti e gli ulivi pugliesi. Con una cucina privata e uno staff dedicato, ogni soggiorno diventa un'esperienza magica.",
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
    bookingCta: "Fai una richiesta",
  },
  fr: {
    counter: "Domaine entier",
    breadcrumbRoot: "Accueil",
    breadcrumbCurrent: "Masseria en exclusivité",
    heroEyebrow: "La masseria, rien que pour vous",
    title: "Masseria en exclusivité",
    statementTitle: "Toute la masseria rien que pour vous",
    statementBody: [
      "Pour un mariage, une réunion de famille, une retraite ou simplement l'envie de disparaître ensemble, Lama di Luna peut être réservée dans son intégralité. Les onze chambres, qui accueillent jusqu'à 27 personnes, la cour, la piscine, la bibliothèque, la salle de cinéma et le réfectoire sont à vous seuls. Pas d'autres hôtes, pas d'horaires fixes, aucune interruption. Avec nos cuisiniers et notre équipe à votre disposition, de la conciergerie à la réception, organiser votre séjour dans les Pouilles devient un jeu d'enfant. Pour réserver toute la masseria, nous demandons un séjour minimum de trois nuits.",
    ],
    stay: "",
    weddingsText:
      "La masseria peut accueillir des mariages jusqu'à 150 invités. Plusieurs espaces sont à votre choix : des dîners dans la cour et, à l'intérieur, de magnifiques salles historiques du XIXe siècle pour célébrer à l'abri des intempéries.",
    retreatsText:
      "Retraites de yoga, de bien-être, d'entreprise et de développement personnel : nous accueillons toute retraite à la recherche d'un lieu de paix et d'harmonie, au cœur d'une ferme biologique tenue avec soin par une famille. La cuisine vient de notre terroir, suit les saisons et est préparée avec amour.",
    gatheringsText:
      "Les chambres qui donnent sur la cour intérieure sont un lieu parfait pour se retrouver entre amis ou en famille et passer du temps dans la sérénité et la joie, entre les couchers de soleil et les oliviers des Pouilles. Avec une cuisine privée et une équipe dédiée, chaque séjour devient une expérience magique.",
    facts: [
      { label: "Capacité", value: "Jusqu'à 22 personnes" },
      { label: "Chambres", value: "11 chambres restaurées" },
      { label: "Terres", value: "210 hectares, en bio" },
      { label: "Minimum", value: "2 nuits, domaine entier" },
    ],
    curvedLabel: "Rien que pour vous",
    perksEyebrow: "Ce que signifie l'exclusivité",
    perksTitle: "Le domaine, sans personne d'autre",
    perks: [
      {
        title: "Toutes les chambres",
        body: "Les onze chambres de la masseria, des logis des colons à la suite deluxe, réservées à votre seul groupe.",
      },
      {
        title: "Cuisine privée",
        body: "The Veranda cuisine pour vous seuls : menus sur mesure avec les légumes du potager, longues tablées sous les voûtes ou sous les étoiles.",
      },
      {
        title: "Les espaces extérieurs",
        body: "Les cours, la piscine panoramique, la chapelle et les oliveraies : toute la vallée ouverte pour flâner, se retrouver et faire la fête.",
      },
      {
        title: "Un hôte dédié",
        body: "Une seule personne pour tout organiser : transferts, dégustations, musique, fleurs et les petits détails qui font de la rencontre la vôtre.",
      },
      {
        title: "Expériences sur demande",
        body: "Dégustations d'huile d'olive, récoltes, cours de cuisine et excursions guidées dans l'Alta Murgia, organisés autour de vos journées.",
      },
      {
        title: "Autonome, en tout confort",
        body: "Alimentée par le soleil et chauffée à l'eau solaire : un luxe discret et durable, sans le moindre compromis sur le confort.",
      },
    ],
    photos: [IMG.photo1, IMG.photo2],
    occasionsEyebrow: "Pour les occasions qui comptent",
    occasionsTitle: "Un lieu fait pour se retrouver",
    occasionsBody: [
      "Des couples se marient dans la cour quand la lumière devient dorée. Des familles prennent toute la maison pour un été, les enfants courant entre les oliviers. Des entreprises y amènent leurs équipes pour ralentir et réfléchir sereinement quelques jours.",
      "Quelle que soit l'occasion, la masseria l'accueille avec douceur : assez d'espace pour chacun, assez de calme pour les moments qui comptent.",
    ],
    fullImg: IMG.full,
    bookingEyebrow: "Demandez l'usage exclusif",
    bookingTitle: "Réservez toute la masseria",
    bookingText:
      "Indiquez-nous vos dates, le nombre de personnes et le type de rencontre que vous imaginez. Nous préparerons une proposition sur mesure pour le domaine en exclusivité.",
    bookingCta: "Faire une demande",
  },
  de: {
    counter: "Das ganze Gut",
    breadcrumbRoot: "Startseite",
    breadcrumbCurrent: "Masseria exklusiv",
    heroEyebrow: "Die Masseria, ganz für Sie",
    title: "Masseria exklusiv",
    statementTitle: "Die ganze Masseria für Sie allein",
    statementBody: [
      "Für Hochzeiten, Familientreffen, Retreats oder einfach den Wunsch, gemeinsam zu verschwinden, kann Lama di Luna komplett gemietet werden. Die elf Zimmer für bis zu 27 Personen, der Innenhof, der Pool, die Bibliothek, der Kinoraum und das Refektorium gehören dann nur Ihnen. Keine anderen Gäste, keine festen Zeiten, keine Unterbrechungen. Mit unseren Köchen und unserem Team an Ihrer Seite, vom Concierge bis zur Rezeption, wird die Planung Ihrer Zeit in Apulien ganz einfach. Für die Exklusivnutzung der ganzen Masseria bitten wir um einen Mindestaufenthalt von drei Nächten.",
    ],
    stay: "",
    weddingsText:
      "Die Masseria kann Hochzeiten mit bis zu 150 Gästen ausrichten. Es gibt mehrere Bereiche zur Auswahl: Abendessen im Innenhof und, drinnen, wunderschöne historische Räume aus dem 19. Jahrhundert, in denen Sie geschützt vor dem Wetter feiern können.",
    retreatsText:
      "Yoga Retreats, Wellness Retreats, Firmenretreats und Retreats für persönliches Wachstum: Wir heißen jede Art von Retreat willkommen, die einen Ort des Friedens und der Harmonie sucht, auf einem biologischen Hof, der mit Sorgfalt von einer Familie geführt wird. Das Essen kommt aus unserer Gegend, folgt den Jahreszeiten und wird mit Liebe zubereitet.",
    gatheringsText:
      "Die Zimmer zum Innenhof sind ein perfekter Ort, an dem Freunde oder Familien zusammenkommen und Zeit in Ruhe und Freude verbringen können, zwischen den Sonnenuntergängen und den Olivenbäumen Apuliens. Mit einer privaten Küche und einem eigenen Team wird jeder Aufenthalt zu einem magischen Erlebnis.",
    facts: [
      { label: "Gäste", value: "Bis zu 22 Gäste" },
      { label: "Zimmer", value: "11 restaurierte Zimmer" },
      { label: "Land", value: "210 Hektar, biologisch" },
      { label: "Minimum", value: "2 Nächte, ganzes Gut" },
    ],
    curvedLabel: "Ganz für Sie",
    perksEyebrow: "Was Exklusivnutzung bedeutet",
    perksTitle: "Das Gut, ohne andere Gäste",
    perks: [
      {
        title: "Alle Zimmer",
        body: "Alle elf Zimmer der Masseria, von den Siedlerkammern bis zur Deluxe Suite, nur für Ihre Gruppe reserviert.",
      },
      {
        title: "Private Küche",
        body: "The Veranda kocht nur für Sie: Menüs nach Maß aus dem Garten des Gutes, lange Tafeln unter den Gewölben oder unter den Sternen.",
      },
      {
        title: "Das Gelände",
        body: "Innenhöfe, der Panoramapool, die Kapelle und die Haine: das ganze Tal offen zum Spazieren, Zusammenkommen und Feiern.",
      },
      {
        title: "Ein persönlicher Gastgeber",
        body: "Eine Person, die alles organisiert: Transfers, Verkostungen, Musik, Blumen und die kleinen Details, die ein Treffen zu Ihrem machen.",
      },
      {
        title: "Erlebnisse auf Anfrage",
        body: "Olivenölverkostungen, Ernten, Kochkurse und geführte Ausflüge in die Alta Murgia, rund um Ihre Tage geplant.",
      },
      {
        title: "Unabhängig vom Netz, mit Komfort",
        body: "Mit Sonnenenergie betrieben und mit Solarwasser beheizt: stiller, nachhaltiger Luxus, ohne jeden Kompromiss beim Komfort.",
      },
    ],
    photos: [IMG.photo1, IMG.photo2],
    occasionsEyebrow: "Für die Anlässe, die zählen",
    occasionsTitle: "Ein Ort zum Zusammenkommen",
    occasionsBody: [
      "Paare heiraten im Innenhof, wenn das Licht golden wird. Familien nehmen das ganze Haus für einen Sommer, die Kinder laufen zwischen den Hainen umher. Unternehmen bringen ihre Mitarbeiter hierher, um für ein paar Tage langsamer zu werden und klar zu denken.",
      "Was auch immer der Anlass ist, die Masseria nimmt ihn behutsam auf: genug Raum für alle, genug Ruhe für die Momente, die zählen.",
    ],
    fullImg: IMG.full,
    bookingEyebrow: "Anfrage zur Exklusivnutzung",
    bookingTitle: "Die ganze Masseria reservieren",
    bookingText:
      "Nennen Sie uns Ihre Reisedaten, die Größe Ihrer Gruppe und die Art des Treffens, das Sie planen. Wir erstellen Ihnen ein maßgeschneidertes Angebot für die Exklusivnutzung des Gutes.",
    bookingCta: "Anfrage senden",
  },
}
