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
} from "@/components/ui/payment-dialog";
import PaypalSubscriptionButton from "@/components/ui/paypal-button";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { PricingProps } from "@/types";

//This is a component to be used for subscription based pricing
const PricingPaymentDialog = ({ title, price, planId }: PricingProps) => {
  return (
    <PaymentDialog>
      <PaymentDialogTrigger>
        <Button className="w-full">
          Get Started <ExternalLink />
        </Button>
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
