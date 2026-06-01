import Link from "next/link";
import { Reveal, SectionHead } from "@/components/ui/Primitives";

const ADVANTAGES = [
  {
    k: "100%",
    sub: "feedstock utilized",
    title: "Zero-Waste Platform",
    body: "Unparalleled yield — a true zero-waste ethos that outperforms competitors' 15–20% utilization. Every part of the banana, pineapple, and algae stream becomes a product.",
  },
  {
    k: "~₹0",
    sub: "raw material cost",
    title: "Near-Zero Feedstock Cost",
    body: "Strategic FPO partnerships around Coimbatore secure near-zero raw material costs and an infinitely renewable supply chain.",
  },
  {
    k: "Native",
    sub: "blockchain",
    title: "Immutable Traceability",
    body: "Brand-grade transparency and provable origin tracking from farm to finished product — auditable down to a specific grower, baked into every batch.",
  },
  {
    k: "Direct",
    sub: "FPO partnerships",
    title: "Community-Embedded Sourcing",
    body: "Stable feedstock secured while delivering real economic uplift to local farming communities. Social governance built directly into procurement.",
  },
];

export default function Advantage() {
  return (
    <section id="advantage" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <SectionHead
          code="Advantage"
          label="What sets us apart"
          title={<>Why LeafTex <span className="green-word">wins.</span></>}
          subtitle="In a crowded biomaterials market, an integrated multi-output platform creates structural advantages that single-product competitors simply cannot match."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="adv-grid">
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="card outline" style={{ height: "100%", display: "flex", flexDirection: "column", gap: 10, borderLeft: "4px solid var(--green)" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <div className="display-m" style={{ color: "var(--green-ink)" }}>{a.k}</div>
                  <div className="label-mono">{a.sub}</div>
                </div>
                <div style={{ fontWeight: 800, fontSize: 18, color: "var(--ink)", letterSpacing: "-0.01em" }}>{a.title}</div>
                <p className="body-s" style={{ margin: 0 }}>{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/technology" className="btn btn-ghost">See our technology <span className="arrow">→</span></Link>
          <Link href="/about" className="btn btn-ghost">About LeafTex <span className="arrow">→</span></Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) { .adv-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
