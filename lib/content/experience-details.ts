import type { Locale } from "@/lib/i18n"

// The four short points on the right of each experience page (like "Sleeps 2, Open fireplace..." in the rooms).
export const experienceFacts: Record<string, Record<Locale, string[]>> = {
  "olive-harvest": {
    en: ["Lasts 1h 15 min", "Best in the morning", "Open to couples or groups", "€60 per couple, €30 for each additional person"],
    it: ["Dura 1h 15 min", "Meglio la mattina", "Aperto a coppie o a gruppi", "€60 a coppia, €30 per ogni persona in più"],
    fr: ["Dure 1 h 15 min", "De préférence le matin", "Ouvert aux couples ou aux groupes", "€60 par couple, €30 par personne supplémentaire"],
  },
  "cooking-class": {
    en: ["Lasts 1 hour", "Morning or afternoon", "By reservation", "€60 for two people, €30 for each extra person"],
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
    en: ["Reserved for guests staying at the masseria", "Over 900 DVDs from the history of cinema", "On request, with the help of the reception", "Afternoon or after dinner"],
    it: ["Riservata agli ospiti che dormono in masseria", "Oltre 900 DVD della storia del cinema", "Su richiesta, con l'aiuto della reception", "Nel pomeriggio o dopo cena"],
    fr: ["Réservée aux hôtes qui dorment à la masseria", "Plus de 900 DVD de l'histoire du cinéma", "Sur demande, avec l'aide de la réception", "L'après-midi ou après le dîner"],
  },
  yoga: {
    en: ["Mats and equipment free of charge", "On your own, free of charge", "Lesson with teacher: 1h 30 min", "€60 per couple, €25 for each extra person"],
    it: ["Tappetini e attrezzatura gratuiti", "Da soli, gratuito", "Lezione con maestro: 1h 30 min", "€60 a coppia, €25 per ogni persona in più"],
    fr: ["Tapis et matériel gratuits", "En solo, gratuit", "Cours avec professeur : 1 h 30 min", "€60 par couple, €25 par personne supplémentaire"],
  },
  "infinity-pool": {
    en: ["18 metres long", "Salt water, disinfected with salt", "Open from 9 am to 7 pm", "Free, for guests staying overnight at Lama di Luna"],
    it: ["Lunga 18 metri", "Acqua salata, disinfettata con il sale", "Aperta dalle 9 alle 19", "Gratuita, per gli ospiti che pernottano a Lama di Luna"],
    fr: ["18 mètres de long", "Eau salée, désinfectée au sel", "Ouverte de 9 h à 19 h", "Gratuite, pour les hôtes qui passent la nuit à Lama di Luna"],
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
      "Spend an hour with the cooks of Lama di Luna, who teach how to make a traditional Pugliese pasta, especially orecchiette, strascinati and cavatelli: from kneading the dough, to preparing the mass, to cutting it and shaping the very particular forms of the orecchiette that have made this pasta famous all over the world. The pasta you have made together is then cooked on the spot with tomato sauce, made with organic tomatoes from the Lama di Luna vegetable garden, for a final taste of what you have made together.",
    ],
    it: [
      "Un'ora con le cuoche di Lama di Luna, che insegnano come si fa una pasta tradizionale pugliese, in particolare orecchiette, strascinati e cavatelli: da come si impasta, a come si prepara la massa, a come si inizia a tagliarla e a dare le forme tanto particolari delle orecchiette, che hanno reso questa pasta rinomata in tutto il mondo. La pasta fatta insieme viene poi cucinata al volo con salsa di pomodoro, preparata con pomodori biologici dell'orto di Lama di Luna, per un assaggio finale di quello che si è fatto insieme.",
    ],
    fr: [
      "Une heure avec les cuisinières de Lama di Luna, qui enseignent comment faire une pâte traditionnelle des Pouilles, en particulier les orecchiette, les strascinati et les cavatelli : de la façon de pétrir, à la préparation de la pâte, jusqu'à la découpe et aux formes si particulières des orecchiette, qui ont rendu cette pâte célèbre dans le monde entier. Les pâtes préparées ensemble sont ensuite cuites sur place avec une sauce tomate, faite avec des tomates biologiques du potager de Lama di Luna, pour une dégustation finale de ce que vous avez préparé ensemble.",
    ],
  },
  massages: {
    en: [
      "We have a massage therapist who comes to Lama di Luna on request to give massages, which can be relaxing or energising, in a quiet and relaxing area of the masseria. It is a calm and historic part of the masseria, where you can enjoy a moment for yourself, wind down and recover your energy during your stay at Lama di Luna.",
    ],
    it: [
      "Abbiamo un massaggiatore che, su richiesta, viene a Lama di Luna per fare massaggi, che possono essere rilassanti o energizzanti, in una zona tranquilla e rilassante della masseria. È una parte calma e storica della masseria, dove godersi un momento per sé, rilassarsi e recuperare le energie durante il soggiorno a Lama di Luna.",
    ],
    fr: [
      "Nous avons un masseur qui vient à Lama di Luna sur demande pour faire des massages, qui peuvent être relaxants ou énergisants, dans un endroit calme et reposant de la masseria. C'est un lieu paisible et historique de la masseria, où profiter d'un moment pour soi, se détendre et retrouver de l'énergie pendant votre séjour à Lama di Luna.",
    ],
  },
  "bicycle-ride": {
    en: [
      "At Lama di Luna we have bicycles that we rent to our guests. They are pedal bicycles: you can ride them along the small roads across the whole estate, or take the little-trafficked Murgia road that leads towards Castel del Monte, for long rides in the Alta Murgia National Park, in a steppe landscape that looks almost lunar. You can also ride down among the olive groves of the Andria plain and discover the countryside. In summer it is better to ride in the early morning or in the late afternoon, because of the heat.",
    ],
    it: [
      "A Lama di Luna abbiamo delle biciclette che affittiamo ai nostri ospiti. Sono biciclette a pedali: si può andare lungo le stradine di tutta la tenuta, oppure sulla strada poco trafficata della Murgia che porta verso Castel del Monte, per fare lunghe passeggiate nel Parco Nazionale dell'Alta Murgia, con un paesaggio steppico che sembra quasi lunare. Si può anche scendere in mezzo agli uliveti della piana di Andria e scoprire le campagne. D'estate è meglio andare la mattina presto o nel tardo pomeriggio, per il caldo.",
    ],
    fr: [
      "À Lama di Luna, nous avons des vélos que nous louons à nos hôtes. Ce sont des vélos à pédales : vous pouvez rouler sur les petits chemins de tout le domaine, ou prendre la route peu fréquentée de la Murgia qui mène vers Castel del Monte, pour de longues balades dans le Parc national de l'Alta Murgia, dans un paysage de steppe qui paraît presque lunaire. Vous pouvez aussi descendre parmi les oliveraies de la plaine d'Andria et découvrir la campagne. L'été, il vaut mieux partir tôt le matin ou en fin d'après-midi, à cause de la chaleur.",
    ],
  },
  "cinema-room": {
    en: [
      "Our cinema room, also reserved for guests staying at the masseria. We have a collection of over 900 DVDs of famous films from the history of cinema, kept in an old bookcase. After choosing a film, you can watch it on request with the help of the reception, in very comfortable armchairs. There is a large selection of classic Italian films, auteur films, and international ones too. You can watch them in the afternoon, or after a romantic dinner on the veranda: just ask to see a film from another time in the cinema of Lama di Luna.",
    ],
    it: [
      "La nostra sala cinema, anche questa riservata agli ospiti che dormono in masseria. Abbiamo una collezione di oltre 900 DVD di film famosi della storia del cinema, tenuti in una vecchia libreria. Dopo aver scelto il film, lo si può vedere su richiesta con l'aiuto della reception, su poltrone molto comode. C'è una grande selezione di film italiani d'epoca, d'autore, ma anche internazionali. Si possono guardare nel pomeriggio, oppure dopo una cena romantica sulla veranda: basta chiedere di vedere un film di altri tempi nel cinema di Lama di Luna.",
    ],
    fr: [
      "Notre salle de cinéma, elle aussi réservée aux hôtes qui dorment à la masseria. Nous avons une collection de plus de 900 DVD de films célèbres de l'histoire du cinéma, rangés dans une vieille bibliothèque. Après avoir choisi un film, vous pouvez le regarder sur demande avec l'aide de la réception, dans des fauteuils très confortables. Il y a un grand choix de films italiens classiques, de films d'auteur, mais aussi internationaux. Vous pouvez les regarder l'après-midi, ou après un dîner romantique sur la véranda : il suffit de demander à voir un film d'un autre temps dans le cinéma de Lama di Luna.",
    ],
  },
  yoga: {
    en: [
      "Lama di Luna was built following Feng Shui and bioarchitecture, with spaces that have rounded corners and an excellent energy for yoga practice. You can practise in the indoor yoga room, from the 1700s, with a heated floor. We provide mats and all the equipment free of charge. You can practise on your own in the morning, or join Agata, or ask for yoga lessons. Practising on your own is free; a lesson with a teacher lasts an hour and a half, costs €60 per couple, and €25 for each extra person. Yoga is lovely with a teacher and just as lovely on your own, so you can choose.",
    ],
    it: [
      "Lama di Luna è stata costruita seguendo il Feng Shui e la bioarchitettura, con spazi dagli angoli arrotondati in cui circola un'ottima energia per fare yoga. Si può praticare nella sala yoga interna, del 1700, con il pavimento riscaldato. Mettiamo a disposizione gratuitamente tappetini e tutta l'attrezzatura. Si può praticare da soli la mattina, oppure unirsi ad Agata, oppure chiedere delle lezioni di yoga. Praticare da soli è gratuito; una lezione con un maestro dura un'ora e mezza, costa €60 a coppia e €25 per ogni persona in più. Lo yoga è bello con un maestro e altrettanto bello da soli: si può scegliere.",
    ],
    fr: [
      "Lama di Luna a été construite selon le Feng Shui et la bioarchitecture, avec des espaces aux angles arrondis où circule une excellente énergie pour pratiquer le yoga. Vous pouvez pratiquer dans la salle de yoga intérieure, du XVIIIe siècle, au sol chauffant. Nous mettons gratuitement à votre disposition des tapis et tout le matériel. Vous pouvez pratiquer seul le matin, ou rejoindre Agata, ou demander des cours de yoga. Pratiquer seul est gratuit ; un cours avec un professeur dure une heure et demie, coûte €60 par couple et €25 par personne supplémentaire. Le yoga est beau avec un professeur et tout aussi beau en solo : à vous de choisir.",
    ],
  },
  "infinity-pool": {
    en: [
      "The infinity pool is shaped like a rounded lake and is 18 metres long, so it is also perfect for swimming laps. It is 1.40 metres deep at its deepest point. It is open from 9 in the morning to 7 in the evening, free of charge and reserved for guests staying overnight at Lama di Luna. There are sun loungers around the pool, which in summer can be moved into the shade of the olive trees, and a soft green lawn around it. The water is salt water, disinfected with salt, and the pool looks out over the plain of monumental olive trees of Andria. At sunset you can see the swallows that come to drink from the pool, and at night the bats of the Murgia, out hunting insects, which also come for a little freshness and some water.",
    ],
    it: [
      "La piscina a sfioro ha una forma rotonda, come un lago, ed è lunga 18 metri, quindi perfetta anche per fare delle belle nuotate. Ha una profondità di un metro e quaranta nel punto più profondo. È aperta dalle 9 del mattino alle 7 di sera, è gratuita e riservata agli ospiti che pernottano a Lama di Luna. Attorno alla piscina ci sono dei lettini che durante l'estate si possono spostare all'ombra degli ulivi, e un prato verde morbido. L'acqua è salata, disinfettata con il sale, e la piscina si affaccia sulla pianura di olivi monumentali di Andria. Al tramonto si possono vedere le rondini che vengono a bere dalla piscina, e di notte i pipistrelli della Murgia, a caccia di insetti, che vengono anche loro a cercare un po' di refrigerio e un po' d'acqua.",
    ],
    fr: [
      "La piscine à débordement a une forme arrondie, comme un lac, et mesure 18 mètres de long : elle est donc aussi parfaite pour faire de belles nages. Elle a une profondeur d'un mètre quarante à l'endroit le plus profond. Elle est ouverte de 9 h du matin à 19 h, gratuite et réservée aux hôtes qui passent la nuit à Lama di Luna. Autour de la piscine, il y a des transats qui, en été, peuvent être déplacés à l'ombre des oliviers, et une pelouse verte et douce. L'eau est salée, désinfectée au sel, et la piscine donne sur la plaine d'oliviers monumentaux d'Andria. Au coucher du soleil, on voit les hirondelles venir boire dans la piscine, et la nuit les chauves-souris de la Murgia, à la chasse aux insectes, qui viennent elles aussi chercher un peu de fraîcheur et d'eau.",
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
      "The Petroni family has always been a family of literary people: from Agostino Petroni, father of Pietro, who was a magistrate, to his uncle Pietro, who was a lawyer, and so on, so there are a great many books in our family. Today Agostino Petroni Junior, son of Pietro, is a journalist, and Pietro himself is an agronomist: it is a family that has always read a lot. In the rooms and in the family library you will find a collection of over 3,000 books, some very old, in Latin, German, French, English and Italian. If you are curious, the library is always open and free of charge, 24 hours a day. In the family library there are also special collections, such as old typewriters. It is a place that preserves the history of Puglia and the history of the family, and a very particular one, which the family has decided to open to all our guests, who are always asked to treat it with respect and to preserve it for those who will come after them.",
    ],
    it: [
      "La famiglia Petroni è sempre stata una famiglia di letterati: da Agostino Petroni, padre di Pietro, che era magistrato, a suo zio Pietro, che era avvocato, e così via, per cui nella nostra famiglia ci sono tantissimi libri. Oggi Agostino Petroni Junior, figlio di Pietro, è giornalista, e Pietro stesso è agronomo: è una famiglia che ha sempre letto molto. Nelle stanze e nella biblioteca di famiglia troverete una collezione di oltre 3.000 libri, alcuni molto antichi, in latino, tedesco, francese, inglese e italiano. Se siete curiosi, la biblioteca è sempre aperta e gratuita, 24 ore su 24. Nella biblioteca di famiglia ci sono anche collezioni particolari, come vecchie macchine da scrivere. È un luogo che conserva la storia della Puglia e la storia della famiglia, un luogo molto particolare che la famiglia ha deciso di rendere accessibile a tutti gli ospiti, ai quali chiede sempre di trattarlo con rispetto e di conservarlo per coloro che verranno dopo.",
    ],
    fr: [
      "La famille Petroni a toujours été une famille de lettrés : d'Agostino Petroni, père de Pietro, qui était magistrat, à son oncle Pietro, qui était avocat, et ainsi de suite, de sorte que notre famille compte énormément de livres. Aujourd'hui, Agostino Petroni Junior, fils de Pietro, est journaliste, et Pietro lui-même est agronome : c'est une famille qui a toujours beaucoup lu. Dans les chambres et dans la bibliothèque de famille, vous trouverez une collection de plus de 3 000 livres, certains très anciens, en latin, en allemand, en français, en anglais et en italien. Si vous êtes curieux, la bibliothèque est toujours ouverte et gratuite, 24 heures sur 24. Dans la bibliothèque de famille, il y a aussi des collections particulières, comme de vieilles machines à écrire. C'est un lieu qui conserve l'histoire des Pouilles et l'histoire de la famille, un lieu très particulier que la famille a décidé d'ouvrir à tous les hôtes, auxquels elle demande toujours de le traiter avec respect et de le conserver pour ceux qui viendront après eux.",
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
