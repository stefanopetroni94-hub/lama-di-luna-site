import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Lora } from "next/font/google"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lama di Luna — Masseria in Puglia",
  description:
    "An 18th-century organic masseria in the heart of Puglia. Stay, taste, and take part in authentic countryside experiences.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#faf8f2",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
