"use client"

import { useEffect } from "react"
import type { Locale } from "@/lib/i18n"

/** Sets the page language on <html> (the root layout always says "en"), so each language version declares its own. */
export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  return null
}
