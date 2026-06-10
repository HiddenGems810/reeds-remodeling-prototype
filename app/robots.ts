import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Applebot-Extended", "Google-Extended", "Bytespider", "CCBot"],
        disallow: "/",
      }
    ],
    sitemap: "https://reeds-remodeling-prototype.vercel.app/sitemap.xml",
  };
}
