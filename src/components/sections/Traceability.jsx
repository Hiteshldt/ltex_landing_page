"use client";
import { useState, useEffect } from "react";
import { Reveal, SectionHead } from "@/components/ui/Primitives";

const EVENTS = [
  { code: "0x4a…f29c", stage: "FARM", actor: "FPO Cluster · Coimbatore N-7", time: "T+0", note: "Biomass received · 218 kg · GPS verified" },
  { code: "0x8b…2d11", stage: "EXTRACT", actor: "Hub-02 · Pollachi", time: "T+18h", note: "Fiber extraction complete · 12.4% yield" },
  { code: "0xc7…91aa", stage: "QA", actor: "LeafTex Lab", time: "T+72h", note: "Tenacity 31.2 g/tex · approved" },
  { code: "0xe2…44b8", stage: "SHIP", actor: "Tirupur Mills · Lot 0042", time: "T+96h", note: "Bale dispatched · weight 480 kg" },
];

const TILES = [
  ["100%", "Batches on-chain"],
  ["QR", "Scan to trace"],
  ["GPS", "Origin verified"],
  ["Lot", "Full chain of custody"],
];

export default function Traceability() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActiveStep((s) => (s + 1) % EVENTS.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="traceability" className="section">
      <div className="container">
        <SectionHead
          code="Traceability"
          label="Native blockchain · live"
          title={<>Every thread tells you <span className="green-word">where</span> it came from.</>}
          subtitle="Every batch is minted on-chain with origin, lot and lifecycle data — readable with a single QR scan."
        />

        <div className="trace-grid">
          <Reveal className="ledger">
            <div className="ledger__bar">
              <span className="label-mono live"><span className="live-dot" /> Live ledger</span>
              <span className="label-mono">Batch #LFTX—0042</span>
            </div>
            <div className="ledger__rows">
              {EVENTS.map((e, i) => (
                <div
                  key={e.code}
                  className={`ledger__row ${i === activeStep ? "is-active" : ""} ${i < activeStep ? "is-past" : ""}`}
                >
                  <span className="ledger__dot" />
                  <span className="ledger__stage">{e.stage}</span>
                  <div>
                    <div className="ledger__actor">{e.actor}</div>
                    <div className="ledger__note">{e.note}</div>
                  </div>
                  <span className="ledger__time">{e.time}</span>
                </div>
              ))}
            </div>
            <div className="ledger__foot">
              <span>TX HASH</span>
              <span className="ledger__hash" key={activeStep}>{EVENTS[activeStep].code}</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="trace-side">
            <div className="trace-tiles">
              {TILES.map(([k, v]) => (
                <div key={v} className="card trace-tile">
                  <strong>{k}</strong>
                  <span className="label-mono">{v}</span>
                </div>
              ))}
            </div>
            <div className="card trace-why">
              <span className="label-mono">Why brands ask for this</span>
              <p>
                Buyers increasingly want provable origin — not a marketing line. With LeafTex, your sustainability
                story is auditable down to a specific farmer cooperative.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
