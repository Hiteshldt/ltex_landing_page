"use client";
import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Primitives";
import Icon, { Arrow } from "@/components/ui/Icon";

const PRODUCTS = [
  {
    id: "banana",
    code: "P—01",
    name: "Banana Fiber",
    tag: "High-tenacity pseudostem",
    src: "/fiber.webp",
    alt: "Hank of cream banana fiber yarn",
    bullets: [
      "Mechanically extracted and degummed",
      "High tensile strength & naturally dyeable",
      "Ready for modern textile spinners",
    ],
    spec: [["Tenacity", "29.98 g/tex"], ["Length", "1.5–3.0 m"], ["Moisture", "10–12%"]],
  },
  {
    id: "pineapple",
    code: "P—02",
    name: "Pineapple Fiber",
    tag: "Silky piña leaf-extracted",
    src: "/pineapple-fiber.webp",
    alt: "Fine, lustrous pineapple (piña) fiber hank",
    bullets: [
      "Extracted from post-harvest pineapple leaves",
      "Fine denier with soft hand feel and premium lustre",
      "Ideal for luxury apparel blends & nonwovens",
    ],
    spec: [["Fineness", "~3–5 µm"], ["Length", "60–120 cm"], ["Lustre", "High"]],
  },
  {
    id: "algae",
    code: "P—03",
    name: "Algae Leather",
    tag: "Bio-engineered marine seaweed",
    src: "/algae-leather.webp",
    alt: "Roll of sage-green algae leather",
    bullets: [
      "Cast from responsibly-harvested macro-algae",
      "Supple hand, naturally anti-microbial & flame-retardant",
      "100% biodegradable with a soft, skin-soothing finish",
    ],
    spec: [["Source", "Macro-algae"], ["Thickness", "0.8–1.4 mm"], ["Property", "Biodegradable"]],
  },
];

// Product showcase: heading and material tabs on the left, the selected material on the right.
export default function Platform({
  productIds = ["banana", "pineapple", "algae"],
  id = "platform",
  className = "",
  code = "Platform",
  label = "Fibers & vegan leather",
  title = (
    <>
      A biomaterials platform — <span className="green-word">three</span> sustainable materials.
    </>
  ),
  subtitle = "Banana stems, pineapple leaves and macro-algae — upcycled into high-tenacity fibers and supple, biodegradable leather.",
}) {
  const products = PRODUCTS.filter((p) => productIds.includes(p.id));
  const [active, setActive] = useState(0);

  return (
    <section id={id} className={`section ${className}`}>
      <div className="container showcase">
        <Reveal className="showcase__intro">
          <span className="eyebrow">{code} <span style={{ opacity: 0.55 }}>— {label}</span></span>
          <h2 className="display-l">{title}</h2>
          <p className="lead">{subtitle}</p>
          <div className="showcase__tabs" role="tablist" aria-label="Materials">
            {products.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`${id}-tab-${p.id}`}
                aria-selected={active === i}
                aria-controls={`${id}-panel-${p.id}`}
                className={`showcase__tab ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="showcase__thumb"><img src={p.src} alt="" loading="lazy" /></span>
                <span>
                  <small>{p.code} · {p.tag}</small>
                  <b>{p.name}</b>
                </span>
                <Icon name="arrow-right" strokeWidth={2} />
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          {products.map((p, i) => (
            <article
              key={p.id}
              id={`${id}-panel-${p.id}`}
              role="tabpanel"
              aria-labelledby={`${id}-tab-${p.id}`}
              hidden={active !== i}
              className="card card--flush showcase__panel"
            >
              <div className="media">
                <img src={p.src} alt={p.alt} loading="lazy" width={1400} height={1050} />
                <span className="tag">{p.code}</span>
              </div>
              <div className="showcase__body">
                <div>
                  <div className="product-card__tag">{p.tag}</div>
                  <h3 className="display-m">{p.name}</h3>
                </div>
                <ul className="check-list">
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <dl className="specs">
                  {p.spec.map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
                <Link href="/contact" className="btn btn-green btn-sm">Request pricing <Arrow /></Link>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
