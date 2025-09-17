// @/app/features/page.tsx

import { Metadata } from "next";
import Hero from "@/sections/features/hero";
import Features from "@/sections/features/features";
import Process from "@/sections/features/process";
import Pricing from "@/sections/features/pricing";
import FAQs from "@/sections/features/faqs";
import CTA from "@/sections/features/cta";

export const metadata: Metadata = {
  title: "Features | Explore our Features that Boost Restaurant Businesses",
  description:
    "Discover the powerful features of our services — from streamlined workflows and modern design to transparent pricing. Learn how it works and why clients choose us.",
  openGraph: {
    title: "Features | Portfolio",
    description:
      "Explore our key features, pricing, and workflow. See how our solutions can transform your business.",
    url: "/features",
    siteName: "Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png", // 👉 replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Features Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features | Portfolio",
    description:
      "Discover the key features and workflow of our solutions, plus flexible pricing options.",
    images: ["/og/features.jpg"], // 👉 same as OpenGraph image
  },
};

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <Process />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQs />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
