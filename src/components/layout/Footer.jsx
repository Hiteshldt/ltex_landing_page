"use client";
import Link from "next/link";
import { Reveal, Wordmark } from "@/components/ui/Primitives";

function FtrCol({ title, items }) {
  return (
    <div>
      <div className="label-mono" style={{ color: "var(--green)", fontWeight: 700 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} style={{ color: "#c9d3dc", textDecoration: "none", fontSize: 14 }}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "#fff", paddingTop: 96, paddingBottom: 40 }}>
      <div className="brand-strip" />
      <div className="container" style={{ paddingTop: 40 }}>
        <Reveal>
          <h2 className="display-xl" style={{ margin: 0, color: "#fff", maxWidth: "14ch" }}>
            Trace your<br />
            <span className="green-word">thread.</span>
          </h2>
        </Reveal>

        <div
          className="ftr-grid"
          style={{ marginTop: 52, display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40, paddingTop: 40, borderTop: "1px solid #1f242c" }}
        >
          <div>
            <Wordmark size={22} dark />
            <p className="body" style={{ color: "#c9d3dc", marginTop: 14, maxWidth: "34ch" }}>
              Biomaterials platform upcycling banana, pineapple, and algae waste into premium fibers,
              vegan leather, and edible coatings — with native blockchain traceability.
            </p>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--mono)", fontSize: 12, color: "#9aa3ad" }}>
              <a href="mailto:founders@leaftex.bio" style={{ color: "#c9d3dc", textDecoration: "none" }}>founders@leaftex.bio</a>
              <a href="tel:+919353142107" style={{ color: "#c9d3dc", textDecoration: "none" }}>+91 93531 42107</a>
              <span>Coimbatore, Tamil Nadu</span>
              <span>India — 641020</span>
            </div>
            <Link href="/contact" className="btn btn-green" style={{ marginTop: 20 }}>
              Partner with us <span className="arrow">→</span>
            </Link>
          </div>

          <FtrCol title="Company" items={[["Home", "/"], ["Technology", "/technology"], ["About Us", "/about"]]} />
          <FtrCol title="Products" items={[["Banana, Pineapple & Algae Fibers", "/products/fibers"], ["Vegan Leather", "/products/vegan-leather"], ["Leaf-Guard™ Coating", "/products/leaf-guard"]]} />
          <FtrCol title="Resources" items={[["Traceability", "/technology"], ["Request a Sample", "/contact"], ["Privacy Policy", "/contact"]]} />
        </div>

        <div style={{ marginTop: 72, paddingTop: 24, borderTop: "1px solid #1f242c", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#5b6470", letterSpacing: "0.08em" }}>
            © 2026 LEAFTEX BIO PVT LTD · ALL RIGHTS RESERVED · COIMBATORE, TAMIL NADU, INDIA 641020
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .ftr-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 600px) { .ftr-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
