// app/sitemap.xml/route.ts
export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://quickprimetech.vercel.app";

  const urls = ["", "process", "work", "pricing", "team", "reviews"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((path) => {
        return `<url>
    <loc>${baseUrl}/${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
      })
      .join("\n")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
