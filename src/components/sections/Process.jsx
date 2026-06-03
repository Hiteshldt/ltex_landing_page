"use client";
import { Reveal, SectionHead } from "@/components/ui/Primitives";

function CircleDiagram({ steps }) {
  const size = 380;
  const r = 150;
  const cx = size / 2;
  const cy = size / 2;
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: size, aspectRatio: "1", margin: "0 auto" }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#d6dae0" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx={cx} cy={cy} r="62" fill="#0e1116" />
        <text x={cx} y={cy - 8} textAnchor="middle" fill="#18C25A" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2">CIRCULAR</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#fff" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="15">Zero-Waste</text>
        <text x={cx} y={cy + 26} textAnchor="middle" fill="#9aa3ad" fontFamily="Plus Jakarta Sans" fontSize="9">100% Upcycled</text>
        {steps.map((s, i) => {
          const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          return (
            <g key={s.n}>
              <circle cx={x} cy={y} r="22" fill="#fff" stroke="#18C25A" strokeWidth="2" />
              <text x={x} y={y + 5} textAnchor="middle" fill="#0e1116" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="14">{s.n}</text>
              <text x={x} y={y + (Math.sin(angle) >= 0 ? 44 : -32)} textAnchor="middle" fill="#0e1116" fontFamily="Plus Jakarta Sans" fontWeight="700" fontSize="10">{s.t.split(" ")[0]}</text>
              <text x={x} y={y + (Math.sin(angle) >= 0 ? 56 : -20)} textAnchor="middle" fill="#5b6470" fontFamily="Plus Jakarta Sans" fontSize="9">{s.t.split(" ").slice(1).join(" ")}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Process() {
  const steps = [
    { n: "1", t: "Sourcing Feedstock", d: "Pseudostems from banana FPOs, pineapple leaves from orchards, and responsibly-harvested marine algae." },
    { n: "2", t: "Extraction Hubs", d: "Mechanical decortication and green extraction pull premium fiber from crop and marine wastes." },
    { n: "3", t: "Combing & Spinning", d: "Raw fibers are degummed, combed, and blended for high-tenacity industrial spinning." },
    { n: "4", t: "Biomaterial Synthesis", d: "Internal plant starches and marine polymers are formulated into leathers and edible films." },
    { n: "5", t: "Organic Recycling", d: "Residual cellulose pulp is fully composted, locking nutrients back into organic form." },
    { n: "6", t: "Back to Cultivators", d: "Compost delivered free to partner farmers and growers, completely closing the circular loop." },
  ];

  return (
    <section id="process" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <SectionHead
          code="Process"
          label="Circular · Zero-waste"
          title={<>From grower to fiber to <span className="green-word">soil.</span></>}
          subtitle="A regional processing model that minimizes wet-biomass haulage, keeps margins with the platform, and lifts smallholder cultivator income — all while operating zero-waste."
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48, alignItems: "start" }} className="proc-grid">
          <Reveal>
            <CircleDiagram steps={steps} />
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="proc-list">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="card outline" style={{ height: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--green-soft)", color: "var(--green-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, border: "1.5px solid var(--green)" }}>
                    {s.n}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 17, color: "var(--ink)" }}>{s.t}</div>
                  <p className="body-s" style={{ margin: 0 }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proc-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 600px) {
          .proc-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
