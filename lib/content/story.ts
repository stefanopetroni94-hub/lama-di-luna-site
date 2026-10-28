import type { Locale } from "@/lib/i18n"

type Block = { eyebrow: string; title: string; body: string[]; img: string }
type Detail = { num: string; title: string; body: string }

export type StoryContent = {
  heroEyebrow: string
  statementTitle: string
  statementBody: string[]
  buildingLabel: string
  chapters: Block[]
  pietroLabel: string
  pietroEyebrow: string
  pietroTitle: string
  pietroQuote: string
  pietroSignature: string
  pietroBody: string
  pietroNote: string
  filmLabel: string
  filmCta: string
  restorationEyebrow: string
  restorationTitle: string
  details: Detail[]
  fullPhoto: string
  calloutEyebrow: string
  calloutTitle: string
  calloutBody: string
  calloutCta: string
}

const IMG = {
  building:
    "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1679928582/brqp64y9q5oogzmppcja.jpg",
  land: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748365479/bao85el3tzzrazwmnjtl.jpg",
  wing: "/whatsapp/20261013_164110_1110988868090906.jpg",
  fireplace: "/whatsapp/20261013_164120_2402422946959771.jpg",
  courtyard: "/whatsapp/20261013_162433_1766568141296624.jpg",
  flock: "/whatsapp/20261013_162445_1814217646270240.jpg",
  works: "/whatsapp/20261013_162422_4806362202929241.jpg",
  full: "https://res.cloudinary.com/amenitiz/image/upload/w_2400,q_auto:best,f_auto,c_fill/v1679928587/vt7xxd7g2xxn5sqk3mkt.jpg",
}

export const YOUTUBE_ID = "qzT1XEFQ_FM"

export const story: Record<Locale, StoryContent> = {
  en: {
    heroEyebrow: "The Story",
    statementTitle: "An 18th-century masseria at the centre of 210 hectares of organic estate",
    statementBody: [
      "Lama di Luna sits in the heart of the Alta Murgia National Park. Its name means Valley of the Moon — lama for valley, luna for moon and fertility. The masseria grew over two centuries, from the late 1700s to the late 1800s, and was restored between 2000 and 2003 with mortar, lime, and the same red earth that gave the surrounding fields their colour. What the masseria looks like today is not a reconstruction. It is what was already here, kept honest.",
    ],
    buildingLabel: "The Masseria",
    chapters: [
      {
        eyebrow: "Late 1700s",
        title: "The oldest rooms",
        body: [
          "Towards the end of the 1700s the left wing of the masseria was built, with walls more than a metre thick and ceilings of terracotta cylinders with the bottom pierced. An ideal ceiling: light, full of air to protect against the summer heat, and able to fill with warm air when the fireplace is lit, keeping the room warm through the night. These are the Murgia rooms, the oldest at Lama di Luna.",
          "Towards the end of the 1800s, Baron di Faivano completed the structure by building the right wing, with walls eighty centimetres thick and ceilings of girders and vaults of calcareous tuff. It gave the families of sharecroppers a place to live in the masseria. Each room, of about twenty square metres, was the home of one family, with its own window and fireplace.",
        ],
        img: IMG.wing,
      },
      {
        eyebrow: "Forty chimneys",
        title: "A community at work",
        body: [
          "The forty chimneys on the roofs give the measure of the community that gave life to the masseria. Before dawn the common areas were tidied, and everything had to be in place at sunrise, when the work in the fields began.",
          "The settlers, whose contract did not include a house, built their own shelter from the stones cleared from the fields: the casedd, the trulli of Andria, where they stayed with their donkey, useful in the fields and also for keeping the casedd warm.",
        ],
        img: IMG.courtyard,
      },
      {
        eyebrow: "1800s to 1950s",
        title: "Crisis and decline",
        body: [
          "At the end of the 19th century a serious wine crisis forced the Baron to sell the masseria, with around 190 hectares, to Mr De Bartolo. When phylloxera spread through the vineyards, he converted the fields to almond and olive groves, which they remained until the 1950s.",
          "After the war, Dr Palasciano took over the masseria and rented it to the shepherds of Coratini and their flocks. It was the beginning of a long decline, both inside the walls and in the fields.",
        ],
        img: IMG.flock,
      },
      {
        eyebrow: "1991",
        title: "The rebirth",
        body: [
          "In 1991, in love with the place and the landscape of this beautiful farmhouse, we bought the masseria. Freed from flocks and shepherds, we began a long restoration, within the walls and in the fields. Ten thousand olive trees, ten thousand vines, two thousand almond trees, one thousand cherry trees, an artesian well 535 metres deep and plantings of cereals and vegetables marked the agricultural rebirth, in the utmost respect for nature. We left the other hundred hectares to the natural landscape, for the sheep to graze.",
          "A karst cave and dozens of partly restored casedd stand in a Murgia now free of cultivation but rich in wild plants: wild orchids, fennel, ferula, thyme. They accompany our guests on unforgettable walks. With a new stable and new farm buildings we freed the masseria and in 2000 began a restoration that ended in 2003, so that guests from all over the world could live again the atmosphere and the magic of the past.",
        ],
        img: IMG.works,
      },
      {
        eyebrow: "2003",
        title: "Restored with respect",
        body: [
          "The restoration ended in 2003, and every choice was made with respect for the building. The walls are coloured with the same red and yellow earth of the surrounding fields, mixed by hand and brushed onto plaster, never painted. Every bed faces north, and corners are softened and rounded, because in nature everything is round and part of the whole. The forty chimneys and the scattered trulli still tell the story of the generations who worked here.",
          "The masseria lives on its own energy, with 48 solar panels for hot water and heating and 400 photovoltaic panels for electricity. Bath products are olive oil soaps pressed on the estate, linens are raw cotton and basins are terracotta fired locally: the materials of the building are also the materials of the stay.",
        ],
        img: IMG.fireplace,
      },
    ],
    pietroLabel: "Pietro Petroni",
    pietroEyebrow: "The custodian",
    pietroTitle: "The custodian",
    pietroQuote:
      "Lama di Luna is my home, where I live with Agata and my sons Agostino and Stefano. We work and conserve the estate's lands so that along with us, all manner of wildlife can share the magic of our national park, the Murgia. Hospitality is given to all who wish to pass by, and enjoy a stay at our beautiful masseria.",
    pietroSignature: "Pietro Petroni",
    pietroBody:
      "Pietro lives at the masseria year-round with his wife Agata and his two sons, Stefano and Agostino. He oversees the olive harvest, the wine, the kestrels and the little owls nesting in the chimneys. Most mornings he can be found walking the groves before breakfast.",
    pietroNote: "Placeholder · replace with Pietro & owl frame",
    filmLabel: "The Film",
    filmCta: "Watch with sound",
    restorationEyebrow: "The restoration",
    restorationTitle: "Six choices that shaped the masseria",
    details: [
      {
        num: "01",
        title: "Red earth on the walls",
        body: "The same red and yellow earth from the surrounding fields used to build the original walls is what now colours them. Mixed by hand, brushed onto plaster, never painted.",
      },
      {
        num: "02",
        title: "Beds facing north",
        body: "Every bed in the masseria is positioned facing north — following the feng-shui principle the restoration honoured, and a hint of the agronomic instinct of the Mezzadri before us.",
      },
      {
        num: "03",
        title: "Rounded edges",
        body: "Sharp corners are softened throughout — because in nature everything is round, everything is in harmony, everything is part of the whole. A choice of feel, not finish.",
      },
      {
        num: "04",
        title: "Forty chimneys, scattered trulli",
        body: "The masseria has forty chimneys, several scattered trulli, and a complex structure that the simple shapes of the rooms don't betray. The architecture tells the story of generations who worked here.",
      },
      {
        num: "05",
        title: "48 solar + 400 photovoltaic panels",
        body: "Hot water and heating from 48 solar panels. Electricity from 400 photovoltaic panels. The masseria has lived without the grid for nearly two decades — quietly, gratefully, on the energy of the same sun that ripens the olives.",
      },
      {
        num: "06",
        title: "Olive oil, raw cotton, terracotta",
        body: "Bath products are olive-oil soaps, pressed on the estate. Linens are raw cotton, kept simple. Basins are terracotta, fired locally. The materials of the building are also the materials of the stay.",
      },
    ],
    fullPhoto: IMG.full,
    calloutEyebrow: "Come and see",
    calloutTitle: "Stay where the story still happens",
    calloutBody:
      "Eleven rooms, an olive harvest from October, a kitchen that opens by arrangement, and a masseria that has been kept honest since 1830.",
    calloutCta: "Browse the rooms",
  },
  it: {
    heroEyebrow: "La Storia",
    statementTitle: "Una masseria del XVIII secolo al centro di 210 ettari di tenuta biologica",
    statementBody: [
      "Lama di Luna sorge nel cuore del Parco Nazionale dell'Alta Murgia. Il suo nome significa Valle della Luna — lama per valle, luna per luna e fertilità. La masseria è cresciuta nell'arco di due secoli, dalla fine del Settecento alla fine dell'Ottocento, ed è stata restaurata tra il 2000 e il 2003 con calce, malta e la stessa terra rossa che ha dato il colore ai campi circostanti. Quello che la masseria è oggi non è una ricostruzione. È quello che c'era, mantenuto con onestà.",
    ],
    buildingLabel: "La Masseria",
    chapters: [
      {
        eyebrow: "Fine del Settecento",
        title: "Le stanze più antiche",
        body: [
          "Verso la fine del Settecento fu costruita l'ala sinistra della masseria, con muri spessi più di un metro e soffitti di cilindri di terracotta con il fondo forato. Un soffitto ideale: leggero, pieno d'aria per proteggere dal caldo estivo, e capace di riempirsi di aria calda quando il camino è acceso, mantenendo la stanza tiepida durante la notte. Sono le camere Murgia, le più antiche di Lama di Luna.",
          "Verso la fine dell'Ottocento il Barone di Faivano completò la struttura costruendo l'ala destra, con muri spessi ottanta centimetri e soffitti di travi e volte di tufo calcareo. Diede così alle famiglie dei mezzadri la possibilità di vivere in masseria. Ogni stanza, di circa venti metri quadrati, era la casa di una famiglia, con la sua finestra e il suo camino.",
        ],
        img: IMG.wing,
      },
      {
        eyebrow: "Quaranta camini",
        title: "Una comunità al lavoro",
        body: [
          "I quaranta camini sui tetti ci danno la misura della comunità che ha dato vita alla masseria. Prima dell'alba si riordinavano gli spazi comuni, e tutto doveva essere a posto al sorgere del sole, quando iniziava il lavoro nei campi.",
          "I coloni, il cui contratto non prevedeva una casa, si costruivano da soli un riparo con le pietre tolte dai campi: le casedd, i trulli di Andria, dove stavano con il loro asino, utile nei campi e anche per tenere calde le casedd.",
        ],
        img: IMG.courtyard,
      },
      {
        eyebrow: "Dall'Ottocento agli anni Cinquanta",
        title: "Crisi e declino",
        body: [
          "Alla fine dell'Ottocento una grave crisi del vino costrinse il Barone a vendere la masseria, con circa 190 ettari, al signor De Bartolo. Con la diffusione della fillossera nei vigneti, egli riconvertì i campi in mandorleti e uliveti, che rimasero tali fino agli anni Cinquanta.",
          "Dopo la guerra la masseria passò al dottor Palasciano, che l'affittò ai pastori di Coratini e ai loro greggi. Fu l'inizio di un lungo declino, sia dentro le mura sia nei campi.",
        ],
        img: IMG.flock,
      },
      {
        eyebrow: "1991",
        title: "La rinascita",
        body: [
          "Nel 1991, innamorati del luogo e del paesaggio di questa bellissima masseria, l'abbiamo acquistata. Liberata da greggi e pastori, abbiamo avviato un lungo restauro, dentro le mura e nei campi. Diecimila ulivi, diecimila viti, duemila mandorli, mille ciliegi, un pozzo artesiano profondo 535 metri e coltivazioni di cereali e ortaggi hanno segnato la rinascita agricola, nel massimo rispetto della natura. Gli altri cento ettari li abbiamo lasciati al paesaggio naturale, per far pascolare le pecore.",
          "Una grotta carsica e decine di casedd in parte restaurate sorgono in una Murgia ormai libera dalle coltivazioni ma ricca di essenze selvatiche: orchidee selvatiche, finocchio, ferule, timo. Accompagnano i nostri ospiti in passeggiate indimenticabili. Con una nuova stalla e nuovi magazzini agricoli abbiamo liberato la masseria e nel 2000 abbiamo iniziato un restauro terminato nel 2003, per offrire agli ospiti di tutto il mondo la possibilità di rivivere l'atmosfera e la magia del passato.",
        ],
        img: IMG.works,
      },
      {
        eyebrow: "2003",
        title: "Restaurata con rispetto",
        body: [
          "Il restauro è terminato nel 2003, e ogni scelta è stata fatta nel rispetto dell'edificio. Le pareti sono colorate con la stessa terra rossa e gialla dei campi circostanti, mescolata a mano e stesa sull'intonaco, mai dipinta. Ogni letto è rivolto a nord, e gli angoli sono smussati e arrotondati, perché in natura tutto è rotondo e parte del tutto. I quaranta camini e i trulli sparsi raccontano ancora la storia delle generazioni che hanno lavorato qui.",
          "La masseria vive della propria energia, con 48 pannelli solari per acqua calda e riscaldamento e 400 pannelli fotovoltaici per l'elettricità. I prodotti da bagno sono saponi all'olio d'oliva pressati in tenuta, le lenzuola sono di cotone grezzo e i lavabi di terracotta cotta localmente: i materiali dell'edificio sono anche i materiali del soggiorno.",
        ],
        img: IMG.fireplace,
      },
    ],
    pietroLabel: "Pietro Petroni",
    pietroEyebrow: "Il custode",
    pietroTitle: "Il custode",
    pietroQuote:
      "Lama di Luna è la mia casa, dove vivo con Agata e i miei figli Agostino e Stefano. Lavoriamo e conserviamo le terre della tenuta affinché, insieme a noi, ogni forma di fauna selvatica possa condividere la magia del nostro parco nazionale, la Murgia. L'ospitalità è offerta a chiunque desideri passare di qui e godere di un soggiorno nella nostra bellissima masseria.",
    pietroSignature: "Pietro Petroni",
    pietroBody:
      "Pietro vive in masseria tutto l'anno con la moglie Agata e i due figli, Stefano e Agostino. Cura la raccolta delle olive, il vino, i gheppi e le civette che nidificano nei camini. La mattina, lo si trova quasi sempre a camminare tra gli uliveti prima di colazione.",
    pietroNote: "Segnaposto · sostituire con frame di Pietro e civetta",
    filmLabel: "Il Film",
    filmCta: "Guarda con audio",
    restorationEyebrow: "Il restauro",
    restorationTitle: "Sei scelte che hanno dato forma alla masseria",
    details: [
      {
        num: "01",
        title: "Terra rossa sulle pareti",
        body: "La stessa terra rossa e gialla dei campi circostanti, usata per costruire le pareti originali, è oggi quella che le colora. Mescolata a mano, stesa sull'intonaco, mai dipinta.",
      },
      {
        num: "02",
        title: "Letti rivolti a nord",
        body: "Ogni letto della masseria è orientato verso nord — seguendo il principio del feng-shui che il restauro ha onorato, e un'eco dell'istinto agronomico dei Mezzadri che ci hanno preceduto.",
      },
      {
        num: "03",
        title: "Spigoli arrotondati",
        body: "Gli angoli vivi sono smussati ovunque — perché in natura tutto è rotondo, tutto è in armonia, tutto è parte del tutto. Una scelta di sensazione, non di rifinitura.",
      },
      {
        num: "04",
        title: "Quaranta camini, trulli sparsi",
        body: "La masseria ha quaranta camini, diversi trulli sparsi e una struttura complessa che le forme semplici delle stanze non tradiscono. L'architettura racconta la storia di generazioni che hanno lavorato qui.",
      },
      {
        num: "05",
        title: "48 pannelli solari + 400 fotovoltaici",
        body: "Acqua calda e riscaldamento da 48 pannelli solari. Elettricità da 400 pannelli fotovoltaici. La masseria vive fuori rete da quasi vent'anni — silenziosamente, con gratitudine, grazie all'energia dello stesso sole che fa maturare le olive.",
      },
      {
        num: "06",
        title: "Olio d'oliva, cotone grezzo, terracotta",
        body: "I prodotti da bagno sono saponi all'olio d'oliva, pressati in tenuta. Le lenzuola sono di cotone grezzo, mantenute semplici. I lavabi sono di terracotta, cotti localmente. I materiali dell'edificio sono anche i materiali del soggiorno.",
      },
    ],
    fullPhoto: IMG.full,
    calloutEyebrow: "Vieni a vedere",
    calloutTitle: "Soggiorna dove la storia continua",
    calloutBody:
      "Undici camere, una raccolta delle olive da ottobre, una cucina che si apre su prenotazione, e una masseria mantenuta onesta dal 1830.",
    calloutCta: "Scopri le camere",
  },
  fr: {
    heroEyebrow: "L'Histoire",
    statementTitle: "Une masseria du XVIIIe siècle au centre d'un domaine biologique de 210 hectares",
    statementBody: [
      "Lama di Luna se trouve au cœur du Parc national de l'Alta Murgia. Son nom signifie Vallée de la Lune : lama pour vallée, luna pour la lune et la fertilité. La masseria s'est agrandie pendant deux siècles, de la fin des années 1700 à la fin des années 1800, et a été restaurée entre 2000 et 2003 avec du mortier, de la chaux et la même terre rouge qui donne leur couleur aux champs alentour. Ce qu'est la masseria aujourd'hui n'est pas une reconstruction. C'est ce qui était déjà là, préservé avec honnêteté.",
    ],
    buildingLabel: "La Masseria",
    chapters: [
      {
        eyebrow: "Fin du XVIIIe siècle",
        title: "Les pièces les plus anciennes",
        body: [
          "Vers la fin du XVIIIe siècle fut construite l'aile gauche de la masseria, avec des murs de plus d'un mètre d'épaisseur et des plafonds faits de cylindres de terre cuite au fond percé. Un plafond idéal : léger, plein d'air pour protéger de la chaleur de l'été, et capable de se remplir d'air chaud quand la cheminée est allumée, gardant la pièce tiède toute la nuit. Ce sont les chambres Murgia, les plus anciennes de Lama di Luna.",
          "Vers la fin du XIXe siècle, le baron di Faivano compléta l'édifice en construisant l'aile droite, avec des murs de quatre-vingts centimètres et des plafonds de poutres et de voûtes en tuf calcaire. Il donna ainsi aux familles de métayers un lieu où vivre dans la masseria. Chaque pièce, d'environ vingt mètres carrés, était le foyer d'une famille, avec sa fenêtre et sa cheminée.",
        ],
        img: IMG.wing,
      },
      {
        eyebrow: "Quarante cheminées",
        title: "Une communauté au travail",
        body: [
          "Les quarante cheminées sur les toits donnent la mesure de la communauté qui a fait vivre la masseria. Avant l'aube, on rangeait les espaces communs, et tout devait être en place au lever du soleil, quand commençait le travail aux champs.",
          "Les colons, dont le contrat ne prévoyait pas de logement, se construisaient eux-mêmes un abri avec les pierres retirées des champs : les casedd, les trulli d'Andria, où ils vivaient avec leur âne, utile aux champs et aussi pour garder les casedd au chaud.",
        ],
        img: IMG.courtyard,
      },
      {
        eyebrow: "Du XIXe siècle aux années 1950",
        title: "Crise et déclin",
        body: [
          "À la fin du XIXe siècle, une grave crise du vin obligea le baron à vendre la masseria, avec environ 190 hectares, à M. De Bartolo. Lorsque le phylloxéra se répandit dans les vignes, il convertit les champs en amanderaies et en oliveraies, qui le restèrent jusqu'aux années 1950.",
          "Après la guerre, le docteur Palasciano reprit la masseria et la loua aux bergers de Coratini et à leurs troupeaux. Ce fut le début d'un long déclin, à l'intérieur des murs comme dans les champs.",
        ],
        img: IMG.flock,
      },
      {
        eyebrow: "1991",
        title: "La renaissance",
        body: [
          "En 1991, amoureux du lieu et du paysage de cette belle ferme, nous avons acheté la masseria. Libérée des troupeaux et des bergers, nous avons entrepris une longue restauration, dans les murs et dans les champs. Dix mille oliviers, dix mille vignes, deux mille amandiers, mille cerisiers, un puits artésien de 535 mètres de profondeur et des cultures de céréales et de légumes ont marqué la renaissance agricole, dans le plus grand respect de la nature. Nous avons laissé les cent autres hectares au paysage naturel, pour le pâturage des moutons.",
          "Une grotte karstique et des dizaines de casedd en partie restaurées se dressent dans une Murgia désormais libre de cultures mais riche en plantes sauvages : orchidées sauvages, fenouil, férule, thym. Elles accompagnent nos hôtes lors de promenades inoubliables. Avec une nouvelle étable et de nouveaux bâtiments agricoles, nous avons libéré la masseria et commencé en 2000 une restauration achevée en 2003, pour que des hôtes du monde entier puissent revivre l'atmosphère et la magie d'autrefois.",
        ],
        img: IMG.works,
      },
      {
        eyebrow: "2003",
        title: "Restaurée avec respect",
        body: [
          "La restauration s'est achevée en 2003, et chaque choix a été fait dans le respect du bâtiment. Les murs sont colorés avec la même terre rouge et jaune que les champs alentour, mélangée à la main et appliquée sur l'enduit, jamais peinte. Chaque lit est orienté vers le nord, et les angles sont adoucis et arrondis, car dans la nature tout est rond et fait partie d'un tout. Les quarante cheminées et les trulli dispersés racontent encore l'histoire des générations qui ont travaillé ici.",
          "La masseria vit de sa propre énergie, avec 48 panneaux solaires pour l'eau chaude et le chauffage et 400 panneaux photovoltaïques pour l'électricité. Les produits de bain sont des savons à l'huile d'olive pressée sur le domaine, le linge est en coton brut et les vasques en terre cuite du pays : les matériaux du bâtiment sont aussi ceux du séjour.",
        ],
        img: IMG.fireplace,
      },
    ],
    pietroLabel: "Pietro Petroni",
    pietroEyebrow: "Le gardien",
    pietroTitle: "Le gardien",
    pietroQuote:
      "Lama di Luna est ma maison, où je vis avec Agata et mes fils Agostino et Stefano. Nous travaillons et préservons les terres du domaine pour qu'avec nous, toute la faune sauvage puisse partager la magie de notre parc national, la Murgia. L'hospitalité est offerte à tous ceux qui souhaitent passer par ici et profiter d'un séjour dans notre belle masseria.",
    pietroSignature: "Pietro Petroni",
    pietroBody:
      "Pietro vit à la masseria toute l'année avec sa femme Agata et ses deux fils, Stefano et Agostino. Il veille sur la récolte des olives, le vin, les faucons crécerelles et les chouettes chevêches qui nichent dans les cheminées. Le matin, on le trouve presque toujours à marcher dans les oliveraies avant le petit déjeuner.",
    pietroNote: "Emplacement · remplacer par une image de Pietro et de la chouette",
    filmLabel: "Le Film",
    filmCta: "Regarder avec le son",
    restorationEyebrow: "La restauration",
    restorationTitle: "Six choix qui ont façonné la masseria",
    details: [
      {
        num: "01",
        title: "De la terre rouge sur les murs",
        body: "La même terre rouge et jaune des champs alentour, utilisée pour bâtir les murs d'origine, est aujourd'hui celle qui les colore. Mélangée à la main, appliquée sur l'enduit, jamais peinte.",
      },
      {
        num: "02",
        title: "Des lits orientés vers le nord",
        body: "Chaque lit de la masseria est orienté vers le nord, selon le principe du feng shui que la restauration a respecté, et en écho à l'instinct agronomique des métayers qui nous ont précédés.",
      },
      {
        num: "03",
        title: "Des angles arrondis",
        body: "Les angles vifs sont adoucis partout, car dans la nature tout est rond, tout est en harmonie, tout fait partie d'un tout. Un choix de sensation, pas de finition.",
      },
      {
        num: "04",
        title: "Quarante cheminées, des trulli dispersés",
        body: "La masseria compte quarante cheminées, plusieurs trulli dispersés et une structure complexe que les formes simples des pièces ne laissent pas deviner. L'architecture raconte l'histoire des générations qui ont travaillé ici.",
      },
      {
        num: "05",
        title: "48 panneaux solaires + 400 photovoltaïques",
        body: "L'eau chaude et le chauffage viennent de 48 panneaux solaires. L'électricité de 400 panneaux photovoltaïques. La masseria vit hors réseau depuis près de vingt ans, discrètement, avec gratitude, grâce à l'énergie du même soleil qui mûrit les olives.",
      },
      {
        num: "06",
        title: "Huile d'olive, coton brut, terre cuite",
        body: "Les produits de bain sont des savons à l'huile d'olive pressée sur le domaine. Le linge est en coton brut, tout simple. Les vasques sont en terre cuite du pays. Les matériaux du bâtiment sont aussi ceux du séjour.",
      },
    ],
    fullPhoto: IMG.full,
    calloutEyebrow: "Venez voir",
    calloutTitle: "Séjournez là où l'histoire continue",
    calloutBody:
      "Onze chambres, une récolte des olives dès octobre, une cuisine qui ouvre sur demande, et une masseria préservée avec honnêteté depuis 1830.",
    calloutCta: "Découvrez les chambres",
  },
}
