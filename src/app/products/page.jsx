import Link from "next/link";
import PageIntro from "@/components/ui/PageIntro";
import Products from "@/components/sections/Products";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "Products — Fibers, Vegan Leather & Leaf-Guard™ Coating",
  description:
    "Explore LeafTex's three product lines: high-tenacity banana, pineapple and algae fibers; premium vegan leather in five colorways; and Leaf-Guard™ edible coating. Traceable to source.",
  alternates: { canonical: "/products" },
};

const LINES = [
  {
    href: "/products/fibers",
    name: "Banana, Pineapple & Algae Fibers",
    tag: "Natural fiber",
    desc: "High-tenacity, naturally dyeable fibers upcycled from agricultural and marine waste — spinner-ready for modern textiles.",
  },
  {
    href: "/products/vegan-leather",
    name: "Vegan Leather",
    tag: "Cruelty-free",
    desc: "Premium, customizable vegan leather in five colorways — durable for fashion, footwear, and accessories.",
  },
  {
    href: "/products/leaf-guard",
    name: "Leaf-Guard™ Coating",
    tag: "Edible coating",
    desc: "A starch-based spray that extends fresh-produce shelf-life by 40–60%. Drop-in for existing packhouse equipment.",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://leaftex.bio/" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://leaftex.bio/products" },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <PageIntro
        eyebrow="Products"
        title={<>Explore our <span className="green-word">materials.</span></>}
        intro="Three product lines from one zero-waste platform — all traceable to source. Sample kits ship within five business days."
        primary={{ href: "/contact", label: "Request a sample" }}
        secondary={{ href: "/contact", label: "Request pricing" }}
      />

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="lines-grid">
            {LINES.map((l) => (
              <Link key={l.href} href={l.href} className="card outline" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 10, height: "100%" }}>
                <div className="label-mono" style={{ color: "var(--green-ink)", fontWeight: 700 }}>{l.tag}</div>
                <div className="display-s" style={{ color: "var(--ink)" }}>{l.name}</div>
                <p className="body-s" style={{ margin: 0, flex: 1 }}>{l.desc}</p>
                <span style={{ color: "var(--green-ink)", fontWeight: 700, fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  View details <span className="arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 820px){ .lines-grid{ grid-template-columns:1fr !important; } }`}</style>
      </section>

      <Products />
    </>
  );
}
