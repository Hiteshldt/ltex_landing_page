function Hero() {
  return (
    <header id="top" style={{ position: "relative", paddingTop: 132, paddingBottom: 72 }}>
      <div style={{
        position: "absolute", top: -100, right: -120, width: 520, height: 520,
        background: "radial-gradient(circle, rgba(24,194,90,0.18) 0%, rgba(24,194,90,0) 60%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <span className="chip chip-green"><span className="dot" /> Pilot · Active in Coimbatore</span>
            <span className="label-mono">Farm to Fashion — trace your thread</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "stretch" }} className="hero-grid">
            {/* Left column */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 28 }}>
              <div>
                <h1 className="display-xl" style={{ margin: 0, maxWidth: "16ch" }}>
                  Banana waste,<br />
                  re-engineered into<br />
                  <span className="green-word">premium</span> materials.
                </h1>
                <p className="body-l" style={{ maxWidth: "48ch", marginTop: 28, marginBottom: 0 }}>
                  LeafTex is a biomaterials platform that converts <strong style={{ color: "var(--ink)" }}>banana pseudostem</strong> — the 120M tons of agricultural waste burned every year — into three commercial-grade outputs: high-tenacity fiber, vegan leather, and an edible film coating that extends produce shelf life by up to 60%.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                  <a href="#platform" className="btn btn-green">Explore the platform <span className="arrow">→</span></a>
                  <a href="#contact" className="btn btn-ghost">Request a sample</a>
                </div>
              </div>

              <div style={{ paddingTop: 20, borderTop: "1px solid var(--rule)", display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
                <span className="label-mono">Compliance</span>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", color: "var(--ink-2)", fontSize: 13, fontWeight: 600, alignItems: "center" }}>
                  <span>REACH</span><span style={{ color: "var(--rule-2)" }}>·</span>
                  <span>GAP</span><span style={{ color: "var(--rule-2)" }}>·</span>
                  <span>MRV</span><span style={{ color: "var(--rule-2)" }}>·</span>
                  <span>Vegan Certified</span><span style={{ color: "var(--rule-2)" }}>·</span>
                  <span>Food-safe</span>
                </div>
              </div>
            </div>

            {/* Right column — animated cross-section */}
            <div style={{
              padding: "20px 22px 22px",
              background: "linear-gradient(180deg, #ffffff 0%, #f6f7f9 100%)",
              border: "1px solid var(--rule)",
              borderRadius: 18,
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <span className="label-mono" style={{ color: "var(--green-ink)", fontWeight: 700 }}>● LIVE — TRIPLE OUTPUT ENGINE</span>
                <span className="label-mono" style={{ color: "var(--ink-4)" }}>FIG. 01</span>
              </div>
              <StemCrossSection />
            </div>
          </div>
        </Reveal>

        {/* Stat strip */}
        <Reveal delay={300}>
          <div style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            background: "var(--bg-2)",
            border: "1px solid var(--rule)",
            borderRadius: 16,
            overflow: "hidden",
          }} className="hero-stats">
            {[
              ["100%", "Pith utilization", "vs. 15–20% industry avg"],
              ["3×", "Revenue streams", "fiber · leather · coating"],
              ["40–60%", "Shelf-life uplift", "verified on fresh produce"],
              ["120M t", "Annual feedstock", "banana waste, globally"],
            ].map(([k, v, sub], i) => (
              <div key={v} style={{ padding: "26px 22px", borderRight: i < 3 ? "1px solid var(--rule)" : "none" }}>
                <div className="display-m" style={{ color: "var(--green-ink)" }}>{k}</div>
                <div style={{ marginTop: 10, fontWeight: 700, color: "var(--ink)", fontSize: 15 }}>{v}</div>
                <div className="body-s" style={{ marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
          .hero-stats > div:nth-child(2) { border-right: none !important; }
          .hero-stats > div:nth-child(1), .hero-stats > div:nth-child(2) { border-bottom: 1px solid var(--rule); }
        }
        @media (max-width: 540px) {
          .hero-stats { grid-template-columns: 1fr !important; }
          .hero-stats > div { border-right: none !important; border-bottom: 1px solid var(--rule); }
          .hero-stats > div:last-child { border-bottom: none; }
        }
      `}</style>
    </header>
  );
}

window.Hero = Hero;
