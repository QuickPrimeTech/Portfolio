import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Children, WithChildrenAndClass } from "@/types";
import { currency } from "@/data/pricing";

interface PricingCardProps extends Children {
  popular?: boolean;
}

const PricingCard = ({ children, popular }: PricingCardProps) => {
  return (
    <Card
      className={cn(
        "border-2 relative transition-colors",
        popular ? "border-secondary" : "hover:border-secondary"
      )}
    >
      {popular && <PopularBadge>Most Popular</PopularBadge>}
      {children}
    </Card>
  );
};

const PricingCardHeader = ({ children }: Children) => {
  return <div className="text-center p-6">{children}</div>;
};

const PricingCardTitle = ({ children, className }: WithChildrenAndClass) => {
  return (
    <h3 className={cn("text-2xl font-semibold", className)}>{children}</h3>
  );
};

const PricingCardDescription = ({ children }: Children) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};

const PricingCardPrice = ({ children, className }: WithChildrenAndClass) => {
  return (
    <p className={cn("text-3xl font-bold text-gray-900 mt-4", className)}>
      <span className="text-lg font-semibold text-muted-foreground mr-2 block">
        {currency}
      </span>
      {children}
    </p>
  );
};

const PricingCardContent = ({ children }: Children) => {
  return <div className="p-6 pt-0">{children}</div>;
};

const PopularBadge = ({ children }: Children) => {
  return (
    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-secondary-foreground bg-secondary">
      {children}
    </Badge>
  );
};

export {
  PricingCard,
  PricingCardHeader,
  PricingCardContent,
  PricingCardTitle,
  PricingCardDescription,
  PricingCardPrice,
};
