import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Problem from "@/components/sections/Problem";
import Advantage from "@/components/sections/Advantage";
import Platform from "@/components/sections/Platform";
import Impact from "@/components/sections/Impact";
import FAQ, { faqData } from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "LeafTex — Farm to Fashion. Trace your thread.",
  description:
    "LeafTex upcycles banana, pineapple, and algae agricultural waste into premium sustainable fibers, vegan leather, and Leaf-Guard™ edible coating — with native blockchain traceability. Pilot active in Coimbatore.",
  alternates: { canonical: "/" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqLd} />
      <Hero />
      <Marquee />
      <Problem />
      <Advantage />
      <Platform />
      <Impact />
      <FAQ />
    </>
  );
}
