import Link from "next/link";
import { Reveal } from "@/components/ui/Primitives";
import Icon, { Arrow } from "@/components/ui/Icon";

export const faqData = [
  {
    q: "What feedstock does LeafTex use?",
    a: "We upcycle three streams of agricultural and marine waste: banana pseudostem (post-harvest stems from banana FPOs), pineapple leaf waste, and responsibly-harvested macro-algae. All three are residues that would otherwise be burned, discarded, or left to rot.",
  },
  {
    q: "What products do you make, and how are they related?",
    a: "One integrated platform yields several commercial outputs: high-tenacity natural fibers (banana, pineapple), premium cruelty-free leathers — vegan leather plus biodegradable algae leather — and Leaf-Guard™, a starch-based edible coating that extends produce shelf-life by 40–60%. Diversifying outputs hedges market cycles and pushes feedstock utilization to 100%.",
  },
  {
    q: "How does blockchain traceability work?",
    a: "Every batch is minted on our native chain-of-custody ledger with origin, lot, and lifecycle data — from the partner farm cooperative through extraction, QA, and dispatch. Your QR-scanning customer can trace provenance right down to a specific grower.",
  },
  {
    q: "How do I request pricing or a sample?",
    a: "Pricing is quoted per spec and volume — head to the contact page and tell us your application (spinning, fashion, packhouse, packaging). We ship sample kits to spinners, brands, packhouses, and packagers within five business days.",
  },
];

export default function FAQ({ className = "" }) {
  return (
    <section id="faq" className={`section ${className}`}>
      <div className="container faq">
        <Reveal className="faq__aside">
          <span className="eyebrow">FAQ</span>
          <h2 className="display-l">Questions, <span className="green-word">answered.</span></h2>
          <div className="faq__help">
            <span className="icon-tile"><Icon name="mail" /></span>
            <div>
              <b>Still have a question?</b>
              <p className="body-s">The founders reply to every enquiry within two business days.</p>
              <Link href="/contact" className="btn btn-green btn-sm">Talk to us <Arrow /></Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="faq-list">
          {faqData.map((item, i) => (
            <details key={item.q} className="faq-item" open={i === 0}>
              <summary>
                <span className="faq-num">0{i + 1}</span>
                <span className="faq-q">{item.q}</span>
                <span className="faq-plus" aria-hidden="true"><Icon name="plus" strokeWidth={2} /></span>
              </summary>
              <p className="faq-body">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
