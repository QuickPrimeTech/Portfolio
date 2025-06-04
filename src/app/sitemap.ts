// sitemap.ts
import { MetadataRoute } from "next";
import { links } from "@/config/navigation";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables."
    );
  }

  const sitemapEntries: MetadataRoute.Sitemap = links.map((item) => {
    // Handle the root path specifically to avoid a trailing slash for the root
    let url = `${baseUrl}${item.href}`;
    if (item.href === "/") {
      url = baseUrl; // For the root, just use the base URL without a trailing slash (unless you want it)
    }

    return {
      url: url,
      lastModified: new Date(), // It's good practice to add these
      changeFrequency: "monthly", // Adjust as needed
      priority: item.href === "/" ? 1.0 : 0.8, // Adjust priorities
    };
  });

  return sitemapEntries;
}
