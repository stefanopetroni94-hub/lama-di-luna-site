import { notFound, permanentRedirect } from "next/navigation"
import { isLocale } from "@/lib/i18n"

// The old address of the Retreats page: a permanent redirect to /{lang}/retreats.
export default async function ExclusivePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  permanentRedirect(`/${lang}/retreats`)
}
