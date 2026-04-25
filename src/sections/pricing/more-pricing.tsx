import { CheckCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { FeatureCategory } from "@/types";
import { features, plans } from "@/data/pricing";
import { Aurora } from "@/components/patterns/aurora";

export const MorePricing = () => {
  return (
    <Section className="-mt-6 bg-background rounded-t-4xl relative isolate">
      <Aurora className="dark:opacity-20" />
      <Header>
        <Title>Detailed Feature Comparison</Title>
        <SubTitle>
          See exactly what's included in each package to make the best choice
          for your restaurant.
        </SubTitle>
      </Header>
      {/* Responsive Table Wrapper */}
      <FeatureTable features={features} />
    </Section>
  );
};
const FeatureTable = ({ features }: { features: FeatureCategory[] }) => {
  return (
    <div>
      <div className="grid grid-cols-4 text-center border-b sticky top-20 z-30 bg-muted/30 rounded-lg overflow-hidden">
        {/*
          Sticky "Features" column header:
          Sticks to the left edge of its parent (the horizontally scrolling header section).
        */}
        <div className="text-left px-4 py-4 sticky left-0 z-40 border-r backdrop-blur-md">
          <h3 className="text-lg font-semibold">Features</h3>
        </div>
        {/* Plan headers */}
        {plans.map((plan) => (
          <div
            key={plan.key}
            className={`px-4 flex flex-col items-center py-4 border-l ${
              plan.highlight ? "bg-muted rounded-t-lg" : ""
            }`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            {plan.badge && <Badge className="mt-1">{plan.badge}</Badge>}
          </div>
        ))}
      </div>
      {/* Rows */}
      <div className="divide-y divide-border">
        {features.map((category) => (
          <div key={category.category} className="mb-8">
            <h4 className="text-lg font-semibold my-6 px-4 sticky left-0  z-20">
              {category.category}
            </h4>

            {category.items.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-4 items-center text-center py-4"
              >
                <div className="text-left px-4 text-foreground/80 font-medium sticky left-0 z-10 backdrop-blur-md">
                  {item.name}
                </div>
                {plans.map((plan) => (
                  <FeatureCheck
                    key={plan.key}
                    available={item[plan.key as "starter" | "pro" | "premium"]}
                    highlight={plan.highlight}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureCheck = ({
  available,
  highlight = false,
}: {
  available: boolean;
  highlight?: boolean;
}) => {
  const classes = highlight ? "bg-secondary/10 py-3 rounded" : "py-3";
  return (
    <div className={`${classes}`}>
      {available ? (
        <CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground mx-auto" />
      )}
    </div>
  );
};
