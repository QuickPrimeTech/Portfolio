import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/pricing-card";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import { Feature, FeaturesContainer } from "@/components/ui/feature";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { pricingCardsInfo } from "@/data/pricing";
import Link from "next/link";
import { getWhatsAppLink } from "@/layouts/helpers";

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
      <PricingCards />
      <Button size="lg" variant={"outline"} asChild>
        <Link href="/pricing">
          Compare All Plans
          <ArrowRight />
        </Link>
      </Button>
    </Section>
  );
};

const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {pricingCardsInfo.map(
        ({ title, description, price, features, popular }, index) => (
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
              <Button asChild size="lg" className="w-full">
                <Link
                  href={getWhatsAppLink(title)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started <ExternalLink />
                </Link>
              </Button>
              <PricingFeatures features={features} />
            </PricingCardContent>
          </PricingCard>
        )
      )}
    </div>
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
export { Pricing as default, PricingCards };
