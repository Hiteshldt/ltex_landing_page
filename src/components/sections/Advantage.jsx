import Link from "next/link";
import { Reveal, SectionHead } from "@/components/ui/Primitives";
import Icon, { Arrow } from "@/components/ui/Icon";

const ADVANTAGES = [
  {
    icon: "loop",
    k: "100%",
    sub: "feedstock utilized",
    title: "Zero-Waste Platform",
    body: "Every part of the stream becomes a product — vs. competitors' 15–20% utilization.",
  },
  {
    icon: "rupee",
    k: "~₹0",
    sub: "raw material cost",
    title: "Near-Zero Feedstock Cost",
    body: "FPO partnerships around Coimbatore secure a near-free, renewable supply.",
  },
  {
    icon: "link",
    k: "Native",
    sub: "blockchain",
    title: "Immutable Traceability",
    body: "Provable origin from farm to finished product, down to the grower.",
  },
  {
    icon: "users",
    k: "Direct",
    sub: "FPO partnerships",
    title: "Community-Embedded Sourcing",
    body: "Stable feedstock with real economic uplift for local farmers.",
  },
];

export default function Advantage() {
  return (
    <section id="advantage" className="section section--stone">
      <div className="container">
        <SectionHead
          code="Advantage"
          label="What sets us apart"
          title={<>Why LeafTex <span className="green-word">wins.</span></>}
          subtitle="One integrated, multi-output platform — advantages single-product competitors can't match."
          actions={
            <div className="btn-row">
              <Link href="/technology" className="btn btn-ghost btn-sm">See our technology <Arrow /></Link>
              <Link href="/about" className="btn btn-ghost btn-sm">About LeafTex <Arrow /></Link>
            </div>
          }
        />

        <div className="bento">
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <div className={`card bento-card card--hover ${i === 0 ? "card--dark" : ""}`}>
                <span className="icon-tile"><Icon name={a.icon} /></span>
                <div>
                  <div className="bento-card__k">
                    <strong>{a.k}</strong>
                    <span className="label-mono">{a.sub}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p className="body-s">{a.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
