import PageIntro from "@/components/ui/PageIntro";
import PlatformFlow from "@/components/ui/PlatformFlow";
import Process from "@/components/sections/Process";
import Traceability from "@/components/sections/Traceability";
import FAQ from "@/components/sections/FAQ";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Zero-Waste Processing & Blockchain Traceability",
  description:
    "How LeafTex works: a zero-waste regional process turning banana, pineapple and algae waste into fiber, leather and coating — every batch minted on-chain.",
  path: "/technology",
  image: "technology",
});


export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        crumbs={[["Home", "/"], ["Technology", "/technology"]]}
        eyebrow="Technology"
        title={<>How LeafTex <span className="green-word">works.</span></>}
        intro="Two systems power the platform: a zero-waste regional processing model that turns crop and marine waste into finished product, and a native blockchain that proves where every batch came from."
        primary={{ href: "/contact", label: "Partner with us" }}
        secondary={{ href: "/products", label: "See the materials" }}
        aside={<PlatformFlow />}
        className="page-intro--wide-aside"
      />
      <Process />
      <Traceability />
      <FAQ />
    </>
  );
}
