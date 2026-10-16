export type ExpCard = {
  slug: string
  img: string
  num: string
  name: string
  meta: string
  pos?: string
}

export type ExperiencesContent = {
  eyebrow: string
  title: string
  intro: string
  onEstateLabel: string
  inRegionLabel: string
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

export const experiences: Record<"en" | "it", ExperiencesContent> = {
  en: {
    eyebrow: "Ways to spend a day",
    title: "Experiences",
    intro:
      "At the masseria and within an hour's drive. The olive tour, a cooking class, yoga, a bicycle ride — and the trulli, the cliffs, the cave city, the castle on the hill.",
    onEstateLabel: "On the Estate",
    inRegionLabel: "In the Region",
    arrangeEyebrow: "Tell us what you'd love",
    arrangeTitle: "We'll arrange the day",
    arrangeText:
      "All experiences are arranged on request. Many are weather- or season-dependent; some need a few days' notice. Drop us a note with your dates and what you're drawn to.",
    arrangeCta: "Get in touch",
    onEstate: [
      { slug: "olive-harvest", img: IMG.olive, num: "01 · October–November", name: "The Olive Tour", meta: "Walk the groves at dawn, watch the cold press, taste the first oil of the year on warm bread." },
      { slug: "#", img: IMG.cooking, num: "02 · Half-day, on request", name: "Cooking Class", meta: "A cooking class with our resident cook — orecchiette pasta and Pugliese focaccia, made by hand at the masseria kitchen." },
      { slug: "#", img: IMG.wine, num: "03 · By arrangement", name: "Relaxing Massages", meta: "Massages by appointment, in the quiet of the masseria." },
      { slug: "#", img: IMG.dawn, num: "04 · Half-day, on request", name: "Bicycle Ride", meta: "A ride through the olive groves and the quiet country roads around the masseria." },
      { slug: "#", img: IMG.wine, num: "05 · By arrangement", name: "Cinema Room", meta: "An evening in the masseria's cinema room, by arrangement." },
      { slug: "#", img: IMG.olive, num: "06 · By arrangement", name: "Yoga Practices", meta: "Yoga practices at the masseria, by arrangement." },
      { slug: "#", img: IMG.dawn, num: "07 · On request", name: "Walk on the Estate", meta: "A walk through the olive groves, the vineyards and the wild Murgia around the masseria." },
    ],
    inRegion: [
      { slug: "#", img: "/whatsapp/20261015_141233_1132577716005342.jpg", num: "08 · 15 min drive", name: "Castel del Monte", meta: "Frederick II's octagonal 13th-century castle, a UNESCO site on the next hill over. Self-drive or arranged transfer." },
      { slug: "#", img: "/whatsapp/20261015_141335_1635279478124485.jpg", pos: "55% center", num: "09 · 1h 10 min drive", name: "Alberobello & the Trulli", meta: "The conical-roofed trulli of the Valle d'Itria — the UNESCO town and the smaller hamlets few visitors find." },
      { slug: "#", img: IMG.polignano, num: "10 · 1 h drive", name: "Polignano a Mare", meta: "Cliffs over the Adriatic, the cave bar, the long lunch overlooking the sea. The most cinematic beach town in Puglia." },
      { slug: "#", img: "/whatsapp/20261015_141242_1113590001072954.jpg", pos: "62% center", num: "11 · 1h 20 min drive", name: "Matera", meta: "The cave city, the sassi, the rock churches. Where Stanley Tucci filmed; where Mel Gibson filmed; where you'll never forget you were." },
    ],
  },
  it: {
    eyebrow: "Modi di passare una giornata",
    title: "Esperienze",
    intro:
      "In masseria e a meno di un'ora di macchina. Il tour degli ulivi, un corso di cucina, lo yoga, un giro in bicicletta — e i trulli, le scogliere, la città di pietra, il castello sulla collina.",
    onEstateLabel: "In Masseria",
    inRegionLabel: "Nella Regione",
    arrangeEyebrow: "Dicci cosa ti piacerebbe",
    arrangeTitle: "Organizziamo noi la giornata",
    arrangeText:
      "Tutte le esperienze si organizzano su richiesta. Molte dipendono dal tempo o dalla stagione; alcune richiedono qualche giorno di preavviso. Scrivici con le tue date e ciò che ti attrae.",
    arrangeCta: "Contattaci",
    onEstate: [
      { slug: "olive-harvest", img: IMG.olive, num: "01 · Ottobre–Novembre", name: "Il Tour degli Ulivi", meta: "Cammina tra gli ulivi all'alba, osserva la spremitura a freddo, assaggia il primo olio dell'anno sul pane caldo." },
      { slug: "#", img: IMG.cooking, num: "02 · Mezza giornata, su richiesta", name: "Corso di Cucina", meta: "Un corso di cucina con la nostra cuoca — orecchiette e focaccia pugliese, fatte a mano nella cucina della masseria." },
      { slug: "#", img: IMG.wine, num: "03 · Su prenotazione", name: "Massaggi Rilassanti", meta: "Massaggi su appuntamento, nella quiete della masseria." },
      { slug: "#", img: IMG.dawn, num: "04 · Mezza giornata, su richiesta", name: "Giro in Bicicletta", meta: "Un giro in bicicletta tra gli uliveti e le tranquille strade di campagna intorno alla masseria." },
      { slug: "#", img: IMG.wine, num: "05 · Su prenotazione", name: "Sala Cinema", meta: "Una serata nella sala cinema della masseria, su prenotazione." },
      { slug: "#", img: IMG.olive, num: "06 · Su prenotazione", name: "Pratiche di Yoga", meta: "Pratiche di yoga in masseria, su prenotazione." },
      { slug: "#", img: IMG.dawn, num: "07 · Su richiesta", name: "Passeggiata nella Tenuta", meta: "Una passeggiata tra gli uliveti, i vigneti e la Murgia selvaggia intorno alla masseria." },
    ],
    inRegion: [
      { slug: "#", img: "/whatsapp/20261015_141233_1132577716005342.jpg", num: "08 · 15 min di macchina", name: "Castel del Monte", meta: "Il castello ottagonale di Federico II del XIII secolo, sito UNESCO sulla collina accanto. In auto propria o con transfer." },
      { slug: "#", img: "/whatsapp/20261015_141335_1635279478124485.jpg", pos: "55% center", num: "09 · 1h 10 min di macchina", name: "Alberobello e i Trulli", meta: "I trulli dal tetto conico della Valle d'Itria — la città UNESCO e i borghi più piccoli che pochi visitatori trovano." },
      { slug: "#", img: IMG.polignano, num: "10 · 1 h di macchina", name: "Polignano a Mare", meta: "Scogliere sull'Adriatico, il bar nella grotta, il lungo pranzo affacciato sul mare. Il borgo di mare più cinematografico di Puglia." },
      { slug: "#", img: "/whatsapp/20261015_141242_1113590001072954.jpg", pos: "62% center", num: "11 · 1h 20 min di macchina", name: "Matera", meta: "La città di pietra, i sassi, le chiese rupestri. Dove ha girato Stanley Tucci; dove ha girato Mel Gibson; dove non dimenticherai mai di essere stato." },
    ],
  },
}
