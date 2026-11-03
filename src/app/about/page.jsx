import PageIntro from "@/components/ui/PageIntro";
import Problem from "@/components/sections/Problem";
import Impact from "@/components/sections/Impact";
import FAQ from "@/components/sections/FAQ";
import { pageMetadata } from "@/lib/seo";
// Founders section is intentionally hidden for now — re-enable when ready.
// import Team from "@/components/sections/Team";

export const metadata = pageMetadata({
  title: "About Us — Biomaterials from Coimbatore, India",
  description:
    "LeafTex is a Coimbatore-based biomaterials company turning agricultural and marine waste into premium fibers, vegan leather and edible coatings.",
  path: "/about",
  image: "about",
});

const FACTS = [
  ["100%", "Biomass utilization", "vs. 15–20% industry avg"],
  ["3×", "Upcycled sources", "banana · pineapple · algae"],
  ["40–60%", "Shelf-life uplift", "verified on fresh produce"],
];


export default function AboutPage() {
  return (
    <>
      <PageIntro
        crumbs={[["Home", "/"], ["About Us", "/about"]]}
        eyebrow="About Us"
        title={<>The company behind the <span className="green-word">thread.</span></>}
        intro="LeafTex is a biomaterials platform with deep roots in Southern India's agricultural and coastal belts. We exist to prove that the world's most abundant waste streams can become its most valuable materials — measured not by what we make, but by what we refuse to throw away."
        primary={{ href: "/contact", label: "Partner with us" }}
        secondary={{ href: "/technology", label: "How it works" }}
        aside={
          <div className="card facts">
            {FACTS.map(([k, title, body]) => (
              <div key={title} className="facts__row">
                <strong>{k}</strong>
                <div><b>{title}</b><span>{body}</span></div>
              </div>
            ))}
          </div>
        }
      />
      <Problem />
      <Impact />
      {/* Founders / team — hidden for now. Uncomment <Team /> (and its import above) to show.
      <Team /> */}
      <FAQ />
    </>
  );
}
