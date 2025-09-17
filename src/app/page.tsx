// @/app/page.tsx
import type { Metadata } from "next";
import Hero from "@/sections/home/hero";
import { Process } from "@/sections/home/process";
import FeaturedProjects from "@/sections/home/projects";
import Pricing from "@/sections/home/pricing";
import { Features } from "@/sections/home/features";
import Faqs from "@/sections/home/faqs";
import Contact from "@/sections/home/contact";

export const metadata: Metadata = {
  title: "Restaurant Websites with No Upfront Cost | QuickPrimeTech",
  description:
    "Get a stunning, high-converting restaurant website with no upfront cost. QuickPrimeTech builds custom websites that showcase your brand, attract more customers, and grow your business fast.",
  keywords: [
    "restaurant website design",
    "free restaurant website",
    "custom restaurant websites",
    "restaurant website development",
    "no upfront cost website",
    "QuickPrimeTech",
  ],
  openGraph: {
    title: "Restaurant Websites with No Upfront Cost | QuickPrimeTech",
    description:
      "QuickPrimeTech helps restaurants succeed online with beautiful, mobile-friendly, and high-converting websites — all at zero upfront cost.",
    url: "https://quickprimetech.vercel.app",
    siteName: "QuickPrimeTech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "QuickPrimeTech - Free Custom Restaurant Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title: "Restaurant Websites with No Upfront Cost | QuickPrimeTech",
    description:
      "Custom, high-converting restaurant websites — zero upfront cost. Showcase your brand, attract customers, and grow your business with QuickPrimeTech.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <FeaturedProjects />
      <Pricing />
      <Process />
      <Faqs />
      <Contact />
    </div>
  );
}

export default Portfolio;
