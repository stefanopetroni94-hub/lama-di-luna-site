import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = { robots: { index: false, follow: false } }

// The test page now lives at /booking: anyone with the old address is sent there.
export default async function BookingPreviewRedirect({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<Record<string, string | undefined>>
}) {
  const { lang } = await params
  const q = new URLSearchParams()
  for (const [k, v] of Object.entries(await searchParams)) if (v) q.set(k, v)
  const qs = q.toString()
  redirect(`/${lang}/booking${qs ? `?${qs}` : ""}`)
}
