"use client";
import Link from "next/link";
import { Reveal, SectionHead, ImgPlaceholder } from "@/components/ui/Primitives";

export default function Platform() {
  const products = [
    {
      code: "P—01",
      name: "Banana Fiber",
      tag: "High-tenacity pseudostem",
      src: "/fiber.png",
      bullets: [
        "Mechanically extracted and degummed",
        "High tensile strength & naturally dyeable",
        "Ready for modern textile spinners",
      ],
      spec: [["Tenacity", "29.98 g/tex"], ["Length", "1.5–3.0 m"], ["Moisture", "10–12%"]],
      prompt: "Hero macro of a hank of banana fiber yarn — natural cream tones. Twisted skein on pale stone surface.",
    },
    {
      code: "P—02",
      name: "Pineapple Fiber",
      tag: "Silky piña leaf-extracted",
      src: "/pineapple-fiber.png",
      bullets: [
        "Extracted from post-harvest pineapple leaves",
        "Fine denier with soft hand feel and premium lustre",
        "Ideal for luxury apparel blends & nonwovens",
      ],
      spec: [["Fineness", "~3–5 µm"], ["Length", "60–120 cm"], ["Lustre", "High"]],
      prompt: "Fine pineapple fiber hank (piña) — delicate gold-white translucent threads, meticulously combed.",
    },
    {
      code: "P—03",
      name: "Algae Fiber",
      tag: "Bio-engineered marine seaweed",
      src: "/algae-fiber.png",
      bullets: [
        "Sourced from responsibly-harvested macro-algae",
        "Natural flame-retardant and anti-microbial features",
        "100% biodegradable with skin-soothing comfort",
      ],
      spec: [["Source", "Macro-algae"], ["Property", "Anti-microbial"], ["Form", "Filament/staple"]],
      prompt: "Spun seaweed algae fiber yarn — light organic sea-foam green tint, soft matte texture.",
    },
  ];

  return (
    <section id="platform" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <SectionHead
          code="Platform"
          label="Triple fiber innovation"
          title={<>A biomaterials platform — <span className="green-word">three</span> sustainable fibers.</>}
          subtitle="Most bio-material startups bet on one chemistry or feedstock. We engineered a platform that upcycles agricultural and marine wastes—banana stems, pineapple leaves, and seaweed—into commercial-grade sustainable fibers to completely replace synthetics."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="platform-grid">
          {products.map((p, i) => (
            <Reveal key={p.code} delay={i * 100}>
              <div className="card outline" style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                <ImgPlaceholder
                  code={p.code}
                  ratio="16 / 9"
                  prompt={p.prompt}
                  src={p.src}
                  style={{ borderRadius: 0, border: "none", borderBottom: "3px solid var(--green)" }}
                />
                <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  <div>
                    <h3 className="display-s" style={{ margin: 0 }}>{p.name}</h3>
                    <div style={{ marginTop: 4, color: "var(--green-ink)", fontWeight: 600, fontSize: 13 }}>{p.tag}</div>
                  </div>
                  <ul className="check-list" style={{ gap: 8 }}>
                    {p.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <div style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                    {p.spec.map(([k, v]) => (
                      <div key={k}>
                        <div className="label-mono">{k}</div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)", marginTop: 4, fontWeight: 500 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{ marginTop: 14, color: "var(--green-ink)", fontWeight: 700, fontSize: 13, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Request pricing <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .platform-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
