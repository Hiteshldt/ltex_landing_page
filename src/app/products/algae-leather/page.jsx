import Link from "next/link";
import PageIntro from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Primitives";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "Algae Leather",
  description:
    "A supple, biodegradable vegan leather cast from responsibly-harvested macro-algae — naturally anti-microbial and flame-retardant. Traceable to source. Request a swatch from LeafTex.",
  alternates: { canonical: "/products/algae-leather" },
};

const SPECS = [["Source", "Macro-algae"], ["Thickness", "0.8–1.4 mm"], ["Finish", "Supple matte"], ["Property", "Biodegradable"]];

const FEATURES = [
  "Cast from responsibly-harvested marine macro-algae",
  "Supple hand — naturally anti-microbial and flame-retardant",
  "100% biodegradable with a soft, skin-soothing finish",
  "Customizable for fashion, footwear, and accessories",
];

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LeafTex Algae Leather",
  description:
    "Supple, biodegradable vegan leather cast from responsibly-harvested macro-algae — naturally anti-microbial and flame-retardant.",
  brand: { "@type": "Brand", name: "LeafTex" },
  category: "Vegan leather",
};

export default function AlgaeLeatherPage() {
  return (
    <>
      <JsonLd data={productLd} />
      <PageIntro
        eyebrow="Products · Algae Leather"
        title={<>Leather, grown from <span className="green-word">the sea.</span></>}
        intro="Algae Leather is our marine-based vegan leather — cast from responsibly-harvested macro-algae into a supple, fully biodegradable material. It turns blooms that choke coastal ecosystems into a premium, cruelty-free alternative to animal hide."
        primary={{ href: "/contact", label: "Request a swatch" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
      />

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }} className="al-grid">
            <Reveal>
              <div className="card outline" style={{ padding: 0, overflow: "hidden" }}>
                <img src="/algae-leather.png" alt="Roll of sage-green algae leather with a fine pebbled grain" width={720} height={720} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <div className="display-l" style={{ color: "var(--green-ink)" }}>100%</div>
                  <div className="label-mono">biodegradable</div>
                </div>
                <ul className="check-list" style={{ marginTop: 20 }}>
                  {FEATURES.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className="card al-specs" style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                  {SPECS.map(([k, v]) => (
                    <div key={k}>
                      <div className="label-mono">{k}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)", marginTop: 5, fontWeight: 500 }}>{v}</div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-green" style={{ marginTop: 22 }}>Request a swatch <span className="arrow">→</span></Link>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px){ .al-grid{ grid-template-columns:1fr !important; } }
          @media (max-width: 520px){ .al-specs{ grid-template-columns:1fr 1fr !important; } }
        `}</style>
      </section>
      <FAQ />
    </>
  );
}
