"use client"

import { useState } from "react"

type Photo = { src: string; alt: string; caption: string; size: string; position: string }

export function PhotoPair({ photos, openLabel, closeLabel }: { photos: [Photo, Photo]; openLabel: string; closeLabel: string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="photo-pair">
      {photos.map((p, i) => (
        <figure key={p.src} className={`photo-pair-item photo-pair-item--${i === 0 ? "top" : "bottom"}`}>
          <div
            className="photo-pair-img"
            role="img"
            aria-label={p.alt}
            style={{ backgroundImage: `url('${p.src}')`, backgroundSize: p.size, backgroundPosition: p.position }}
          />
          <figcaption className={`photo-pair-caption${open === i ? " is-open" : ""}`} aria-hidden={open !== i}>
            {p.caption}
          </figcaption>
          <button
            type="button"
            className={`photo-pair-toggle${open === i ? " is-open" : ""}`}
            aria-expanded={open === i}
            aria-label={open === i ? closeLabel : openLabel}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span aria-hidden="true">+</span>
          </button>
        </figure>
      ))}
    </div>
  )
}
