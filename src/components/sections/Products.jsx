"use client";
import Link from "next/link";
import { Reveal, SectionHead, Wordmark } from "@/components/ui/Primitives";

export default function Products() {
  const fibers = [
    {
      name: "Banana Fiber",
      bg: "linear-gradient(135deg, #e8d5a3 0%, #d4bb80 100%)",
      src: "/fiber.png",
      accent: "#18C25A",
      tag: "Pseudostem · Degummed",
      specs: [["Tenacity", "29.98 g/tex"], ["Length", "1.5–3.0 m"], ["Moisture", "10–12%"]],
      desc: "Mechanically extracted from outer sheath. High tensile strength, naturally dyeable, spinner-ready.",
    },
    {
      name: "Pineapple Fiber",
      bg: "linear-gradient(135deg, #f5edd5 0%, #e8d9b0 100%)",
      src: "/pineapple-fiber.png",
      accent: "#f0c429",
      tag: "Piña · Leaf-extracted",
      specs: [["Fineness", "~3–5 µm"], ["Length", "60–120 cm"], ["Lustre", "High"]],
      desc: "Extracted from pineapple leaf waste. Silky lustre and fine hand — ideal for luxury textiles and nonwovens.",
    },
  ];

  const colorways = [
    { name: "Caramel Brown", hex: "#8B5230", src: "/CaramelBrown.png", desc: "A warm tobacco tone for heritage accessory lines." },
    { name: "Chocolate Brown", hex: "#3F2618", src: "/ChocolateBrown.png", desc: "Deep cocoa for outerwear and structured goods." },
    { name: "Natural Tan Beige", hex: "#C9A37A", src: "/tan-beige.png", desc: "Untreated, neutral — finishes beautifully." },
    { name: "Cognac Amber", hex: "#A85A1F", src: "/Amber.png", desc: "Warm orange-brown for footwear and bags." },
    { name: "Espresso Black", hex: "#1A1614", src: "/espresso-black.png", desc: "Dense and architectural for premium fashion." },
  ];

  return (
    <section id="products">
      <div className="container">
        <SectionHead
          code="Products"
          label="Material library"
          title={<>Premium materials, made <span className="green-word">to spec.</span></>}
          subtitle="Banana and pineapple fibers, plus vegan and algae leathers — all traceable to source. Every swatch ships with full chain-of-custody data. Sample kits ship within five business days."
        />

        {/* Fiber types */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
            <span className="label-mono" style={{ color: "var(--green-ink)", fontWeight: 700 }}>Fiber types</span>
            <span style={{ flex: 1, height: 1, background: "var(--rule)" }} />
            <span className="label-mono">02 variants</span>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 32 }} className="fiber-grid">
            {fibers.map((f, i) => (
              <div key={f.name} className="card outline" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "4/3", background: f.bg, position: "relative", overflow: "hidden" }}>
                  {f.src && <img src={f.src} alt={f.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
                  <div style={{ position: "absolute", top: 12, left: 12, right: 12, background: "rgba(255,255,255,0.95)", borderRadius: 6, padding: "8px 10px", display: "flex", alignItems: "baseline", justifyContent: "space-between", zIndex: 2 }}>
                    <Wordmark size={13} />
                    <span className="label-mono" style={{ fontSize: 9 }}>F{(i + 1).toString().padStart(2, "0")} / 02</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 12, left: 12, background: f.accent, borderRadius: 999, padding: "4px 10px", fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", fontWeight: 600, zIndex: 2 }}>
                    Natural Fiber
                  </div>
                </div>
                <div style={{ padding: "12px 16px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)" }}>{f.name}</div>
                    <div className="label-mono" style={{ marginTop: 4, color: "var(--ink-3)" }}>{f.tag}</div>
                  </div>
                  <p className="body-s" style={{ margin: 0 }}>{f.desc}</p>
                  <div style={{ marginTop: "auto", paddingTop: 10, borderTop: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                    {f.specs.map(([k, v]) => (
                      <div key={k}>
                        <div className="label-mono" style={{ fontSize: 9 }}>{k}</div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink)", marginTop: 3, fontWeight: 500 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Leather colorways */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
            <span className="label-mono" style={{ color: "var(--green-ink)", fontWeight: 700 }}>Leather colorways</span>
            <span style={{ flex: 1, height: 1, background: "var(--rule)" }} />
            <span className="label-mono">05 colorways</span>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="swatch-grid">
            {colorways.map((c, i) => (
              <div key={c.name} className="card outline" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "4/3", background: c.hex, position: "relative", overflow: "hidden" }}>
                  {c.src && <img src={c.src} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
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
            ))}
          </div>
        </Reveal>

        {/* Algae Leather callout */}
        <Reveal>
          <div style={{ marginTop: 20, padding: "18px 28px", border: "1px solid var(--rule)", borderLeft: "4px solid var(--green)", borderRadius: 14, display: "grid", gridTemplateColumns: "auto 1px 1fr auto", alignItems: "center", gap: 24, background: "#fff" }} className="lg-callout">
            <div style={{ textAlign: "center", minWidth: 80 }}>
              <div className="display-m" style={{ color: "var(--green-ink)" }}>100%</div>
              <div className="label-mono" style={{ marginTop: 4 }}>Biodegradable</div>
            </div>
            <span style={{ width: 1, alignSelf: "stretch", background: "var(--rule)" }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "var(--ink)" }}>
                Algae <span style={{ color: "var(--green-ink)" }}>Leather</span>
              </div>
              <p className="body-s" style={{ margin: "4px 0 0", maxWidth: "56ch" }}>
                Supple marine vegan leather cast from responsibly-harvested macro-algae. Naturally anti-microbial and flame-retardant.
              </p>
            </div>
            <Link href="/products/algae-leather" className="btn btn-ghost" style={{ whiteSpace: "nowrap", padding: "10px 18px", fontSize: 13 }}>
              View details <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>

        {/* Leaf-Guard callout */}
        <Reveal>
          <div style={{ marginTop: 16, padding: "18px 28px", border: "1px solid var(--rule)", borderLeft: "4px solid var(--green)", borderRadius: 14, display: "grid", gridTemplateColumns: "auto 1px 1fr auto", alignItems: "center", gap: 24, background: "#fff" }} className="lg-callout">
            <div style={{ textAlign: "center", minWidth: 80 }}>
              <div className="display-m" style={{ color: "var(--green-ink)" }}>+60%</div>
              <div className="label-mono" style={{ marginTop: 4 }}>Shelf life</div>
            </div>
            <span style={{ width: 1, alignSelf: "stretch", background: "var(--rule)" }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "var(--ink)" }}>
                Leaf-Guard™ <span style={{ color: "var(--green-ink)" }}>Edible Coating</span>
              </div>
              <p className="body-s" style={{ margin: "4px 0 0", maxWidth: "56ch" }}>
                Starch-based spray from banana pith. +40–60% produce shelf-life. Drop-in for existing packhouse equipment.
              </p>
            </div>
            <Link href="/contact" className="btn btn-green" style={{ whiteSpace: "nowrap", padding: "10px 18px", fontSize: 13 }}>
              Start a pilot <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 720px) { .fiber-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1100px) { .swatch-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 720px) { .swatch-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 820px) { .lg-callout { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
