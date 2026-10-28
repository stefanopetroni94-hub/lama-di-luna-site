import Link from "next/link"
import { chrome, type Locale } from "@/lib/i18n"

export function SiteFooter({ locale }: { locale: Locale }) {
  const f = chrome[locale].footer
  return (
    <footer>
      <div className="footer-links">
        <a href={f.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={f.instagram} className="footer-social">
          <span
            className="press-mark"
            role="img"
            aria-hidden="true"
            style={{ width: 20, height: 20, WebkitMaskImage: "url(/logos/instagram.svg)", maskImage: "url(/logos/instagram.svg)" }}
          />
        </a>
        <a href={f.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label={f.facebook} className="footer-social">
          <span
            className="press-mark"
            role="img"
            aria-hidden="true"
            style={{ width: 20, height: 20, WebkitMaskImage: "url(/logos/facebook.svg)", maskImage: "url(/logos/facebook.svg)" }}
          />
        </a>
        <a href={f.tripadvisorUrl} target="_blank" rel="noopener noreferrer" aria-label={f.tripadvisor} className="footer-social">
          <span
            className="press-mark"
            role="img"
            aria-hidden="true"
            style={{ width: 20, height: 20, WebkitMaskImage: "url(/logos/tripadvisor.svg)", maskImage: "url(/logos/tripadvisor.svg)" }}
          />
        </a>
        <Link href={`/${locale}/privacy`}>{f.privacy}</Link>
        <a href="#">{f.cookies}</a>
      </div>
      <div className="footer-right">
        <span>{f.cin}</span>
        <span>{f.copyright}</span>
      </div>
    </footer>
  )
}
