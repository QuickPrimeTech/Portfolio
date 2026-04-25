// @/app/pricing/page.tsx

import { Metadata } from "next";
import { PricingCards } from "@/sections/home/pricing";
import CTA from "@/sections/pricing/cta";
import AddOns from "@/sections/pricing/add-ons";
import Faqs from "@/sections/pricing/faqs";
import { Hero } from "@/sections/pricing/hero";
import { MorePricing } from "@/sections/pricing/more-pricing";
import { Section } from "@/components/typography";

export const metadata: Metadata = {
  title: "Pricing | Flexible Website Plans for Businesses",
  description:
    "Explore flexible pricing plans designed for businesses of all sizes. Choose from custom website packages, add-ons, and scalable solutions tailored to your needs.",

  openGraph: {
    title: "Pricing | QuickPrimeTech",
    description:
      "Explore flexible pricing plans designed for businesses of all sizes. Choose from custom website packages, add-ons, and scalable solutions tailored to your needs.",
    url: "/pricing",
    siteName: "QuickPrimeTech",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "Flexible Website Pricing Plans",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pricing | QuickPrimeTech",
    description:
      "Flexible website pricing plans for startups, businesses, and growing brands.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      <Hero />
      <Section
        id="pricing"
        className={"bg-muted/50 rounded-t-4xl"}
        aria-label="pricing-card"
      >
        <PricingCards />
      </Section>
      <MorePricing />
      <AddOns />
      <Faqs />
      <CTA />
    </>
  );
}
