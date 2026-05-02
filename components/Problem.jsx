function Problem() {
  const stats = [
    { n: "120", unit: "M", label: "Tons of banana crop waste annually", sub: "Burned or sent to landfill — a primary source of agricultural emissions." },
    { n: "90", unit: "%", label: "Of animal leather is tanned with toxins", sub: "Chromium and other carcinogens pollute waterways near tanneries." },
    { n: "33", unit: "%", label: "Of food produced is lost or wasted", sub: "Short shelf-life rots produce before it reaches consumers." },
  ];
  return (
    <section id="problem">
      <div className="container">
        <SectionHead
          code="01 / Problem"
          label="A dual waste crisis"
          title={<>Two industries, <span className="green-word">one feedstock</span> — wasted.</>}
          subtitle="Agriculture and fashion both have waste problems no one is solving in tandem. Banana farmers burn what could be a textile feedstock; fashion brands import synthetics shedding microplastics; cold-chains lose a third of every harvest. We address all three with one platform."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="problem-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="card outline" style={{ height: "100%", borderLeft: "4px solid var(--green)" }}>
                <div className="stat-num" style={{ color: "var(--ink)" }}>
                  <Counter to={parseFloat(s.n)} />
                  <span className="unit">{s.unit}</span>
                </div>
                <div style={{ marginTop: 16, fontWeight: 700, color: "var(--ink)", fontSize: 16 }}>
                  {s.label}
                </div>
                <p className="body-s" style={{ marginTop: 8, maxWidth: "32ch" }}>{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The opportunity callout — matches the dark band in the deck */}
        <Reveal>
          <div className="card dark" style={{ marginTop: 32, padding: "28px 32px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", borderRadius: 14 }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--green)", fontWeight: 700 }}>The opportunity</span>
            <span style={{ width: 1, alignSelf: "stretch", background: "#2a3038" }} />
            <span style={{ fontWeight: 600, fontSize: 17, color: "#fff", flex: 1, minWidth: 280 }}>
              Upcycle banana waste into high-value, sustainable textiles and protective edible coatings.
            </span>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

window.Problem = Problem;
