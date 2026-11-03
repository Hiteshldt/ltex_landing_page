import Link from "next/link";
import StemCrossSection from "@/components/ui/StemCrossSection";
import { Arrow } from "@/components/ui/Icon";

// Headline words animate in one by one; `true` marks the serif accent word.
const HEADLINE = [["Agricultural"], ["waste,"], ["re-engineered"], ["into"], ["sustainable", true], ["materials."]];

const PROOF = [
  ["100%", "biomass utilization"],
  ["150M+ t", "annual feedstock"],
  ["3", "waste streams upcycled"],
];

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="pill fade-up">
            <span className="live-dot" /> Pilot active · Coimbatore, India
          </span>

          <h1 className="display-xl hero__title">
            {HEADLINE.map(([word, accent], i) => (
              <span key={word}>
                <span className="w">
                  <span className={accent ? "green-word" : undefined} style={{ "--i": i }}>{word}</span>
                </span>{" "}
              </span>
            ))}
          </h1>

          <p className="lead hero__lead fade-up" style={{ "--d": "600ms" }}>
            LeafTex turns <strong>banana, pineapple and algae waste</strong> into high-tenacity fiber, vegan leather,
            and an edible coating that keeps produce fresh up to 60% longer.
          </p>

          <div className="btn-row hero__ctas fade-up" style={{ "--d": "750ms" }}>
            <Link href="/products" className="btn btn-green">
              Explore our materials <Arrow />
            </Link>
            <Link href="/contact" className="btn btn-ghost">Request a sample</Link>
          </div>

          <dl className="hero__proof fade-up" style={{ "--d": "900ms" }}>
            {PROOF.map(([k, v]) => (
              <div key={v}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual fade-up" style={{ "--d": "250ms" }}>
          <StemCrossSection />
        </div>
      </div>
    </header>
  );
}
