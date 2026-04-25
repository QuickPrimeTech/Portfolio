// @/app/page.tsx
import type { Metadata } from "next";
import Hero from "@/sections/home/hero";
import { Process } from "@/sections/home/process";
import FeaturedProjects from "@/sections/home/projects";
import Pricing from "@/sections/home/pricing";
import Faqs from "@/sections/home/faqs";
import Contact from "@/sections/home/contact";
import TestimonialSection from "@/sections/home/testimonial";

export const metadata: Metadata = {
  title: "Premium Websites That Convert — No Upfront Cost | QuickPrimeTech",
  description:
    "Get a stunning, high-converting website built by experts — with zero upfront cost. QuickPrimeTech designs and develops custom websites for brands, startups, and businesses that want to stand out and scale fast.",
  keywords: [
    "custom website design",
    "web development agency",
    "no upfront cost website",
    "high converting websites",
    "business website design",
    "startup web design",
    "QuickPrimeTech",
    "premium web development",
    "brand website design",
    "conversion focused websites",
  ],
  openGraph: {
    title: "Premium Websites That Convert — No Upfront Cost | QuickPrimeTech",
    description:
      "QuickPrimeTech builds beautiful, high-performing websites for modern brands. Zero upfront cost. Maximum impact. Let's build something extraordinary.",
    url: "https://quickprimetech.vercel.app",
    siteName: "QuickPrimeTech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "QuickPrimeTech — Premium Websites Built to Convert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title: "Premium Websites That Convert — No Upfront Cost | QuickPrimeTech",
    description:
      "Custom, conversion-focused websites for brands and businesses. Zero upfront cost. Built to impress and perform.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

function Portfolio() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TestimonialSection />
      <Pricing />
      <Process />
      <Faqs />
      <Contact />
    </>
  );
}

export default Portfolio;
