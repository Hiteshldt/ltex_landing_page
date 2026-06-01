import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";

const SITE_URL = "https://leaftex.bio";
const SITE_NAME = "LeafTex";
const DESCRIPTION =
  "LeafTex is a biomaterials platform that upcycles banana, pineapple, and algae agricultural waste into premium fibers, vegan leather, and edible coatings — with native blockchain traceability. Made in Coimbatore.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LeafTex — Farm to Fashion. Trace your thread.",
    template: "%s — LeafTex",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "banana fiber",
    "pineapple fiber",
    "algae fiber",
    "vegan leather",
    "sustainable textiles",
    "biomaterials platform",
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
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "LeafTex — Farm to Fashion. Trace your thread.",
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/fiber.png", alt: "LeafTex sustainable natural fiber" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeafTex — Farm to Fashion. Trace your thread.",
    description: DESCRIPTION,
    images: ["/fiber.png"],
  },
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
  name: "LeafTex Bio Pvt Ltd",
  alternateName: "LeafTex",
  url: SITE_URL,
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
};

const siteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
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
