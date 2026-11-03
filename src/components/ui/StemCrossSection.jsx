"use client";
import { useState } from "react";

// Animated banana pseudostem cross-section: each concentric layer lights up in turn and a
// pulse travels from it to the product it becomes. Geometry is computed once and rounded
// so server and client markup match.
const CX = 200;
const CY = 250;
const r2 = (n) => Math.round(n * 100) / 100;
const polar = (r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [r2(CX + Math.cos(a) * r), r2(CY + Math.sin(a) * r)];
};
const pt = (p) => p.join(" ");

const LAYERS = [
  {
    id: "outer",
    tag: "Outer sheath",
    product: "Banana Fiber",
    yield: "12% · 120 kg/t",
    color: "#18C25A",
    ink: "#0b8a3e",
    img: "/fiber.webp",
    top: "15%",
    halo: 191,
    anchor: polar(168, -42),
    path: (a) => `M ${pt(a)} L 352 75 L 381 75`,
  },
  {
    id: "inner",
    tag: "Inner sheath",
    product: "Vegan Leather",
    yield: "18% · 180 kg/t",
    color: "#0c5c2e",
    ink: "#0c5c2e",
    img: "/CaramelBrown.webp",
    top: "50%",
    halo: 149,
    anchor: polar(122, 0),
    path: (a) => `M ${pt(a)} L 381 250`,
  },
  {
    id: "pith",
    tag: "Pith core",
    product: "Leaf-Guard™",
    yield: "14% · 140 L/t",
    color: "#e9b949",
    ink: "#9a6f0e",
    img: "/coating.webp",
    top: "85%",
    halo: 100,
    anchor: polar(58, 38),
    path: (a) => `M ${pt(a)} L 352 425 L 381 425`,
  },
];

const TICKS = Array.from({ length: 72 }, (_, i) => {
  const major = i % 6 === 0;
  return [...polar(major ? 196 : 199, i * 5), ...polar(206, i * 5), major];
});
const FIBERS = [
  ...Array.from({ length: 40 }, (_, i) => polar(159, i * 9)),
  ...Array.from({ length: 48 }, (_, i) => polar(176, i * 7.5 + 3.75)),
];
const CHAMBERS = Array.from({ length: 18 }, (_, i) => {
  const [x, y] = polar(122, i * 20);
  return `translate(${x} ${y}) rotate(${i * 20 + 90})`;
});
const CELLS = [];
for (let y = -84; y <= 84; y += 12) {
  for (let x = -84; x <= 84; x += 14) {
    const ox = x + ((y / 12) % 2 ? 7 : 0);
    if (Math.hypot(ox, y) < 84) CELLS.push([CX + ox, CY + y]);
  }
}
const SWEEP = `M${CX} ${CY} L${pt(polar(206, -24))} A206 206 0 0 1 ${pt(polar(206, 0))} Z`;

export default function StemCrossSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = () => setActive((a) => (a + 1) % LAYERS.length);
  const dim = (i) => ({ opacity: active === i ? 1 : 0.3 });

  return (
    <figure
      className={`stemv ${paused ? "is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="stemv__stage">
        <svg viewBox="0 0 560 500" role="img" aria-label="Cross-section of a banana pseudostem: the outer sheath becomes banana fiber, the inner sheath becomes vegan leather, and the pith core becomes Leaf-Guard edible coating">
          <defs>
            <radialGradient id="stemv-glow">
              <stop offset="0%" stopColor="#18C25A" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#18C25A" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="stemv-pith" cx="40%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#f8e3a0" />
              <stop offset="100%" stopColor="#e2ad35" />
            </radialGradient>
            <linearGradient id="stemv-sheen" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="0" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.24" />
            </linearGradient>
          </defs>

          <circle cx={CX} cy={CY} r="240" fill="url(#stemv-glow)" />

          <g className="stemv-spin" strokeLinecap="round">
            {TICKS.map(([x1, y1, x2, y2, major], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0f1512" strokeOpacity={major ? 0.34 : 0.12} strokeWidth={major ? 1.4 : 1} />
            ))}
          </g>
          <g className="stemv-orbit">
            <circle cx={CX} cy={CY - 214} r="3.5" fill="#18C25A" />
          </g>

          <g className="stem-ring" style={dim(0)}>
            <circle className="stem-draw" cx={CX} cy={CY} r="168" fill="none" stroke="#18C25A" strokeWidth="36" pathLength="100" transform={`rotate(-90 ${CX} ${CY})`} />
            <g className="stem-pop" style={{ "--d": "1100ms" }}>
              {FIBERS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.9" fill="#fff" fillOpacity="0.6" />)}
            </g>
          </g>
          <g className="stem-ring" style={dim(1)}>
            <circle className="stem-draw" cx={CX} cy={CY} r="122" fill="none" stroke="#0c5c2e" strokeWidth="46" pathLength="100" transform={`rotate(-90 ${CX} ${CY})`} style={{ "--d": "180ms" }} />
            <g className="stem-pop" style={{ "--d": "1250ms" }}>
              {CHAMBERS.map((t, i) => <rect key={i} x="-9" y="-5.5" width="18" height="11" rx="5.5" transform={t} fill="#fff" fillOpacity="0.16" />)}
            </g>
          </g>
          <g className="stem-ring" style={dim(2)}>
            <circle className="stem-pop" cx={CX} cy={CY} r="96" fill="url(#stemv-pith)" style={{ "--d": "500ms" }} />
            <g className="stem-pop" style={{ "--d": "1400ms" }}>
              {CELLS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.5" fill="#8a6210" fillOpacity="0.22" />)}
            </g>
          </g>

          <path className="stemv-sweep" d={SWEEP} fill="url(#stemv-sheen)" />
          <circle key={`halo-${active}`} className="stemv-halo" cx={CX} cy={CY} r={LAYERS[active].halo} stroke={LAYERS[active].color} />

          {LAYERS.map((l, i) => {
            const on = active === i;
            const d = l.path(l.anchor);
            return (
              <g key={l.id} className="stem-pop" style={{ "--d": `${1300 + i * 150}ms` }}>
                <path d={d} fill="none" stroke={on ? l.ink : "#0f1512"} strokeOpacity={on ? 0.9 : 0.16} strokeWidth="1.3" style={{ transition: "stroke 400ms ease, stroke-opacity 400ms ease" }} />
                {on && <path key={`p-${active}`} className="stemv-pulse" d={d} stroke={l.color} pathLength="100" />}
                <circle cx={l.anchor[0]} cy={l.anchor[1]} r={on ? 5 : 3.5} fill="#fff" stroke={on ? l.ink : "#9aa29d"} strokeWidth="1.8" style={{ transition: "r 400ms ease, stroke 400ms ease" }} />
              </g>
            );
          })}
        </svg>

        <div className="stemv__center" aria-hidden="true">
          <b>PSEUDOSTEM</b>
          <span>Cross-section</span>
        </div>

        {LAYERS.map((l, i) => (
          <div key={l.id} className="stemv__slot stem-pop" style={{ top: l.top, "--d": `${1400 + i * 160}ms` }}>
            <button
              type="button"
              className={`stemv__chip ${active === i ? "is-active" : ""}`}
              style={{ "--c": l.color, "--c-ink": l.ink }}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={active === i}
            >
              <span className="stemv__thumb"><img src={l.img} alt="" width={120} height={120} /></span>
              <span className="stemv__txt">
                <small>{l.tag}</small>
                <b>{l.product}</b>
                <em>{l.yield}</em>
              </span>
              <span className="stemv__bar"><i onAnimationEnd={active === i ? next : undefined} /></span>
            </button>
          </div>
        ))}
      </div>
      <figcaption className="stemv__cap">
        <span className="live-dot" /> One banana stem — three commercial products
      </figcaption>
    </figure>
  );
}
