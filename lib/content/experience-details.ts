import type { Locale } from "@/lib/i18n"

// The four short points on the right of each experience page (like "Sleeps 2, Open fireplace..." in the rooms).
export const experienceFacts: Record<string, Record<Locale, string[]>> = {
  "olive-harvest": {
    en: ["Lasts one hour and a quarter", "Best in the morning", "Open to couples or groups", "€60 per couple, €30 for each additional person"],
    it: ["Dura un'ora e un quarto", "Meglio la mattina", "Aperto a coppie o a gruppi", "€60 a coppia, €30 per ogni persona in più"],
    fr: ["Dure une heure et quart", "De préférence le matin", "Ouvert aux couples ou aux groupes", "€60 par couple, €30 par personne supplémentaire"],
  },
  "cooking-class": {
    en: ["Lasts one hour", "Morning or afternoon", "By reservation", "€60 for two people, €30 for each extra person"],
    it: ["Dura un'ora", "Mattina o pomeriggio", "Su prenotazione", "€60 per due persone, €30 per ogni persona in più"],
    fr: ["Dure une heure", "Le matin ou l'après-midi", "Sur réservation", "€60 pour deux personnes, €30 par personne supplémentaire"],
  },
  massages: {
    en: ["Lasts one hour", "Relaxing or energising", "€70", "To be booked in advance"],
    it: ["Dura un'ora", "Rilassante o energizzante", "€70", "Da prenotare con anticipo"],
    fr: ["Dure une heure", "Relaxant ou énergisant", "€70", "À réserver à l'avance"],
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
    en: ["Mats and equipment free of charge", "On your own, free of charge", "Lesson with Agata: an hour and a half", "€60 per person (minimum two), €25 for each extra person"],
    it: ["Tappetini e attrezzatura gratuiti", "Da soli, gratuito", "Lezione con Agata: un'ora e mezza", "€60 a persona (minimo due), €25 per ogni persona in più"],
    fr: ["Tapis et matériel gratuits", "En solo, gratuit", "Cours avec Agata : une heure et demie", "€60 par personne (minimum deux), €25 par personne supplémentaire"],
  },
  "infinity-pool": {
    en: ["In season, mid-May to late September", "Infinity pool in the olive grove", "Sun loungers and shade", "The one Wi-Fi-free zone"],
    it: ["In stagione, da metà maggio a fine settembre", "Piscina a sfioro nell'uliveto", "Lettini e ombra", "L'unica zona senza Wi-Fi"],
    fr: ["En saison, de mi-mai à fin septembre", "Piscine à débordement dans l'oliveraie", "Transats et ombre", "La seule zone sans Wi-Fi"],
  },
  "estate-walk": {
    en: ["On request", "Olive groves, vineyards and the wild Murgia", "On the old paths of the estate", "Next to the Alta Murgia National Park"],
    it: ["Su richiesta", "Uliveti, vigneti e Murgia selvaggia", "Sugli antichi sentieri della tenuta", "Accanto al Parco Nazionale dell'Alta Murgia"],
    fr: ["Sur demande", "Oliveraies, vignes et Murgia sauvage", "Sur les anciens sentiers du domaine", "À côté du Parc national de l'Alta Murgia"],
  },
  golf: {
    en: ["By arrangement", "At the masseria", "Golf practice", "Organised for you on request"],
    it: ["Su prenotazione", "In masseria", "Practice golf", "Organizzato per te su richiesta"],
    fr: ["Sur réservation", "À la masseria", "Practice de golf", "Organisé pour vous sur demande"],
  },
  library: {
    en: ["By arrangement", "In the masseria", "A quiet room to read", "Away from the courtyard and the groves"],
    it: ["Su prenotazione", "In masseria", "Una sala silenziosa dove leggere", "Lontano dal cortile e dagli uliveti"],
    fr: ["Sur réservation", "À la masseria", "Une salle calme pour lire", "Loin de la cour et des oliveraies"],
  },
  "horse-riding": {
    en: ["By arrangement", "On horseback", "In the Alta Murgia National Park", "Beyond the olive groves"],
    it: ["Su prenotazione", "A cavallo", "Nel Parco Nazionale dell'Alta Murgia", "Oltre gli uliveti"],
    fr: ["Sur réservation", "À cheval", "Dans le Parc national de l'Alta Murgia", "Au delà des oliveraies"],
  },
}

// Description of each experience page (the Olive Oil Tasting and Tour has its own text in olive-harvest.ts).
export const experienceDetails: Record<string, Record<Locale, string[]>> = {
  "cooking-class": {
    en: [
      "Spend an hour with the cooks of Lama di Luna, who teach how to make a traditional Pugliese pasta, especially orecchiette, strascinati and cavatelli: from kneading the dough, to preparing the mass, to cutting it and shaping the very particular forms of the orecchiette that have made this pasta famous all over the world.",
    ],
    it: [
      "Un'ora con le cuoche di Lama di Luna, che insegnano come si fa una pasta tradizionale pugliese, in particolare orecchiette, strascinati e cavatelli: da come si impasta, a come si prepara la massa, a come si inizia a tagliarla e a dare le forme tanto particolari delle orecchiette, che hanno reso questa pasta rinomata in tutto il mondo.",
    ],
    fr: [
      "Une heure avec les cuisinières de Lama di Luna, qui enseignent comment faire une pâte traditionnelle des Pouilles, en particulier les orecchiette, les strascinati et les cavatelli : de la façon de pétrir, à la préparation de la pâte, jusqu'à la découpe et aux formes si particulières des orecchiette, qui ont rendu cette pâte célèbre dans le monde entier.",
    ],
  },
  massages: {
    en: [
      "We have a massage therapist who comes to Lama di Luna on request to give massages, which can be relaxing or energising, in a quiet and relaxing area of the masseria.",
    ],
    it: [
      "Abbiamo un massaggiatore che, su richiesta, viene a Lama di Luna per fare massaggi, che possono essere rilassanti o energizzanti, in una zona tranquilla e rilassante della masseria.",
    ],
    fr: [
      "Nous avons un masseur qui vient à Lama di Luna sur demande pour faire des massages, qui peuvent être relaxants ou énergisants, dans un endroit calme et reposant de la masseria.",
    ],
  },
  "bicycle-ride": {
    en: [
      "At Lama di Luna we have bicycles that we rent to our guests. They are pedal bicycles: you can ride them along the small roads across the whole estate, or take the little-trafficked Murgia road that leads towards Castel del Monte, for long rides in the Alta Murgia National Park, in a steppe landscape that looks almost lunar. You can also ride down among the olive groves of the Andria plain and discover the countryside: you decide whether to go through the countryside of Andria or into the National Park. It is a lovely way to discover the roads, the Murgia, our whole area and the masseria. In summer it is better to ride in the late afternoon, because of the heat.",
    ],
    it: [
      "A Lama di Luna abbiamo delle biciclette che affittiamo ai nostri ospiti. Sono biciclette a pedali: si può andare lungo le stradine di tutta la tenuta, oppure sulla strada poco trafficata della Murgia che porta verso Castel del Monte, per fare lunghe passeggiate nel Parco Nazionale dell'Alta Murgia, con un paesaggio steppico che sembra quasi lunare. Si può anche scendere in mezzo agli uliveti della piana di Andria e scoprire le campagne: si decide se andare tra le campagne di Andria o nel Parco Nazionale. È un bel modo per scoprire le strade, la Murgia, tutta la nostra zona e la masseria. D'estate è meglio andare nel tardo pomeriggio, per il caldo.",
    ],
    fr: [
      "À Lama di Luna, nous avons des vélos que nous louons à nos hôtes. Ce sont des vélos à pédales : vous pouvez rouler sur les petits chemins de tout le domaine, ou prendre la route peu fréquentée de la Murgia qui mène vers Castel del Monte, pour de longues balades dans le Parc national de l'Alta Murgia, dans un paysage de steppe qui paraît presque lunaire. Vous pouvez aussi descendre parmi les oliveraies de la plaine d'Andria et découvrir la campagne : à vous de choisir entre la campagne d'Andria et le Parc national. C'est une belle façon de découvrir les routes, la Murgia, toute notre région et la masseria. L'été, il vaut mieux partir en fin d'après-midi, à cause de la chaleur.",
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
      "Lama di Luna was built following Feng Shui and bioarchitecture, with spaces that have rounded corners and an excellent energy for yoga practice. You can practise in the indoor yoga room, from the 1700s, with a heated floor. We provide mats and all the equipment free of charge, so you can practise on your own in the morning, ask for some help, or do yoga together with Agata in the morning, with real yoga lessons. Practising on your own is free; a lesson with Agata lasts an hour and a half, with a minimum of two people, at €60 per person, and €25 for each extra person. Yoga is lovely with a teacher and just as lovely on your own, so you can choose.",
    ],
    it: [
      "Lama di Luna è stata costruita seguendo il Feng Shui e la bioarchitettura, con spazi dagli angoli arrotondati in cui circola un'ottima energia per fare yoga. Si può praticare nella sala yoga interna, del 1700, con il pavimento riscaldato. Mettiamo a disposizione gratuitamente tappetini e tutta l'attrezzatura, per praticare da soli la mattina, chiedendo un aiuto, oppure facendo yoga insieme ad Agata la mattina, con vere lezioni di yoga. Praticare da soli è gratuito; una lezione con Agata dura un'ora e mezza, con un minimo di due persone, al costo di €60 a persona e €25 per ogni persona in più. Lo yoga è bello con un maestro e altrettanto bello da soli: si può scegliere.",
    ],
    fr: [
      "Lama di Luna a été construite selon le Feng Shui et la bioarchitecture, avec des espaces aux angles arrondis où circule une excellente énergie pour pratiquer le yoga. Vous pouvez pratiquer dans la salle de yoga intérieure, du XVIIIe siècle, au sol chauffant. Nous mettons gratuitement à votre disposition des tapis et tout le matériel, pour pratiquer seul le matin, en demandant un peu d'aide, ou faire du yoga avec Agata le matin, avec de vrais cours de yoga. Pratiquer seul est gratuit ; un cours avec Agata dure une heure et demie, avec un minimum de deux personnes, au tarif de €60 par personne et €25 par personne supplémentaire. Le yoga est beau avec un professeur et tout aussi beau en solo : à vous de choisir.",
    ],
  },
  "infinity-pool": {
    en: [
      "Time by the masseria's infinity pool, looking out over the olive groves. The pool is set in the olive grove behind the masseria and is open in season, from mid-May to late September.",
      "Sun loungers and shade are there for you, and it is the one place on the property without Wi-Fi.",
    ],
    it: [
      "Un po' di tempo a bordo della piscina a sfioro della masseria, con lo sguardo sugli uliveti. La piscina è incastonata nell'uliveto dietro la masseria ed è aperta in stagione, da metà maggio a fine settembre.",
      "Lettini e ombra sono a tua disposizione, ed è l'unico posto della proprietà senza Wi-Fi.",
    ],
    fr: [
      "Un moment au bord de la piscine à débordement de la masseria, face aux oliveraies. La piscine est nichée dans l'oliveraie derrière la masseria et ouverte en saison, de mi-mai à fin septembre.",
      "Transats et ombre sont à votre disposition, et c'est le seul endroit du domaine sans Wi-Fi.",
    ],
  },
  "estate-walk": {
    en: [
      "A walk through the olive groves, the vineyards and the wild Murgia around the masseria, on the old paths of the estate.",
      "The estate borders the Alta Murgia National Park, and along the way you may meet wild orchids, fennel and thyme, and the birds that nest in the masseria's chimneys. Arranged on request.",
    ],
    it: [
      "Una passeggiata tra gli uliveti, i vigneti e la Murgia selvaggia intorno alla masseria, sugli antichi sentieri della tenuta.",
      "La tenuta confina con il Parco Nazionale dell'Alta Murgia, e lungo il cammino puoi incontrare orchidee selvatiche, finocchio e timo, e gli uccelli che nidificano nei camini della masseria. Si organizza su richiesta.",
    ],
    fr: [
      "Une promenade à travers les oliveraies, les vignes et la Murgia sauvage autour de la masseria, sur les anciens sentiers du domaine.",
      "Le domaine borde le Parc national de l'Alta Murgia et, en chemin, vous pouvez croiser des orchidées sauvages, du fenouil et du thym, ainsi que les oiseaux qui nichent dans les cheminées de la masseria. Organisée sur demande.",
    ],
  },
  golf: {
    en: [
      "Practice golf at the masseria, by arrangement.",
      "Tell us when you would like to play and we will organise it for you.",
    ],
    it: [
      "Practice golf in masseria, su prenotazione.",
      "Dicci quando vorresti giocare e lo organizzeremo per te.",
    ],
    fr: [
      "Practice de golf à la masseria, sur réservation.",
      "Dites-nous quand vous souhaitez jouer et nous nous en occupons.",
    ],
  },
  library: {
    en: [
      "The masseria's library, a quiet room to read and slow down, away from the courtyard and the groves.",
      "Take a book, find a corner and let the afternoon pass. Tell us if you would like to spend some time there and we will arrange it for you.",
    ],
    it: [
      "La biblioteca della masseria, una sala silenziosa dove leggere e rallentare, lontano dal cortile e dagli uliveti.",
      "Prendi un libro, trova un angolo e lascia passare il pomeriggio. Dicci se vorresti trascorrerci un po' di tempo e lo organizzeremo per te.",
    ],
    fr: [
      "La bibliothèque de la masseria, une salle calme pour lire et ralentir, loin de la cour et des oliveraies.",
      "Prenez un livre, trouvez un coin et laissez passer l'après-midi. Dites-nous si vous souhaitez y passer un moment et nous nous en occuperons.",
    ],
  },
  "horse-riding": {
    en: [
      "Ride out on horseback into the Alta Murgia National Park, beyond the olive groves, through the wild uplands that border the estate.",
      "The ride is arranged on request. Tell us your dates and how much riding experience you have, and we will organise it for you.",
    ],
    it: [
      "A cavallo nel Parco Nazionale dell'Alta Murgia, oltre gli uliveti, tra gli altopiani selvaggi che confinano con la tenuta.",
      "La passeggiata si organizza su richiesta. Dicci le tue date e quanta esperienza hai a cavallo, e la organizzeremo per te.",
    ],
    fr: [
      "À cheval dans le Parc national de l'Alta Murgia, au delà des oliveraies, à travers les hauts plateaux sauvages qui bordent le domaine.",
      "La balade est organisée sur demande. Indiquez-nous vos dates et votre expérience de l'équitation, et nous nous en occuperons.",
    ],
  },
}
