import Link from "next/link";
import PageIntro from "@/components/ui/PageIntro";
import Products from "@/components/sections/Products";
import { Reveal } from "@/components/ui/Primitives";
import Icon, { Arrow } from "@/components/ui/Icon";
import { PRODUCT_LINES } from "@/lib/productLines";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sustainable Materials: Fibers, Leathers & Coatings",
  description:
    "Banana & pineapple fibers, vegan leather in five colorways, biodegradable algae leather and Leaf-Guard™ edible coating — all traceable to source.",
  path: "/products",
  image: "products",
});


export default function ProductsPage() {
  return (
    <>
      <PageIntro
        crumbs={[["Home", "/"], ["Products", "/products"]]}
        eyebrow="Products"
        title={<>Explore our <span className="green-word">materials.</span></>}
        aside={
          <div className="intro-side">
            <p className="lead">
              Four product lines from one zero-waste platform — all traceable to source. Sample kits ship within five business days.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-green">Request a sample <Arrow /></Link>
              <Link href="/contact" className="btn btn-ghost">Request pricing</Link>
            </div>
          </div>
        }
      >
        <div className="grid-4 m-scroll" style={{ "--m-w": "72%" }}>
          {PRODUCT_LINES.map((l, i) => (
            <Reveal key={l.href} delay={i * 90}>
              <Link href={l.href} className="card card--flush card--hover line-card">
                <div className="media">
                  <img src={l.img} alt="" loading="lazy" />
                  <span className="tag">{String(i + 1).padStart(2, "0")} / 04</span>
                </div>
                <div className="line-card__body">
                  <div className="product-card__tag">{l.tag}</div>
                  <h2 className="display-s">{l.name}</h2>
                  <p className="body-s">{l.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
                    <span style={{ fontWeight: 600, fontSize: 14.5 }}>View details</span>
                    <span className="line-card__go"><Icon name="arrow-right" strokeWidth={2} /></span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </PageIntro>

      <Products />
    </>
  );
}
