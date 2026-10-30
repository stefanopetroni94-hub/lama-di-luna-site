"use client"

import { useEffect, useState } from "react"

export function CrossfadeImage({ images, label, interval = 3000 }: { images: string[]; label: string; interval?: number }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <div className="story-split-img crossfade" role="img" aria-label={label}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`crossfade-layer${i === current ? " is-active" : ""}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
    </div>
  )
}
