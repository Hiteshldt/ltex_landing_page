import Link from "next/link";
import { Reveal, Wordmark } from "@/components/ui/Primitives";
import { Arrow } from "@/components/ui/Icon";
import { PRODUCT_LINES } from "@/lib/productLines";

function FtrCol({ title, items }) {
  return (
    <div className="footer-col">
      <h3>{title}</h3>
      <ul>
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="footer-cta">
          <h2>
            Trace your<br />
            <span className="green-word">thread.</span>
          </h2>
          <div>
            <p>
              Tell us about your application — spinning, fashion, packhouse, or packaging. Sample kits
              ship within five business days.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-green">
                Partner with us <Arrow />
              </Link>
              <Link href="/products" className="btn btn-ghost-dark">
                Explore materials
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="footer-grid">
          <div className="footer-brand">
            <Wordmark size={22} dark />
            <p>
              Biomaterials platform upcycling banana, pineapple, and algae waste into premium fibers,
              vegan leather, and edible coatings — with native blockchain traceability.
            </p>
            <div className="footer-contact">
              <a href="mailto:founders@leaftex.bio">founders@leaftex.bio</a>
              <a href="tel:+919353142107">+91 93531 42107</a>
              <span>Coimbatore, Tamil Nadu, India — 641020</span>
            </div>
          </div>

          <FtrCol title="Company" items={[["Home", "/"], ["Technology", "/technology"], ["About Us", "/about"], ["Contact", "/contact"]]} />
          <FtrCol title="Products" items={PRODUCT_LINES.map((p) => [p.name, p.href])} />
          <FtrCol title="Resources" items={[["Traceability", "/technology"], ["Request a Sample", "/contact"], ["Privacy Policy", "/contact"]]} />
        </div>

        <div className="footer-bottom">
          <span>© 2026 LeafTex Bio Pvt Ltd · All rights reserved</span>
          <span>Farm to Fashion — made in Coimbatore, India</span>
        </div>
      </div>
      <div className="footer-mark" aria-hidden="true">leaftex</div>
    </footer>
  );
}
