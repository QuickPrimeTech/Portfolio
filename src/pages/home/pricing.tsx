import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  PaymentDialog,
  PaymentDialogTrigger,
  PaymentDialogContent,
  PaymentDialogHeader,
  PaymentDialogFooter,
  PaymentDialogTitle,
  PaymentDialogDescription,
  PaymentDialogPlan,
  PaymentDialogPrice,
} from "@/components/client/payment-dialog";
import {
  PricingCard,
  PricingCardHeader,
  PricingCardContent,
  PricingCardTitle,
  PricingCardDescription,
  PricingCardPrice,
} from "@/components/client/pricing-card";
import { ArrowRight } from "lucide-react";
import PaypalSubscriptionButton from "@/components/client/paypal-button";
import { Feature, FeaturesContainer } from "@/components/client/feature";

interface PricingProps {
  title: string;
  price: string | number;
  planId: string;
}

const pricingCards = [
  {
    title: "Basic",
    description: "For small cafes or takeout spots",
    price: "69.99",
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
    popular: false,
    planId: "P-2XU60119GU648443YNA64AEA",
  },
  {
    title: "Pro",
    description: "For growing restaurants",
    price: "99.99",
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
    popular: true,
    planId: "P-02876306HE3896415NA7AZGQ",
  },
  {
    title: "Premium",
    description: "For upscale brands",
    price: "149.99",
    features: [
      "Everything in Pro",
      "10-20 page custom website",
      "Unlimited page updates",
      "Custom feature requests",
      "Event booking system",
      "24/7 priority support (phone + email)",
      "Google My Business management & optimization",
    ],
    popular: false,
    planId: "P-44256660A5342815BNA7A5VY",
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

        <div className="grid md:grid-cols-3 gap-8 mx-auto">
          {/* Starter */}
          {pricingCards.map(
            (
              { title, description, price, features, popular, planId },
              index
            ) => (
              <PricingCard key={index} popular={popular}>
                <PricingCardHeader>
                  <PricingCardTitle className={cn(popular && "text-secondary")}>
                    {title}
                  </PricingCardTitle>
                  <PricingCardDescription>{description}</PricingCardDescription>
                  <PricingCardPrice className={cn(popular && "text-secondary")}>
                    {price}
                  </PricingCardPrice>
                </PricingCardHeader>
                <PricingCardContent>
                  <FeaturesContainer>
                    {features.map((feature, index) => (
                      <Feature key={index}>{feature}</Feature>
                    ))}
                  </FeaturesContainer>
                  <PricingPaymentDialog
                    title={title}
                    price={price}
                    planId={planId}
                  />
                </PricingCardContent>
              </PricingCard>
            )
          )}
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

const PricingPaymentDialog = ({ title, price, planId }: PricingProps) => {
  return (
    <PaymentDialog>
      <PaymentDialogTrigger>
        <Button className="w-full">Get Started</Button>
      </PaymentDialogTrigger>
      <PaymentDialogContent>
        <PaymentDialogHeader>
          <PaymentDialogTitle>{title}</PaymentDialogTitle>
          <PaymentDialogDescription>
            This will include all the {title} features as listed
          </PaymentDialogDescription>
        </PaymentDialogHeader>
        <PaymentDialogPlan>
          <PaymentDialogPrice>{price}</PaymentDialogPrice>
        </PaymentDialogPlan>
        <PaymentDialogFooter>
          <PaypalSubscriptionButton planId={planId} />
        </PaymentDialogFooter>

        <p className="text-xs text-gray-500 text-center">
          By subscribing, you agree to our Terms of Service and Privacy Policy
        </p>
      </PaymentDialogContent>
    </PaymentDialog>
  );
};
export default Pricing;
