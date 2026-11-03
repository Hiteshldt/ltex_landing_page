import Link from "next/link";
import { Reveal, SectionHead } from "@/components/ui/Primitives";
import { Arrow } from "@/components/ui/Icon";
import { COLORWAYS } from "@/lib/productLines";

const FIBERS = [
  {
    name: "Banana Fiber",
    src: "/fiber.webp",
    tag: "Pseudostem · Degummed",
    specs: [["Tenacity", "29.98 g/tex"], ["Length", "1.5–3.0 m"], ["Moisture", "10–12%"]],
    desc: "Mechanically extracted from outer sheath. High tensile strength, naturally dyeable, spinner-ready.",
  },
  {
    name: "Pineapple Fiber",
    src: "/pineapple-fiber.webp",
    tag: "Piña · Leaf-extracted",
    specs: [["Fineness", "~3–5 µm"], ["Length", "60–120 cm"], ["Lustre", "High"]],
    desc: "Extracted from pineapple leaf waste. Silky lustre and fine hand — ideal for luxury textiles and nonwovens.",
  },
];

export default function Products() {
  return (
    <>
      <section id="products" className="section section--stone">
        <div className="container">
          <SectionHead
            code="Products"
            label="Material library"
            title={<>Premium materials, made <span className="green-word">to spec.</span></>}
            subtitle="Banana and pineapple fibers, plus vegan and algae leathers — all traceable to source. Every swatch ships with full chain-of-custody data. Sample kits ship within five business days."
          />

          <div className="subhead">
            <span className="eyebrow">Fiber types</span>
            <span className="label-mono count">02 variants</span>
          </div>
          <div className="grid-2 m-scroll" style={{ marginBottom: 0, "--m-w": "86%" }}>
            {FIBERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <article className="card card--flush card--hover fiber-row">
                  <div className="media">
                    <img src={f.src} alt={f.name} loading="lazy" width={1400} height={1050} />
                    <span className="tag">F{String(i + 1).padStart(2, "0")} / 02</span>
                  </div>
                  <div className="fiber-row__body">
                    <div>
                      <div className="product-card__tag">{f.tag}</div>
                      <h3 className="display-s" style={{ marginTop: 8 }}>{f.name}</h3>
                    </div>
                    <p className="body-s">{f.desc}</p>
                    <dl className="specs">
                      {f.specs.map(([k, v]) => (
                        <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="colorways" className="section section--stone">
        <div className="container">
          <div className="subhead">
            <span className="eyebrow">Leather colorways</span>
            <span className="label-mono count">05 colorways</span>
          </div>
          <div className="swatches m-scroll" style={{ "--m-w": "46%" }}>
            {COLORWAYS.map((c, i) => (
              <Reveal key={c.name} delay={i * 70}>
                <Link href="/products/vegan-leather" className="card card--flush card--hover swatch">
                  <div className="media" style={{ background: c.hex }}>
                    <img src={c.src} alt={`${c.name} vegan leather swatch`} loading="lazy" width={260} height={312} />
                    <span className="tag">{String(i + 1).padStart(2, "0")} / 05</span>
                  </div>
                  <div className="swatch__body">
                    <div className="swatch__name"><span className="swatch__dot" style={{ background: c.hex }} />{c.name}</div>
                    <p className="body-s">{c.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="grid-2">
            <Reveal>
              <div className="card callout">
                <div className="callout__top">
                  <div>
                    <div className="callout__k">100%</div>
                    <div className="label-mono" style={{ marginTop: 8 }}>Biodegradable</div>
                  </div>
                  <div className="callout__thumb"><img src="/algae-leather.webp" alt="" loading="lazy" /></div>
                </div>
                <div>
                  <h3>Algae <span className="green-word">Leather</span></h3>
                  <p className="body-s">
                    Supple marine vegan leather cast from responsibly-harvested macro-algae. Naturally anti-microbial and flame-retardant.
                  </p>
                </div>
                <Link href="/products/algae-leather" className="btn btn-ghost btn-sm">View details <Arrow /></Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card card--dark callout">
                <div className="callout__top">
                  <div>
                    <div className="callout__k">+60%</div>
                    <div className="label-mono" style={{ marginTop: 8 }}>Shelf life</div>
                  </div>
                  <div className="callout__thumb" style={{ background: "#fff" }}><img src="/coating.webp" alt="" loading="lazy" /></div>
                </div>
                <div>
                  <h3 style={{ color: "#fff" }}>Leaf-Guard™ <span className="green-word" style={{ color: "var(--green)" }}>Edible Coating</span></h3>
                  <p className="body-s">
                    Starch-based spray from banana pith. +40–60% produce shelf-life. Drop-in for existing packhouse equipment.
                  </p>
                </div>
                <Link href="/contact" className="btn btn-green btn-sm">Start a pilot <Arrow /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
