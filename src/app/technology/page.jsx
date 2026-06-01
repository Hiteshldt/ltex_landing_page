import PageIntro from "@/components/ui/PageIntro";
import Process from "@/components/sections/Process";
import Traceability from "@/components/sections/Traceability";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "Technology — Circular Process & Blockchain Traceability",
  description:
    "Inside the LeafTex platform: a zero-waste regional processing model that turns banana, pineapple, and algae waste into fibers, leather, and coating — with every batch minted on a native blockchain for provable, end-to-end traceability.",
  alternates: { canonical: "/technology" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://leaftex.bio/" },
    { "@type": "ListItem", position: 2, name: "Technology", item: "https://leaftex.bio/technology" },
  ],
};

export default function TechnologyPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <PageIntro
        eyebrow="Technology"
        title={<>From grower to fiber <span className="green-word">to soil.</span></>}
        intro="A modular, regional processing platform that minimizes wet-biomass haulage, keeps margins in-house, and lifts smallholder income — paired with a native blockchain that makes every batch auditable from farm gate to finished product."
        primary={{ href: "/contact", label: "Partner with us" }}
        secondary={{ href: "/products", label: "See the materials" }}
      />
      <Process />
      <Traceability />
      <FAQ />
    </>
  );
}
