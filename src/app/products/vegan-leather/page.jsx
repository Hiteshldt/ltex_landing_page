import Link from "next/link";
import PageIntro from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Primitives";
import SwatchGallery from "@/components/ui/SwatchGallery";
import { Arrow } from "@/components/ui/Icon";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";
import { COLORWAYS } from "@/lib/productLines";
import { pageMetadata, productLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Vegan Leather from Agricultural Waste",
  description:
    "Premium, cruelty-free vegan leather upcycled from agricultural waste — five colorways for fashion, footwear and accessories. Request a swatch.",
  path: "/products/vegan-leather",
  image: "vegan-leather",
});

// Fan of swatches for the intro: [colorway index, x offset, rotation] — outer cards first so the centre sits on top.
const FAN = [[4, "-58%", "-14deg"], [0, "58%", "14deg"], [1, "-30%", "-7deg"], [3, "30%", "7deg"], [2, "0%", "0deg"]];

const SPECS = [["Thickness", "0.8–1.4 mm"], ["Tensile", ">20 MPa"], ["Format", "Sheet & roll"], ["Grain", "Customizable"]];

const productSchema = productLd({
  name: "LeafTex Vegan Leather",
  description: "Premium cruelty-free vegan leather upcycled from agricultural waste, available in five customizable colorways.",
  path: "/products/vegan-leather",
  image: "/CaramelBrown.webp",
  category: "Vegan leather",
});

export default function VeganLeatherPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <PageIntro
        crumbs={[["Home", "/"], ["Products", "/products"], ["Vegan Leather", "/products/vegan-leather"]]}
        eyebrow="Products · Vegan Leather"
        title={<>Premium <span className="green-word">vegan</span> leather.</>}
        intro="A cruelty-free leather alternative with the supple hand and durability brands demand — and none of the chrome-tanning effluent. Customizable colorways and grains, fully traceable to source."
        primary={{ href: "/contact", label: "Request a swatch" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
        aside={
          <div className="fan" aria-hidden="true">
            {FAN.map(([idx, x, r]) => (
              <div key={idx} className="fan__card" style={{ "--x": x, "--r": r }}>
                <img src={COLORWAYS[idx].src} alt="" width={260} height={312} />
              </div>
            ))}
          </div>
        }
      />

      <section className="section section--stone">
        <div className="container">
          <Reveal className="subhead" style={{ marginBottom: 20 }}>
            <span className="eyebrow">Colorways <span style={{ opacity: 0.55 }}>— every swatch ships with full chain-of-custody data</span></span>
            <span className="count"><Link href="/contact" className="btn btn-green btn-sm">Request a swatch book <Arrow /></Link></span>
          </Reveal>
          <Reveal>
            <SwatchGallery />
          </Reveal>
          <Reveal>
            <dl className="specs specs--boxed" style={{ "--cols": 4 }}>
              {SPECS.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
      <FAQ />
    </>
  );
}
