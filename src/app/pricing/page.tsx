import { PricingCards } from "@/sections/home/pricing";
import CTA from "@/sections/pricing/cta";
import AddOns from "@/sections/pricing/add-ons";
import Faqs from "@/sections/pricing/faqs";
import Hero from "@/sections/pricing/hero";
import MorePricing from "@/sections/pricing/more-pricing";
import { Section } from "@/components/typography";

export default function PricingPage() {
  return (
    <main className="bg-background">
      <Hero />
      <Section id="pricing" aria-labell="pricing-card">
        <PricingCards />
      </Section>
      <MorePricing />
      <AddOns />
      <Faqs />
      <CTA />
    </main>
  );
}
