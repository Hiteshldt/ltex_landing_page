import Link from "next/link";

// Shared top-of-page header for the inner routes.
export default function PageIntro({ eyebrow, title, intro, primary, secondary }) {
  return (
    <header style={{ position: "relative", paddingTop: 128, paddingBottom: 8 }}>
      <div
        style={{
          position: "absolute", top: -80, right: -120, width: 480, height: 480,
          background: "radial-gradient(circle, rgba(24,194,90,0.16) 0%, rgba(24,194,90,0) 60%)",
          pointerEvents: "none", zIndex: 0,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {eyebrow && <span className="label-mono" style={{ color: "var(--green-ink)", fontWeight: 700 }}>{eyebrow}</span>}
        <h1 className="display-xl" style={{ margin: "14px 0 0", maxWidth: "18ch" }}>{title}</h1>
        {intro && <p className="body-l" style={{ marginTop: 22, maxWidth: "60ch" }}>{intro}</p>}
        {(primary || secondary) && (
          <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
            {primary && <Link href={primary.href} className="btn btn-green">{primary.label} <span className="arrow">→</span></Link>}
            {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
          </div>
        )}
      </div>
    </header>
  );
}
