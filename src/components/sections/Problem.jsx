import Link from "next/link";
import { Reveal, SectionHead, Counter } from "@/components/ui/Primitives";
import { Arrow } from "@/components/ui/Icon";

const STATS = [
  {
    n: 150, unit: "M",
    label: "Tons of crop & marine waste annually",
    sub: "Discards from banana, pineapple, and algae cultivation left to rot or burn.",
  },
  {
    n: 90, unit: "%",
    label: "Of animal leather is tanned with toxins",
    sub: "Chromium and other carcinogens pollute waterways near tanneries.",
  },
  {
    n: 33, unit: "%",
    label: "Of food produced is lost or wasted",
    sub: "Short shelf-life rots produce before it reaches consumers.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section">
      <div className="container">
        <SectionHead
          code="Problem"
          label="A multi-waste crisis"
          title={<>Three industries, <span className="green-word">one feedstock</span> — upcycled.</>}
          subtitle="Farmers burn banana stems and pineapple leaves while algae blooms clog coastlines. We upcycle all three on one materials platform."
        />

        <div className="stat-row">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className="stat-col">
              <div className="stat-big">
                <Counter to={s.n} />
                <span className="unit">{s.unit}</span>
              </div>
              <h3>{s.label}</h3>
              <p className="body-s">{s.sub}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="feature-band">
          <div>
            <span className="eyebrow">The opportunity</span>
            <p>
              Upcycle banana, pineapple, and algae residues into premium fibers, vegan leathers, and edible
              protective coatings.
            </p>
          </div>
          <Link href="/products" className="btn btn-light">
            Explore our materials <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
