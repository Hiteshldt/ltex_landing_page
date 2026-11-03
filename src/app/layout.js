import { Geist, Geist_Mono, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import { SITE_URL, SITE_NAME, ORG_ID, ogImage } from "@/lib/seo";

// Self-hosted via next/font — no render-blocking requests to Google at runtime.
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
// Wordmark only — keeps the logo lettering identical to the brand mark.
const brand = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-brand", display: "swap" });

const DESCRIPTION =
  "LeafTex upcycles banana, pineapple and algae waste into natural fiber, vegan leather and Leaf-Guard™ edible coating — blockchain-traceable, made in Coimbatore.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LeafTex — Sustainable Fibers, Vegan Leather & Edible Coating",
    template: "%s — LeafTex",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "banana fiber",
    "pineapple fiber",
    "algae leather",
    "vegan leather",
    "sustainable textiles",
    "biomaterials",
    "edible coating",
    "Leaf-Guard",
    "blockchain traceability",
    "agricultural waste upcycling",
    "Coimbatore",
    "LeafTex",
  ],
  authors: [{ name: "LeafTex Bio Pvt Ltd" }],
  creator: "LeafTex Bio Pvt Ltd",
  publisher: "LeafTex Bio Pvt Ltd",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    title: "LeafTex — Farm to Fashion. Trace your thread.",
    description: DESCRIPTION,
    images: [ogImage("home", "LeafTex — agricultural waste re-engineered into sustainable materials")],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeafTex — Farm to Fashion. Trace your thread.",
    description: DESCRIPTION,
    images: [ogImage("home", "LeafTex — agricultural waste re-engineered into sustainable materials")],
  },
  formatDetection: { telephone: false, email: false, address: false },
  category: "sustainability",
};

export const viewport = {
  themeColor: "#18C25A",
  width: "device-width",
  initialScale: 1,
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "LeafTex Bio Pvt Ltd",
  alternateName: "LeafTex",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: DESCRIPTION,
  email: "founders@leaftex.bio",
  telephone: "+91-93531-42107",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641020",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "founders@leaftex.bio",
    telephone: "+91-93531-42107",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
};

const siteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": ORG_ID },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable} ${brand.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={orgLd} />
        <JsonLd data={siteLd} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
