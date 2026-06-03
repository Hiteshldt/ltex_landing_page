import PageIntro from "@/components/ui/PageIntro";
import Impact from "@/components/sections/Impact";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/ui/JsonLd";
// Founders section is intentionally hidden for now — re-enable when ready.
// import Team from "@/components/sections/Team";

export const metadata = {
  title: "About Us",
  description:
    "LeafTex is a Coimbatore-based biomaterials platform turning agricultural and marine waste into premium fibers, vegan leather, and edible coatings — measured by what we refuse to throw away.",
  alternates: { canonical: "/about" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://leaftex.bio/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://leaftex.bio/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <PageIntro
        eyebrow="About Us"
        title={<>The company behind the <span className="green-word">thread.</span></>}
        intro="LeafTex is a biomaterials platform with deep roots in Southern India's agricultural and coastal belts. We exist to prove that the world's most abundant waste streams can become its most valuable materials — measured not by what we make, but by what we refuse to throw away."
        primary={{ href: "/contact", label: "Partner with us" }}
        secondary={{ href: "/technology", label: "How it works" }}
      />
      <Impact />
      {/* Founders / team — hidden for now. Uncomment <Team /> (and its import above) to show.
      <Team /> */}
      <FAQ />
    </>
  );
}
