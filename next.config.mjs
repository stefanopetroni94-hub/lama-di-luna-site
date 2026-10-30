// Old Amenitiz URLs (52 in its sitemap, read 2026-10-30) to their page on this site.
// One permanent (308) hop each, no chains. German had no page here, so /de goes to English.
// Keep these at least a year after launch.
const rooms = {
  masseria: ["room/masseria-family-suite", "fr/chambre/suite-familiale-masseria", "it/camera/family-suite-493aac2c-4fb5-415c-8bc5-cb476853b43d", "de/zimmer/masseria-familiensuite"],
  "suite-deluxe-masseria": ["room/suite-deluxe-masseria", "fr/chambre/suite-masseria-de-luxe", "it/camera/deluxe-suite-con-sauna", "de/zimmer/luxus-suite-masseria"],
  "family-suite": ["room/family-suite-557ecc4c-6bd6-43e2-bd47-7121af374f75", "fr/chambre/suite-familiale", "it/camera/camera-matrimoniale-4d6ffc67-d000-4b3c-a5fd-8caac6bf3db5", "de/zimmer/familiensuite"],
  murgia: ["room/double-room-murgia", "fr/chambre/chambre-double-murgia", "it/camera/camera-matrimoniale-superior-d3eafc87-eaa1-4203-a540-bbe1338faf83", "de/zimmer/doppelzimmer-murgia"],
  coloni: ["room/double-coloni-room", "fr/chambre/chambre-double-coloni", "it/camera/suite-con-2-camere-da-letto-e-sauna", "de/zimmer/doppelzimmer-coloni"],
}

// Old path prefix to the language it now lives under.
const langOf = (path) => (path.startsWith("fr/") ? "fr" : path.startsWith("it/") ? "it" : "en")

const pages = {
  // old path: new path
  "": "/en",
  de: "/en",
  rooms: "/en/rooms",
  "it/camere": "/it/rooms",
  "fr/chambres": "/fr/rooms",
  "de/zimmer": "/en/rooms",
  "page/history": "/en/story",
  "it/pagina/la-storia": "/it/story",
  "fr/page/l-histoire": "/fr/story",
  "de/seite/geschichte": "/en/story",
  contact: "/en/contact",
  "it/contatto": "/it/contact",
  "de/kontakt": "/en/contact",
  "page/services": "/en/experiences",
  "it/pagina/servizi": "/it/experiences",
  "fr/page/services": "/fr/experiences",
  "de/seite/dienstleistungen": "/en/experiences",
  // The old gallery had no content, torretta and biomasseria were empty Italian stubs.
  "page/galleria": "/en",
  "it/pagina/galleria": "/it",
  "fr/page/galleria": "/fr",
  "de/seite/galleria": "/en",
  "room/biomasseria-lama-di-luna": "/en/exclusive",
  "it/camera/biomasseria-lama-di-luna": "/it/exclusive",
  "fr/chambre/biomasseria-lama-di-luna": "/fr/exclusive",
  "de/zimmer/biomasseria-lama-di-luna": "/en/exclusive",
  "room/camera-torretta": "/en/rooms",
  "it/camera/camera-torretta": "/it/rooms",
  "fr/chambre/camera-torretta": "/fr/rooms",
  "de/zimmer/camera-torretta": "/en/rooms",
  ...Object.fromEntries(
    Object.entries(rooms).flatMap(([slug, olds]) => olds.map((old) => [old, `/${langOf(old)}/rooms/${slug}`])),
  ),
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return Object.entries(pages).map(([source, destination]) => ({
      source: `/${source}`,
      destination,
      permanent: true,
    }))
  },
}

export default nextConfig
