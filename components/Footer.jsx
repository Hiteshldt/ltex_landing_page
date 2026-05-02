function Footer() {
  return (
    <footer id="contact" style={{ background: "var(--dark)", color: "#fff", paddingTop: 100, paddingBottom: 40 }}>
      <div className="brand-strip" />
      <div className="container" style={{ paddingTop: 40 }}>
        <Reveal>
          <h2 className="display-xl" style={{ margin: 0, color: "#fff", maxWidth: "14ch" }}>
            Trace your<br />
            <span className="green-word">thread.</span>
          </h2>
        </Reveal>

        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, paddingTop: 40, borderTop: "1px solid #1f242c" }} className="ftr-grid">
          <div>
            <div className="label-mono" style={{ color: "var(--green)", fontWeight: 700 }}>Partner with us</div>
            <p className="body-l" style={{ color: "#c9d3dc", marginTop: 14, maxWidth: "36ch" }}>
              Sample kits available for spinners, brands, packhouses, and packagers. We'll send you a swatch book within five business days.
            </p>
            <a href="mailto:founders@leaftex.bio" className="btn btn-green" style={{ marginTop: 20 }}>
              Request a sample <span className="arrow">→</span>
            </a>
          </div>

          <FtrCol title="Materials" items={["Banana Fiber", "Banana Leather", "Leaf-Guard™ Coating", "Sample Library"]} />
          <FtrCol title="Platform" items={["Traceability", "ESG Dashboard", "Compliance Reports", "LCA Data Room"]} />
          <FtrCol title="Company" items={["Founders' Note", "Press Kit", "Careers", "Contact"]} />
        </div>

        <div style={{ marginTop: 80, paddingTop: 24, borderTop: "1px solid #1f242c", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <Wordmark size={20} dark />
          <div style={{ display: "flex", gap: 24, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9aa3ad", flexWrap: "wrap" }}>
            <a href="mailto:founders@leaftex.bio" style={{ textDecoration: "none", color: "inherit" }}>founders@leaftex.bio</a>
            <a href="tel:+919353142107" style={{ textDecoration: "none", color: "inherit" }}>+91 93531 42107</a>
            <span>www.leaftex.bio</span>
          </div>
        </div>

        <div style={{ marginTop: 28, fontFamily: "var(--mono)", fontSize: 10, color: "#5b6470", letterSpacing: "0.08em" }}>
          © 2026 LEAFTEX BIO PVT LTD · ALL RIGHTS RESERVED · MADE IN COIMBATORE
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .ftr-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 600px) { .ftr-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

function FtrCol({ title, items }) {
  return (
    <div>
      <div className="label-mono" style={{ color: "var(--green)", fontWeight: 700 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((it) => (
          <li key={it}>
            <a href="#" style={{ color: "#c9d3dc", textDecoration: "none", fontSize: 14 }}>{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

window.Footer = Footer;
