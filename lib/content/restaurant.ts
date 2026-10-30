import type { Locale } from "@/lib/i18n"

type Course = { name: string; desc: string; note?: string }
type Hour = { label: string; value: string }

export type RestaurantContent = {
  counter: string
  breadcrumbRoot: string
  breadcrumbCurrent: string
  heroEyebrow: string
  title: string
  statementTitle: string
  statementBody: string[]
  facts: Hour[]
  mediaVideo: string
  mediaPhotos: [string, string]
  curvedLabel: string
  veranda: string
  menuEyebrow: string
  menuTitle: string
  menuNote: string
  courses: Course[]
  photos: [string, string]
  sourcingEyebrow: string
  sourcingTitle: string
  sourcingBody: string[]
  sourcingImg: string
  bookingEyebrow: string
  bookingTitle: string
  bookingText: string
  bookingCta: string
}

const IMG = {
  hero: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748888055/nxskbhvgtpuxzfoqavfb.jpg",
  photo1:
    "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748888083/omou7cxhd8opgelkbeuz.jpg",
  photo2:
    "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1679928582/brqp64y9q5oogzmppcja.jpg",
  dinner: "/whatsapp/20261013_140321_1096551306575408.jpg",
  bruschetta: "/whatsapp/20261013_140326_2044361516273753.jpg",
  pasta: "/whatsapp/20261013_140331_3163154140549478.jpg",
}

export const restaurant: Record<Locale, RestaurantContent> = {
  en: {
    counter: "The Veranda",
    breadcrumbRoot: "Home",
    breadcrumbCurrent: "Restaurant",
    heroEyebrow: "Dining at the masseria",
    title: "The Veranda",
    statementTitle: "We bring to the table whatever the estate and the region have given that day",
    statementBody: [
      "The Veranda is the farm to table restaurant of Lama di Luna. Dinner is served beneath the vaulted ceiling of the old refectory, or outside on the veranda on warm nights, looking over the olive groves as the light falls. There is no long menu: the menu is fixed and changes every day, built on what the countryside gives us and on the finest agricultural estates and local Pugliese producers. Our kitchen follows authentic Italian cooking: key ingredients, and treated with respect. The restaurant is exclusive and reserved for guests staying at Lama di Luna, to preserve the peace and silence of the place for those who choose to sleep here.",
    ],
    facts: [
      { label: "Breakfast", value: "8:30 – 10:00" },
      { label: "Lunch & Dinner", value: "By arrangement, from 13:00 and 20:00" },
      { label: "Seating", value: "By booking, on request, for guests staying at Lama di Luna" },
      { label: "Diets", value: "Vegetarian & vegan on request" },
    ],
    mediaVideo: "/restaurant/food-making.mp4",
    mediaPhotos: [IMG.dinner, IMG.bruschetta],
    curvedLabel: "At the Table",
    veranda:
      "The Veranda is a special place to enjoy the sunsets and then to dine all together at eight o'clock. Sometimes, during the summer, we make pizza together on the veranda, in the wood-fired oven, as a community, as the inhabitants of Lama di Luna did for centuries.",
    menuEyebrow: "A sample evening",
    menuTitle: "What the day gives",
    menuNote: "The menu changes daily. This is one evening's table — yours will follow the season.",
    courses: [
      {
        name: "To begin",
        desc: "Warm focaccia and taralli, our own extra-virgin olive oil, fresh ricotta, marinated garden vegetables.",
      },
      {
        name: "First",
        desc: "Orecchiette with turnip tops and toasted breadcrumbs, or a broad-bean purée with wild chicory.",
      },
      {
        name: "Main",
        desc: "Slow-cooked lamb from the Murgia with almonds and herbs, or baked seasonal vegetables from the estate garden.",
      },
    ],
    photos: [IMG.photo1, IMG.photo2],
    sourcingEyebrow: "From the estate and the region",
    sourcingTitle: "Grown, pressed and cooked within the same walls",
    sourcingBody: [
      "At Lama di Luna, a historic masseria in Puglia set among the olive groves of the Alta Murgia, our extra virgin olive oil is cold pressed from our organic groves. The almonds are harvested in late summer, and the grapes of the wine we serve at Lama di Luna are still grown and made on these grounds. We plant and tend a large vegetable garden of tomatoes, courgettes, aubergines, chillies, basil and all the Mediterranean herbs, which we pick through the summer to prepare the dishes of our kitchen.",
      "What we cannot grow, we source seasonally from small producers of the area we trust, with seasonal, zero kilometre ingredients: ricotta from nearby farms, traditional sausage from a cooperative in Minervino, mozzarella and stracciatella, cheeses from a cheesemonger in Andria, and flour from a Murgian mill. Nothing travels far to reach the table.",
    ],
    sourcingImg: IMG.pasta,
    bookingEyebrow: "Book your stay",
    bookingTitle: "Dine with us",
    bookingText:
      "Dinner is prepared to order and seating is limited, so we ask guests to reserve by the afternoon. Tell us the evening and any dietary needs and we will set a place for you.",
    bookingCta: "Reserve a table",
  },
  it: {
    counter: "The Veranda",
    breadcrumbRoot: "Home",
    breadcrumbCurrent: "Ristorante",
    heroEyebrow: "A tavola in masseria",
    title: "The Veranda",
    statementTitle: "Portiamo in tavola ciò che la tenuta e il territorio hanno dato quel giorno",
    statementBody: [
      "The Veranda è il ristorante farm to table di Lama di Luna. La cena è servita sotto la volta dell'antico refettorio, o all'aperto sulla veranda nelle sere calde, con lo sguardo sugli uliveti mentre cala la luce. Non c'è un lungo menù: il menù è fisso e cambia ogni giorno, costruito su ciò che ci dà la campagna e sulle migliori aziende agricole e sui produttori pugliesi della zona. La nostra cucina segue la vera cucina italiana: ingredienti chiave, e trattati con rispetto. Anche il ristorante è esclusivo e riservato agli ospiti che dormono a Lama di Luna, per preservare la tranquillità e il silenzio del luogo per chi sceglie di soggiornare qui.",
    ],
    facts: [
      { label: "Colazione", value: "8:30 – 10:00" },
      { label: "Pranzo e cena", value: "Su prenotazione, dalle 13:00 e dalle 20:00" },
      { label: "Posti", value: "Su prenotazione e su richiesta, per gli ospiti che soggiornano a Lama di Luna" },
      { label: "Diete", value: "Vegetariana e vegana su richiesta" },
    ],
    mediaVideo: "/restaurant/food-making.mp4",
    mediaPhotos: [IMG.dinner, IMG.bruschetta],
    curvedLabel: "A Tavola",
    veranda:
      "La Veranda è un posto speciale per godersi i tramonti e poi cenare tutti insieme alle 20. A volte, durante l'estate, sulla veranda si fa la pizza insieme, con il forno a legna, come una comunità, come hanno fatto per secoli gli abitanti di Lama di Luna.",
    menuEyebrow: "Una sera d'esempio",
    menuTitle: "Ciò che dà la giornata",
    menuNote: "Il menù cambia ogni giorno. Questa è la tavola di una sera — la vostra seguirà la stagione.",
    courses: [
      {
        name: "Per iniziare",
        desc: "Focaccia calda e taralli, il nostro olio extravergine, ricotta fresca, verdure dell'orto marinate.",
      },
      {
        name: "Primo",
        desc: "Orecchiette con cime di rapa e mollica tostata, oppure purè di fave con cicoria selvatica.",
      },
      {
        name: "Secondo",
        desc: "Agnello della Murgia cotto lentamente con mandorle ed erbe, o verdure di stagione al forno dall'orto della tenuta.",
      },
    ],
    photos: [IMG.photo1, IMG.photo2],
    sourcingEyebrow: "Dalla tenuta e dal territorio",
    sourcingTitle: "Coltivato, spremuto e cucinato tra le stesse mura",
    sourcingBody: [
      "A Lama di Luna, storica masseria in Puglia immersa negli uliveti dell'Alta Murgia, il nostro olio extravergine di oliva è spremuto a freddo dai nostri uliveti biologici. Le mandorle si raccolgono a fine estate, e l'uva del vino che serviamo a Lama di Luna è ancora coltivata e trasformata su queste terre. Piantiamo e curiamo un grande orto di pomodori, zucchine, melanzane, peperoncini, basilico e tutte le erbe mediterranee, che raccogliamo durante l'estate per preparare le pietanze della nostra cucina.",
      "Ciò che non coltiviamo lo prendiamo, secondo stagione, da piccoli produttori della zona di cui ci fidiamo, con ingredienti di stagione a chilometro zero: ricotta da fattorie vicine, salsiccia tradizionale da una cooperativa di Minervino, mozzarella e stracciatella, formaggi da un caseificio di Andria e farina da un mulino murgiano. Nulla viaggia a lungo per arrivare in tavola.",
    ],
    sourcingImg: IMG.pasta,
    bookingEyebrow: "Prenota il tuo soggiorno",
    bookingTitle: "Cena con noi",
    bookingText:
      "La cena si prepara su ordinazione e i posti sono limitati, perciò chiediamo di prenotare entro il pomeriggio. Indicaci la sera e ogni esigenza alimentare e apparecchieremo per te.",
    bookingCta: "Prenota una tavola",
  },
  fr: {
    counter: "The Veranda",
    breadcrumbRoot: "Accueil",
    breadcrumbCurrent: "Restaurant",
    heroEyebrow: "À table à la masseria",
    title: "The Veranda",
    statementTitle: "Nous servons ce que le domaine et la région ont donné ce jour-là",
    statementBody: [
      "The Veranda est le restaurant de la ferme à la table de Lama di Luna. Le dîner est servi sous la voûte de l'ancien réfectoire, ou dehors sur la véranda les soirs d'été, face aux oliveraies quand la lumière baisse. Pas de longue carte : le menu est unique et change chaque jour, composé avec ce que nous donne la campagne et avec les meilleurs domaines agricoles et producteurs locaux des Pouilles. Notre cuisine suit la vraie cuisine italienne : des ingrédients clés, et traités avec respect. Le restaurant est exclusif et réservé aux hôtes qui séjournent à Lama di Luna, pour préserver le calme et le silence du lieu pour ceux qui choisissent d'y dormir.",
    ],
    facts: [
      { label: "Petit déjeuner", value: "8:30 – 10:00" },
      { label: "Déjeuner et dîner", value: "Sur demande, à partir de 13:00 et de 20:00" },
      { label: "Places", value: "Sur réservation et sur demande, pour les hôtes qui séjournent à Lama di Luna" },
      { label: "Régimes", value: "Végétarien et végan sur demande" },
    ],
    mediaVideo: "/restaurant/food-making.mp4",
    mediaPhotos: [IMG.dinner, IMG.bruschetta],
    curvedLabel: "À table",
    veranda:
      "La Véranda est un lieu privilégié pour admirer les couchers de soleil, puis dîner tous ensemble à vingt heures. Parfois, l'été, nous faisons la pizza ensemble sur la véranda, au feu de bois, comme une communauté, comme l'ont fait pendant des siècles les habitants de Lama di Luna.",
    menuEyebrow: "Un soir pour exemple",
    menuTitle: "Ce que donne la journée",
    menuNote: "Le menu change chaque jour. Voici la table d'un soir, la vôtre suivra la saison.",
    courses: [
      {
        name: "Pour commencer",
        desc: "Focaccia chaude et taralli, notre huile d'olive extra vierge, ricotta fraîche, légumes du potager marinés.",
      },
      {
        name: "Primo",
        desc: "Orecchiette aux fanes de navet et chapelure grillée, ou purée de fèves à la chicorée sauvage.",
      },
      {
        name: "Plat",
        desc: "Agneau de la Murgia cuit lentement aux amandes et aux herbes, ou légumes de saison du potager rôtis au four.",
      },
    ],
    photos: [IMG.photo1, IMG.photo2],
    sourcingEyebrow: "Du domaine et de la région",
    sourcingTitle: "Cultivé, pressé et cuisiné entre les mêmes murs",
    sourcingBody: [
      "À Lama di Luna, masseria historique des Pouilles nichée dans les oliveraies de l'Alta Murgia, notre huile d'olive extra vierge est pressée à froid à partir de nos oliveraies biologiques. Les amandes sont récoltées à la fin de l'été, et le raisin du vin que nous servons est toujours cultivé et vinifié sur ces terres. Nous plantons et entretenons un grand potager de tomates, courgettes, aubergines, piments, basilic et toutes les herbes méditerranéennes, que nous cueillons tout l'été pour préparer les plats de notre cuisine.",
      "Ce que nous ne cultivons pas, nous le prenons selon la saison chez de petits producteurs de la région en qui nous avons confiance, avec des ingrédients de saison et de proximité : ricotta des fermes voisines, saucisse traditionnelle d'une coopérative de Minervino, mozzarella et stracciatella, fromages d'une fromagerie d'Andria et farine d'un moulin de la Murgia. Rien ne voyage loin pour arriver sur la table.",
    ],
    sourcingImg: IMG.pasta,
    bookingEyebrow: "Réservez votre séjour",
    bookingTitle: "Dînez avec nous",
    bookingText:
      "Le dîner est préparé à la demande et les places sont limitées, nous demandons donc de réserver avant l'après-midi. Indiquez-nous le soir choisi et vos éventuels besoins alimentaires, et nous dresserons votre couvert.",
    bookingCta: "Réserver une table",
  },
}
