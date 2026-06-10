import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FileText, Shield, Briefcase, Copyright, Mail } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      icon: <FileText className="w-5 h-5" />,
      title: "1. Acceptance of Terms",
      content: "By accessing and using the website of Reeds Painting and Remodeling Service (\"we\", \"our\", \"us\"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service."
    },
    {
      id: "services",
      icon: <Briefcase className="w-5 h-5" />,
      title: "2. Services Provided",
      content: "We provide premium residential painting, remodeling, and surface repair services in Saginaw Township, MI. All project briefs submitted through this website are preliminary inquiries and do not constitute a binding contract until a formal agreement is signed in person."
    },
    {
      id: "estimates",
      icon: <Shield className="w-5 h-5" />,
      title: "3. Project Briefs and Quotes",
      content: "Any estimates or ranges provided via the online Project Brief builder are rough estimates based on typical industry standards and the information provided. Final pricing is strictly subject to an in-person walkthrough and formal written quote."
    },
    {
      id: "ip",
      icon: <Copyright className="w-5 h-5" />,
      title: "4. Intellectual Property",
      content: "The content, branding, design, and graphics on this website are the property of Reeds Painting and Remodeling Service and may not be copied or reproduced without written consent."
    },
    {
      id: "contact",
      icon: <Mail className="w-5 h-5" />,
      title: "5. Contact",
      content: "If you have any questions about these Terms, please contact us at estimates@reedspainting.com."
    }
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#f8f7f4]">
        {/* Header Section */}
        <div className="bg-[#0f2420] text-white pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#d97706]/20 to-transparent"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-[#d97706] mb-6">
              <FileText className="w-4 h-4" /> Legal Documentation
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
            <p className="text-white/70 text-lg max-w-xl">
              Please read these terms carefully before using our project builder or submitting an inquiry. Last updated: October 2026.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {sections.map((section) => (
                <div key={section.id} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-10 transition-shadow hover:shadow-md">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#f8f7f4] text-[#0f2420] flex items-center justify-center border border-gray-200">
                      {section.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#0f2420] mb-4">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
