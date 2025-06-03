import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Children } from "@/types";

type PricingCardVariant = "default" | "popular";

const PricingCard = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: PricingCardVariant;
}) => {
  return (
    <Card
      className={cn(
        "border-2 relative transition-colors",
        variant === "popular" ? "border-blue-600" : "hover:border-blue-200"
      )}
    >
      {variant === "popular" && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
          Most Popular
        </Badge>
      )}
      {children}
    </Card>
  );
};

const PricingCardHeader = ({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}) => {
  return (
    <div className="text-center p-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="text-3xl font-bold text-blue-600 mt-4">
        ${price}
        <span className="text-lg font-semibold text-muted-foreground">
          /month
        </span>
      </div>
    </div>
  );
};

const PricingCardContent = ({ children }: Children) => {
  return <div className="p-6 pt-0">{children}</div>;
};

const PricingCardFeature = ({ children }: Children) => {
  return (
    <ul className="space-y-3 mb-6">
      <li className="flex items-center">
        <CheckCircle className="size-5 text-green-500 mr-3 shrink-0" />
        {children}
      </li>
    </ul>
  );
};
export {
  PricingCard,
  PricingCardHeader,
  PricingCardContent,
  PricingCardFeature,
};
