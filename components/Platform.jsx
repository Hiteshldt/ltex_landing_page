function Platform() {
  const products = [
    {
      code: "P—01",
      name: "Banana Fiber",
      tag: "Degummed & combed",
      bullets: ["Degummed & combed", "High tensile strength & naturally dyeable", "Ready for modern textile spinners"],
      spec: [["Tenacity", "29.98 g/tex"], ["Length", "1.5–3.0 m"], ["Moisture", "10–12%"], ["ASP", "$6–10 / kg"]],
      prompt: "Hero macro of a hank of banana fiber yarn — natural cream tones with subtle green-leaf variegation (matching the existing 'Leaf-Tex' yarn product image). Twisted skein on pale stone surface. Bright daylight, soft shadow, clean white space at top.",
    },
    {
      code: "P—02",
      name: "Banana Vegan Leather",
      tag: "Premium · cruelty-free",
      bullets: ["Premium vegan alternative", "Customizable colorways and grains", "Durable for fashion & accessories"],
      spec: [["Thickness", "0.8–1.4 mm"], ["Tensile", ">20 MPa"], ["Format", "Sheet & roll"], ["ASP", "$25–45 / sqm"]],
      prompt: "A swatch card of warm caramel-brown banana leather (matching brand swatches) clipped to clean white card stock. Visible natural grain and slight crease. Top-down studio shot on light grey paper. Crisp, catalog-ready.",
    },
    {
      code: "P—03",
      name: "Leaf-Guard™ Edible Coating",
      tag: "Starch-based · transparent",
      bullets: ["Extracted from banana pith", "Starch-based & completely transparent", "Extends produce shelf-life by 30–60%"],
      spec: [["Form", "Aqueous spray"], ["Shelf-life Δ", "+40–60%"], ["Approvals", "Food-safe"], ["ASP", "$3–6 / L"]],
      prompt: "Split-screen comparison shot: 'Day 7 — Uncoated' (slightly wilted strawberries) vs. 'Day 7 — Leaf-Guard coated' (vibrant, glossy strawberries). Glass bowls, clean white kitchen lab background. Matches the existing brand strawberry comparison.",
    },
  ];

  return (
    <section id="platform" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <SectionHead
          code="02 / Platform"
          label="Triple value-innovation"
          title={<>A biomaterials platform — <span className="green-word">not</span> a single product.</>}
          subtitle="Most bio-material startups bet on one chemistry. We engineered a process where every stratum of the pseudostem becomes a different product — diversifying revenue, hedging market cycles, and pushing utilization to 100%."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="platform-grid">
          {products.map((p, i) => (
            <Reveal key={p.code} delay={i * 100}>
              <div className="card outline" style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                <ImgPlaceholder code={p.code} ratio="16 / 9" prompt={p.prompt} style={{ borderRadius: 0, border: "none", borderBottom: "3px solid var(--green)" }} />
                <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  <div>
                    <h3 className="display-s" style={{ margin: 0 }}>{p.name}</h3>
                    <div style={{ marginTop: 4, color: "var(--green-ink)", fontWeight: 600, fontSize: 13 }}>{p.tag}</div>
                  </div>
                  <ul className="check-list" style={{ gap: 8 }}>
                    {p.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <div style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {p.spec.map(([k, v]) => (
                      <div key={k}>
                        <div className="label-mono">{k}</div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)", marginTop: 4, fontWeight: 500 }}>{v}</div>
                      </div>
                    ))}
                  </div>
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

window.Platform = Platform;
