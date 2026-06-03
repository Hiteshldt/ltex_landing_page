"use client";
import { Reveal, SectionHead } from "@/components/ui/Primitives";

function FlowBar({ items }) {
  return (
    <div style={{ display: "flex", height: 56, borderRadius: 8, overflow: "hidden", border: "1px solid var(--rule)" }}>
      {items.map((it, i) => (
        <div
          key={it.label}
          style={{
            flex: it.pct,
            background: it.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em",
            borderRight: i < items.length - 1 ? "1px solid #fff" : "none",
            fontWeight: 600,
          }}
        >
          {it.pct}%
        </div>
      ))}
    </div>
  );
}

function ImpactCard({ k, title, body }) {
  return (
    <div className="card outline" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, justifyContent: "space-between", borderLeft: "4px solid var(--green)" }}>
      <div className="display-m" style={{ color: "var(--green-ink)" }}>{k}</div>
      <div>
        <div style={{ fontWeight: 700, color: "var(--ink)", marginBottom: 6 }}>{title}</div>
        <p className="body-s" style={{ margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <section id="impact" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <SectionHead
          code="Impact"
          label="Circular by design"
          title={<>Zero waste isn&apos;t a feature. It&apos;s the <span className="green-word">premise.</span></>}
          subtitle="Every kilogram of feedstock leaves the system as a product — fiber, leather, coating, or compost. We measure ourselves on what we don't throw away."
        />

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 28 }} className="impact-grid">
          <Reveal>
            <div className="card outline" style={{ padding: 36 }}>
              <div className="label-mono">Platform resource yield</div>
              <h3 className="display-s" style={{ margin: "8px 0 28px" }}>Output by material type</h3>
              <FlowBar items={[
                { label: "Premium Fibers (Banana, Pineapple)", pct: 40, color: "#18C25A" },
                { label: "Vegan Leathers", pct: 20, color: "#0c5c2e" },
                { label: "Edible Coatings", pct: 15, color: "#f0c429" },
                { label: "Vermicompost returned to soil", pct: 25, color: "#9aa3ad" },
              ]} />
              <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, paddingTop: 24, borderTop: "1px solid var(--rule)" }} className="flow-legend">
                {[
                  ["Fibers", "40%", "400 kg / t", "#18C25A"],
                  ["Leathers", "20%", "200 sqm / t", "#0c5c2e"],
                  ["Coatings", "15%", "150 L / t", "#f0c429"],
                  ["Compost", "25%", "→ growers", "#9aa3ad"],
                ].map(([k, p, v, c]) => (
                  <div key={k}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                      <div className="label-mono">{k}</div>
                    </div>
                    <div className="display-s" style={{ marginTop: 6 }}>{p}</div>
                    <div className="body-s" style={{ marginTop: 2 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="col gap-16" style={{ height: "100%" }}>
              <ImpactCard k="–82%" title="Carbon vs. legacy leather" body="Upcycled vegan leather production avoids cattle-stage emissions and chrome-tanning effluent." />
              <ImpactCard k="+₹14k" title="Per-acre cultivator income" body="Estimated annual uplift for partner farmers and growers from previously-discarded residues." />
              <ImpactCard k="0 ml" title="Discharge to landfill" body="Closed-loop water and full pulp valorization across the entire materials platform." />
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .impact-grid { grid-template-columns: 1fr !important; }
          .flow-legend { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
