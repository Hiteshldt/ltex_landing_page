import Link from "next/link";
import PageIntro from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Primitives";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "Leaf-Guard™ Edible Coating",
  description:
    "Leaf-Guard™ is a starch-based edible coating from banana pith that extends fresh-produce shelf-life by 40–60%. Transparent and a drop-in for existing packhouse equipment.",
  alternates: { canonical: "/products/leaf-guard" },
};

const SPECS = [["Form", "Aqueous spray"], ["Shelf-life Δ", "+40–60%"], ["Base", "Banana-pith starch"], ["Application", "Spray-on"]];

const FEATURES = [
  "Extracted from banana pith — a true zero-waste output",
  "Starch-based and completely transparent on produce",
  "Extends fresh-produce shelf-life by 40–60%",
  "Drop-in for existing packhouse spray equipment",
];

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Leaf-Guard™ Edible Coating",
  description:
    "Starch-based edible coating from banana pith that extends fresh-produce shelf-life by 40–60%.",
  brand: { "@type": "Brand", name: "LeafTex" },
  category: "Edible produce coating",
};

export default function LeafGuardPage() {
  return (
    <>
      <JsonLd data={productLd} />
      <PageIntro
        eyebrow="Products · Leaf-Guard™"
        title={<>Shelf-life, <span className="green-word">extended.</span></>}
        intro="Leaf-Guard™ is our starch-based edible coating, sprayed onto fresh produce to slow ripening and cut food waste — a third revenue stream from the same banana feedstock, and a direct answer to the 33% of food that's lost or wasted."
        primary={{ href: "/contact", label: "Start a pilot" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
      />

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }} className="lg-grid">
            <Reveal>
              <div className="card outline" style={{ padding: 0, overflow: "hidden" }}>
                <img src="/coating.png" alt="Leaf-Guard coated produce staying fresh versus uncoated" width={720} height={540} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <div className="display-l" style={{ color: "var(--green-ink)" }}>+60%</div>
                  <div className="label-mono">shelf-life uplift</div>
                </div>
                <ul className="check-list" style={{ marginTop: 20 }}>
                  {FEATURES.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className="card lg-specs" style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                  {SPECS.map(([k, v]) => (
                    <div key={k}>
                      <div className="label-mono">{k}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)", marginTop: 5, fontWeight: 500 }}>{v}</div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-green" style={{ marginTop: 22 }}>Start a pilot <span className="arrow">→</span></Link>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px){ .lg-grid{ grid-template-columns:1fr !important; } }
          @media (max-width: 520px){ .lg-specs{ grid-template-columns:1fr 1fr !important; } }
        `}</style>
      </section>
      <FAQ />
    </>
  );
}
