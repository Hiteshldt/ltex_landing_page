// Hero centerpiece: animated pseudostem cross-section.
// Each ring is a separate stroked circle drawn outermost-first; the
// inner layers naturally cover the inner part of outer rings without
// any overdraw. Active state is purely a stroke-width / opacity change.

function StemCrossSection() {
  const layers = [
    {
      id: "outer",
      name: "Outer Sheath",
      product: "Banana Fiber",
      yield: "12% — 120 kg / t",
      color: "#18C25A",
      r: 168, ringWidth: 30,
      labelAngle: -55,
      desc: "Mechanically extracted, degummed, combed. Spinner-ready bales.",
    },
    {
      id: "inner",
      name: "Inner Sheath",
      product: "Vegan Leather",
      yield: "18% — 180 kg / t",
      color: "#0c5c2e",
      r: 123, ringWidth: 46,
      labelAngle: 55,
      desc: "Fiber mats pressed and finished into supple, customizable sheets.",
    },
    {
      id: "pith",
      name: "Pith Core",
      product: "Leaf-Guard™",
      yield: "14% — 140 L / t",
      color: "#f0c429",
      r: 0, ringWidth: 0, // drawn as solid disc below
      labelAngle: 180,
      desc: "Starch-based edible coating. +40–60% produce shelf-life.",
    },
  ];

  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % layers.length), 2400);
    return () => clearInterval(id);
  }, [paused, layers.length]);

  const cx = 200, cy = 200;
  const pithR = 78; // solid pith disc

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <svg viewBox="0 0 400 420" style={{ width: "100%", height: "auto", display: "block" }}>
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#18C25A" stopOpacity="0.10" />
            <stop offset="70%" stopColor="#18C25A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ambient glow */}
        <circle cx={cx} cy={cy} r="180" fill="url(#bgGlow)" />

        {/* OUTER ring — drawn as a stroked circle so we don't have to mask */}
        <circle
          cx={cx} cy={cy}
          r={layers[0].r - layers[0].ringWidth / 2}
          fill="none"
          stroke={layers[0].color}
          strokeOpacity={active === 0 ? 1 : 0.32}
          strokeWidth={layers[0].ringWidth}
          style={{ transition: "stroke-opacity 500ms ease" }}
        />
        {/* OUTER ring outline (always visible, thin) */}
        <circle cx={cx} cy={cy} r={layers[0].r} fill="none" stroke={layers[0].color} strokeWidth="1.2" strokeOpacity="0.7" />
        <circle cx={cx} cy={cy} r={layers[0].r - layers[0].ringWidth} fill="none" stroke={layers[0].color} strokeWidth="1.2" strokeOpacity="0.7" />

        {/* INNER ring */}
        <circle
          cx={cx} cy={cy}
          r={layers[1].r - layers[1].ringWidth / 2}
          fill="none"
          stroke={layers[1].color}
          strokeOpacity={active === 1 ? 1 : 0.32}
          strokeWidth={layers[1].ringWidth}
          style={{ transition: "stroke-opacity 500ms ease" }}
        />
        <circle cx={cx} cy={cy} r={layers[1].r} fill="none" stroke={layers[1].color} strokeWidth="1.2" strokeOpacity="0.7" />
        <circle cx={cx} cy={cy} r={layers[1].r - layers[1].ringWidth} fill="none" stroke={layers[1].color} strokeWidth="1.2" strokeOpacity="0.7" />

        {/* PITH disc */}
        <circle
          cx={cx} cy={cy} r={pithR}
          fill={layers[2].color}
          fillOpacity={active === 2 ? 1 : 0.32}
          stroke={layers[2].color}
          strokeWidth="1.2"
          style={{ transition: "fill-opacity 500ms ease" }}
        />

        {/* center label */}
        <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="800" fill="#0e1116" letterSpacing="1">PSEUDOSTEM</text>
        <text x={cx} y={cy + 9} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" letterSpacing="1.4" fill="#5b6470">CROSS-SECTION</text>

        {/* leader lines + labels */}
        {layers.map((l, i) => {
          const isActive = i === active;
          // anchor on the ring's mid radius (or pith mid for last)
          const midR = l.id === "pith" ? pithR / 2 : l.r - l.ringWidth / 2;
          const a = (l.labelAngle * Math.PI) / 180;
          const ax = cx + Math.cos(a) * midR;
          const ay = cy + Math.sin(a) * midR;
          // outer leader endpoint
          const outR = 192;
          const ex = cx + Math.cos(a) * outR;
          const ey = cy + Math.sin(a) * outR;
          const tx = cx + Math.cos(a) * (outR + 6);
          const ty = cy + Math.sin(a) * (outR + 6);
          const isLeft = Math.cos(a) < -0.15;
          const anchor = isLeft ? "end" : (Math.abs(Math.cos(a)) < 0.2 ? "middle" : "start");
          return (
            <g key={`ann-${l.id}`} style={{ opacity: isActive ? 1 : 0.32, transition: "opacity 400ms ease" }}>
              <line x1={ax} y1={ay} x2={ex} y2={ey} stroke={l.color} strokeWidth="1.25" />
              <circle cx={ax} cy={ay} r={isActive ? 4 : 2.8} fill="#fff" stroke={l.color} strokeWidth="1.6" style={{ transition: "r 400ms ease" }} />
              <text x={tx} y={ty - 2} textAnchor={anchor} fontFamily="JetBrains Mono" fontSize="8" letterSpacing="1.2" fill="#5b6470">{`L0${i + 1}`}</text>
              <text x={tx} y={ty + 11} textAnchor={anchor} fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" fill="#0e1116">{l.name}</text>
              <text x={tx} y={ty + 24} textAnchor={anchor} fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="600" fill={l.color}>→ {l.product}</text>
            </g>
          );
        })}
      </svg>

      {/* Info card — sits flush below the SVG inside the panel */}
      <div style={{
        marginTop: 12,
        background: "#ffffff",
        border: "1px solid var(--rule)",
        borderRadius: 12,
        padding: "14px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        boxShadow: "0 4px 18px rgba(14,17,22,0.04)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: layers[active].color, boxShadow: `0 0 0 4px ${layers[active].color}22`, flexShrink: 0 }} />
          <span className="label-mono" style={{ color: "var(--ink-3)" }}>LAYER 0{active + 1} / 03</span>
          <span style={{ flex: 1 }} />
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 11, color: "var(--ink-3)" }}>{layers[active].yield}</span>
        </div>
        <div style={{ fontWeight: 800, fontSize: 17, color: "var(--ink)", letterSpacing: "-0.01em" }}>
          {layers[active].name} <span style={{ color: "var(--ink-4)", fontWeight: 600 }}>→</span> <span style={{ color: layers[active].color }}>{layers[active].product}</span>
        </div>
        <div className="body-s" style={{ margin: 0, lineHeight: 1.5 }}>{layers[active].desc}</div>
        <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
          {layers.map((l, i) => (
            <button
              key={l.id}
              onClick={() => { setActive(i); setPaused(true); }}
              style={{
                flex: 1, height: 4, borderRadius: 2, border: "none", cursor: "pointer",
                background: i === active ? l.color : "#e3e6ea",
                transition: "background 300ms ease",
                padding: 0,
              }}
              aria-label={`Show ${l.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

window.StemCrossSection = StemCrossSection;
