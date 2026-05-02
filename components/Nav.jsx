function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 60,
    transition: "background 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease, box-shadow 220ms ease",
    background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
    borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
  };

  return (
    <>
      <div className="brand-strip" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 70 }} />
      <nav style={{ ...navStyle, top: 4 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a href="#top" style={{ display: "inline-flex", alignItems: "baseline", textDecoration: "none" }}>
            <Wordmark size={22} />
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-links">
            {[
              ["Platform", "#platform"],
              ["Products", "#products"],
              ["Process", "#process"],
              ["Traceability", "#traceability"],
              ["Team", "#team"],
            ].map(([label, href]) => (
              <a key={href} href={href} style={{
                fontFamily: "var(--sans)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--ink-2)",
                textDecoration: "none",
              }}>{label}</a>
            ))}
          </div>

          <a href="#contact" className="btn btn-green" style={{ padding: "10px 18px", fontSize: 13 }}>
            Partner with us
            <span className="arrow">→</span>
          </a>
        </div>
        <style>{`
          @media (max-width: 900px) { .nav-links { display: none !important; } }
        `}</style>
      </nav>
    </>
  );
}

window.Nav = Nav;
