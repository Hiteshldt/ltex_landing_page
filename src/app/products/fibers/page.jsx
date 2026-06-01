import PageIntro from "@/components/ui/PageIntro";
import Platform from "@/components/sections/Platform";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "Banana, Pineapple & Algae Fibers",
  description:
    "High-tenacity natural fibers upcycled from banana pseudostem, pineapple leaf, and macro-algae. Naturally dyeable, spinner-ready, and traceable to source. Request a sample from LeafTex.",
  alternates: { canonical: "/products/fibers" },
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LeafTex Natural Fibers (Banana, Pineapple, Algae)",
  description:
    "High-tenacity, naturally dyeable natural fibers upcycled from banana pseudostem, pineapple leaf, and responsibly-harvested macro-algae.",
  brand: { "@type": "Brand", name: "LeafTex" },
  category: "Natural textile fiber",
  material: ["Banana pseudostem", "Pineapple leaf", "Macro-algae"],
};

export default function FibersPage() {
  return (
    <>
      <JsonLd data={productLd} />
      <PageIntro
        eyebrow="Products · Fibers"
        title={<>High-tenacity <span className="green-word">natural fibers.</span></>}
        intro="Three sustainable fibers from one platform — banana pseudostem, pineapple leaf (piña), and marine macro-algae. Mechanically extracted, degummed, and combed into spinner-ready material that completely replaces synthetics."
        primary={{ href: "/contact", label: "Request a sample" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
      />
      <Platform />
      <FAQ />
    </>
  );
}
