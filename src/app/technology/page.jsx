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
        title={<>How LeafTex <span className="green-word">works.</span></>}
        intro="Two systems power the platform: a zero-waste regional processing model that turns crop and marine waste into finished product, and a native blockchain that proves where every batch came from."
        primary={{ href: "/contact", label: "Partner with us" }}
        secondary={{ href: "/products", label: "See the materials" }}
      />
      <Process />
      <Traceability />
      <FAQ />
    </>
  );
}
