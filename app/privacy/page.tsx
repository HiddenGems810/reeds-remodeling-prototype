import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ShieldCheck, Database, Share2, Lock, Mail } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      id: "collection",
      icon: <Database className="w-5 h-5" />,
      title: "1. Information We Collect",
      content: "When you submit a project brief or contact us, we collect personal information including your name, email address, phone number, and details about your home or project. We only collect information that you voluntarily provide to us."
    },
    {
      id: "usage",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "2. How We Use Your Information",
      content: "We use the information we collect to respond to your inquiries and provide accurate quotes, schedule walk-throughs and project dates, and communicate updates regarding your project. Your data is strictly used for fulfilling our service to you."
    },
    {
      id: "sharing",
      icon: <Share2 className="w-5 h-5" />,
      title: "3. Information Sharing",
      content: "We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners."
    },
    {
      id: "security",
      icon: <Lock className="w-5 h-5" />,
      title: "4. Data Security",
      content: "We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our site."
    },
    {
      id: "contact",
      icon: <Mail className="w-5 h-5" />,
      title: "5. Contacting Us",
      content: "If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at privacy@reedspainting.com."
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
              <ShieldCheck className="w-4 h-4" /> Privacy & Security
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white/70 text-lg max-w-xl">
              We respect your privacy and are committed to protecting the personal information you share with us. Last updated: October 2026.
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
