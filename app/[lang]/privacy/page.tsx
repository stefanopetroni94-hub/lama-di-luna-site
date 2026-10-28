import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { isLocale } from "@/lib/i18n"
import { contact } from "@/lib/content/contact"

type Section = { title: string; body: string[] }

const TEXT: Record<"en" | "it" | "fr", { title: string; updated: string; sections: Section[] }> = {
  en: {
    title: "Privacy Policy",
    updated: "Information on the processing of personal data, pursuant to Articles 13 and 14 of EU Regulation 2016/679 (GDPR).",
    sections: [
      {
        title: "Data controller",
        body: [
          "The data controller is Lama di Luna S.N.C., C.da Lama di Luna, 76123 Andria (BT), Italy. You can contact us at the email address shown on the Contact page.",
        ],
      },
      {
        title: "Which data we collect",
        body: [
          "When you write to us through the contact form we collect the data you enter: first name, surname, email address and the content of your message. We do not ask for more than we need to answer you.",
        ],
      },
      {
        title: "Why we use your data and on what basis",
        body: [
          "We use your data only to read and answer your request, and to follow up on it, for example to send you information on a stay. The legal basis is your consent, given by ticking the box before sending the form, and our need to answer your request before a possible booking (Article 6(1)(a) and (b) GDPR).",
        ],
      },
      {
        title: "How long we keep your data",
        body: [
          "We keep your data for the time needed to answer your request and manage the related communication. If a booking follows, we keep the data required by law for accounting and tax purposes.",
        ],
      },
      {
        title: "Who receives your data",
        body: [
          "Your data are handled by our staff and, where needed, by technical providers who help us run the website and email, acting on our instructions. We do not sell your data and we do not use them for advertising. If a provider is based outside the European Union, we rely on the safeguards required by the GDPR.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You can ask us at any time for access to your data, correction, deletion, limitation of the processing, a copy of your data in a portable format, or object to the processing. You can withdraw your consent at any time, without affecting the processing done before. You also have the right to lodge a complaint with the Italian data protection authority (Garante per la protezione dei dati personali, www.garanteprivacy.it).",
        ],
      },
    ],
  },
  it: {
    title: "Privacy Policy",
    updated: "Informativa sul trattamento dei dati personali, ai sensi degli articoli 13 e 14 del Regolamento UE 2016/679 (GDPR).",
    sections: [
      {
        title: "Titolare del trattamento",
        body: [
          "Il titolare del trattamento è Lama di Luna S.N.C., C.da Lama di Luna, 76123 Andria (BT), Italia. Puoi contattarci all'indirizzo email indicato nella pagina Contatti.",
        ],
      },
      {
        title: "Quali dati raccogliamo",
        body: [
          "Quando ci scrivi tramite il modulo di contatto raccogliamo i dati che inserisci: nome, cognome, indirizzo email e contenuto del messaggio. Non chiediamo più di quanto serve per risponderti.",
        ],
      },
      {
        title: "Perché usiamo i tuoi dati e su quale base",
        body: [
          "Usiamo i tuoi dati solo per leggere e rispondere alla tua richiesta e per darle seguito, per esempio inviandoti informazioni su un soggiorno. La base giuridica è il tuo consenso, dato spuntando la casella prima di inviare il modulo, e la necessità di rispondere alla tua richiesta prima di un'eventuale prenotazione (art. 6, par. 1, lett. a e b del GDPR).",
        ],
      },
      {
        title: "Per quanto tempo conserviamo i dati",
        body: [
          "Conserviamo i dati per il tempo necessario a rispondere alla tua richiesta e a gestire la comunicazione collegata. Se segue una prenotazione, conserviamo i dati richiesti dalla legge per scopi contabili e fiscali.",
        ],
      },
      {
        title: "A chi vengono comunicati i dati",
        body: [
          "I tuoi dati sono trattati dal nostro personale e, se necessario, da fornitori tecnici che ci aiutano a gestire il sito e la posta elettronica, che agiscono su nostre istruzioni. Non vendiamo i tuoi dati e non li usiamo per pubblicità. Se un fornitore ha sede fuori dall'Unione Europea, ci basiamo sulle garanzie previste dal GDPR.",
        ],
      },
      {
        title: "I tuoi diritti",
        body: [
          "Puoi chiederci in qualsiasi momento l'accesso ai tuoi dati, la rettifica, la cancellazione, la limitazione del trattamento, una copia dei dati in formato portabile, oppure opporti al trattamento. Puoi revocare il consenso in qualsiasi momento, senza effetto sul trattamento già svolto. Hai inoltre il diritto di presentare reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
        ],
      },
    ],
  },
  fr: {
    title: "Privacy Policy",
    updated: "Information sur le traitement des données personnelles, conformément aux articles 13 et 14 du Règlement UE 2016/679 (RGPD).",
    sections: [
      {
        title: "Responsable du traitement",
        body: [
          "Le responsable du traitement est Lama di Luna S.N.C., C.da Lama di Luna, 76123 Andria (BT), Italie. Vous pouvez nous écrire à l'adresse e-mail indiquée sur la page Contact.",
        ],
      },
      {
        title: "Les données que nous collectons",
        body: [
          "Lorsque vous nous écrivez avec le formulaire de contact, nous collectons les données que vous saisissez : prénom, nom, adresse e-mail et contenu du message. Nous ne demandons rien de plus que ce qui nous sert pour vous répondre.",
        ],
      },
      {
        title: "Pourquoi nous utilisons vos données et sur quelle base",
        body: [
          "Nous utilisons vos données uniquement pour lire votre demande, y répondre et lui donner suite, par exemple en vous envoyant des informations sur un séjour. La base juridique est votre consentement, donné en cochant la case avant l'envoi du formulaire, et la nécessité de répondre à votre demande avant une éventuelle réservation (article 6, paragraphe 1, points a et b du RGPD).",
        ],
      },
      {
        title: "Durée de conservation",
        body: [
          "Nous conservons vos données le temps nécessaire pour répondre à votre demande et gérer les échanges qui en découlent. Si une réservation suit, nous conservons les données exigées par la loi à des fins comptables et fiscales.",
        ],
      },
      {
        title: "Qui reçoit vos données",
        body: [
          "Vos données sont traitées par notre équipe et, si nécessaire, par des prestataires techniques qui nous aident à gérer le site et la messagerie, et qui agissent selon nos instructions. Nous ne vendons pas vos données et ne les utilisons pas pour de la publicité. Si un prestataire est établi hors de l'Union européenne, nous nous appuyons sur les garanties prévues par le RGPD.",
        ],
      },
      {
        title: "Vos droits",
        body: [
          "Vous pouvez nous demander à tout moment l'accès à vos données, leur rectification, leur effacement, la limitation du traitement, une copie de vos données dans un format portable, ou vous opposer au traitement. Vous pouvez retirer votre consentement à tout moment, sans effet sur le traitement déjà effectué. Vous avez aussi le droit d'introduire une réclamation auprès de l'autorité italienne de protection des données (Garante per la protezione dei dati personali, www.garanteprivacy.it).",
        ],
      },
    ],
  },
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = TEXT[lang]
  const c = contact[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />

      <section className="page-header">
        <h1>{t.title}</h1>
        <p>{t.updated}</p>
      </section>

      <article className="privacy-page">
        {t.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
        <section>
          <h2>{{ en: "Contact", it: "Contatti", fr: "Contact" }[lang]}</h2>
          <p>
            {c.addressValue.replace(/\n/g, ", ")} — <a href={`mailto:${c.emailValue}`}>{c.emailValue}</a>
          </p>
        </section>
      </article>

      <SiteFooter locale={lang} />
    </>
  )
}
