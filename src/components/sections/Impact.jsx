import { Reveal, SectionHead } from "@/components/ui/Primitives";

const FLOW = [
  { label: "Fibers", pct: 40, out: "400 kg / t", color: "#18C25A" },
  { label: "Leathers", pct: 20, out: "200 sqm / t", color: "#2f8f57" },
  { label: "Coatings", pct: 15, out: "150 L / t", color: "#e9b949" },
  { label: "Compost", pct: 25, out: "→ growers", color: "#6f8278" },
];

const IMPACTS = [
  ["–82%", "Carbon vs. legacy leather", "No cattle-stage emissions or chrome-tanning effluent."],
  ["+₹14k", "Per-acre cultivator income", "Estimated annual uplift for partner growers."],
  ["0 ml", "Discharge to landfill", "Closed-loop water and full pulp valorization."],
];

export default function Impact() {
  return (
    <section id="impact" className="section section--dark">
      <div className="section-glow" style={{ left: -260, top: -320 }} aria-hidden="true" />
      <div className="container" style={{ position: "relative" }}>
        <SectionHead
          code="Impact"
          label="Circular by design"
          title={<>Zero waste isn&apos;t a feature. It&apos;s the <span className="green-word">premise.</span></>}
          subtitle="Every kilogram of feedstock leaves as a product — fiber, leather, coating, or compost."
        />

        <div className="impact-grid">
          <Reveal className="card card--dark">
            <span className="label-mono">Platform resource yield</span>
            <h3 className="display-s" style={{ margin: "10px 0 30px", color: "#fff" }}>Output by material type</h3>
            <div className="flow" role="img" aria-label="Fibers 40%, leathers 20%, coatings 15%, compost 25%">
              {FLOW.map((f) => (
                <div key={f.label} style={{ flex: f.pct, background: f.color, color: f.label === "Coatings" ? "#0f1512" : undefined }}>
                  {f.pct}%
                </div>
              ))}
            </div>
            <div className="flow-legend">
              {FLOW.map((f) => (
                <div key={f.label}>
                  <div className="flow-legend__k">
                    <i style={{ background: f.color }} />
                    <span className="label-mono">{f.label}</span>
                  </div>
                  <strong>{f.pct}%</strong>
                  <span className="v">{f.out}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="impact-stack">
            {IMPACTS.map(([k, title, body], i) => (
              <Reveal key={title} delay={120 + i * 100} className="card card--dark impact-card">
                <strong>{k}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
