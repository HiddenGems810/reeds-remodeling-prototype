import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ProjectBriefProvider } from "@/lib/store";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reedsremodeling.com"),
  title: {
    template: "%s | Reeds Remodeling",
    default: "Reeds Painting and Remodeling Service",
  },
  description: "Premium residential painting and remodeling services in Saginaw Township, MI. We organize your project before the first call.",
  keywords: ["painting", "remodeling", "Saginaw Township", "Michigan", "drywall", "home services"],
  openGraph: {
    title: "Reeds Painting and Remodeling Service",
    description: "Premium residential painting and remodeling services in Saginaw Township, MI.",
    url: "https://reedsremodeling.com",
    siteName: "Reeds Remodeling",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reeds Painting and Remodeling Service",
    description: "Premium residential painting and remodeling services in Saginaw Township, MI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground bg-noise">
        <ProjectBriefProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ProjectBriefProvider>
      </body>
    </html>
  );
}
