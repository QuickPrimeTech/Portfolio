import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingCardVariant = "default" | "popular";

function PricingCard({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: PricingCardVariant;
}) {
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
}

function PricingCardHeader({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className="text-center p-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="text-3xl font-bold text-blue-600 mt-4">{price}</div>
    </div>
  );
}

function PricingCardContent({ features }: { features: string[] }) {
  return (
    <div className="p-6 pt-0">
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full bg-blue-600 hover:bg-blue-700">
        Get Started
      </Button>
    </div>
  );
}

export { PricingCard, PricingCardHeader, PricingCardContent };
