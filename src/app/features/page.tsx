"use client";
import Hero from "@/sections/features/hero";
import Features from "@/sections/features/features";
import Process from "@/sections/features/process";
import Pricing from "@/sections/features/pricing";
import FAQs from "@/sections/features/faqs";
import CTA from "@/sections/features/cta";

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
