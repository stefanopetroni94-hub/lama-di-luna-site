"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import type { Locale } from "@/lib/i18n"

type Choice = { preferences: boolean; statistics: boolean; marketing: boolean }
type Stored = Choice & { id: string; date: string }
type View = null | "bar" | "status" | "modal"
type Tab = "consent" | "details" | "info"

const KEY = "ldl-cookie-consent"
const OPEN_EVENT = "open-cookie-settings"
const NONE: Choice = { preferences: false, statistics: false, marketing: false }
const ALL: Choice = { preferences: true, statistics: true, marketing: true }

const T = {
  en: {
    fab: "Cookie settings",
    barTitle: "This website uses cookies",
    barText:
      "We use cookies to make the website work, to remember your preferences and, only if you allow it, to understand how the site is used and to show relevant content. You can accept all, choose, or refuse the optional cookies. You can change your mind at any time.",
    necessary: "Necessary",
    preferences: "Preferences",
    statistics: "Statistics",
    marketing: "Marketing",
    showDetails: "Show details",
    reject: "Refuse",
    acceptSel: "Accept selected",
    acceptAll: "Accept all",
    tabs: { consent: "Consent", details: "Details", info: "Cookie information" },
    statusTitle: "Cookie settings",
    statusNow: "Your current status",
    revoke: "Revoke consent",
    modify: "Modify consent",
    noChoice: "No choice made yet",
    descNecessary:
      "Necessary cookies make the website usable by enabling basic functions such as page navigation. The website cannot work properly without them.",
    descPreferences:
      "Preference cookies allow the website to remember information that changes how it behaves or looks, such as your preferred language.",
    descStatistics:
      "Statistics cookies help us understand how visitors use the website, by collecting and reporting information anonymously.",
    descMarketing:
      "Marketing cookies are used to track visitors across websites, to show advertising that is relevant to you.",
    info: [
      "Cookies are small text files that websites can use to make your experience more efficient.",
      "The law says we can store cookies on your device if they are strictly necessary for the website to work. For all other types of cookies we need your consent.",
      "Some cookies may be placed by third-party services that appear on our pages, for example embedded maps or booking tools.",
      "At any time you can change or withdraw your consent using the small cookie button at the bottom left of the page, or the Cookies link in the footer.",
    ],
    infoPrivacy: "Find out how we handle personal data in our Privacy Policy.",
    idLabel: "Consent ID",
    dateLabel: "Date",
    close: "Close",
  },
  it: {
    fab: "Impostazioni dei cookie",
    barTitle: "Questo sito web utilizza i cookie",
    barText:
      "Utilizziamo i cookie per far funzionare il sito, per ricordare le tue preferenze e, solo se lo permetti, per capire come viene usato il sito e mostrarti contenuti pertinenti. Puoi accettare tutto, scegliere oppure rifiutare i cookie facoltativi. Puoi cambiare idea in qualsiasi momento.",
    necessary: "Necessari",
    preferences: "Preferenze",
    statistics: "Statistiche",
    marketing: "Marketing",
    showDetails: "Mostra dettagli",
    reject: "Rifiuta",
    acceptSel: "Accetta selezionati",
    acceptAll: "Accetta tutti",
    tabs: { consent: "Consenso", details: "Dettagli", info: "Informazioni sui cookie" },
    statusTitle: "Impostazioni dei cookie",
    statusNow: "Il tuo stato attuale",
    revoke: "Revoca consenso",
    modify: "Modifica consenso",
    noChoice: "Nessuna scelta ancora effettuata",
    descNecessary:
      "I cookie necessari contribuiscono a rendere fruibile il sito abilitandone funzionalità di base come la navigazione sulle pagine. Il sito non è in grado di funzionare correttamente senza questi cookie.",
    descPreferences:
      "I cookie di preferenza consentono al sito di memorizzare informazioni che ne influenzano il comportamento o l'aspetto, come la lingua preferita.",
    descStatistics:
      "I cookie statistici aiutano i proprietari del sito a capire come i visitatori interagiscono con il sito, raccogliendo e trasmettendo informazioni in forma anonima.",
    descMarketing:
      "I cookie di marketing vengono utilizzati per tracciare i visitatori sui siti web, per mostrare pubblicità pertinente per te.",
    info: [
      "I cookie sono piccoli file di testo che possono essere utilizzati dai siti web per rendere più efficiente l'esperienza per l'utente.",
      "La legge afferma che possiamo memorizzare i cookie sul tuo dispositivo se sono strettamente necessari per il funzionamento del sito. Per tutti gli altri tipi di cookie abbiamo bisogno del tuo consenso.",
      "Alcuni cookie possono essere collocati da servizi di terzi che compaiono sulle nostre pagine, per esempio le mappe incorporate o gli strumenti di prenotazione.",
      "In qualsiasi momento puoi modificare o revocare il tuo consenso con il piccolo pulsante dei cookie in basso a sinistra, oppure dal link Cookies nel footer.",
    ],
    infoPrivacy: "Scopri come trattiamo i dati personali nella nostra Privacy Policy.",
    idLabel: "ID del consenso",
    dateLabel: "Data",
    close: "Chiudi",
  },
  fr: {
    fab: "Paramètres des cookies",
    barTitle: "Ce site utilise des cookies",
    barText:
      "Nous utilisons des cookies pour faire fonctionner le site, pour mémoriser vos préférences et, seulement si vous l'autorisez, pour comprendre comment le site est utilisé et vous montrer des contenus pertinents. Vous pouvez tout accepter, choisir ou refuser les cookies facultatifs. Vous pouvez changer d'avis à tout moment.",
    necessary: "Nécessaires",
    preferences: "Préférences",
    statistics: "Statistiques",
    marketing: "Marketing",
    showDetails: "Afficher les détails",
    reject: "Refuser",
    acceptSel: "Accepter la sélection",
    acceptAll: "Tout accepter",
    tabs: { consent: "Consentement", details: "Détails", info: "À propos des cookies" },
    statusTitle: "Paramètres des cookies",
    statusNow: "Votre choix actuel",
    revoke: "Retirer le consentement",
    modify: "Modifier le consentement",
    noChoice: "Aucun choix effectué pour l'instant",
    descNecessary:
      "Les cookies nécessaires rendent le site utilisable en activant des fonctions de base comme la navigation entre les pages. Le site ne peut pas fonctionner correctement sans eux.",
    descPreferences:
      "Les cookies de préférence permettent au site de mémoriser des informations qui modifient son comportement ou son apparence, comme votre langue préférée.",
    descStatistics:
      "Les cookies statistiques aident les propriétaires du site à comprendre comment les visiteurs l'utilisent, en collectant et en transmettant des informations de manière anonyme.",
    descMarketing:
      "Les cookies marketing servent à suivre les visiteurs d'un site à l'autre, afin d'afficher des publicités pertinentes pour vous.",
    info: [
      "Les cookies sont de petits fichiers texte que les sites web peuvent utiliser pour rendre l'expérience de l'utilisateur plus efficace.",
      "La loi nous autorise à déposer des cookies sur votre appareil s'ils sont strictement nécessaires au fonctionnement du site. Pour tous les autres types de cookies, nous avons besoin de votre consentement.",
      "Certains cookies peuvent être déposés par des services tiers présents sur nos pages, par exemple les cartes intégrées ou les outils de réservation.",
      "Vous pouvez à tout moment modifier ou retirer votre consentement avec le petit bouton des cookies en bas à gauche de la page, ou avec le lien Cookies en bas de page.",
    ],
    infoPrivacy: "Découvrez comment nous traitons les données personnelles dans notre Privacy Policy.",
    idLabel: "Identifiant du consentement",
    dateLabel: "Date",
    close: "Fermer",
  },
} as const

function newId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function read(): Stored | null {
  try {
    const raw = window.localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Stored) : null
  } catch {
    return null
  }
}

/**
 * Cookie banner with consent choices. Optional categories are off until the visitor chooses.
 * The choice is kept in the browser and announced with a "cookie-consent-change" event,
 * so any analytics or marketing script must start only after reading it.
 */
export function CookieConsent({ locale }: { locale: Locale }) {
  const t = T[locale]
  const [view, setView] = useState<View>(null)
  const [tab, setTab] = useState<Tab>("consent")
  const [stored, setStored] = useState<Stored | null>(null)
  const [draft, setDraft] = useState<Choice>(NONE)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const s = read()
    setStored(s)
    if (s) setDraft({ preferences: s.preferences, statistics: s.statistics, marketing: s.marketing })
    else setView("bar")
    setReady(true)
  }, [])

  const save = useCallback((c: Choice) => {
    const s: Stored = { ...c, id: newId(), date: new Date().toISOString() }
    try {
      window.localStorage.setItem(KEY, JSON.stringify(s))
    } catch {
      /* private mode: the choice just lasts for this visit */
    }
    setStored(s)
    setDraft(c)
    setView(null)
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: s }))
  }, [])

  useEffect(() => {
    const open = () => setView("status")
    window.addEventListener(OPEN_EVENT, open)
    return () => window.removeEventListener(OPEN_EVENT, open)
  }, [])

  if (!ready) return null

  const openModal = (to: Tab) => {
    setTab(to)
    setView("modal")
  }

  const toggles = (
    <>
      {(
        [
          ["necessary", t.necessary, true, true],
          ["preferences", t.preferences, draft.preferences, false],
          ["statistics", t.statistics, draft.statistics, false],
          ["marketing", t.marketing, draft.marketing, false],
        ] as const
      ).map(([k, label, on, locked]) => (
        <label key={k} className={`ck-toggle${locked ? " is-locked" : ""}`}>
          <span>{label}</span>
          <input
            type="checkbox"
            role="switch"
            checked={on}
            disabled={locked}
            onChange={(e) => !locked && setDraft({ ...draft, [k]: e.target.checked })}
          />
          <i aria-hidden="true" />
        </label>
      ))}
    </>
  )

  const buttons = (
    <div className="ck-buttons">
      <button type="button" className="ck-btn" onClick={() => save(NONE)}>
        {t.reject}
      </button>
      <button type="button" className="ck-btn" onClick={() => save(draft)}>
        {t.acceptSel}
      </button>
      <button type="button" className="ck-btn ck-btn--solid" onClick={() => save(ALL)}>
        {t.acceptAll}
      </button>
    </div>
  )

  const state: [string, boolean, boolean][] = [
    [t.necessary, true, true],
    [t.preferences, !!stored?.preferences, false],
    [t.statistics, !!stored?.statistics, false],
    [t.marketing, !!stored?.marketing, false],
  ]

  return (
    <>
      <button type="button" className="lang-pill ck-fab" onClick={() => setView("status")} title={t.fab} aria-label={t.fab}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-5-5Z" />
          <circle cx="9" cy="10" r="0.9" fill="currentColor" />
          <circle cx="14" cy="15" r="0.9" fill="currentColor" />
          <circle cx="8.5" cy="15" r="0.9" fill="currentColor" />
        </svg>
      </button>

      {view === "bar" ? (
        <div className="ck-bar" role="dialog" aria-label={t.barTitle}>
          <div className="ck-bar-main">
            <div className="ck-bar-text">
              <strong>{t.barTitle}</strong>
              <p>{t.barText}</p>
            </div>
            {buttons}
          </div>
          <div className="ck-bar-foot">
            <div className="ck-toggles">{toggles}</div>
            <button type="button" className="ck-link" onClick={() => openModal("details")}>
              {t.showDetails} &rsaquo;
            </button>
          </div>
        </div>
      ) : null}

      {view === "status" ? (
        <div className="ck-status" role="dialog" aria-label={t.statusTitle}>
          <div className="ck-status-head">
            <strong>{t.statusTitle}</strong>
            <button type="button" className="ck-x" onClick={() => setView(null)} aria-label={t.close}>
              &times;
            </button>
          </div>
          <div className="ck-status-body">
            <strong>{t.statusNow}</strong>
            {stored ? (
              <ul>
                {state.map(([label, on, locked]) => (
                  <li key={label}>
                    <span aria-hidden="true">{locked ? "\u{1F512}︎" : on ? "✓" : "✕"}</span>
                    {label}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{t.noChoice}</p>
            )}
            <button type="button" className="ck-link" onClick={() => openModal("details")}>
              {t.showDetails} &rsaquo;
            </button>
          </div>
          <div className="ck-status-foot">
            <button type="button" className="ck-btn" onClick={() => save(NONE)}>
              {t.revoke}
            </button>
            <button type="button" className="ck-btn ck-btn--solid" onClick={() => openModal("consent")}>
              {t.modify}
            </button>
          </div>
        </div>
      ) : null}

      {view === "modal" ? (
        <div className="ck-overlay" onClick={() => setView(stored ? null : "bar")}>
          <div className="ck-modal" role="dialog" aria-label={t.statusTitle} onClick={(e) => e.stopPropagation()}>
            <div className="ck-tabs" role="tablist">
              {(["consent", "details", "info"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  role="tab"
                  aria-selected={tab === k}
                  className={tab === k ? "is-active" : ""}
                  onClick={() => setTab(k)}
                >
                  {t.tabs[k]}
                </button>
              ))}
            </div>

            <div className="ck-modal-body">
              {tab === "consent" ? (
                <>
                  <strong>{t.barTitle}</strong>
                  <p>{t.barText}</p>
                  <div className="ck-toggles ck-toggles--grid">{toggles}</div>
                </>
              ) : null}

              {tab === "details" ? (
                <div className="ck-details">
                  {(
                    [
                      ["necessary", t.necessary, t.descNecessary],
                      ["preferences", t.preferences, t.descPreferences],
                      ["statistics", t.statistics, t.descStatistics],
                      ["marketing", t.marketing, t.descMarketing],
                    ] as const
                  ).map(([k, label, desc]) => (
                    <div key={k} className="ck-detail">
                      <div className="ck-detail-head">
                        <strong>{label}</strong>
                        <label className={`ck-toggle ck-toggle--bare${k === "necessary" ? " is-locked" : ""}`}>
                          <input
                            type="checkbox"
                            role="switch"
                            aria-label={label}
                            checked={k === "necessary" ? true : draft[k]}
                            disabled={k === "necessary"}
                            onChange={(e) => k !== "necessary" && setDraft({ ...draft, [k]: e.target.checked })}
                          />
                          <i aria-hidden="true" />
                        </label>
                      </div>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {tab === "info" ? (
                <div className="ck-info">
                  {t.info.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <p>
                    <Link href={`/${locale}/privacy`}>{t.infoPrivacy}</Link>
                  </p>
                  {stored ? (
                    <p>
                      {t.idLabel}: {stored.id}
                      <br />
                      {t.dateLabel}: {new Date(stored.date).toLocaleString({ en: "en-GB", it: "it-IT", fr: "fr-FR" }[locale])}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="ck-modal-foot">{buttons}</div>
          </div>
        </div>
      ) : null}
    </>
  )
}
