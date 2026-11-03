"use client";
import { useEffect, useState } from "react";
import { Reveal, SectionHead } from "@/components/ui/Primitives";

const STEPS = [
  { n: "1", t: "Sourcing Feedstock", d: "Pseudostems from banana FPOs, pineapple leaves from orchards, and responsibly-harvested marine algae." },
  { n: "2", t: "Extraction Hubs", d: "Mechanical decortication and green extraction pull premium fiber from crop and marine wastes." },
  { n: "3", t: "Combing & Spinning", d: "Raw fibers are degummed, combed, and blended for high-tenacity industrial spinning." },
  { n: "4", t: "Biomaterial Synthesis", d: "Internal plant starches and marine polymers are formulated into leathers and edible films." },
  { n: "5", t: "Organic Recycling", d: "Residual cellulose pulp is fully composted, locking nutrients back into organic form." },
  { n: "6", t: "Back to Cultivators", d: "Compost delivered free to partner farmers and growers, completely closing the circular loop." },
];

const C = 200;
const R = 150;
const r2 = (n) => Math.round(n * 100) / 100;
const NODES = STEPS.map((s, i) => {
  const a = (i / STEPS.length) * Math.PI * 2 - Math.PI / 2;
  const cos = Math.cos(a);
  return {
    x: r2(C + cos * R),
    y: r2(C + Math.sin(a) * R),
    lx: r2(C + cos * (R + 40)),
    ly: r2(C + Math.sin(a) * (R + 40)),
    anchor: Math.abs(cos) < 0.2 ? "middle" : cos > 0 ? "start" : "end",
    label: s.t.split(" ")[0],
  };
});

function Orbit({ active, onSelect }) {
  return (
    <div className="orbit">
      <svg viewBox="0 0 400 400" role="img" aria-label="Six-step circular, zero-waste process">
        <defs>
          <radialGradient id="orbit-core">
            <stop offset="0%" stopColor="#18C25A" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#18C25A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={C} cy={C} r="120" fill="url(#orbit-core)" />
        <circle cx={C} cy={C} r={R} fill="none" stroke="#fff" strokeOpacity="0.16" strokeWidth="1.5" strokeDasharray="3 7" />
        <circle
          className="orbit-arc"
          cx={C} cy={C} r={R}
          fill="none" stroke="#18C25A" strokeWidth="2.5" strokeLinecap="round"
          pathLength="100" strokeDasharray="100"
          strokeDashoffset={100 - (active / STEPS.length) * 100}
          transform={`rotate(-90 ${C} ${C})`}
        />
        <g className="stem-spin" style={{ animationDuration: "16s" }}>
          <circle cx={C} cy={C - R} r="3.5" fill="#18C25A" />
        </g>
        <circle cx={C} cy={C} r="68" fill="#10271b" stroke="#18C25A" strokeOpacity="0.4" />

        {NODES.map((n, i) => {
          const on = i === active;
          const done = i < active;
          return (
            <g key={i} className="orbit-node" onClick={() => onSelect(i)}>
              <circle cx={n.x} cy={n.y} r={on ? 24 : 21} fill={on ? "#18C25A" : "#0a1c13"} stroke={on || done ? "#18C25A" : "rgba(255,255,255,0.28)"} strokeWidth="1.5" />
              <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill={on ? "#0f1512" : "#f2f5f1"}>{STEPS[i].n}</text>
              <text x={n.lx} y={n.ly + 4} textAnchor={n.anchor} fontSize="12" fontWeight="500" fill={on ? "#ffffff" : "#82948a"}>{n.label}</text>
            </g>
          );
        })}
      </svg>
      <div className="orbit__core" aria-hidden="true">
        <small>Circular</small>
        <b>Zero-Waste</b>
        <span>100% Upcycled</span>
      </div>
    </div>
  );
}

export default function Process() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="process" className="section section--stone">
      <div className="container">
        <SectionHead
          code="Process"
          label="Circular · Zero-waste"
          title={<>From grower to fiber to <span className="green-word">soil.</span></>}
          subtitle="A regional, zero-waste model that cuts wet-biomass haulage and lifts smallholder income."
        />

        <div className="process" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <Reveal className="process__diagram">
            <div className="card card--dark" style={{ padding: "clamp(24px, 4vw, 48px)" }}>
              <Orbit active={active} onSelect={setActive} />
            </div>
          </Reveal>

          <ol className="steps" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 70}>
                <div className={`step ${i === active ? "is-active" : ""}`} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
                  <span className="step__n">0{s.n}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <div className="step__body"><p className="body-s">{s.d}</p></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
