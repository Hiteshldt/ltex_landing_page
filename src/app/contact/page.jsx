import PageIntro from "@/components/ui/PageIntro";
import ContactForm from "@/components/ui/ContactForm";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "Contact & Partner With Us",
  description:
    "Talk to LeafTex about samples, pricing, pilots, or partnership. Sample kits ship to spinners, brands, packhouses, and packagers within five business days. Based in Coimbatore, Tamil Nadu.",
  alternates: { canonical: "/contact" },
};

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact LeafTex",
  url: "https://leaftex.bio/contact",
  about: { "@type": "Organization", name: "LeafTex Bio Pvt Ltd", email: "founders@leaftex.bio", telephone: "+91-93531-42107" },
};

const DETAILS = [
  ["Email", "founders@leaftex.bio", "mailto:founders@leaftex.bio"],
  ["Phone", "+91 93531 42107", "tel:+919353142107"],
  ["Studio", "Coimbatore, Tamil Nadu, India — 641020", null],
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactLd} />
      <PageIntro
        eyebrow="Partner with us"
        title={<>Trace your <span className="green-word">thread.</span></>}
        intro="Tell us about your application — spinning, fashion, packhouse, or packaging — and what you'd like pricing or samples for. We ship swatch books within five business days and reply to every enquiry within two."
      />

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32, alignItems: "start" }} className="contact-grid">
            <ContactForm />

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="card">
                <div className="label-mono" style={{ color: "var(--green-ink)", fontWeight: 700 }}>Reach us directly</div>
                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 16 }}>
                  {DETAILS.map(([k, v, href]) => (
                    <div key={k}>
                      <div className="label-mono">{k}</div>
                      {href ? (
                        <a href={href} style={{ color: "var(--ink)", fontWeight: 600, textDecoration: "none", fontSize: 15 }}>{v}</a>
                      ) : (
                        <div style={{ color: "var(--ink)", fontWeight: 600, fontSize: 15 }}>{v}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="card outline" style={{ borderLeft: "4px solid var(--green)" }}>
                <div style={{ fontWeight: 700, color: "var(--ink)" }}>Who we ship to</div>
                <p className="body-s" style={{ marginTop: 8, marginBottom: 0 }}>
                  Spinners &amp; mills, fashion &amp; accessory brands, packhouses, and packaging companies. Every sample ships with full chain-of-custody data.
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 860px){ .contact-grid{ grid-template-columns:1fr !important; } }`}</style>
      </section>
    </>
  );
}
