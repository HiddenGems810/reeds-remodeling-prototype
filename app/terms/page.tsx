import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24 bg-[#f8f7f4]">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-[#0f2420] mb-8">Terms of Service</h1>
          
          <div className="prose prose-stone prose-headings:font-display prose-headings:text-[#0f2420] prose-a:text-[#d97706]">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-8">Last Updated: October 2026</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of Reeds Painting and Remodeling Service ("we", "our", "us"), you accept and agree to be bound by the terms and provision of this agreement. 
            </p>
            
            <h2>2. Services Provided</h2>
            <p>
              We provide residential painting, remodeling, and surface repair services in Saginaw Township, MI. All project briefs submitted through this website are preliminary inquiries and do not constitute a binding contract until a formal agreement is signed in person.
            </p>
            
            <h2>3. Project Briefs and Quotes</h2>
            <p>
              Any estimates or ranges provided via the online Project Brief builder are rough estimates based on typical industry standards and the information provided. Final pricing is subject to an in-person walkthrough and formal written quote.
            </p>
            
            <h2>4. Intellectual Property</h2>
            <p>
              The content, branding, design, and graphics on this website are the property of Reeds Painting and Remodeling Service and may not be copied or reproduced without written consent.
            </p>
            
            <h2>5. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at estimates@reedspainting.com.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
