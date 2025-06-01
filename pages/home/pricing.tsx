import React from "react";
import { Button } from "@/components/ui/button";
import {
  PricingCard,
  PricingCardHeader,
  PricingCardContent,
} from "@/components/client/pricing-card";
import { ArrowRight } from "lucide-react";

const pricingCards = [
  {
    title: "Basic",
    description: "For small cafes or takeout spots",
    price: "From $69.99/month",
    features: [
      "3-page custom website (Homepage, Menu, Contact)",
      "Unlimited menu items",
      "Third-party reservation system integration",
      "Basic SEO setup",
      "2 changes per month",
      "Dashboard for content management",
      "Secure hosting (SSL included)",
      "Basic website analytics (monthly report)",
      "Maintenance & support",
    ],
    variant: "default",
  },
  {
    title: "Pro",
    description: "For growing restaurants",
    price: "From $99.99/month",
    features: [
      "Everything in Basic",
      "Custom branding",
      "8-10 page custom website",
      "Advanced SEO",
      "6 content updates per month",
      "Advanced website analytics",
      "Gallery, Private Dining, Private Events Pages (optional)",
      "Unlimited gallery images",
      "Social media feed integration on website",
    ],
    variant: "popular",
  },
  {
    title: "Premium",
    description: "For upscale brands",
    price: "From $149.99/month",
    features: [
      "Everything in Pro",
      "10-20 page custom website",
      "Unlimited page updates",
      "Custom feature requests",
      "Event booking system",
      "24/7 priority support (phone + email)",
      "Google My Business management & optimization",
    ],
    variant: "default",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Maintenance Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your restaurant. No hidden fees, no
            surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          {pricingCards.map((card, index) => (
            <PricingCard key={index} variant={card.variant as any}>
              <PricingCardHeader
                title={card.title}
                description={card.description}
                price={card.price}
              />
              <PricingCardContent features={card.features} />
            </PricingCard>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" variant={"outline"}>
            Compare All Plans
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
