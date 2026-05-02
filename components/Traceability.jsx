function Traceability() {
  const [activeStep, setActiveStep] = React.useState(0);
  const events = [
    { code: "0x4a…f29c", stage: "FARM", actor: "FPO Cluster · Coimbatore N-7", time: "T+0", note: "Stem received · 218 kg · GPS verified" },
    { code: "0x8b…2d11", stage: "EXTRACT", actor: "Hub-02 · Pollachi", time: "T+18h", note: "Decortication complete · 11.2% yield" },
    { code: "0xc7…91aa", stage: "QA", actor: "LeafTex Lab", time: "T+72h", note: "Tenacity 31.2 g/tex · approved" },
    { code: "0xe2…44b8", stage: "SHIP", actor: "Tirupur Mills · Lot 0042", time: "T+96h", note: "Bale dispatched · weight 480 kg" },
  ];

  React.useEffect(() => {
    const id = setInterval(() => setActiveStep((s) => (s + 1) % events.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="traceability">
      <div className="container">
        <SectionHead
          code="05 / Traceability"
          label="Native blockchain · live"
          title={<>Every thread tells you <span className="green-word">where</span> it came from.</>}
          subtitle="LeafTex is a chain-of-custody platform first, a materials company second. Every batch is minted on-chain with origin, lot, and lifecycle data — readable by your QR-scanning customer or your compliance officer."
        />

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 28, alignItems: "stretch" }} className="trace-grid">
          <Reveal>
            <div className="card dark" style={{ padding: 0, overflow: "hidden", height: "100%" }}>
              <div style={{ padding: "16px 24px", borderBottom: "1px solid #1f242c", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="label-mono" style={{ color: "var(--green)", fontWeight: 700 }}>● LIVE LEDGER</div>
                <div className="label-mono" style={{ color: "#9aa3ad" }}>BATCH #LFTX—0042</div>
              </div>
              <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                {events.map((e, i) => {
                  const active = i === activeStep;
                  const past = i < activeStep;
                  return (
                    <div key={e.code} style={{
                      display: "grid",
                      gridTemplateColumns: "20px 80px 1fr auto",
                      gap: 16,
                      alignItems: "center",
                      padding: "12px 14px",
                      borderRadius: 8,
                      background: active ? "rgba(24,194,90,0.10)" : "transparent",
                      border: active ? "1px solid rgba(24,194,90,0.55)" : "1px solid transparent",
                      transition: "all 320ms ease",
                      opacity: past ? 0.5 : 1,
                    }}>
                      <span style={{
                        width: 8, height: 8, borderRadius: "50%",
                        background: active ? "var(--green)" : "#3a4250",
                        boxShadow: active ? "0 0 0 5px rgba(24,194,90,0.22)" : "none",
                        transition: "all 320ms ease",
                      }} />
                      <span className="label-mono" style={{ color: "var(--green)", fontWeight: 700 }}>{e.stage}</span>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "#fff" }}>
                        {e.actor}
                        <div style={{ color: "#9aa3ad", marginTop: 2 }}>{e.note}</div>
                      </div>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#9aa3ad" }}>{e.time}</span>
                    </div>
                  );
                })}
              </div>
              <div style={{ padding: "16px 24px", borderTop: "1px solid #1f242c", display: "flex", justifyContent: "space-between" }}>
                <span className="label-mono" style={{ color: "#9aa3ad" }}>TX HASH</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#fff" }}>{events[activeStep].code}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="col gap-24" style={{ height: "100%" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  ["100%", "Digital traceability"],
                  ["MRV", "Reporting compliant"],
                  ["GAP", "Good Ag practices"],
                  ["LCA", "Cradle-to-gate ready"],
                ].map(([k, v]) => (
                  <div key={v} className="card outline" style={{ padding: "20px 18px" }}>
                    <div className="display-s" style={{ color: "var(--green-ink)" }}>{k}</div>
                    <div className="label-mono" style={{ marginTop: 8 }}>{v}</div>
                  </div>
                ))}
              </div>
              <div className="card" style={{ flex: 1 }}>
                <div className="label-mono" style={{ color: "var(--green-ink)" }}>Why brands ask for this</div>
                <p className="body" style={{ marginTop: 12, marginBottom: 0 }}>
                  EU CSRD, the FTC Green Guides, and consumer-facing scope-3 reporting now demand provable origin claims. With LeafTex, your sustainability story is auditable down to a specific farmer cooperative — not a marketing line.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .trace-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

window.Traceability = Traceability;
