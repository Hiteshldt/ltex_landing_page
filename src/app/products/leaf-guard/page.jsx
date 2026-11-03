import Link from "next/link";
import PageIntro from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Primitives";
import { Arrow } from "@/components/ui/Icon";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";
import { pageMetadata, productLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leaf-Guard™ Edible Coating for Fresh Produce",
  description:
    "Leaf-Guard™ is a starch-based edible coating from banana pith that extends fresh-produce shelf-life by 40–60% — a drop-in for packhouse spray lines.",
  path: "/products/leaf-guard",
  image: "leaf-guard",
});

const SPECS = [["Form", "Aqueous spray"], ["Shelf-life Δ", "+40–60%"], ["Base", "Banana-pith starch"], ["Application", "Spray-on"]];

const FEATURES = [
  "Extracted from banana pith — a true zero-waste output",
  "Starch-based and completely transparent on produce",
  "Extends fresh-produce shelf-life by 40–60%",
  "Drop-in for existing packhouse spray equipment",
];

const productSchema = productLd({
  name: "Leaf-Guard™ Edible Coating",
  description: "Starch-based edible coating from banana pith that extends fresh-produce shelf-life by 40–60%.",
  path: "/products/leaf-guard",
  image: "/coating.webp",
  category: "Edible produce coating",
  material: ["Banana-pith starch"],
});

export default function LeafGuardPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <PageIntro
        crumbs={[["Home", "/"], ["Products", "/products"], ["Leaf-Guard™", "/products/leaf-guard"]]}
        eyebrow="Products · Leaf-Guard™"
        title={<>Shelf-life, <span className="green-word">extended.</span></>}
        intro="Leaf-Guard™ is our starch-based edible coating, sprayed onto fresh produce to slow ripening and cut food waste — a third revenue stream from the same banana feedstock, and a direct answer to the 33% of food that's lost or wasted."
        primary={{ href: "/contact", label: "Start a pilot" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
        aside={
          <div className="aside-media aside-media--contain">
            <img src="/coating.webp" alt="Leaf-Guard coated produce staying fresh versus uncoated" width={1200} height={1200} />
          </div>
        }
      />

      <section className="section section--stone">
        <div className="container">
          <div className="props">
            <Reveal className="card card--dark props__stat">
              <span className="label-mono">shelf-life uplift</span>
              <div className="props__k">+60%</div>
              <p>Starch-based spray from banana pith. +40–60% produce shelf-life. Drop-in for existing packhouse equipment.</p>
            </Reveal>
            <Reveal delay={100} className="card props__list">
              <span className="eyebrow">Key properties</span>
              <ul className="check-list">
                {FEATURES.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </Reveal>
          </div>
          <Reveal>
            <dl className="specs specs--boxed" style={{ "--cols": 4, marginTop: 16 }}>
              {SPECS.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </Reveal>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn-green">Start a pilot <Arrow /></Link>
            <Link href="/contact" className="btn btn-ghost">Request pricing</Link>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
