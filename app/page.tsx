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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "name": "Reeds Painting and Remodeling Service",
    "image": "https://reedsremodeling.com/opengraph-image.png",
    "@id": "https://reedsremodeling.com",
    "url": "https://reedsremodeling.com",
    "telephone": "+15551234567",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Saginaw Township",
      "addressRegion": "MI",
      "postalCode": "48603",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.4353,
      "longitude": -84.0044
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": []
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
