"use client";
import { useState } from "react";
import { COLORWAYS } from "@/lib/productLines";

// Expanding colorway panels — hover or tap a swatch to open it.
export default function SwatchGallery() {
  const [active, setActive] = useState(0);
  return (
    <div className="gallery">
      {COLORWAYS.map((c, i) => (
        <button
          key={c.name}
          type="button"
          className={`gallery__panel ${active === i ? "is-active" : ""}`}
          style={{ "--c": c.hex }}
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
          onClick={() => setActive(i)}
          aria-pressed={active === i}
          aria-label={`${c.name} — ${c.desc}`}
        >
          <img src={c.src} alt="" loading="lazy" width={260} height={312} />
          <span className="tag gallery__num">{String(i + 1).padStart(2, "0")} / 05</span>
          <span className="gallery__mini" aria-hidden="true">{c.name}</span>
          <span className="gallery__cap" aria-hidden="true">
            <strong>{c.name}</strong>
            <span>{c.desc}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
