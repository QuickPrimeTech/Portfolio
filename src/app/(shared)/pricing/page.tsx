// @/app/pricing/page.tsx

import { Metadata } from "next";
import { PricingCards } from "@/sections/home/pricing";
import CTA from "@/sections/pricing/cta";
import AddOns from "@/sections/pricing/add-ons";
import Faqs from "@/sections/pricing/faqs";
import Hero from "@/sections/pricing/hero";
import MorePricing from "@/sections/pricing/more-pricing";
import { Section } from "@/components/typography";

export const metadata: Metadata = {
  title: "Pricing | Our Flexible Pricing for Restaurant",
  description:
    "Explore our flexible pricing plans tailored to fit businesses of all sizes. Choose from core packages, add-ons, and custom solutions to match your project needs.",
  openGraph: {
    title: "Pricing | Portfolio",
    description:
      "Explore our flexible pricing plans tailored to fit businesses of all sizes. Choose from core packages, add-ons, and custom solutions to match your project needs.",
    url: "/pricing",
    siteName: "Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png", // 👉 replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Pricing Plans",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Portfolio",
    description:
      "Choose the perfect plan for your business with flexible packages and add-ons.",
    images: ["/og/pricing.jpg"], // 👉 same image as above
  },
};

export default function PricingPage() {
  return (
    <main className="bg-background">
      <Hero />
      <Section id="pricing" aria-label="pricing-card">
        <PricingCards />
      </Section>
      <MorePricing />
      <AddOns />
      <Faqs />
      <CTA />
    </main>
  );
}
