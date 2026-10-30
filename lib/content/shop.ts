import type { Locale } from "@/lib/i18n"

export type Product = {
  id: string
  name: string
  meta: string
  price: string
  img: string
  desc?: string
  imgs?: string[]
  contain?: boolean
  landscape?: boolean
  zoom?: { size: string; pos: string }
}

export type ShopContent = {
  eyebrow: string
  title: string
  intro: string
  addLabel: string
  addedLabel: string
  products: Product[]
  note: string
}

// One paragraph per variety, shown on the product page.
const D = {
  en: {
    primitivo:
      "Primitivo is one of the great red grapes of Puglia, grown above all in the warm, sunny south of the region, around Manduria and Gioia del Colle. It ripens early and gives deep, generous wines, with notes of ripe black cherry, plum and spice, a soft, full body and a long, warm finish.",
    troia:
      "Nero di Troia, also called Uva di Troia, is a native Pugliese grape, rooted in the north of the region, in the Foggia area, the Tavoliere and the hills of Castel del Monte, close to the Alta Murgia. It makes structured, elegant reds with firm tannins, notes of black cherry, violet and pepper, and a great capacity to age.",
    rose:
      "The same Nero di Troia grape, picked early and vinified like a white, gives a fresh, lively rosé, coral in colour, with scents of wild strawberry, pomegranate and flowers. It comes from the same northern lands of Puglia as the red and is made to be drunk young and chilled.",
    fiano:
      "Fiano is an ancient white grape of southern Italy, born in Campania and now also grown in Puglia, where the warm days and cool nights keep it fresh. It gives a fragrant, mineral white, with notes of white flowers, citrus, pear and a hint of toasted hazelnut.",
    carolea:
      "Carolea is an olive variety widespread in southern Italy, also found in Puglia. It gives a balanced, harmonious extra virgin olive oil, fruity and gentle, with a sweet start, notes of almond and artichoke and only a light, pleasant bitterness and pungency.",
    coratina:
      "Coratina is the signature olive of Puglia, born around Corato, between Bari and the Alta Murgia, and widely grown in the area of Andria. It gives an intense, green extra virgin olive oil, rich in polyphenols, with notes of fresh grass, tomato leaf and almond, and a pronounced bitterness and pungency.",
    bath:
      "An organic cosmetics line inspired by the richness of the Mediterranean scrub, made to bring the relaxing, regenerating experience of a real spa home. The formulas are based on pure Salento aloe vera gel, enriched with regenerating local ingredients such as olive oil, lavender, rosemary, sweet almond oil and pomegranate. 100% Made in Italy, with a controlled supply chain and cruelty-free formulas, free from aggressive chemical agents and risky synthetic surfactants. The delicate, evocative scents recall the authentic aromas of Puglia and the Mediterranean, helping you relax body and mind and ease everyday stress.",
  },
  it: {
    primitivo:
      "Il Primitivo è una delle grandi uve rosse della Puglia, coltivata soprattutto nel sud caldo e soleggiato della regione, intorno a Manduria e Gioia del Colle. Matura presto e dà vini profondi e generosi, con note di ciliegia nera matura, prugna e spezie, corpo morbido e pieno e un finale lungo e caldo.",
    troia:
      "Il Nero di Troia, detto anche Uva di Troia, è un'uva autoctona pugliese, radicata nel nord della regione, nella zona di Foggia, nel Tavoliere e sulle colline di Castel del Monte, vicino all'Alta Murgia. Dà rossi strutturati ed eleganti, con tannini decisi, note di ciliegia nera, viola e pepe, e una grande capacità di invecchiamento.",
    rose:
      "La stessa uva Nero di Troia, raccolta presto e vinificata come un bianco, dà un rosato fresco e vivace, color corallo, con profumi di fragolina di bosco, melograno e fiori. Viene dalle stesse terre del nord della Puglia del rosso ed è fatto per essere bevuto giovane e fresco.",
    fiano:
      "Il Fiano è un'antica uva bianca del sud Italia, nata in Campania e oggi coltivata anche in Puglia, dove le giornate calde e le notti fresche la mantengono fresca. Dà un bianco profumato e minerale, con note di fiori bianchi, agrumi, pera e un accenno di nocciola tostata.",
    carolea:
      "La Carolea è una varietà di oliva diffusa nel sud Italia, presente anche in Puglia. Dà un olio extravergine equilibrato e armonioso, fruttato e gentile, con un inizio dolce, note di mandorla e carciofo e solo un leggero e piacevole amaro e piccante.",
    coratina:
      "La Coratina è l'oliva simbolo della Puglia, nata intorno a Corato, tra Bari e l'Alta Murgia, e molto coltivata nella zona di Andria. Dà un olio extravergine intenso e verde, ricco di polifenoli, con note di erba fresca, foglia di pomodoro e mandorla, e un amaro e un piccante spiccati.",
    bath:
      "Una linea di cosmetici biologici ispirata alla ricchezza della macchia mediterranea, pensata per portare a casa propria l'esperienza rilassante e rigenerante di una vera spa. Le formule si basano sul gel puro di Aloe Vera del Salento, arricchito con principi attivi rigeneranti a chilometro zero come olio d'oliva, lavanda, rosmarino, olio di mandorle dolci e melograno. Prodotti 100% Made in Italy, con filiera controllata e formulazioni cruelty-free, prive di agenti chimici aggressivi e di tensioattivi sintetici rischiosi. Le profumazioni delicate ed evocative richiamano i profumi autentici della Puglia e del Mediterraneo, per favorire il rilassamento psicofisico e combattere lo stress quotidiano.",
  },
  fr: {
    primitivo:
      "Le Primitivo est l'un des grands cépages rouges des Pouilles, cultivé surtout dans le sud chaud et ensoleillé de la région, autour de Manduria et de Gioia del Colle. Il mûrit tôt et donne des vins profonds et généreux, aux notes de cerise noire bien mûre, de prune et d'épices, avec un corps souple et plein et une finale longue et chaleureuse.",
    troia:
      "Le Nero di Troia, aussi appelé Uva di Troia, est un cépage autochtone des Pouilles, enraciné dans le nord de la région, autour de Foggia, dans le Tavoliere et sur les collines de Castel del Monte, près de l'Alta Murgia. Il donne des rouges structurés et élégants, aux tanins fermes, aux notes de cerise noire, de violette et de poivre, avec un beau potentiel de garde.",
    rose:
      "Le même cépage Nero di Troia, vendangé tôt et vinifié comme un blanc, donne un rosé frais et vif, couleur corail, aux arômes de fraise des bois, de grenade et de fleurs. Il vient des mêmes terres du nord des Pouilles que le rouge et se boit jeune et bien frais.",
    fiano:
      "Le Fiano est un ancien cépage blanc du sud de l'Italie, né en Campanie et aujourd'hui cultivé aussi dans les Pouilles, où les journées chaudes et les nuits fraîches lui gardent sa fraîcheur. Il donne un blanc parfumé et minéral, aux notes de fleurs blanches, d'agrumes, de poire et une touche de noisette grillée.",
    carolea:
      "La Carolea est une variété d'olive répandue dans le sud de l'Italie, présente aussi dans les Pouilles. Elle donne une huile d'olive extra vierge équilibrée et harmonieuse, fruitée et douce, avec une attaque suave, des notes d'amande et d'artichaut, et seulement une légère amertume et un piquant agréable.",
    coratina:
      "La Coratina est l'olive emblématique des Pouilles, née autour de Corato, entre Bari et l'Alta Murgia, et très cultivée dans la région d'Andria. Elle donne une huile d'olive extra vierge intense et verte, riche en polyphénols, aux notes d'herbe fraîche, de feuille de tomate et d'amande, avec une amertume et un piquant marqués.",
    bath:
      "Une ligne de cosmétiques biologiques inspirée par la richesse du maquis méditerranéen, conçue pour apporter chez soi l'expérience relaxante et régénérante d'un vrai spa. Les formules reposent sur du gel pur d'aloe vera du Salento, enrichi d'actifs régénérants locaux comme l'huile d'olive, la lavande, le romarin, l'huile d'amande douce et la grenade. Produits 100 % Made in Italy, avec une filière contrôlée et des formules cruelty-free, sans agents chimiques agressifs ni tensioactifs synthétiques à risque. Les parfums délicats et évocateurs rappellent les arômes authentiques des Pouilles et de la Méditerranée, pour favoriser la détente du corps et de l'esprit et combattre le stress du quotidien.",
  },
  de: {
    primitivo:
      "Primitivo ist eine der großen roten Rebsorten Apuliens und wird vor allem im warmen, sonnigen Süden der Region angebaut, rund um Manduria und Gioia del Colle. Sie reift früh und ergibt tiefe, großzügige Weine mit Noten von reifer schwarzer Kirsche, Pflaume und Gewürzen, einem weichen, vollen Körper und einem langen, warmen Abgang.",
    troia:
      "Nero di Troia, auch Uva di Troia genannt, ist eine autochthone apulische Rebsorte, verwurzelt im Norden der Region, rund um Foggia, im Tavoliere und auf den Hügeln von Castel del Monte, nahe der Alta Murgia. Sie ergibt strukturierte, elegante Rotweine mit festen Tanninen, Noten von schwarzer Kirsche, Veilchen und Pfeffer und einem großen Lagerpotenzial.",
    rose:
      "Dieselbe Rebsorte Nero di Troia, früh gelesen und wie ein Weißwein ausgebaut, ergibt einen frischen, lebendigen Rosé in Korallfarbe, mit Duft nach Walderdbeere, Granatapfel und Blüten. Er stammt aus denselben Gebieten im Norden Apuliens wie der Rotwein und wird jung und gut gekühlt getrunken.",
    fiano:
      "Fiano ist eine alte weiße Rebsorte Süditaliens, in Kampanien entstanden und heute auch in Apulien angebaut, wo warme Tage und kühle Nächte ihr die Frische bewahren. Sie ergibt einen duftenden, mineralischen Weißwein mit Noten von weißen Blüten, Zitrusfrüchten, Birne und einem Hauch gerösteter Haselnuss.",
    carolea:
      "Carolea ist eine in Süditalien verbreitete Olivensorte, die auch in Apulien wächst. Sie ergibt ein ausgewogenes, harmonisches natives Olivenöl extra, fruchtig und sanft, mit einem süßlichen Auftakt, Noten von Mandel und Artischocke und nur einer leichten, angenehmen Bitterkeit und Schärfe.",
    coratina:
      "Coratina ist die typische Olive Apuliens, entstanden rund um Corato, zwischen Bari und der Alta Murgia, und in der Gegend von Andria weit verbreitet. Sie ergibt ein intensives, grünes natives Olivenöl extra, reich an Polyphenolen, mit Noten von frischem Gras, Tomatenblatt und Mandel und einer ausgeprägten Bitterkeit und Schärfe.",
    bath:
      "Eine biologische Kosmetiklinie, inspiriert vom Reichtum der mediterranen Macchia, die das entspannende und regenerierende Erlebnis eines echten Spas nach Hause bringt. Die Rezepturen basieren auf reinem Aloe Vera Gel aus dem Salento, angereichert mit regenerierenden Wirkstoffen aus der Region wie Olivenöl, Lavendel, Rosmarin, Süßmandelöl und Granatapfel. 100 % Made in Italy, mit kontrollierter Lieferkette und tierversuchsfreien Rezepturen, ohne aggressive chemische Stoffe und ohne bedenkliche synthetische Tenside. Die zarten, stimmungsvollen Düfte erinnern an die echten Aromen Apuliens und des Mittelmeers und helfen, Körper und Geist zu entspannen und den Stress des Alltags abzubauen.",
  },
}

const PH = {
  primitivo: "/whatsapp/20261017_091513_2448595339307246.jpg",
  troia: "/whatsapp/20261017_091320_1584036386359420.jpg",
  rose: "/whatsapp/20261017_091553_1555549189949038.jpg",
  fiano: "/whatsapp/20261017_092538_2899886223723072.jpg",
  carolea500: "/whatsapp/20261017_092218_1652631183119903.jpg",
  coratina500: "/whatsapp/20261017_091902_1136236775644116.jpg",
  carolea3l: "/whatsapp/20261017_092134_1976526712917485.jpg",
  coratina3l: "/whatsapp/20261017_092258_1562976282185362.jpg",
  shampoo: "/whatsapp/20261017_091816_1467314875313085.jpg",
  conditioner: "/whatsapp/20261017_091736_1116476974179442.jpg",
  wash: "/whatsapp/20261017_092042_1420806822855435.jpg",
  orcio: "/whatsapp/20261017_091405_1131140592814993.jpg",
}

export const shop: Record<Locale, ShopContent> = {
  en: {
    eyebrow: "The Shop",
    title: "A little of the estate, sent to your home",
    intro:
      "Order a taste or a scent of Lama di Luna to keep Puglia and the Alta Murgia close, wherever you are.",
    addLabel: "Contact us",
    addedLabel: "Added",
    products: [
      { id: "primitivo", name: "Primitivo", meta: "Red wine of Puglia.", desc: D.en.primitivo, price: "€29", img: PH.primitivo, contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Red wine of Puglia.", desc: D.en.troia, price: "€37", img: PH.troia, contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosé", meta: "Rosé wine of Puglia.", desc: D.en.rose, price: "€25", img: PH.rose, contain: true },
      { id: "fiano", name: "Fiano", meta: "White wine.", desc: D.en.fiano, price: "€25", img: PH.fiano, contain: true },
      { id: "carolea-500", name: "Extra Virgin Olive Oil, Carolea", meta: "Carolea cultivar. 500 ml.", desc: D.en.carolea, price: "€23", img: PH.carolea500, contain: true },
      { id: "coratina-500", name: "Extra Virgin Olive Oil, Coratina", meta: "Coratina cultivar. 500 ml.", desc: D.en.coratina, price: "€23", img: PH.coratina500, contain: true },
      { id: "carolea-3l", name: "Extra Virgin Olive Oil, Carolea", meta: "Carolea cultivar. Bag-in-box, 3 litres.", desc: D.en.carolea, price: "€66", img: PH.carolea3l, contain: true, landscape: true, zoom: { size: "151% auto", pos: "50% 95%" } },
      { id: "coratina-3l", name: "Extra Virgin Olive Oil, Coratina", meta: "Coratina cultivar. Bag-in-box, 3 litres.", desc: D.en.coratina, price: "€66", img: PH.coratina3l, contain: true, landscape: true, zoom: { size: "158% auto", pos: "50% 100%" } },
      { id: "shampoo", name: "Shampoo", meta: "From the masseria's bath line.", desc: D.en.bath, price: "€15", img: PH.shampoo, contain: true },
      { id: "conditioner", name: "Conditioner", meta: "From the masseria's bath line.", desc: D.en.bath, price: "€16", img: PH.conditioner, contain: true },
      { id: "hand-body-soap", name: "Hand & Body Wash", meta: "From the masseria's bath line.", desc: D.en.bath, price: "€15", img: PH.wash, contain: true },
      { id: "bath-set", name: "Bath Set: Body Wash, Shampoo & Conditioner", meta: "", price: "€40", img: PH.wash, imgs: [PH.wash, PH.shampoo, PH.conditioner], contain: true },
      { id: "orcio", name: "Ceramic Orcio with Extra Virgin Olive Oil", meta: "A ceramic orcio filled with our extra virgin olive oil. 350 g.", price: "€32", img: PH.orcio, contain: true },
    ],
    note: "This is a preview shop. Orders and secure checkout can be connected to Stripe whenever you are ready to sell online.",
  },
  it: {
    eyebrow: "Lo Shop",
    title: "Un po' della tenuta, portato a casa tua",
    intro:
      "Ordina un assaggio o un profumo di Lama di Luna per tenere vicine la Puglia e l'Alta Murgia, ovunque tu sia.",
    addLabel: "Contattaci",
    addedLabel: "Aggiunto",
    products: [
      { id: "primitivo", name: "Primitivo", meta: "Vino rosso di Puglia.", desc: D.it.primitivo, price: "€29", img: PH.primitivo, contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Vino rosso di Puglia.", desc: D.it.troia, price: "€37", img: PH.troia, contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosato", meta: "Vino rosato di Puglia.", desc: D.it.rose, price: "€25", img: PH.rose, contain: true },
      { id: "fiano", name: "Fiano", meta: "Vino bianco.", desc: D.it.fiano, price: "€25", img: PH.fiano, contain: true },
      { id: "carolea-500", name: "Olio Extravergine d'Oliva, Carolea", meta: "Cultivar Carolea. 500 ml.", desc: D.it.carolea, price: "€23", img: PH.carolea500, contain: true },
      { id: "coratina-500", name: "Olio Extravergine d'Oliva, Coratina", meta: "Cultivar Coratina. 500 ml.", desc: D.it.coratina, price: "€23", img: PH.coratina500, contain: true },
      { id: "carolea-3l", name: "Olio Extravergine d'Oliva, Carolea", meta: "Cultivar Carolea. Bag-in-box, 3 litri.", desc: D.it.carolea, price: "€66", img: PH.carolea3l, contain: true, landscape: true, zoom: { size: "151% auto", pos: "50% 95%" } },
      { id: "coratina-3l", name: "Olio Extravergine d'Oliva, Coratina", meta: "Cultivar Coratina. Bag-in-box, 3 litri.", desc: D.it.coratina, price: "€66", img: PH.coratina3l, contain: true, landscape: true, zoom: { size: "158% auto", pos: "50% 100%" } },
      { id: "shampoo", name: "Shampoo", meta: "Dalla linea bagno della masseria.", desc: D.it.bath, price: "€15", img: PH.shampoo, contain: true },
      { id: "conditioner", name: "Balsamo", meta: "Dalla linea bagno della masseria.", desc: D.it.bath, price: "€16", img: PH.conditioner, contain: true },
      { id: "hand-body-soap", name: "Detergente Mani e Corpo", meta: "Dalla linea bagno della masseria.", desc: D.it.bath, price: "€15", img: PH.wash, contain: true },
      { id: "bath-set", name: "Set Bagno: Detergente Mani e Corpo, Shampoo e Balsamo", meta: "", price: "€40", img: PH.wash, imgs: [PH.wash, PH.shampoo, PH.conditioner], contain: true },
      { id: "orcio", name: "Orcio di Ceramica con Olio Extravergine d'Oliva", meta: "Un orcio di ceramica pieno del nostro olio extravergine d'oliva. 350 g.", price: "€32", img: PH.orcio, contain: true },
    ],
    note: "Questo è uno shop di anteprima. Ordini e pagamento sicuro possono essere collegati a Stripe quando sarai pronto a vendere online.",
  },
  fr: {
    eyebrow: "La Boutique",
    title: "Un peu du domaine, livré chez vous",
    intro:
      "Commandez un goût ou un parfum de Lama di Luna pour garder les Pouilles et l'Alta Murgia près de vous, où que vous soyez.",
    addLabel: "Nous contacter",
    addedLabel: "Ajouté",
    products: [
      { id: "primitivo", name: "Primitivo", meta: "Vin rouge des Pouilles.", desc: D.fr.primitivo, price: "€29", img: PH.primitivo, contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Vin rouge des Pouilles.", desc: D.fr.troia, price: "€37", img: PH.troia, contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosé", meta: "Vin rosé des Pouilles.", desc: D.fr.rose, price: "€25", img: PH.rose, contain: true },
      { id: "fiano", name: "Fiano", meta: "Vin blanc.", desc: D.fr.fiano, price: "€25", img: PH.fiano, contain: true },
      { id: "carolea-500", name: "Huile d'Olive Extra Vierge, Carolea", meta: "Variété Carolea. 500 ml.", desc: D.fr.carolea, price: "€23", img: PH.carolea500, contain: true },
      { id: "coratina-500", name: "Huile d'Olive Extra Vierge, Coratina", meta: "Variété Coratina. 500 ml.", desc: D.fr.coratina, price: "€23", img: PH.coratina500, contain: true },
      { id: "carolea-3l", name: "Huile d'Olive Extra Vierge, Carolea", meta: "Variété Carolea. Bag-in-box, 3 litres.", desc: D.fr.carolea, price: "€66", img: PH.carolea3l, contain: true, landscape: true, zoom: { size: "151% auto", pos: "50% 95%" } },
      { id: "coratina-3l", name: "Huile d'Olive Extra Vierge, Coratina", meta: "Variété Coratina. Bag-in-box, 3 litres.", desc: D.fr.coratina, price: "€66", img: PH.coratina3l, contain: true, landscape: true, zoom: { size: "158% auto", pos: "50% 100%" } },
      { id: "shampoo", name: "Shampooing", meta: "De la ligne de bain de la masseria.", desc: D.fr.bath, price: "€15", img: PH.shampoo, contain: true },
      { id: "conditioner", name: "Après-shampooing", meta: "De la ligne de bain de la masseria.", desc: D.fr.bath, price: "€16", img: PH.conditioner, contain: true },
      { id: "hand-body-soap", name: "Gel Lavant Mains et Corps", meta: "De la ligne de bain de la masseria.", desc: D.fr.bath, price: "€15", img: PH.wash, contain: true },
      { id: "bath-set", name: "Coffret Bain : Gel Lavant, Shampooing et Après-shampooing", meta: "", price: "€40", img: PH.wash, imgs: [PH.wash, PH.shampoo, PH.conditioner], contain: true },
      { id: "orcio", name: "Orcio en Céramique avec Huile d'Olive Extra Vierge", meta: "Un orcio en céramique rempli de notre huile d'olive extra vierge. 350 g.", price: "€32", img: PH.orcio, contain: true },
    ],
    note: "Ceci est une boutique de démonstration. Les commandes et le paiement sécurisé pourront être reliés à Stripe quand vous serez prêt à vendre en ligne.",
  },
  de: {
    eyebrow: "Der Shop",
    title: "Ein Stück vom Gut, zu Ihnen nach Hause geschickt",
    intro:
      "Bestellen Sie einen Geschmack oder einen Duft von Lama di Luna, um Apulien und die Alta Murgia nah bei sich zu haben, wo immer Sie sind.",
    addLabel: "Kontakt",
    addedLabel: "Hinzugefügt",
    products: [
      { id: "primitivo", name: "Primitivo", meta: "Rotwein aus Apulien.", desc: D.de.primitivo, price: "€29", img: PH.primitivo, contain: true },
      { id: "nero-di-troia", name: "Nero di Troia", meta: "Rotwein aus Apulien.", desc: D.de.troia, price: "€37", img: PH.troia, contain: true },
      { id: "nero-di-troia-rose", name: "Nero di Troia Rosé", meta: "Roséwein aus Apulien.", desc: D.de.rose, price: "€25", img: PH.rose, contain: true },
      { id: "fiano", name: "Fiano", meta: "Weißwein.", desc: D.de.fiano, price: "€25", img: PH.fiano, contain: true },
      { id: "carolea-500", name: "Natives Olivenöl Extra, Carolea", meta: "Sorte Carolea. 500 ml.", desc: D.de.carolea, price: "€23", img: PH.carolea500, contain: true },
      { id: "coratina-500", name: "Natives Olivenöl Extra, Coratina", meta: "Sorte Coratina. 500 ml.", desc: D.de.coratina, price: "€23", img: PH.coratina500, contain: true },
      { id: "carolea-3l", name: "Natives Olivenöl Extra, Carolea", meta: "Sorte Carolea. Bag-in-Box, 3 Liter.", desc: D.de.carolea, price: "€66", img: PH.carolea3l, contain: true, landscape: true, zoom: { size: "151% auto", pos: "50% 95%" } },
      { id: "coratina-3l", name: "Natives Olivenöl Extra, Coratina", meta: "Sorte Coratina. Bag-in-Box, 3 Liter.", desc: D.de.coratina, price: "€66", img: PH.coratina3l, contain: true, landscape: true, zoom: { size: "158% auto", pos: "50% 100%" } },
      { id: "shampoo", name: "Shampoo", meta: "Aus der Badelinie der Masseria.", desc: D.de.bath, price: "€15", img: PH.shampoo, contain: true },
      { id: "conditioner", name: "Spülung", meta: "Aus der Badelinie der Masseria.", desc: D.de.bath, price: "€16", img: PH.conditioner, contain: true },
      { id: "hand-body-soap", name: "Hand und Körper Waschgel", meta: "Aus der Badelinie der Masseria.", desc: D.de.bath, price: "€15", img: PH.wash, contain: true },
      { id: "bath-set", name: "Badeset: Waschgel, Shampoo und Spülung", meta: "", price: "€40", img: PH.wash, imgs: [PH.wash, PH.shampoo, PH.conditioner], contain: true },
      { id: "orcio", name: "Keramik Orcio mit nativem Olivenöl extra", meta: "Ein Orcio aus Keramik, gefüllt mit unserem nativen Olivenöl extra. 350 g.", price: "€32", img: PH.orcio, contain: true },
    ],
    note: "Dies ist ein Vorschau Shop. Bestellungen und sichere Bezahlung können mit Stripe verbunden werden, sobald Sie online verkaufen möchten.",
  },
}
