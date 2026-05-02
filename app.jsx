function SideRail() {
  const [active, setActive] = React.useState("top");
  React.useEffect(() => {
    const ids = ["top", "problem", "platform", "products", "process", "traceability", "impact", "team", "contact"];
    const onScroll = () => {
      let cur = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    ["00", "Intro", "top"],
    ["01", "Problem", "problem"],
    ["02", "Platform", "platform"],
    ["03", "Products", "products"],
    ["04", "Process", "process"],
    ["05", "Trace", "traceability"],
    ["06", "Impact", "impact"],
    ["07", "Team", "team"],
  ];
  return (
    <div className="side-rail">
      {items.map(([n, label, id]) => (
        <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
          <span style={{ minWidth: 18 }}>{n}</span>
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

function Marquee() {
  const items = [
    "Farm to Fashion",
    "Trace your thread",
    "100% pith utilization",
    "Native blockchain",
    "Made in Coimbatore",
    "Zero waste",
    "Biomaterials platform",
  ];
  const all = [...items, ...items, ...items];
  return (
    <div style={{ background: "var(--green)", color: "#fff", overflow: "hidden", padding: "16px 0" }}>
      <div className="marquee">
        {all.map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 28, paddingRight: 28 }}>
            <span style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 800, whiteSpace: "nowrap", letterSpacing: "-0.02em" }}>{t}</span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Nav />
      <SideRail />
      <Hero />
      <Marquee />
      <Problem />
      <Platform />
      <Products />
      <Process />
      <Traceability />
      <Impact />
      <Team />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
