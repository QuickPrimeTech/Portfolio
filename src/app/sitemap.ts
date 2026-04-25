import { MetadataRoute } from "next";
import { links } from "@/config/navigation";
import { footerSecondaryLinks } from "@/layouts/footer";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allLinks = [...links, ...footerSecondaryLinks];

  const postEntries: MetadataRoute.Sitemap = allLinks.map((link) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${link.href}`,
  }));

  return [...postEntries];
}
