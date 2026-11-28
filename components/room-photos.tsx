"use client"

import { useRef, useState } from "react"

/** The photo of a room card on the home page. On a phone the photos of the room slide sideways with the finger, like on
 *  Instagram, with small dots under the photo. On a computer only the first photo is shown, as before (see globals.css). */
export function RoomPhotos({ images }: { images: string[] }) {
  const track = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  return (
    <div className="room-img-wrap room-slider-wrap">
      <div
        className="room-slider"
        ref={track}
        onScroll={() => {
          const el = track.current
          if (el && el.clientWidth) setCurrent(Math.round(el.scrollLeft / el.clientWidth))
        }}
      >
        {images.map((src) => (
          <div key={src} className="room-img room-slide" style={{ backgroundImage: `url('${src}')` }} />
        ))}
      </div>
      {images.length > 1 ? (
        <div className="room-dots" aria-hidden="true">
          {images.map((src, i) => (
            <span key={src} className={i === current ? "is-active" : ""} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
