import Link from "next/link";
import PageIntro from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Primitives";
import { Arrow } from "@/components/ui/Icon";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";
import { pageMetadata, productLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Algae Leather — Biodegradable Vegan Leather",
  description:
    "Supple, 100% biodegradable vegan leather cast from macro-algae — naturally anti-microbial and flame-retardant. Request a swatch from LeafTex.",
  path: "/products/algae-leather",
  image: "algae-leather",
});

const SPECS = [["Source", "Macro-algae"], ["Thickness", "0.8–1.4 mm"], ["Finish", "Supple matte"], ["Property", "Biodegradable"]];

const FEATURES = [
  "Cast from responsibly-harvested marine macro-algae",
  "Supple hand — naturally anti-microbial and flame-retardant",
  "100% biodegradable with a soft, skin-soothing finish",
  "Customizable for fashion, footwear, and accessories",
];

const productSchema = productLd({
  name: "LeafTex Algae Leather",
  description: "Supple, biodegradable vegan leather cast from responsibly-harvested macro-algae — naturally anti-microbial and flame-retardant.",
  path: "/products/algae-leather",
  image: "/algae-leather.webp",
  category: "Vegan leather",
  material: ["Macro-algae"],
});

export default function AlgaeLeatherPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <PageIntro
        crumbs={[["Home", "/"], ["Products", "/products"], ["Algae Leather", "/products/algae-leather"]]}
        eyebrow="Products · Algae Leather"
        title={<>Leather, grown from <span className="green-word">the sea.</span></>}
        intro="Algae Leather is our marine-based vegan leather — cast from responsibly-harvested macro-algae into a supple, fully biodegradable material. It turns blooms that choke coastal ecosystems into a premium, cruelty-free alternative to animal hide."
        primary={{ href: "/contact", label: "Request a swatch" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
        aside={
          <div className="aside-media">
            <img src="/algae-leather.webp" alt="Roll of sage-green algae leather with a fine pebbled grain" width={1200} height={1200} />
          </div>
        }
      />

      <section className="section section--stone">
        <div className="container">
          <div className="props">
            <Reveal className="card card--dark props__stat">
              <span className="label-mono">biodegradable</span>
              <div className="props__k">100%</div>
              <p>Supple marine vegan leather cast from responsibly-harvested macro-algae. Naturally anti-microbial and flame-retardant.</p>
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
            <Link href="/contact" className="btn btn-green">Request a swatch <Arrow /></Link>
            <Link href="/contact" className="btn btn-ghost">Request pricing</Link>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
