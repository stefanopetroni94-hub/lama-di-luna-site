import type { Locale } from "@/lib/i18n"

type Space = { moment: string; place: string; body: string }
type Day = { day: string; title: string; body: string }
type Price = { label: string; price: string }
type Faq = { q: string; a: string }

export type WeddingsContent = {
  introTitle: string
  introText: string
  introCta: string
  exclusiveTitle: string
  exclusiveText: string
  stats: { value: string; label: string }[]
  galleryLabel: string
  galleryPrev: string
  galleryNext: string
  galleryAlts: string[]
  spacesTitle: string
  spaces: Space[]
  weekendTitle: string
  weekend: Day[]
  ceremonyTitle: string
  ceremonyText: string
  pricesTitle: string
  prices: Price[]
  vat: string
  guideCta: string
  filmLabel: string
  filmTitle: string
  filmWatch: string
  filmCredit: string
  faqTitle: string
  faq: Faq[]
  enquireTitle: string
  enquireText: string
  form: {
    names: string
    email: string
    country: string
    date: string
    guestsLabel: string
    guests: string[]
    ceremonyLabel: string
    ceremony: string[]
    budgetLabel: string
    budget: string[]
    plannerLabel: string
    planner: string[]
    more: string
    select: string
    privacyBefore: string
    privacyLink: string
    privacyAfter: string
    button: string
    success: string
  }
}

export const weddings: Record<Locale, WeddingsContent> = {
  en: {
    introTitle: "Say yes in the Valley of the Moon",
    introText: "A whole 1800s masseria on the edge of the Alta Murgia National Park, in exclusive, for your wedding only.",
    introCta: "Request the wedding guide",
    exclusiveTitle: "A Whole Masseria, in Exclusive, for Your Wedding Only",
    exclusiveText:
      "For your wedding weekend Lama di Luna closes to everyone else. The courtyard, the pool, the library, the cinema room and the old refectory become yours, with our chefs and staff looking after you and your guests from arrival to the farewell brunch. At night there is only silence: no town, no neighbours, no noise curfews from next door, just the Alta Murgia National Park, the olive trees and the night sky. The kitchen cooks with extra virgin olive oil and vegetables from our 200 hectares of organic estate, served at long candlelit tables. And the whole masseria runs on the sun, with 48 solar panels and 400 photovoltaic panels: bio-architecture and sustainability without giving up comfort.",
    stats: [
      { value: "150", label: "Guests at dinner" },
      { value: "27", label: "Guests sleep on site" },
      { value: "11", label: "Rooms" },
      { value: "45 min", label: "From Bari airport" },
    ],
    galleryLabel: "Weddings at Lama di Luna",
    galleryPrev: "Previous photos",
    galleryNext: "Next photos",
    galleryAlts: [
      "The newlyweds in front of the Pugliese festival lights at sunset, Lama di Luna",
      "The groom walking down the ceremony aisle between the guests, under the trees at Lama di Luna",
      "The bride throwing her bouquet on the lawn while the guests applaud",
      "The ceremony aisle beside the masseria",
      "The newlyweds toasting with champagne under the brick vault of the old cellar, next to the wedding cake",
      "Guests at the aperitivo on the lawn under the trees",
      "Wedding guests raising their glasses at the long table in the courtyard, under string lights",
      "The newlyweds laughing as they leave the dovecote tower, with guests throwing rice and petals",
      "The bride beside the wrought iron gate",
      "The wedding table set with white flowers and wooden chairs in the courtyard at sunset",
      "The newlyweds kissing under an oak tree draped with white cloth, next to the wedding cake",
      "The long wedding table in the masseria courtyard",
      "Wedding guests waving napkins during the dinner in the courtyard",
      "The bride in the courtyard of the masseria, in black and white, with a vintage convertible behind her",
      "The newlyweds dancing in a meadow of white flowers, with olive trees behind them",
    ],
    spacesTitle: "Spaces & Capacity",
    spaces: [
      { moment: "Ceremony", place: "Under the oak trees", body: "Up to 150 seated guests, facing the National Park." },
      { moment: "Aperitivo", place: "Terraces", body: "Up to 150 guests standing, at golden hour." },
      { moment: "Dinner", place: "The inner courtyard", body: "Up to 150 guests at long tables under the stars." },
      { moment: "Rain plan", place: "The 1800s halls", body: "Up to 150 guests indoors, under stone vaults." },
    ],
    weekendTitle: "Your Wedding Weekend",
    weekend: [
      { day: "Friday", title: "Welcome dinner", body: "Guests arrive and settle in. Pizza from the wood oven or a Murgian supper on the veranda." },
      { day: "Saturday", title: "The wedding", body: "Ceremony at sunset, aperitivo on the terrace, dinner and dancing in the courtyard." },
      { day: "Sunday", title: "Farewell brunch", body: "A slow brunch, an olive oil tasting or a walk on the old drovers' paths before goodbyes." },
    ],
    ceremonyTitle: "Symbolic, Civil or Religious",
    ceremonyText:
      "Symbolic ceremonies take place on the estate, with an English-speaking celebrant on request. Civil ceremonies are held in our ancient library or outdoors, upon request to the Municipality of Andria. Religious ceremonies in a nearby church, with transfers arranged for your guests.",
    pricesTitle: "Clear Prices, from the Start",
    prices: [
      { label: "Exclusive use, 3 nights, 27 guests", price: "from € 13,450*" },
      { label: "Wedding dinner menu", price: "from € 160 per guest*" },
      { label: "Welcome dinner menu", price: "from € 60 per guest*" },
      { label: "Farewell brunch menu", price: "from € 45 per guest*" },
    ],
    vat: "* plus 10% VAT",
    guideCta: "Request the full wedding guide",
    filmLabel: "Real weddings",
    filmTitle: "An Italian–Norwegian wedding at Lama di Luna",
    filmWatch: "Watch the wedding film",
    filmCredit: "Film by",
    faqTitle: "Frequently Asked",
    faq: [
      { q: "Do we have to book the whole masseria?", a: "Yes. Every wedding is exclusive, with a minimum stay of three nights." },
      { q: "Where do the other guests sleep?", a: "We host 27 guests on site and suggest partner hotels nearby, with shuttles on request." },
      { q: "Can we bring our own planner and suppliers?", a: "Yes, upon request." },
      { q: "Until what time can we dance?", a: "With no neighbours around, the party can run late." },
      { q: "How do our guests get here?", a: "Bari airport is 45 minutes away. Guests can rent cars at the airport, or we can help arrange private transfers for groups." },
    ],
    enquireTitle: "Tell us about your day",
    enquireText: "We reply within 24 hours with availability and our wedding guide.",
    form: {
      names: "Your names",
      email: "Email",
      country: "Country",
      date: "Preferred date or season",
      guestsLabel: "Number of guests",
      guests: ["Up to 30", "30–80", "80–120", "120–150"],
      ceremonyLabel: "Type of ceremony",
      ceremony: ["Symbolic", "Civil", "Religious", "Not sure yet"],
      budgetLabel: "Budget",
      budget: ["Under €30,000", "€30,000–60,000", "Over €60,000"],
      plannerLabel: "Do you have a planner?",
      planner: ["Not yet", "Yes"],
      more: "Tell us more",
      select: "Select",
      privacyBefore: "I have read and accept the ",
      privacyLink: "Privacy Policy",
      privacyAfter: "",
      button: "Request wedding details",
      success: "Thank you. We will reply within 24 hours with availability and our wedding guide.",
    },
  },
  it: {
    introTitle: "Dite sì nella Valle della Luna",
    introText: "Un'intera masseria dell'Ottocento ai margini del Parco Nazionale dell'Alta Murgia, in esclusiva, solo per il vostro matrimonio.",
    introCta: "Richiedi la guida ai matrimoni",
    exclusiveTitle: "Un'Intera Masseria, in Esclusiva, Solo per il Vostro Matrimonio",
    exclusiveText:
      "Per il weekend del vostro matrimonio Lama di Luna chiude a tutti gli altri. La corte, la piscina, la biblioteca, la sala cinema e l'antico refettorio diventano vostri, con i nostri cuochi e il nostro staff che si prendono cura di voi e dei vostri ospiti dall'arrivo al brunch di saluto. Di notte c'è solo silenzio: nessun paese, nessun vicino, nessun limite di rumore imposto da chi abita accanto, solo il Parco Nazionale dell'Alta Murgia, gli ulivi e il cielo stellato. La cucina usa olio extravergine d'oliva e verdure dai nostri 200 ettari di tenuta biologica, serviti su lunghe tavolate a lume di candela. E l'intera masseria vive di sole, con 48 pannelli solari e 400 pannelli fotovoltaici: bioarchitettura e sostenibilità senza rinunciare al comfort.",
    stats: [
      { value: "150", label: "Ospiti a cena" },
      { value: "27", label: "Ospiti che dormono in tenuta" },
      { value: "11", label: "Camere" },
      { value: "45 min", label: "Dall'aeroporto di Bari" },
    ],
    galleryLabel: "Matrimoni a Lama di Luna",
    galleryPrev: "Foto precedenti",
    galleryNext: "Foto successive",
    galleryAlts: [
      "Gli sposi davanti alla luminaria pugliese al tramonto, Lama di Luna",
      "Lo sposo lungo il viale della cerimonia tra gli ospiti, sotto gli alberi di Lama di Luna",
      "La sposa lancia il bouquet sul prato mentre gli ospiti applaudono",
      "Il viale per la cerimonia accanto alla masseria",
      "Gli sposi brindano con lo champagne sotto la volta di mattoni dell'antica cantina, accanto alla torta nuziale",
      "Gli ospiti all'aperitivo sul prato sotto gli alberi",
      "Gli invitati alzano i calici alla lunga tavolata nella corte, sotto le luci a festone",
      "Gli sposi escono ridendo dalla torretta della colombaia, con gli ospiti che lanciano riso e petali",
      "La sposa accanto al cancello di ferro",
      "La tavola nuziale apparecchiata con fiori bianchi e sedie di legno nella corte al tramonto",
      "Gli sposi si baciano sotto una quercia ornata di teli bianchi, accanto alla torta nuziale",
      "La lunga tavolata nuziale nel cortile della masseria",
      "Gli invitati agitano i tovaglioli durante la cena nella corte",
      "La sposa nel cortile della masseria, in bianco e nero, con una spider d'epoca alle spalle",
      "Gli sposi ballano in un prato di fiori bianchi, con gli ulivi dietro di loro",
    ],
    spacesTitle: "Spazi e Capienza",
    spaces: [
      { moment: "Cerimonia", place: "Sotto le querce", body: "Fino a 150 ospiti seduti, di fronte al Parco Nazionale." },
      { moment: "Aperitivo", place: "Le terrazze", body: "Fino a 150 ospiti in piedi, all'ora d'oro." },
      { moment: "Cena", place: "La corte interna", body: "Fino a 150 ospiti a lunghe tavolate sotto le stelle." },
      { moment: "Piano in caso di pioggia", place: "Le sale dell'Ottocento", body: "Fino a 150 ospiti al chiuso, sotto volte di pietra." },
    ],
    weekendTitle: "Il Vostro Weekend di Nozze",
    weekend: [
      { day: "Venerdì", title: "Cena di benvenuto", body: "Gli ospiti arrivano e si sistemano. Pizza dal forno a legna o una cena murgiana sulla veranda." },
      { day: "Sabato", title: "Il matrimonio", body: "Cerimonia al tramonto, aperitivo sulla terrazza, cena e balli nella corte." },
      { day: "Domenica", title: "Brunch di saluto", body: "Un brunch lento, una degustazione d'olio o una passeggiata sugli antichi tratturi prima dei saluti." },
    ],
    ceremonyTitle: "Simbolica, Civile o Religiosa",
    ceremonyText:
      "Le cerimonie simboliche si svolgono in tenuta, con un celebrante di lingua inglese su richiesta. Le cerimonie civili si tengono nella nostra antica biblioteca o all'aperto, su richiesta al Comune di Andria. Cerimonie religiose in una chiesa vicina, con trasferimenti organizzati per i vostri ospiti.",
    pricesTitle: "Prezzi Chiari, fin dall'Inizio",
    prices: [
      { label: "Uso esclusivo, 3 notti, 27 ospiti", price: "da € 13.450*" },
      { label: "Menù della cena di nozze", price: "da € 160 a persona*" },
      { label: "Menù della cena di benvenuto", price: "da € 60 a persona*" },
      { label: "Menù del brunch di saluto", price: "da € 45 a persona*" },
    ],
    vat: "* più IVA 10%",
    guideCta: "Richiedi la guida completa ai matrimoni",
    filmLabel: "Matrimoni reali",
    filmTitle: "Un matrimonio italo-norvegese a Lama di Luna",
    filmWatch: "Guarda il film del matrimonio",
    filmCredit: "Film di",
    faqTitle: "Domande Frequenti",
    faq: [
      { q: "Dobbiamo prenotare l'intera masseria?", a: "Sì. Ogni matrimonio è in esclusiva, con un soggiorno minimo di tre notti." },
      { q: "Dove dormono gli altri ospiti?", a: "Ospitiamo 27 ospiti in tenuta e consigliamo hotel partner nelle vicinanze, con navette su richiesta." },
      { q: "Possiamo portare il nostro wedding planner e i nostri fornitori?", a: "Sì, su richiesta." },
      { q: "Fino a che ora si può ballare?", a: "Senza vicini intorno, la festa può andare avanti fino a tardi." },
      { q: "Come arrivano i nostri ospiti?", a: "L'aeroporto di Bari dista 45 minuti. Gli ospiti possono noleggiare un'auto in aeroporto, oppure possiamo aiutarvi a organizzare transfer privati per i gruppi." },
    ],
    enquireTitle: "Raccontateci il vostro giorno",
    enquireText: "Rispondiamo entro 24 ore con le disponibilità e la nostra guida ai matrimoni.",
    form: {
      names: "I vostri nomi",
      email: "Email",
      country: "Paese",
      date: "Data o stagione preferita",
      guestsLabel: "Numero di ospiti",
      guests: ["Fino a 30", "30–80", "80–120", "120–150"],
      ceremonyLabel: "Tipo di cerimonia",
      ceremony: ["Simbolica", "Civile", "Religiosa", "Non ancora deciso"],
      budgetLabel: "Budget",
      budget: ["Meno di 30.000 €", "30.000–60.000 €", "Più di 60.000 €"],
      plannerLabel: "Avete un wedding planner?",
      planner: ["Non ancora", "Sì"],
      more: "Raccontateci di più",
      select: "Seleziona",
      privacyBefore: "Ho letto e accetto la ",
      privacyLink: "Privacy Policy",
      privacyAfter: "",
      button: "Richiedi i dettagli del matrimonio",
      success: "Grazie. Vi risponderemo entro 24 ore con le disponibilità e la nostra guida ai matrimoni.",
    },
  },
  fr: {
    introTitle: "Dites oui dans la Vallée de la Lune",
    introText: "Une masseria entière du XIXe siècle aux portes du Parc national de l'Alta Murgia, en exclusivité, pour votre seul mariage.",
    introCta: "Demander le guide des mariages",
    exclusiveTitle: "Une Masseria Entière, en Exclusivité, pour Votre Seul Mariage",
    exclusiveText:
      "Pour le week-end de votre mariage, Lama di Luna ferme ses portes à tous les autres. La cour, la piscine, la bibliothèque, la salle de cinéma et l'ancien réfectoire deviennent les vôtres, avec nos cuisiniers et notre équipe aux petits soins pour vous et vos invités, de l'arrivée au brunch d'adieu. La nuit, il n'y a que le silence : pas de village, pas de voisins, pas de couvre-feu sonore imposé par le voisinage, seulement le Parc national de l'Alta Murgia, les oliviers et le ciel étoilé. La cuisine travaille avec de l'huile d'olive extra vierge et des légumes de nos 200 hectares de domaine biologique, servis à de longues tables à la lueur des bougies. Et toute la masseria vit grâce au soleil, avec 48 panneaux solaires et 400 panneaux photovoltaïques : bioarchitecture et durabilité sans renoncer au confort.",
    stats: [
      { value: "150", label: "Invités au dîner" },
      { value: "27", label: "Invités hébergés sur place" },
      { value: "11", label: "Chambres" },
      { value: "45 min", label: "De l'aéroport de Bari" },
    ],
    galleryLabel: "Mariages à Lama di Luna",
    galleryPrev: "Photos précédentes",
    galleryNext: "Photos suivantes",
    galleryAlts: [
      "Les mariés devant les illuminations de fête des Pouilles au coucher du soleil, Lama di Luna",
      "Le marié dans l'allée de la cérémonie, entre les invités, sous les arbres de Lama di Luna",
      "La mariée lance son bouquet sur la pelouse sous les applaudissements des invités",
      "L'allée de la cérémonie à côté de la masseria",
      "Les mariés trinquent au champagne sous la voûte de briques de l'ancienne cave, à côté du gâteau de mariage",
      "Les invités à l'apéritif sur la pelouse sous les arbres",
      "Les invités lèvent leur verre à la longue table dans la cour, sous les guirlandes lumineuses",
      "Les mariés sortent en riant de la tour du pigeonnier, sous une pluie de riz et de pétales",
      "La mariée près du portail en fer forgé",
      "La table de mariage dressée avec des fleurs blanches et des chaises en bois dans la cour au coucher du soleil",
      "Les mariés s'embrassent sous un chêne orné de voiles blancs, à côté du gâteau de mariage",
      "La longue table de mariage dans la cour de la masseria",
      "Les invités agitent leurs serviettes pendant le dîner dans la cour",
      "La mariée dans la cour de la masseria, en noir et blanc, avec un cabriolet d'époque derrière elle",
      "Les mariés dansent dans un pré de fleurs blanches, avec des oliviers derrière eux",
    ],
    spacesTitle: "Espaces et Capacité",
    spaces: [
      { moment: "Cérémonie", place: "Sous les chênes", body: "Jusqu'à 150 invités assis, face au Parc national." },
      { moment: "Apéritif", place: "Les terrasses", body: "Jusqu'à 150 invités debout, à l'heure dorée." },
      { moment: "Dîner", place: "La cour intérieure", body: "Jusqu'à 150 invités à de longues tables sous les étoiles." },
      { moment: "Plan en cas de pluie", place: "Les salles du XIXe siècle", body: "Jusqu'à 150 invités à l'intérieur, sous des voûtes de pierre." },
    ],
    weekendTitle: "Votre Week-end de Mariage",
    weekend: [
      { day: "Vendredi", title: "Dîner de bienvenue", body: "Les invités arrivent et s'installent. Pizza au feu de bois ou dîner de la Murgia sur la véranda." },
      { day: "Samedi", title: "Le mariage", body: "Cérémonie au coucher du soleil, apéritif sur la terrasse, dîner et danse dans la cour." },
      { day: "Dimanche", title: "Brunch d'adieu", body: "Un brunch tranquille, une dégustation d'huile d'olive ou une promenade sur les anciens chemins de transhumance avant les au revoir." },
    ],
    ceremonyTitle: "Symbolique, Civile ou Religieuse",
    ceremonyText:
      "Les cérémonies symboliques ont lieu sur le domaine, avec un officiant anglophone sur demande. Les cérémonies civiles se tiennent dans notre ancienne bibliothèque ou en plein air, sur demande auprès de la mairie d'Andria. Cérémonies religieuses dans une église voisine, avec des transferts organisés pour vos invités.",
    pricesTitle: "Des Prix Clairs, dès le Départ",
    prices: [
      { label: "Usage exclusif, 3 nuits, 27 invités", price: "à partir de 13 450 €*" },
      { label: "Menu du dîner de mariage", price: "à partir de 160 € par invité*" },
      { label: "Menu du dîner de bienvenue", price: "à partir de 60 € par invité*" },
      { label: "Menu du brunch d'adieu", price: "à partir de 45 € par invité*" },
    ],
    vat: "* plus 10 % de TVA",
    guideCta: "Demander le guide complet des mariages",
    filmLabel: "Vrais mariages",
    filmTitle: "Un mariage italo-norvégien à Lama di Luna",
    filmWatch: "Regarder le film du mariage",
    filmCredit: "Film de",
    faqTitle: "Questions Fréquentes",
    faq: [
      { q: "Faut-il réserver toute la masseria ?", a: "Oui. Chaque mariage est en exclusivité, avec un séjour minimum de trois nuits." },
      { q: "Où dorment les autres invités ?", a: "Nous accueillons 27 invités sur place et conseillons des hôtels partenaires à proximité, avec navettes sur demande." },
      { q: "Pouvons-nous faire appel à notre propre wedding planner et à nos prestataires ?", a: "Oui, sur demande." },
      { q: "Jusqu'à quelle heure peut-on danser ?", a: "Sans voisins alentour, la fête peut se prolonger tard." },
      { q: "Comment nos invités viennent-ils jusqu'ici ?", a: "L'aéroport de Bari est à 45 minutes. Les invités peuvent louer une voiture à l'aéroport, ou nous pouvons organiser des transferts privés pour les groupes." },
    ],
    enquireTitle: "Parlez-nous de votre jour J",
    enquireText: "Nous répondons sous 24 heures avec nos disponibilités et notre guide des mariages.",
    form: {
      names: "Vos prénoms",
      email: "E-mail",
      country: "Pays",
      date: "Date ou saison souhaitée",
      guestsLabel: "Nombre d'invités",
      guests: ["Jusqu'à 30", "30–80", "80–120", "120–150"],
      ceremonyLabel: "Type de cérémonie",
      ceremony: ["Symbolique", "Civile", "Religieuse", "Pas encore décidé"],
      budgetLabel: "Budget",
      budget: ["Moins de 30 000 €", "30 000–60 000 €", "Plus de 60 000 €"],
      plannerLabel: "Avez-vous un wedding planner ?",
      planner: ["Pas encore", "Oui"],
      more: "Dites-nous en plus",
      select: "Sélectionner",
      privacyBefore: "J'ai lu et j'accepte la ",
      privacyLink: "Privacy Policy",
      privacyAfter: "",
      button: "Demander les détails du mariage",
      success: "Merci. Nous vous répondrons sous 24 heures avec nos disponibilités et notre guide des mariages.",
    },
  },
  de: {
    introTitle: "Sagen Sie Ja im Tal des Mondes",
    introText: "Eine ganze Masseria aus dem 19. Jahrhundert am Rand des Nationalparks Alta Murgia, exklusiv, nur für Ihre Hochzeit.",
    introCta: "Hochzeitsguide anfordern",
    exclusiveTitle: "Eine Ganze Masseria, Exklusiv, Nur für Ihre Hochzeit",
    exclusiveText:
      "Für Ihr Hochzeitswochenende schließt Lama di Luna für alle anderen. Der Innenhof, der Pool, die Bibliothek, der Kinoraum und das alte Refektorium gehören ganz Ihnen, mit unseren Köchen und unserem Team, die sich von der Ankunft bis zum Abschiedsbrunch um Sie und Ihre Gäste kümmern. Nachts gibt es nur Stille: keine Stadt, keine Nachbarn, keine Lärmgrenzen von nebenan, nur den Nationalpark Alta Murgia, die Olivenbäume und den Sternenhimmel. Die Küche kocht mit nativem Olivenöl extra und Gemüse von unseren 200 Hektar biologischem Gut, serviert an langen Tafeln bei Kerzenlicht. Und die ganze Masseria lebt von der Sonne, mit 48 Solarkollektoren und 400 Photovoltaikmodulen: Baubiologie und Nachhaltigkeit ohne Verzicht auf Komfort.",
    stats: [
      { value: "150", label: "Gäste beim Abendessen" },
      { value: "27", label: "Gäste übernachten auf dem Gut" },
      { value: "11", label: "Zimmer" },
      { value: "45 min", label: "Vom Flughafen Bari" },
    ],
    galleryLabel: "Hochzeiten in Lama di Luna",
    galleryPrev: "Vorherige Fotos",
    galleryNext: "Nächste Fotos",
    galleryAlts: [
      "Das Brautpaar vor der apulischen Festbeleuchtung bei Sonnenuntergang, Lama di Luna",
      "Der Bräutigam auf dem Weg zur Trauung zwischen den Gästen, unter den Bäumen von Lama di Luna",
      "Die Braut wirft auf dem Rasen den Brautstrauß, während die Gäste applaudieren",
      "Der Gang zur Trauung neben der Masseria",
      "Das Brautpaar stößt unter dem Backsteingewölbe des alten Weinkellers mit Champagner an, neben der Hochzeitstorte",
      "Gäste beim Aperitif auf dem Rasen unter den Bäumen",
      "Hochzeitsgäste erheben ihre Gläser an der langen Tafel im Innenhof, unter Lichterketten",
      "Das Brautpaar verlässt lachend den Taubenturm, Gäste werfen Reis und Blütenblätter",
      "Die Braut neben dem schmiedeeisernen Tor",
      "Der Hochzeitstisch mit weißen Blumen und Holzstühlen im Innenhof bei Sonnenuntergang",
      "Das Brautpaar küsst sich unter einer Eiche mit weißen Tüchern, neben der Hochzeitstorte",
      "Die lange Hochzeitstafel im Innenhof der Masseria",
      "Hochzeitsgäste schwenken beim Abendessen im Innenhof ihre Servietten",
      "Die Braut im Innenhof der Masseria, in Schwarz Weiß, mit einem Oldtimer Cabrio hinter ihr",
      "Das Brautpaar tanzt auf einer Wiese voller weißer Blumen, mit Olivenbäumen im Hintergrund",
    ],
    spacesTitle: "Räume & Kapazität",
    spaces: [
      { moment: "Trauung", place: "Unter den Eichen", body: "Bis zu 150 sitzende Gäste, mit Blick auf den Nationalpark." },
      { moment: "Aperitif", place: "Die Terrassen", body: "Bis zu 150 stehende Gäste, zur goldenen Stunde." },
      { moment: "Abendessen", place: "Der Innenhof", body: "Bis zu 150 Gäste an langen Tafeln unter den Sternen." },
      { moment: "Regenplan", place: "Die Säle aus dem 19. Jahrhundert", body: "Bis zu 150 Gäste drinnen, unter steinernen Gewölben." },
    ],
    weekendTitle: "Ihr Hochzeitswochenende",
    weekend: [
      { day: "Freitag", title: "Willkommensessen", body: "Die Gäste kommen an und richten sich ein. Pizza aus dem Holzofen oder ein Abendessen der Murgia auf der Veranda." },
      { day: "Samstag", title: "Die Hochzeit", body: "Trauung bei Sonnenuntergang, Aperitif auf der Terrasse, Abendessen und Tanz im Innenhof." },
      { day: "Sonntag", title: "Abschiedsbrunch", body: "Ein gemütlicher Brunch, eine Olivenölverkostung oder ein Spaziergang auf den alten Hirtenwegen vor dem Abschied." },
    ],
    ceremonyTitle: "Symbolisch, Standesamtlich oder Kirchlich",
    ceremonyText:
      "Symbolische Trauungen finden auf dem Gut statt, auf Wunsch mit einem englischsprachigen Redner. Standesamtliche Trauungen werden in unserer alten Bibliothek oder im Freien abgehalten, auf Anfrage bei der Gemeinde Andria. Kirchliche Trauungen in einer nahegelegenen Kirche, mit organisierten Transfers für Ihre Gäste.",
    pricesTitle: "Klare Preise von Anfang an",
    prices: [
      { label: "Exklusivnutzung, 3 Nächte, 27 Gäste", price: "ab € 13.450*" },
      { label: "Menü fürs Hochzeitsessen", price: "ab € 160 pro Gast*" },
      { label: "Menü fürs Willkommensessen", price: "ab € 60 pro Gast*" },
      { label: "Menü für den Abschiedsbrunch", price: "ab € 45 pro Gast*" },
    ],
    vat: "* zuzüglich 10 % MwSt.",
    guideCta: "Den vollständigen Hochzeitsguide anfordern",
    filmLabel: "Echte Hochzeiten",
    filmTitle: "Eine italienisch-norwegische Hochzeit in Lama di Luna",
    filmWatch: "Hochzeitsfilm ansehen",
    filmCredit: "Film von",
    faqTitle: "Häufige Fragen",
    faq: [
      { q: "Müssen wir die ganze Masseria buchen?", a: "Ja. Jede Hochzeit ist exklusiv, mit einem Mindestaufenthalt von drei Nächten." },
      { q: "Wo schlafen die anderen Gäste?", a: "Wir beherbergen 27 Gäste auf dem Gut und empfehlen Partnerhotels in der Nähe, mit Shuttle auf Anfrage." },
      { q: "Können wir eine eigene Hochzeitsplanerin und eigene Dienstleister mitbringen?", a: "Ja, auf Anfrage." },
      { q: "Bis wann können wir tanzen?", a: "Ohne Nachbarn in der Nähe kann die Feier bis spät in die Nacht dauern." },
      { q: "Wie kommen unsere Gäste zu uns?", a: "Der Flughafen Bari ist 45 Minuten entfernt. Die Gäste können am Flughafen ein Auto mieten, oder wir helfen bei der Organisation privater Transfers für Gruppen." },
    ],
    enquireTitle: "Erzählen Sie uns von Ihrem Tag",
    enquireText: "Wir antworten innerhalb von 24 Stunden mit Verfügbarkeit und unserem Hochzeitsguide.",
    form: {
      names: "Ihre Namen",
      email: "E-Mail",
      country: "Land",
      date: "Wunschtermin oder Jahreszeit",
      guestsLabel: "Anzahl der Gäste",
      guests: ["Bis 30", "30–80", "80–120", "120–150"],
      ceremonyLabel: "Art der Trauung",
      ceremony: ["Symbolisch", "Standesamtlich", "Kirchlich", "Noch unentschieden"],
      budgetLabel: "Budget",
      budget: ["Unter 30.000 €", "30.000–60.000 €", "Über 60.000 €"],
      plannerLabel: "Haben Sie eine Hochzeitsplanerin?",
      planner: ["Noch nicht", "Ja"],
      more: "Erzählen Sie uns mehr",
      select: "Auswählen",
      privacyBefore: "Ich habe die ",
      privacyLink: "Datenschutzerklärung",
      privacyAfter: " gelesen und akzeptiere sie",
      button: "Hochzeitsdetails anfordern",
      success: "Vielen Dank. Wir antworten innerhalb von 24 Stunden mit Verfügbarkeit und unserem Hochzeitsguide.",
    },
  },
}
