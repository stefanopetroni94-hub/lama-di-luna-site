// Shared by the contact and newsletter forms: posts to /api/lead.
export async function sendLead(fields: Record<string, string>): Promise<boolean> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        lang: document.documentElement.lang,
        page: window.location.pathname,
      }),
    })
    return res.ok
  } catch {
    return false
  }
}

const ERROR: Record<string, string> = {
  en: "Sorry, it did not send. Please write to info@lamadiluna.com",
  it: "Invio non riuscito. Scrivici a info@lamadiluna.com",
  fr: "L'envoi a échoué. Écrivez-nous à info@lamadiluna.com",
  de: "Senden fehlgeschlagen. Bitte schreiben Sie an info@lamadiluna.com",
}

export const leadError = () => ERROR[document.documentElement.lang] ?? ERROR.en
