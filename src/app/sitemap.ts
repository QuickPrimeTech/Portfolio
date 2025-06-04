import { MetadataRoute } from "next";
import { links } from "@/config/navigation";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postEntries: MetadataRoute.Sitemap = links.map(({ link }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${link}`,
  }));

  return [...postEntries];
}
