"use client";

export default function Marquee() {
  const items = [
    "Farm to Fashion",
    "Trace your thread",
    "Banana, pineapple & algae",
    "100% waste upcycling",
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
            <span
              style={{
                fontFamily: "var(--display)",
                fontSize: 22,
                fontWeight: 800,
                whiteSpace: "nowrap",
                letterSpacing: "-0.02em",
              }}
            >
              {t}
            </span>
            <span
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
