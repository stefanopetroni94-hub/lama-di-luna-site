"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  title: string
  address: string
  phone: string
  email: string
}

/** "Location & contact" card: it fades in when the map comes into view while scrolling. */
export function MapCard({ title, address, phone, email }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current?.parentElement
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.35 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`map-card${visible ? " is-visible" : ""}`}>
      <h2>{title}</h2>
      <p style={{ whiteSpace: "pre-line" }}>{address}</p>
      <p>
        Tel. <a href="tel:+390883569505">{phone}</a>
        <br />
        E-mail: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        Latitude: 41.1462550
        <br />
        Longitude: 16.1537627
      </p>
    </div>
  )
}
