import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { ServiceSelector } from "@/components/sections/service-selector";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { StandardsOfCare } from "@/components/sections/standards-of-care";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TrustWall } from "@/components/sections/trust-wall";
import { FAQSection } from "@/components/sections/faq-section";
import { ProjectBriefBuilder } from "@/components/sections/project-brief-builder";
import { ClientValueSection } from "@/components/sections/client-value-section";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ServiceSelector />
        <ProjectBriefBuilder />
        <BeforeAfterSection />
        <StandardsOfCare />
        <ProcessTimeline />
        <TrustWall />
        <FAQSection />
        <ClientValueSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
