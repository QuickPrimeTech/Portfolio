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
