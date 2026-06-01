import Link from "next/link";
import PageIntro from "@/components/ui/PageIntro";
import { Reveal, Wordmark } from "@/components/ui/Primitives";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "Vegan Leather",
  description:
    "Premium, cruelty-free vegan leather upcycled from agricultural waste — five customizable colorways, supple and durable for fashion, footwear, and accessories. Request a swatch from LeafTex.",
  alternates: { canonical: "/products/vegan-leather" },
};

const COLORWAYS = [
  { name: "Caramel Brown", hex: "#8B5230", src: "/CaramelBrown.png", desc: "A warm tobacco tone for heritage accessory lines." },
  { name: "Chocolate Brown", hex: "#3F2618", src: "/ChocolateBrown.png", desc: "Deep cocoa for outerwear and structured goods." },
  { name: "Natural Tan Beige", hex: "#C9A37A", src: "/tan-beige.png", desc: "Untreated, neutral — finishes beautifully." },
  { name: "Cognac Amber", hex: "#A85A1F", src: "/Amber.png", desc: "Warm orange-brown for footwear and bags." },
  { name: "Espresso Black", hex: "#1A1614", src: "/espresso-black.png", desc: "Dense and architectural for premium fashion." },
];

const SPECS = [["Thickness", "0.8–1.4 mm"], ["Tensile", ">20 MPa"], ["Format", "Sheet & roll"], ["Grain", "Customizable"]];

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LeafTex Vegan Leather",
  description:
    "Premium cruelty-free vegan leather upcycled from agricultural waste, available in five customizable colorways.",
  brand: { "@type": "Brand", name: "LeafTex" },
  category: "Vegan leather",
};

export default function VeganLeatherPage() {
  return (
    <>
      <JsonLd data={productLd} />
      <PageIntro
        eyebrow="Products · Vegan Leather"
        title={<>Premium <span className="green-word">vegan</span> leather.</>}
        intro="A cruelty-free leather alternative with the supple hand and durability brands demand — and none of the chrome-tanning effluent. Customizable colorways and grains, fully traceable to source."
        primary={{ href: "/contact", label: "Request a swatch" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
      />

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
              <span className="label-mono" style={{ color: "var(--green-ink)", fontWeight: 700 }}>Colorways</span>
              <span style={{ flex: 1, height: 1, background: "var(--rule)" }} />
              <span className="label-mono">05 colorways</span>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="swatch-grid">
            {COLORWAYS.map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <div className="card outline" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ aspectRatio: "4/3", background: c.hex, position: "relative", overflow: "hidden" }}>
                    <img src={c.src} alt={`${c.name} vegan leather swatch`} width={320} height={240} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", top: 12, left: 12, right: 12, background: "rgba(255,255,255,0.95)", borderRadius: 6, padding: "8px 10px", display: "flex", alignItems: "baseline", justifyContent: "space-between", zIndex: 2 }}>
                      <Wordmark size={13} />
                      <span className="label-mono" style={{ fontSize: 9 }}>{(i + 1).toString().padStart(2, "0")} / 05</span>
                    </div>
                  </div>
                  <div style={{ padding: "12px 16px 14px" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)" }}>{c.name}</div>
                    <div className="label-mono" style={{ marginTop: 4 }}>Vegan Leather</div>
                    <p className="body-s" style={{ marginTop: 6, marginBottom: 0 }}>{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="card outline leather-specs" style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {SPECS.map(([k, v]) => (
                <div key={k}>
                  <div className="label-mono">{k}</div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--ink)", marginTop: 5, fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn btn-green">Request a swatch book <span className="arrow">→</span></Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 1100px){ .swatch-grid{ grid-template-columns:repeat(3,1fr) !important; } }
          @media (max-width: 720px){ .swatch-grid{ grid-template-columns:repeat(2,1fr) !important; } .leather-specs{ grid-template-columns:1fr 1fr !important; } }
        `}</style>
      </section>
      <FAQ />
    </>
  );
}
