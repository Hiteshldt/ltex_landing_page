// Animated overview of the two systems behind LeafTex: feedstock flows through the zero-waste
// hub into four outputs (top), and every step is written to the chain-of-custody ledger (bottom).
// Pure SVG + CSS animation, so it renders on the server.
const INPUTS = ["Banana stems", "Pineapple leaves", "Macro-algae"].map((label, i) => ({ label, y: 104 + i * 70 }));
const OUTPUTS = [
  ["Fiber", "#18C25A"],
  ["Vegan leather", "#3aa66a"],
  ["Leaf-Guard™", "#e9b949"],
  ["Compost → farms", "#82948a"],
].map(([label, color], i) => ({ label, color, y: 84 + i * 60 }));
const BLOCKS = [
  ["FARM", "0x4a…f29c"],
  ["EXTRACT", "0x8b…2d11"],
  ["QA", "0xc7…91aa"],
  ["SHIP", "0xe2…44b8"],
].map(([stage, hash], i) => ({ stage, hash, x: 24 + i * 144 }));
const HUB = { x: 300, y: 174, r: 60 };
const DROPS = [84, 300, 516];

const inPath = (y) => `M180 ${y} C 214 ${y}, 214 ${HUB.y}, ${HUB.x - HUB.r} ${HUB.y}`;
const outPath = (y) => `M${HUB.x + HUB.r} ${HUB.y} C 392 ${HUB.y}, 392 ${y}, 424 ${y}`;

export default function PlatformFlow() {
  return (
    <div className="flowcard">
      <svg className="flow-desktop" viewBox="0 0 600 500" role="img" aria-label="Banana stems, pineapple leaves and macro-algae flow into the LeafTex zero-waste hub and out as fiber, vegan leather, Leaf-Guard coating and compost, while every step — farm, extraction, QA and shipping — is recorded on the blockchain ledger">
        <defs>
          <radialGradient id="flow-hub-glow">
            <stop offset="0%" stopColor="#18C25A" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#18C25A" stopOpacity="0" />
          </radialGradient>
        </defs>

        <text x="24" y="40" className="flow-label">01 · Zero-waste processing</text>
        <text x="24" y="380" className="flow-label">02 · Blockchain traceability</text>

        {/* Flow lines with travelling pulses */}
        {INPUTS.map((n, i) => (
          <g key={n.label}>
            <path d={inPath(n.y)} className="flow-line" />
            <path d={inPath(n.y)} className="flow-pulse" pathLength="100" stroke="#18C25A" style={{ animationDelay: `${-i * 0.7}s` }} />
          </g>
        ))}
        {OUTPUTS.map((n, i) => (
          <g key={n.label}>
            <path d={outPath(n.y)} className="flow-line" />
            <path d={outPath(n.y)} className="flow-pulse" pathLength="100" stroke={n.color} style={{ animationDelay: `${-0.4 - i * 0.55}s` }} />
          </g>
        ))}

        {/* Every stage writes to the ledger */}
        {DROPS.map((x, i) => {
          const d = `M${x} ${i === 1 ? HUB.y + HUB.r + 6 : 270} L${x} 398`;
          return (
            <g key={x}>
              <path d={d} className="flow-drop" />
              <path d={d} className="flow-pulse flow-pulse--drop" pathLength="100" stroke="#18C25A" style={{ animationDelay: `${-i * 0.6}s` }} />
            </g>
          );
        })}

        {/* Hub */}
        <circle cx={HUB.x} cy={HUB.y} r="104" fill="url(#flow-hub-glow)" />
        <circle className="flow-spin" cx={HUB.x} cy={HUB.y} r="78" fill="none" stroke="#18C25A" strokeOpacity="0.5" strokeDasharray="3 9" />
        <circle cx={HUB.x} cy={HUB.y} r={HUB.r} fill="#10271b" stroke="#18C25A" strokeOpacity="0.45" />
        <text x={HUB.x} y={HUB.y - 2} textAnchor="middle" className="flow-hub">LeafTex</text>
        <text x={HUB.x} y={HUB.y + 18} textAnchor="middle" className="flow-hub-sub">ZERO-WASTE HUB</text>

        {/* Feedstock */}
        {INPUTS.map((n) => (
          <g key={n.label}>
            <rect x="24" y={n.y - 22} width="156" height="44" rx="22" className="flow-pill" />
            <circle cx="48" cy={n.y} r="12" fill="#18C25A" fillOpacity="0.16" />
            <path d={`M43 ${n.y + 5} C 43 ${n.y - 3}, 47 ${n.y - 6}, 54 ${n.y - 6} C 54 ${n.y + 1}, 50 ${n.y + 5}, 43 ${n.y + 5} Z`} fill="#18C25A" />
            <text x="68" y={n.y + 4.5} className="flow-text">{n.label}</text>
          </g>
        ))}

        {/* Outputs */}
        {OUTPUTS.map((n) => (
          <g key={n.label}>
            <rect x="424" y={n.y - 21} width="152" height="42" rx="21" className="flow-pill" />
            <circle cx="446" cy={n.y} r="5" fill={n.color} />
            <text x="462" y={n.y + 4.5} className="flow-text">{n.label}</text>
          </g>
        ))}

        {/* Ledger */}
        {BLOCKS.slice(0, -1).map((b) => (
          <g key={`link-${b.stage}`}>
            <line x1={b.x + 120} y1="428" x2={b.x + 144} y2="428" stroke="#ffffff" strokeOpacity="0.22" />
            <circle cx={b.x + 132} cy="428" r="3" fill="#0a1c13" stroke="#ffffff" strokeOpacity="0.3" />
          </g>
        ))}
        {BLOCKS.map((b, i) => (
          <g key={b.stage}>
            <rect x={b.x} y="400" width="120" height="56" rx="14" className="chain-block" style={{ animationDelay: `${i * 1.1}s` }} />
            <text x={b.x + 16} y="424" className="flow-stage">{b.stage}</text>
            <text x={b.x + 16} y="443" className="flow-hash">{b.hash}</text>
          </g>
        ))}
        <text x="24" y="486" className="flow-note">Each step minted on-chain — traceable with a QR scan</text>
      </svg>
      <MobileFlow />
    </div>
  );
}

// Stacked version of the same diagram for narrow screens.
const M_INPUTS = ["Banana stems", "Pineapple", "Macro-algae"].map((label, i) => ({ label, x: 14 + i * 106 }));
const M_HUB = { x: 170, y: 176, r: 52 };

function MobileFlow() {
  const inPath = (x) => `M${x + 50} 80 C ${x + 50} 104, ${M_HUB.x} 100, ${M_HUB.x} ${M_HUB.y - M_HUB.r}`;
  return (
    <svg className="flow-mobile" viewBox="0 0 340 640" aria-hidden="true">
      <defs>
        <radialGradient id="flow-hub-glow-m">
          <stop offset="0%" stopColor="#18C25A" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#18C25A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <text x="14" y="26" className="flow-label">01 · Zero-waste processing</text>

      {M_INPUTS.map((n, i) => (
        <g key={n.label}>
          <path d={inPath(n.x)} className="flow-line" />
          <path d={inPath(n.x)} className="flow-pulse" pathLength="100" stroke="#18C25A" style={{ animationDelay: `${-i * 0.7}s` }} />
        </g>
      ))}
      <path d={`M${M_HUB.x} ${M_HUB.y + M_HUB.r} L${M_HUB.x} 262`} className="flow-line" />
      <path d={`M${M_HUB.x} ${M_HUB.y + M_HUB.r} L${M_HUB.x} 262`} className="flow-pulse" pathLength="100" stroke="#18C25A" />

      {M_INPUTS.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y="44" width="100" height="36" rx="18" className="flow-pill" />
          <text x={n.x + 50} y="66.5" textAnchor="middle" className="flow-text" style={{ fontSize: 12.5 }}>{n.label}</text>
        </g>
      ))}

      <circle cx={M_HUB.x} cy={M_HUB.y} r="92" fill="url(#flow-hub-glow-m)" />
      <circle className="flow-spin" cx={M_HUB.x} cy={M_HUB.y} r="66" fill="none" stroke="#18C25A" strokeOpacity="0.5" strokeDasharray="3 9" />
      <circle cx={M_HUB.x} cy={M_HUB.y} r={M_HUB.r} fill="#10271b" stroke="#18C25A" strokeOpacity="0.45" />
      <text x={M_HUB.x} y={M_HUB.y - 2} textAnchor="middle" className="flow-hub">LeafTex</text>
      <text x={M_HUB.x} y={M_HUB.y + 16} textAnchor="middle" className="flow-hub-sub">ZERO-WASTE HUB</text>

      {OUTPUTS.map((n, i) => (
        <g key={n.label}>
          <rect x="80" y={262 + i * 44} width="180" height="36" rx="18" className="flow-pill" />
          <circle cx="100" cy={280 + i * 44} r="5" fill={n.color} />
          <text x="114" y={284.5 + i * 44} className="flow-text" style={{ fontSize: 13 }}>{n.label}</text>
        </g>
      ))}

      <text x="14" y="466" className="flow-label">02 · Blockchain traceability</text>
      {BLOCKS.map((b, i) => {
        const x = 14 + (i % 2) * 162;
        const y = 484 + Math.floor(i / 2) * 62;
        return (
          <g key={b.stage}>
            <rect x={x} y={y} width="150" height="52" rx="14" className="chain-block" style={{ animationDelay: `${i * 1.1}s` }} />
            <text x={x + 16} y={y + 23} className="flow-stage">{b.stage}</text>
            <text x={x + 16} y={y + 41} className="flow-hash">{b.hash}</text>
          </g>
        );
      })}
      <text x="14" y="626" className="flow-note">Each step minted on-chain — traceable by QR</text>
    </svg>
  );
}
