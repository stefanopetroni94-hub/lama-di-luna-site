import { chrome, type Locale } from "@/lib/i18n"
import { WaveLine } from "@/components/wave-line"

/** Recolours a mono SVG logo to the page ink tone via CSS mask. */
function MaskLogo({ src, label, width }: { src: string; label: string; width: number }) {
  return (
    <span
      className="press-mark"
      role="img"
      aria-label={label}
      style={{
        width,
        height: 26,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
      }}
    />
  )
}

export function PressStrip({ locale }: { locale: Locale }) {
  const eyebrow = chrome[locale].press

  return (
    <section className="press" aria-label={eyebrow}>
      <div className="press-title">
        <WaveLine side="left" />
        <span className="press-eyebrow">{eyebrow}</span>
        <WaveLine side="right" />
      </div>
      <div className="press-row">
        {/* National Geographic — iconic framed wordmark */}
        <a
          href="https://www.nationalgeographic.com/travel/article/italys-last-wild-steppe-is-seeing-a-renaissance"
          target="_blank"
          rel="noopener noreferrer"
          className="press-link"
        >
          <span className="press-natgeo" role="img" aria-label="National Geographic">
            <span>National Geographic</span>
          </span>
        </a>

        {/* Stanley Tucci: Searching for Italy — a CNN production */}
        <a
          href="https://edition.cnn.com/videos/travel/2022/10/12/olive-oil-tasting-stanley-tucci-searching-for-italy-origseriesfilms.cnn"
          target="_blank"
          rel="noopener noreferrer"
          className="press-link press-pair"
        >
          <MaskLogo src="/logos/cnn.svg" label="CNN" width={40} />
          <span className="press-wordmark press-wordmark--serif">Searching for Italy</span>
        </a>

        {/* Lonely Planet */}
        <a
          href="https://www.lonelyplanet.com/articles/guide-to-puglia"
          target="_blank"
          rel="noopener noreferrer"
          className="press-link"
        >
          <span className="press-wordmark press-lonely">Lonely Planet</span>
        </a>

        {/* The Guardian */}
        <a
          href="https://www.theguardian.com/travel/2015/jul/04/puglia-guide-italy-hotels-bari-brindisi-foggia-salento"
          target="_blank"
          rel="noopener noreferrer"
          className="press-link"
        >
          <span className="press-wordmark press-guardian">The Guardian</span>
        </a>
      </div>
    </section>
  )
}
