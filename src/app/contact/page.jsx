import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import JsonLd from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Primitives";
import Icon from "@/components/ui/Icon";
import { pageMetadata, breadcrumbLd, absoluteUrl } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact — Samples, Pricing & Partnerships",
  description:
    "Request samples, pricing or a pilot. LeafTex ships sample kits to spinners, brands, packhouses and packagers within five business days.",
  path: "/contact",
  image: "contact",
});

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact LeafTex",
  url: absoluteUrl("/contact"),
  about: { "@type": "Organization", name: "LeafTex Bio Pvt Ltd", email: "founders@leaftex.bio", telephone: "+91-93531-42107" },
};

const DETAILS = [
  ["mail", "Email", "founders@leaftex.bio", "mailto:founders@leaftex.bio"],
  ["phone", "Phone", "+91 93531 42107", "tel:+919353142107"],
  ["pin", "Studio", "Coimbatore, Tamil Nadu, India — 641020", null],
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactLd} />
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Contact", "/contact"]])} />
      {/* Intro, direct details and the form share one screen. */}
      <header className="page-intro contact-intro">
        <div className="page-intro__bg" aria-hidden="true" />
        <div className="container page-intro__grid has-aside">
          <div className="page-intro__copy">
            <nav className="crumbs fade-up" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact</span>
            </nav>
            <span className="eyebrow fade-up" style={{ "--d": "80ms" }}>Partner with us</span>
            <h1 className="display-xl fade-up" style={{ "--d": "160ms" }}>Trace your <span className="green-word">thread.</span></h1>
            <p className="lead fade-up" style={{ "--d": "260ms" }}>
              Tell us about your application — spinning, fashion, packhouse, or packaging — and what you&apos;d like
              pricing or samples for. We ship swatch books within five business days and reply to every enquiry within two.
            </p>
            <div className="reach fade-up" style={{ "--d": "360ms" }}>
              {DETAILS.map(([icon, k, v, href]) => {
                const Row = href ? "a" : "div";
                return (
                  <Row key={k} className="reach__row" {...(href ? { href } : {})}>
                    <span className="icon-tile"><Icon name={icon} /></span>
                    <span>
                      <span className="label-mono">{k}</span>
                      <b>{v}</b>
                    </span>
                  </Row>
                );
              })}
            </div>
            <p className="body-s reach__note fade-up" style={{ "--d": "440ms" }}>
              <b>Who we ship to —</b> spinners &amp; mills, fashion &amp; accessory brands, packhouses, and packaging
              companies. Every sample ships with full chain-of-custody data.
            </p>
          </div>
          <div className="page-intro__aside fade-up" style={{ "--d": "300ms" }}>
            <ContactForm />
          </div>
        </div>
      </header>
    </>
  );
}
