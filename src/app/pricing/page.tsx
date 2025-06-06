import Pricing from "@/sections/home/pricing";
import CTA from "@/sections/pricing/cta";
import AddOns from "@/sections/pricing/add-ons";
import Faqs from "@/sections/pricing/faqs";
import Hero from "@/sections/pricing/hero";
import MorePricing from "@/sections/pricing/more-pricing";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Pricing />
      <MorePricing />
      <AddOns />
      <Faqs />
      <CTA />
    </main>
  );
}
