import PageIntro from "@/components/ui/PageIntro";
import Platform from "@/components/sections/Platform";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";
import { pageMetadata, productLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Banana & Pineapple Fiber for Textiles",
  description:
    "High-tenacity natural fibers upcycled from banana pseudostem and pineapple leaf — naturally dyeable, spinner-ready and traceable to source.",
  path: "/products/fibers",
  image: "fibers",
});

const COMPARE = [
  ["Source", "Pseudostem · Degummed", "Piña · Leaf-extracted"],
  ["Key spec", "Tenacity 29.98 g/tex", "Fineness ~3–5 µm"],
  ["Length", "1.5–3.0 m", "60–120 cm"],
  ["Best for", "Modern textile spinners", "Luxury apparel blends & nonwovens"],
];

const productSchema = productLd({
  name: "LeafTex Natural Fibers (Banana, Pineapple)",
  description: "High-tenacity, naturally dyeable natural fibers upcycled from banana pseudostem and pineapple leaf.",
  path: "/products/fibers",
  image: "/fiber.webp",
  category: "Natural textile fiber",
  material: ["Banana pseudostem", "Pineapple leaf"],
});

export default function FibersPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <PageIntro
        crumbs={[["Home", "/"], ["Products", "/products"], ["Fibers", "/products/fibers"]]}
        eyebrow="Products · Fibers"
        title={<>High-tenacity <span className="green-word">natural fibers.</span></>}
        intro="Two sustainable fibers from one platform — banana pseudostem and pineapple leaf (piña). Mechanically extracted, degummed, and combed into spinner-ready material that completely replaces synthetics."
        primary={{ href: "/contact", label: "Request a sample" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
        aside={
          <div className="card compare">
            <table>
              <thead>
                <tr><th scope="col">At a glance</th><th scope="col">Banana</th><th scope="col">Pineapple</th></tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, a, b]) => (
                  <tr key={k}><th scope="row">{k}</th><td>{a}</td><td>{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      />
      <Platform
        productIds={["banana", "pineapple"]}
        className="section--stone"
        code="Fibers"
        label="Two natural fibers"
        title={<>Spinner-ready, <span className="green-word">naturally.</span></>}
        subtitle="Mechanically extracted and degummed — no harsh chemistry. Banana pseudostem brings high tensile strength; pineapple piña adds fine denier and lustre for premium blends."
      />
      <FAQ />
    </>
  );
}
