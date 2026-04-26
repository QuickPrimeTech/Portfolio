import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

type PricingCardProps = {
  popular?: boolean;
};

const PricingCard = ({
  children,
  popular,
  ...props
}: PricingCardProps & React.ComponentProps<typeof Card>) => {
  return (
    <Card
      className={cn(
        "border-2 relative transition-colors",
        popular && "border-primary/50 scale-105",
      )}
      {...props}
    >
      {popular && <PopularBadge>Most Popular</PopularBadge>}
      {children}
    </Card>
  );
};

const PricingCardHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return <div className={cn("text-center p-6", className)} {...props} />;
};

const PricingCardTitle = ({
  className,
  ...props
}: React.ComponentProps<"h3">) => {
  return <h3 className={cn("text-2xl font-semibold", className)} {...props} />;
};

const PricingCardDescription = ({
  className,
  ...props
}: React.ComponentProps<"p">) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
};

const PricingCardContent = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
};

const PopularBadge = ({
  className,
  ...props
}: React.ComponentProps<typeof Badge>) => {
  return (
    <Badge
      className={cn(
        "absolute -top-3 left-1/2 transform -translate-x-1/2",
        className,
      )}
      {...props}
    />
  );
};

export {
  PricingCard,
  PricingCardHeader,
  PricingCardContent,
  PricingCardTitle,
  PricingCardDescription,
};
