"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type Photo = { src: string; alt: string; position?: string }

/** Two photos side by side, each half of the page. Round arrows move through the photos and they also change by themselves.
 *  The left half shows photo n and the right half photo n+1, so five photos make five different pairs.
 *  The photos are real images with a description, so Google can read them. The right half repeats the same photos,
 *  so it is hidden from screen readers and search engines (empty description). */
export function PhotoSlider({
  photos,
  label,
  prevLabel,
  nextLabel,
  interval = 4000,
}: {
  photos: Photo[]
  label: string
  prevLabel: string
  nextLabel: string
  interval?: number
}) {
  const n = photos.length
  const [index, setIndex] = useState(0)

  // changes by itself; a click on an arrow restarts the countdown
  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % n), interval)
    return () => clearTimeout(id)
  }, [index, n, interval])

  const go = (step: number) => setIndex((i) => (i + step + n) % n)

  return (
    <div className="story-split photo-slider" role="group" aria-roledescription="carousel" aria-label={label}>
      {[0, 1].map((slot) => (
        <div className="story-split-img photo-slider-half" key={slot} aria-hidden={slot === 1 ? true : undefined}>
          {photos.map((p, i) => (
            <div key={p.src} className={`crossfade-layer${(index + slot) % n === i ? " is-active" : ""}`}>
              <Image
                src={p.src}
                alt={slot === 0 ? p.alt : ""}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: p.position ?? "center" }}
              />
            </div>
          ))}
        </div>
      ))}
      <button type="button" className="photo-slider-arrow photo-slider-arrow--prev" aria-label={prevLabel} onClick={() => go(-1)}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button type="button" className="photo-slider-arrow photo-slider-arrow--next" aria-label={nextLabel} onClick={() => go(1)}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
