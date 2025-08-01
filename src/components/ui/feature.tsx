import { Children, WithChildrenAndClass } from "@/types";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FeaturesContainer = ({ children, className }: WithChildrenAndClass) => {
  return (
    <ul className={cn("flex flex-col gap-3 mb-6", className)}>{children}</ul>
  );
};

const Feature = ({ children }: Children) => {
  return (
    <li className="flex items-center">
      <CheckCircle className="size-5 text-secondary mr-3 shrink-0" />
      {children}
    </li>
  );
};

export { Feature, FeaturesContainer };

// Reusable feature list item
export function FeatureItem({
  icon: Icon,
  text,
  bold,
  iconColor = "text-primary",
}: {
  icon: any;
  text: string;
  bold?: boolean;
  iconColor?: string;
}) {
  return (
    <li className="flex items-start">
      <Icon className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${iconColor}`} />
      <span
        className={
          bold ? "font-semibold text-foreground" : "text-muted-foreground"
        }
      >
        {text}
      </span>
    </li>
  );
}
