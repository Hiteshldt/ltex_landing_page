function Team() {
  const team = [
    { n: "Frankline Francis", r: "Co-Founder & CEO", b: "20 years business strategy. Former VP, Carbelim Middle East; CEO, Conflexity Consultancy. Leads enterprise sales and strategic alliances.", tag: "BUSINESS" },
    { n: "Manoj Ramdoss", r: "Co-Founder & COO", b: "15-year mechanical engineer (Pandian Industries, SNR Laser). Leads plant setup, machinery design, and production scale-up.", tag: "OPERATIONS" },
    { n: "Hitesh Gupta", r: "Co-Founder & CTO", b: "NIT alumnus. Deep expertise in blockchain and digital systems with 20+ launches. Owns the traceability platform and ESG dashboards.", tag: "TECHNOLOGY" },
    { n: "Susheela Bai Gopi", r: "Co-Founder & Head of Sourcing", b: "Organic farmer, community leader, vegan and animal-rights activist. Co-Founder of Animal House. Leads farmer engagement.", tag: "FARMER PARTNERSHIPS" },
    { n: "Dr. Shijo Joy, Ph.D.", r: "Co-Founder & CSO", b: "PhD, Environmental Science. 4+ years bio-based materials R&D. Leads validation and sustainability reporting.", tag: "SCIENCE" },
  ];
  return (
    <section id="team">
      <div className="container">
        <SectionHead
          code="07 / Team"
          label="Five founders, one stack"
          title={<>The people <span className="green-word">behind</span> the thread.</>}
          subtitle="Strategy, operations, technology, sourcing, and science — under one roof, with deep regional roots in Coimbatore's banana belt."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {team.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="card outline" style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                <ImgPlaceholder
                  code={`PORTRAIT / ${(i + 1).toString().padStart(2, "0")}`}
                  ratio="3 / 2"
                  prompt={`Editorial portrait of ${p.n.split(',')[0]} (${p.r}). Soft natural light, neutral studio background, hint of green wardrobe accent. Confident but warm expression. Clean, modern, like a tech-company team page.`}
                  style={{ borderRadius: 0, border: "none", borderBottom: "1px solid var(--rule)" }}
                />
                <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <div className="label-mono" style={{ color: "var(--green-ink)" }}>{p.tag}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 18, color: "var(--ink)", letterSpacing: "-0.01em" }}>{p.n}</div>
                    <div className="body-s" style={{ marginTop: 2 }}>{p.r}</div>
                  </div>
                  <p className="body-s" style={{ margin: 0 }}>{p.b}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Team = Team;
