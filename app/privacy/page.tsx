import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24 bg-[#f8f7f4]">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-[#0f2420] mb-8">Privacy Policy</h1>
          
          <div className="prose prose-stone prose-headings:font-display prose-headings:text-[#0f2420] prose-a:text-[#d97706]">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-8">Last Updated: October 2026</p>
            
            <h2>1. Information We Collect</h2>
            <p>
              When you submit a project brief or contact us, we collect personal information including your name, email address, phone number, and details about your home or project. We only collect information that you voluntarily provide to us.
            </p>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Respond to your inquiries and provide accurate quotes.</li>
              <li>Schedule walk-throughs and project dates.</li>
              <li>Communicate updates regarding your project.</li>
            </ul>
            
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners.
            </p>
            
            <h2>4. Security</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our site.
            </p>
            
            <h2>5. Contacting Us</h2>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at estimates@reedspainting.com.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
