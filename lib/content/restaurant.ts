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
      "The Veranda is the farm to table restaurant of Lama di Luna, a historic masseria in Puglia, Italy, set among olive groves in the Alta Murgia. Dinner is served beneath the vaulted ceiling of the old refectory, or outside on warm nights, looking over the olive groves as the light falls. There is no long menu: the menu is fixed and changes every day, built on what the countryside gives us and on the finest agricultural estates and local Pugliese producers.",
      "Our kitchen follows the Murgian and Pugliese tradition of authentic Italian cooking: few ingredients, treated with respect. Our extra virgin olive oil is produced on the estate, and the vegetables come from the masseria garden. What we do not grow comes from trusted small producers of the area, with seasonal, zero kilometre ingredients such as ricotta, Murgian flour, almonds, honey and Puglia wines.",
    ],
    facts: [
      { label: "Breakfast", value: "8:30 – 10:00" },
      { label: "Lunch & Dinner", value: "By arrangement, from 13:00 and 20:00" },
      { label: "Seating", value: "By booking, on request, for guests staying at Lama di Luna" },
      { label: "Diets", value: "Vegetarian & vegan on request" },
    ],
    mediaVideo: "/restaurant/food-making.mp4",
    mediaPhotos: [IMG.photo1, IMG.photo2],
    curvedLabel: "At the Table",
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
    sourcingEyebrow: "From the estate",
    sourcingTitle: "Grown, pressed and cooked within the same walls",
    sourcingBody: [
      "The oil is cold-pressed from our organic groves. The almonds are harvested in late summer, the wine still made on these grounds. Vegetables are picked in the morning from the walled garden a few steps from the kitchen.",
      "What we cannot grow, we source from neighbours we trust — ricotta from a nearby farm, flour from a Murgian mill, honey from the hills. Nothing travels far to reach the table.",
    ],
    sourcingImg: IMG.hero,
    bookingEyebrow: "Reserve the table",
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
      "The Veranda è il ristorante farm to table di Lama di Luna, storica masseria in Puglia immersa negli uliveti dell'Alta Murgia. La cena è servita sotto la volta dell'antico refettorio, o all'aperto nelle sere calde, con lo sguardo sugli uliveti mentre cala la luce. Non c'è un lungo menù: il menù è fisso e cambia ogni giorno, costruito su ciò che ci dà la campagna e sulle migliori aziende agricole e sui produttori pugliesi della zona.",
      "La nostra cucina segue la tradizione murgiana e pugliese della vera cucina italiana: pochi ingredienti, trattati con rispetto. Il nostro olio extravergine di oliva è prodotto in tenuta e le verdure vengono dall'orto della masseria. Ciò che non coltiviamo arriva da piccoli produttori fidati della zona, con ingredienti di stagione a chilometro zero come ricotta, farina murgiana, mandorle, miele e vini di Puglia.",
    ],
    facts: [
      { label: "Colazione", value: "8:30 – 10:00" },
      { label: "Pranzo e cena", value: "Su prenotazione, dalle 13:00 e dalle 20:00" },
      { label: "Posti", value: "Su prenotazione e su richiesta, per gli ospiti che soggiornano a Lama di Luna" },
      { label: "Diete", value: "Vegetariana e vegana su richiesta" },
    ],
    mediaVideo: "/restaurant/food-making.mp4",
    mediaPhotos: [IMG.photo1, IMG.photo2],
    curvedLabel: "A Tavola",
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
    sourcingEyebrow: "Dalla tenuta",
    sourcingTitle: "Coltivato, spremuto e cucinato tra le stesse mura",
    sourcingBody: [
      "L'olio è spremuto a freddo dai nostri uliveti biologici. Le mandorle si raccolgono a fine estate, il vino è ancora prodotto su queste terre. Le verdure si colgono al mattino dall'orto recintato a pochi passi dalla cucina.",
      "Ciò che non coltiviamo lo prendiamo da vicini di cui ci fidiamo — ricotta da una fattoria vicina, farina da un mulino murgiano, miele dalle colline. Nulla viaggia a lungo per arrivare in tavola.",
    ],
    sourcingImg: IMG.hero,
    bookingEyebrow: "Prenota la tavola",
    bookingTitle: "Cena con noi",
    bookingText:
      "La cena si prepara su ordinazione e i posti sono limitati, perciò chiediamo di prenotare entro il pomeriggio. Indicaci la sera e ogni esigenza alimentare e apparecchieremo per te.",
    bookingCta: "Prenota una tavola",
  },
}
