function Products() {
  const colorways = [
    { name: "Caramel Brown", hex: "#8B5230", desc: "A warm tobacco tone for heritage accessory lines." },
    { name: "Chocolate Brown", hex: "#3F2618", desc: "Deep cocoa for outerwear and structured goods." },
    { name: "Natural Tan Beige", hex: "#C9A37A", desc: "Untreated, neutral — finishes beautifully." },
    { name: "Cognac Amber", hex: "#A85A1F", desc: "Warm orange-brown for footwear and bags." },
    { name: "Espresso Black", hex: "#1A1614", desc: "Dense and architectural for premium fashion." },
  ];

  return (
    <section id="products">
      <div className="container">
        <SectionHead
          code="03 / Products"
          label="Material library"
          title={<>Premium swatches, made <span className="green-word">to spec.</span></>}
          subtitle="Five stock colorways for our vegan banana leather, with custom matching available. Every swatch is vegan-certified and traceable to a specific FPO cluster — sample kits ship within five business days."
        />

        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="swatch-grid">
            {colorways.map((c, i) => (
              <div key={c.name} className="card outline" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "4/3", background: c.hex, position: "relative" }}>
                  <div style={{
                    position: "absolute", top: 12, left: 12, right: 12,
                    background: "rgba(255,255,255,0.95)", borderRadius: 6,
                    padding: "8px 10px", display: "flex", alignItems: "baseline", justifyContent: "space-between",
                  }}>
                    <Wordmark size={13} />
                    <span className="label-mono" style={{ fontSize: 9 }}>{(i + 1).toString().padStart(2, "0")} / 05</span>
                  </div>
                </div>
                <div style={{ padding: "12px 16px 14px" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)" }}>{c.name}</div>
                  <div className="label-mono" style={{ marginTop: 4 }}>Banana Leather · Vegan Certified</div>
                  <p className="body-s" style={{ marginTop: 6, marginBottom: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Leaf-Guard compact callout */}
        <Reveal>
          <div style={{
            marginTop: 20,
            padding: "18px 28px",
            border: "1px solid var(--rule)",
            borderLeft: "4px solid var(--green)",
            borderRadius: 14,
            display: "grid",
            gridTemplateColumns: "auto 1px 1fr auto",
            alignItems: "center",
            gap: 24,
            background: "#fff",
          }} className="lg-callout">
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
                Starch-based spray from banana pith. +40–60% produce shelf-life. Food-safe, FDA-pathway compliant. Drop-in for existing packhouse equipment.
              </p>
            </div>
            <a href="#contact" className="btn btn-green" style={{ whiteSpace: "nowrap", padding: "10px 18px", fontSize: 13 }}>
              Start a pilot <span className="arrow">→</span>
            </a>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 1100px) { .swatch-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 720px) { .swatch-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 820px) { .lg-callout { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

window.Products = Products;
