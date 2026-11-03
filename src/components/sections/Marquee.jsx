import Icon from "@/components/ui/Icon";

const ITEMS = [
  "Farm to Fashion",
  "Trace your thread",
  "Banana, pineapple & algae",
  "100% waste upcycling",
  "Native blockchain",
  "Made in Coimbatore",
  "Zero waste",
  "Biomaterials platform",
];

export default function Marquee() {
  // Two identical halves so the -50% loop is seamless.
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className="band" aria-label={ITEMS.join(" · ")}>
      <div className="band__track" aria-hidden="true">
        {all.map((t, i) => (
          <span key={i} className="band__item">
            <span className="band__text">{t}</span>
            <Icon name="leaf" strokeWidth={1.6} />
          </span>
        ))}
      </div>
    </div>
  );
}
