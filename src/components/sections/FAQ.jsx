import { SectionHead } from "@/components/ui/Primitives";

export const faqData = [
  {
    q: "What feedstock does LeafTex use?",
    a: "We upcycle three streams of agricultural and marine waste: banana pseudostem (post-harvest stems from banana FPOs), pineapple leaf waste, and responsibly-harvested macro-algae. All three are residues that would otherwise be burned, discarded, or left to rot.",
  },
  {
    q: "What products do you make, and how are they related?",
    a: "One integrated platform yields three commercial outputs: high-tenacity natural fibers (banana, pineapple, algae), premium cruelty-free vegan leather, and Leaf-Guard™, a starch-based edible coating that extends produce shelf-life by 40–60%. Diversifying outputs hedges market cycles and pushes feedstock utilization to 100%.",
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

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <SectionHead
          code="FAQ"
          label="Common questions answered"
          title={<>Frequently asked <span className="green-word">questions.</span></>}
        />
        <div style={{ maxWidth: 880 }}>
          {faqData.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                <span>{item.q}</span>
                <span className="faq-plus" aria-hidden="true">+</span>
              </summary>
              <p className="body-l faq-body" style={{ margin: 0 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
