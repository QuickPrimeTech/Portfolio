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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  PricingCard,
  PricingCardHeader,
  PricingCardContent,
  PricingCardTitle,
  PricingCardDescription,
  PricingCardPrice,
} from "@/components/client/pricing-card";
import { ArrowRight, ChevronDown } from "lucide-react";
import PaypalSubscriptionButton from "@/components/client/paypal-button";
import { Feature, FeaturesContainer } from "@/components/client/feature";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import Link from "next/link";

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
    <Section id="pricing" aria-labelledby="pricing-header">
      <Header>
        <Title id="pricing-header"> Maintenance Pricing</Title>
        <SubTitle>
          Choose the perfect package for your restaurant. No hidden fees, no
          surprises.
        </SubTitle>
      </Header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Starter */}
        {pricingCards.map(
          ({ title, description, price, features, popular, planId }, index) => (
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
                <div className="hidden md:block">
                  <FeaturesContainer>
                    {features.map((feature, index) => (
                      <Feature key={index}>{feature}</Feature>
                    ))}
                  </FeaturesContainer>
                </div>
                <PricingPaymentDialog
                  title={title}
                  price={price}
                  planId={planId}
                />
                <PricingFeatures features={features} />
              </PricingCardContent>
            </PricingCard>
          )
        )}
      </div>
      <Button size="lg" variant={"outline"} asChild>
        <Link href="/pricing">
          Compare All Plans
          <ArrowRight />
        </Link>
      </Button>
    </Section>
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

const PricingFeatures = ({ features }: { features: string[] }) => {
  return (
    <div className="block md:hidden my-4">
      <Collapsible>
        <CollapsibleTrigger className="group w-full inline-flex justify-center items-center gap-2 text-sm font-medium text-secondary border-t border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition">
          {/* View Text */}
          <span className="group-data-[state=open]:hidden">View Features</span>
          <span className="hidden group-data-[state=open]:inline">
            Hide Features
          </span>
          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden transition-all data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up mt-5">
          <FeaturesContainer>
            {features.map((feature, index) => (
              <Feature key={index}>{feature}</Feature>
            ))}
          </FeaturesContainer>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
export default Pricing;
