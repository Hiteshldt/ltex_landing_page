import PageIntro from "@/components/ui/PageIntro";
import Platform from "@/components/sections/Platform";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "Banana & Pineapple Fibers",
  description:
    "High-tenacity natural fibers upcycled from banana pseudostem and pineapple leaf. Naturally dyeable, spinner-ready, and traceable to source. Request a sample from LeafTex.",
  alternates: { canonical: "/products/fibers" },
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LeafTex Natural Fibers (Banana, Pineapple)",
  description:
    "High-tenacity, naturally dyeable natural fibers upcycled from banana pseudostem and pineapple leaf.",
  brand: { "@type": "Brand", name: "LeafTex" },
  category: "Natural textile fiber",
  material: ["Banana pseudostem", "Pineapple leaf"],
};

export default function FibersPage() {
  return (
    <>
      <JsonLd data={productLd} />
      <PageIntro
        eyebrow="Products · Fibers"
        title={<>High-tenacity <span className="green-word">natural fibers.</span></>}
        intro="Two sustainable fibers from one platform — banana pseudostem and pineapple leaf (piña). Mechanically extracted, degummed, and combed into spinner-ready material that completely replaces synthetics."
        primary={{ href: "/contact", label: "Request a sample" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
      />
      <Platform
        productIds={["banana", "pineapple"]}
        background="transparent"
        code="Fibers"
        label="Two natural fibers"
        title={<>Spinner-ready, <span className="green-word">naturally.</span></>}
        subtitle="Mechanically extracted and degummed — no harsh chemistry. Banana pseudostem brings high tensile strength; pineapple piña adds fine denier and lustre for premium blends."
      />
      <FAQ />
    </>
  );
}
