import type { Locale } from "@/lib/i18n"

// The four short points on the right of each experience page (like "Sleeps 2, Open fireplace..." in the rooms).
export const experienceFacts: Record<string, Record<Locale, string[]>> = {
  "olive-harvest": {
    en: ["Lasts 1h 15 min", "Best in the morning", "Open to couples or groups", "€60 per couple, €30 for each additional person"],
    it: ["Dura 1h 15 min", "Meglio la mattina", "Aperto a coppie o a gruppi", "€60 a coppia, €30 per ogni persona in più"],
    fr: ["Dure 1 h 15 min", "De préférence le matin", "Ouvert aux couples ou aux groupes", "€60 par couple, €30 par personne supplémentaire"],
  },
  "cooking-class": {
    en: ["Lasts 1 hour", "Morning or afternoon", "Upon reservation", "€60 for two people, €30 for each extra person"],
    it: ["Dura 1 ora", "Mattina o pomeriggio", "Su prenotazione", "€60 per due persone, €30 per ogni persona in più"],
    fr: ["Dure 1 heure", "Le matin ou l'après-midi", "Sur réservation", "€60 pour deux personnes, €30 par personne supplémentaire"],
  },
  massages: {
    en: ["Lasts 1 hour", "Relaxing or energising", "€70", "To be booked in advance"],
    it: ["Dura 1 ora", "Rilassante o energizzante", "€70", "Da prenotare con anticipo"],
    fr: ["Dure 1 heure", "Relaxant ou énergisant", "€70", "À réserver à l'avance"],
  },
  "bicycle-ride": {
    en: ["€15 for the whole day", "Pedal bicycles", "To be requested a few hours in advance", "In summer, best in the late afternoon"],
    it: ["€15 per tutto il giorno", "Biciclette a pedali", "Da richiedere qualche ora prima", "D'estate meglio nel tardo pomeriggio"],
    fr: ["€15 pour toute la journée", "Vélos à pédales", "À demander quelques heures à l'avance", "L'été, de préférence en fin d'après-midi"],
  },
  "cinema-room": {
    en: ["Reserved for guests staying at the masseria", "Over 900 DVDs from the history of cinema", "On request, with the help of the reception"],
    it: ["Riservata agli ospiti che dormono in masseria", "Oltre 900 DVD della storia del cinema", "Su richiesta, con l'aiuto della reception"],
    fr: ["Réservée aux hôtes qui dorment à la masseria", "Plus de 900 DVD de l'histoire du cinéma", "Sur demande, avec l'aide de la réception"],
  },
  yoga: {
    en: ["Mats and equipment free of charge", "On your own, free of charge", "Lesson with teacher: 1h 30 min", "€60 per couple, €25 for each extra person"],
    it: ["Tappetini e attrezzatura gratuiti", "Da soli, gratuito", "Lezione con maestro: 1h 30 min", "€60 a coppia, €25 per ogni persona in più"],
    fr: ["Tapis et matériel gratuits", "En solo, gratuit", "Cours avec professeur : 1 h 30 min", "€60 par couple, €25 par personne supplémentaire"],
  },
  "infinity-pool": {
    en: ["18 metres long", "Salt water, disinfected with salt", "Open from 9 am to 7 pm", "Reserved for guests staying overnight at Lama di Luna"],
    it: ["Lunga 18 metri", "Acqua salata, disinfettata con il sale", "Aperta dalle 9 alle 19", "Riservata agli ospiti che pernottano a Lama di Luna"],
    fr: ["18 mètres de long", "Eau salée, désinfectée au sel", "Ouverte de 9 h à 19 h", "Réservée aux hôtes qui passent la nuit à Lama di Luna"],
  },
  "estate-walk": {
    en: ["Free of charge", "Comfortable or trekking shoes recommended", "In summer, best early in the morning or at sunset", "On the estate, in the National Park or on neighbouring roads"],
    it: ["Gratuita", "Consigliate scarpe comode o da trekking", "D'estate meglio di prima mattina o al tramonto", "Nella tenuta, nel Parco Nazionale o sulle strade vicine"],
    fr: ["Gratuite", "Chaussures confortables ou de randonnée conseillées", "L'été, de préférence tôt le matin ou au coucher du soleil", "Dans le domaine, dans le Parc national ou sur les routes voisines"],
  },
  golf: {
    en: ["Free of charge", "Clubs and balls provided", "Drive of 80 metres between the two flags", "On your own or with Pietro, at sunset"],
    it: ["Gratuito", "Mazze e palline a disposizione", "Drive di 80 metri tra le due bandierine", "Da soli o con Pietro, al tramonto"],
    fr: ["Gratuit", "Clubs et balles à disposition", "Drive de 80 mètres entre les deux drapeaux", "Seul ou avec Pietro, au coucher du soleil"],
  },
  library: {
    en: ["Free of charge", "Open 24 hours a day", "Over 3,000 books, some very old", "In Latin, German, French, English and Italian"],
    it: ["Gratuita", "Aperta 24 ore su 24", "Oltre 3.000 libri, alcuni molto antichi", "In latino, tedesco, francese, inglese e italiano"],
    fr: ["Gratuite", "Ouverte 24 heures sur 24", "Plus de 3 000 livres, certains très anciens", "En latin, allemand, français, anglais et italien"],
  },
  pets: {
    en: ["Allen, our gentle Irish setter", "Romeo, the Australian shepherd", "12 cats and our goose", "Please do not feed the animals"],
    it: ["Allen, il nostro dolce setter irlandese", "Romeo, il pastore australiano", "12 gatti e la nostra oca", "Vi preghiamo di non dare da mangiare agli animali"],
    fr: ["Allen, notre doux setter irlandais", "Romeo, le berger australien", "12 chats et notre oie", "Merci de ne pas nourrir les animaux"],
  },
  "horse-riding": {
    en: ["Lasts 2 hours", "15 to 20 minutes' drive from Lama di Luna", "Always to be booked in advance", "Gentle horses, children welcome"],
    it: ["Dura 2 ore", "A 15 o 20 minuti di macchina da Lama di Luna", "Da prenotare sempre in anticipo", "Cavalli mansueti, bambini benvenuti"],
    fr: ["Dure 2 heures", "À 15 ou 20 minutes en voiture de Lama di Luna", "À toujours réserver à l'avance", "Chevaux dociles, enfants bienvenus"],
  },
}

// Description of each experience page (the Olive Oil Tasting and Tour has its own text in olive-harvest.ts).
export const experienceDetails: Record<string, Record<Locale, string[]>> = {
  "cooking-class": {
    en: [
      "Spend an hour with the cooks of Lama di Luna, who teach how to make a traditional Pugliese pasta, especially orecchiette, strascinati and cavatelli: from kneading the dough, to preparing the mass, to cutting it and shaping the very particular forms of the orecchiette that have made this pasta famous all over the world. The pasta you have made together is then cooked on the spot with tomato sauce, made with organic tomatoes from the Lama di Luna vegetable garden, for a final taste of your creation.",
    ],
    it: [
      "Un'ora con le cuoche di Lama di Luna, che insegnano come si fa una pasta tradizionale pugliese, in particolare orecchiette, strascinati e cavatelli: da come si impasta, a come si prepara la massa, a come si inizia a tagliarla e a dare le forme tanto particolari delle orecchiette, che hanno reso questa pasta rinomata in tutto il mondo. La pasta fatta insieme viene poi cucinata al volo con salsa di pomodoro, preparata con pomodori biologici dell'orto di Lama di Luna, per un assaggio finale della vostra creazione.",
    ],
    fr: [
      "Une heure avec les cuisinières de Lama di Luna, qui enseignent comment faire une pâte traditionnelle des Pouilles, en particulier les orecchiette, les strascinati et les cavatelli : de la façon de pétrir, à la préparation de la pâte, jusqu'à la découpe et aux formes si particulières des orecchiette, qui ont rendu cette pâte célèbre dans le monde entier. Les pâtes préparées ensemble sont ensuite cuites sur place avec une sauce tomate, faite avec des tomates biologiques du potager de Lama di Luna, pour une dégustation finale de votre création.",
    ],
  },
  massages: {
    en: [
      "A massage therapist can come to Lama di Luna on request to give massages, which can be either relaxing or energising. You can enjoy the massage in a historic part of the masseria, where you can take a moment for yourself, wind down, and recover your energy.",
    ],
    it: [
      "Un massaggiatore può venire a Lama di Luna su richiesta per fare massaggi, che possono essere sia rilassanti sia energizzanti. Si può godere il massaggio in una parte storica della masseria, dove prendersi un momento per sé, rilassarsi e recuperare le energie.",
    ],
    fr: [
      "Un masseur peut venir à Lama di Luna sur demande pour faire des massages, qui peuvent être aussi bien relaxants qu'énergisants. Vous pouvez profiter du massage dans une partie historique de la masseria, où vous pouvez prendre un moment pour vous, vous détendre et retrouver de l'énergie.",
    ],
  },
  "bicycle-ride": {
    en: [
      "At Lama di Luna we have pedal bicycles available for rent to our guests. You can ride them along the small roads across the whole estate, or take the little-trafficked road that leads towards Castel del Monte, for longer rides in the Alta Murgia National Park. You can also ride down among the olive rows of the Andria plain. In summer, it is better to ride in the early morning or late afternoon, to avoid the hottest hours of the day.",
    ],
    it: [
      "A Lama di Luna abbiamo biciclette a pedali a disposizione degli ospiti per il noleggio. Si può andare lungo le stradine di tutta la tenuta, oppure sulla strada poco trafficata che porta verso Castel del Monte, per fare giri più lunghi nel Parco Nazionale dell'Alta Murgia. Si può anche scendere tra i filari di ulivi della piana di Andria. D'estate è meglio andare la mattina presto o nel tardo pomeriggio, per evitare le ore più calde della giornata.",
    ],
    fr: [
      "À Lama di Luna, nous avons des vélos à pédales à louer pour nos hôtes. Vous pouvez rouler sur les petits chemins de tout le domaine, ou prendre la route peu fréquentée qui mène vers Castel del Monte, pour des balades plus longues dans le Parc national de l'Alta Murgia. Vous pouvez aussi descendre parmi les rangs d'oliviers de la plaine d'Andria. L'été, il vaut mieux partir tôt le matin ou en fin d'après-midi, pour éviter les heures les plus chaudes de la journée.",
    ],
  },
  "cinema-room": {
    en: [
      "In our cinema room we have a collection of over 900 DVDs of famous films from the history of cinema, kept in an old bookcase. After choosing a film, you can watch it with the help of the reception, in very comfortable armchairs. There is a large selection of classic Italian movies, and international ones too. You can watch them whenever you like, in the afternoon or after a romantic dinner on the veranda.",
    ],
    it: [
      "Nella nostra sala cinema abbiamo una collezione di oltre 900 DVD di film famosi della storia del cinema, tenuti in una vecchia libreria. Dopo aver scelto il film, lo si può vedere con l'aiuto della reception, su poltrone molto comode. C'è una grande selezione di film italiani classici, e anche internazionali. Si possono guardare quando si vuole, nel pomeriggio o dopo una cena romantica sulla veranda.",
    ],
    fr: [
      "Dans notre salle de cinéma, nous avons une collection de plus de 900 DVD de films célèbres de l'histoire du cinéma, rangés dans une vieille bibliothèque. Après avoir choisi un film, vous pouvez le regarder avec l'aide de la réception, dans des fauteuils très confortables. Il y a un grand choix de films italiens classiques, et aussi internationaux. Vous pouvez les regarder quand vous le souhaitez, l'après-midi ou après un dîner romantique sur la véranda.",
    ],
  },
  yoga: {
    en: [
      "Lama di Luna was built following Feng Shui and bioarchitecture, with spaces that have rounded corners and an excellent energy for yoga practice. You can practise in the indoor yoga room from the 1700s, with a heated floor, or on the grass around our infinity pool. We provide mats and all the equipment free of charge. You can practise on your own in the morning, or join Agata, or ask for yoga lessons. Practising on your own is free; a lesson with a teacher lasts an hour and a half, costs €60 per couple, and €25 for each extra person.",
    ],
    it: [
      "Lama di Luna è stata costruita seguendo il Feng Shui e la bioarchitettura, con spazi dagli angoli arrotondati in cui circola un'ottima energia per fare yoga. Si può praticare nella sala yoga interna del 1700, con il pavimento riscaldato, oppure sul prato attorno alla nostra piscina a sfioro. Mettiamo a disposizione gratuitamente tappetini e tutta l'attrezzatura. Si può praticare da soli la mattina, oppure unirsi ad Agata, oppure chiedere delle lezioni di yoga. Praticare da soli è gratuito; una lezione con un maestro dura un'ora e mezza, costa €60 a coppia e €25 per ogni persona in più.",
    ],
    fr: [
      "Lama di Luna a été construite selon le Feng Shui et la bioarchitecture, avec des espaces aux angles arrondis où circule une excellente énergie pour pratiquer le yoga. Vous pouvez pratiquer dans la salle de yoga intérieure du XVIIIe siècle, au sol chauffant, ou sur l'herbe autour de notre piscine à débordement. Nous mettons gratuitement à votre disposition des tapis et tout le matériel. Vous pouvez pratiquer seul le matin, ou rejoindre Agata, ou demander des cours de yoga. Pratiquer seul est gratuit ; un cours avec un professeur dure une heure et demie, coûte €60 par couple et €25 par personne supplémentaire.",
    ],
  },
  "infinity-pool": {
    en: [
      "The infinity pool is shaped like a rounded lake and is 18 metres long, so it is also perfect for swimming laps. It is 1.30 metres deep at its deepest point. It is open from 9 in the morning to 7 in the evening, free of charge and reserved for guests staying overnight at Lama di Luna. There are sun loungers around the pool, which in summer can be moved into the shade of the olive trees, and a soft green lawn around it. The water is salt water, disinfected with salt, and the pool looks out over the plain of monumental olive trees of Andria. At sunset you can see the swallows that come to drink from the pool, and at night the bats of the Murgia, out hunting insects, which also come for a little freshness and some water.",
    ],
    it: [
      "La piscina a sfioro ha una forma rotonda, come un lago, ed è lunga 18 metri, quindi perfetta anche per fare delle belle nuotate. Ha una profondità di un metro e trenta nel punto più profondo. È aperta dalle 9 del mattino alle 7 di sera, è gratuita e riservata agli ospiti che pernottano a Lama di Luna. Attorno alla piscina ci sono dei lettini che durante l'estate si possono spostare all'ombra degli ulivi, e un prato verde morbido. L'acqua è salata, disinfettata con il sale, e la piscina si affaccia sulla pianura di olivi monumentali di Andria. Al tramonto si possono vedere le rondini che vengono a bere dalla piscina, e di notte i pipistrelli della Murgia, a caccia di insetti, che vengono anche loro a cercare un po' di refrigerio e un po' d'acqua.",
    ],
    fr: [
      "La piscine à débordement a une forme arrondie, comme un lac, et mesure 18 mètres de long : elle est donc aussi parfaite pour faire de belles nages. Elle a une profondeur d'un mètre trente à l'endroit le plus profond. Elle est ouverte de 9 h du matin à 19 h, gratuite et réservée aux hôtes qui passent la nuit à Lama di Luna. Autour de la piscine, il y a des transats qui, en été, peuvent être déplacés à l'ombre des oliviers, et une pelouse verte et douce. L'eau est salée, désinfectée au sel, et la piscine donne sur la plaine d'oliviers monumentaux d'Andria. Au coucher du soleil, on voit les hirondelles venir boire dans la piscine, et la nuit les chauves-souris de la Murgia, à la chasse aux insectes, qui viennent elles aussi chercher un peu de fraîcheur et d'eau.",
    ],
  },
  "estate-walk": {
    en: [
      "Lama di Luna, with its 210 hectares, has small roads that run among olive groves, vineyards and almond groves, and also through the wild landscape of the Murgia. You can walk inside the farm, or go outside and walk in the National Park and on the roads of our neighbours. While walking you can see wild rabbits, foxes and, every now and then, a wild boar. At night and in winter you can sometimes hear wolves howling, although they are very shy. You can see hedgehogs and small, harmless grass snakes, and hawks and buzzards in the sky. And you can enjoy the wild almond trees, the wild olive trees and the flowers of the Murgia in spring. It is a land with a lot to offer in terms of fauna and flora, and walking is one of the most beautiful ways to see it.",
    ],
    it: [
      "Lama di Luna, con i suoi 210 ettari, ha stradine che vanno tra uliveti, vigneti e mandorleti, ma anche attraverso il paesaggio selvaggio della Murgia. Si può decidere di camminare all'interno dell'azienda, ma anche di uscire e camminare nel Parco Nazionale e sulle strade dei nostri vicini. Camminando si possono vedere conigli selvatici, volpi e ogni tanto qualche cinghiale. Di notte e in inverno a volte si sente ululare qualche lupo, anche se sono molto schivi e timidi. Si possono vedere ricci e piccoli serpentelli, bisce innocue, e in cielo falchi e poiane. E si possono godere i mandorli selvatici, gli olivi selvatici e i fiori della Murgia in primavera. È una terra che ha tanto da offrire dal punto di vista della fauna e della flora, e camminare è uno dei modi più belli per vederla.",
    ],
    fr: [
      "Lama di Luna, avec ses 210 hectares, offre des chemins qui passent entre oliveraies, vignes et amanderaies, mais aussi à travers le paysage sauvage de la Murgia. Vous pouvez marcher à l'intérieur de la ferme, ou sortir et marcher dans le Parc national et sur les routes de nos voisins. En marchant, on peut voir des lapins sauvages, des renards et, de temps en temps, un sanglier. La nuit et en hiver, on entend parfois hurler des loups, même s'ils sont très craintifs et discrets. On peut voir des hérissons et de petites couleuvres inoffensives, et dans le ciel des faucons et des buses. Et profiter des amandiers sauvages, des oliviers sauvages et des fleurs de la Murgia au printemps. C'est une terre qui a beaucoup à offrir du point de vue de la faune et de la flore, et marcher est l'une des plus belles façons de la découvrir.",
    ],
  },
  golf: {
    en: [
      "In the meadow next to the masseria, Pietro, a golf enthusiast, has put up two flags 80 metres apart, and there are both clubs and balls available for anyone who feels like hitting a few shots. You can play on your own, or together with Pietro, who will gladly join the golf practice at sunset. It is a lovely way to take a walk next to the masseria and look at the endless panorama of the Murgia and the olive groves below.",
    ],
    it: [
      "Nel prato accanto alla masseria, Pietro, appassionato di golf, ha messo due bandierine a 80 metri di distanza l'una dall'altra, e ci sono a disposizione sia mazze sia palline per chi ha voglia di fare due tiri. Si può giocare in solitudine oppure insieme a Pietro, che si unirà molto volentieri al golf practice al tramonto. È un bel modo per passeggiare accanto alla masseria e guardare l'infinito panorama della Murgia e degli uliveti sottostanti.",
    ],
    fr: [
      "Dans le pré à côté de la masseria, Pietro, passionné de golf, a installé deux petits drapeaux à 80 mètres l'un de l'autre, et des clubs et des balles sont à disposition de ceux qui ont envie de faire quelques coups. Vous pouvez jouer seul ou avec Pietro, qui se joindra très volontiers au practice au coucher du soleil. C'est une belle façon de se promener près de la masseria et de regarder le panorama infini de la Murgia et des oliveraies en contrebas.",
    ],
  },
  library: {
    en: [
      "The Petroni family is a family of people of letters. First came uncle Pietro, a lawyer; then Agostino Petroni, father of Pietro, a magistrate; then Pietro, an agronomist; and today Agostino Petroni, a journalist. Generation after generation, books have filled our home. In the rooms and in the family library you will find a collection of over 3,000 books, some very old, in Latin, German, French, English and Italian. If you are curious, the library is always open and free of charge, 24 hours a day. In the family library there are also special collections, such as one made of old Olivetti typewriters and another of 20th-century National Geographic magazines. It is a place that preserves the history of Puglia, and the Petroni family has decided to open it to all its guests, who are welcome and asked to treat the collection with respect, to preserve it for those who will come after them.",
    ],
    it: [
      "La famiglia Petroni è una famiglia di letterati. Prima lo zio Pietro, avvocato; poi Agostino Petroni, padre di Pietro, magistrato; poi Pietro, agronomo; e oggi Agostino Petroni, giornalista. Di generazione in generazione, i libri hanno riempito la nostra casa. Nelle stanze e nella biblioteca di famiglia troverete una collezione di oltre 3.000 libri, alcuni molto antichi, in latino, tedesco, francese, inglese e italiano. Se siete curiosi, la biblioteca è sempre aperta e gratuita, 24 ore su 24. Nella biblioteca di famiglia ci sono anche collezioni particolari, come una fatta di vecchie macchine da scrivere Olivetti e un'altra di riviste National Geographic del Novecento. È un luogo che conserva la storia della Puglia, e la famiglia Petroni ha deciso di aprirlo a tutti i suoi ospiti, che sono i benvenuti e a cui si chiede di trattare la collezione con rispetto, per conservarla per coloro che verranno dopo.",
    ],
    fr: [
      "La famille Petroni est une famille de lettrés. D'abord l'oncle Pietro, avocat ; puis Agostino Petroni, père de Pietro, magistrat ; puis Pietro, agronome ; et aujourd'hui Agostino Petroni, journaliste. De génération en génération, les livres ont rempli notre maison. Dans les chambres et dans la bibliothèque de famille, vous trouverez une collection de plus de 3 000 livres, certains très anciens, en latin, en allemand, en français, en anglais et en italien. Si vous êtes curieux, la bibliothèque est toujours ouverte et gratuite, 24 heures sur 24. Dans la bibliothèque de famille, il y a aussi des collections particulières, comme l'une faite de vieilles machines à écrire Olivetti et une autre de magazines National Geographic du XXe siècle. C'est un lieu qui conserve l'histoire des Pouilles, et la famille Petroni a décidé de l'ouvrir à tous ses hôtes, qui sont les bienvenus et à qui l'on demande de traiter la collection avec respect, pour la conserver pour ceux qui viendront après eux.",
    ],
  },
  pets: {
    en: [
      "At Lama di Luna we have several animals that live here all year round. First of all there is Allen, our gentle Irish setter, always ready to welcome guests and to check that everything is fine around the masseria; sometimes you may hear a knock on your door, because he needs a few cuddles. Then there is the newcomer Romeo, an Australian shepherd who keeps company with our 12 cats, which now live permanently at Lama di Luna. Some of them wander around the orchard, while Nero always comes to check how lunch and dinner are going, looking for something to eat (please do not give him anything, otherwise he will never leave!). Then there are Grigio, Bianca, Nuvolo, Berta and Nina, and finally our goose, who chatters cheerfully in the morning. This is the band of our permanent residents, whom you may sometimes meet all together, in a line, on a walk around the masseria.",
    ],
    it: [
      "A Lama di Luna abbiamo diversi animali che vivono qui tutto l'anno. Innanzitutto c'è Allen, il nostro dolce setter irlandese, sempre pronto a dare il benvenuto agli ospiti e a controllare che tutto vada bene in giro per la masseria; a volte potreste sentirlo bussare alla porta della vostra stanza, perché ha bisogno di un po' di coccole. Poi c'è il nuovo arrivato Romeo, un pastore australiano che fa compagnia ai nostri 12 gatti, che ormai vivono stabilmente a Lama di Luna. Alcuni si aggirano per il frutteto, mentre Nero viene sempre a controllare com'è la situazione a pranzo e a cena, in cerca di qualcosa da mangiare (mi raccomando, non dategli niente, altrimenti non se ne va più!). Poi ci sono Grigio, Bianca, Nuvolo, Berta e Nina, e infine la nostra oca, che chiacchiera allegramente la mattina. Questa è la banda dei nostri residenti permanenti, che ogni tanto potrete incontrare tutti insieme, in fila, in passeggiata intorno alla masseria.",
    ],
    fr: [
      "À Lama di Luna, nous avons plusieurs animaux qui vivent ici toute l'année. D'abord Allen, notre doux setter irlandais, toujours prêt à accueillir les hôtes et à vérifier que tout va bien autour de la masseria ; il se peut que vous l'entendiez frapper à la porte de votre chambre, parce qu'il a besoin de quelques câlins. Ensuite le nouveau venu Romeo, un berger australien qui tient compagnie à nos 12 chats, qui vivent désormais en permanence à Lama di Luna. Certains se promènent dans le verger, tandis que Nero vient toujours voir comment se passent le déjeuner et le dîner, à la recherche de quelque chose à manger (surtout, ne lui donnez rien, sinon il ne partira plus !). Il y a aussi Grigio, Bianca, Nuvolo, Berta et Nina, et enfin notre oie, qui bavarde joyeusement le matin. Voici la bande de nos résidents permanents, que vous pourrez parfois croiser tous ensemble, en file, en promenade autour de la masseria.",
    ],
  },
  "horse-riding": {
    en: [
      "Around Lama di Luna there are several riding stables, and you can book a ride with any of them in advance, for rides inside the Alta Murgia National Park on gentle horses. Children can come too. The rides go through woods of holm oaks and pine woods, where you can meet a great deal of the fauna and flora of the Murgia, from young wild boars to buzzards, and flowers of all kinds: wild orchids, asphodels, ferula, fennel and thyme.",
    ],
    it: [
      "Attorno a Lama di Luna ci sono diversi maneggi, presso tutti si può prenotare in anticipo per fare passeggiate all'interno del Parco Nazionale dell'Alta Murgia con cavalli mansueti. Possono venire anche i bambini. Le passeggiate attraversano boschi di lecci e pinete, dove si può incontrare moltissima fauna e flora della Murgia, dai cinghialotti alle poiane, e fiori di ogni tipo: orchidee selvatiche, asfodeli, ferule, finocchio e timo.",
    ],
    fr: [
      "Autour de Lama di Luna, il y a plusieurs centres équestres, et dans chacun on peut réserver à l'avance pour faire des balades dans le Parc national de l'Alta Murgia avec des chevaux dociles. Les enfants peuvent venir aussi. Les balades traversent des bois de chênes verts et des pinèdes, où l'on peut rencontrer beaucoup de la faune et de la flore de la Murgia, des marcassins aux buses, et des fleurs de toutes sortes : orchidées sauvages, asphodèles, férules, fenouil et thym.",
    ],
  },
}
