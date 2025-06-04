"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Children } from "@/types";

// Compound Pattern Setup
const PaymentDialog = ({ children }: Children) => {
  return <Dialog>{children}</Dialog>;
};

const PaymentDialogTrigger = ({ children }: Children) => {
  return <DialogTrigger asChild>{children}</DialogTrigger>;
};

const PaymentDialogContent = ({ children }: Children) => {
  return <DialogContent className="sm:max-w-md">{children}</DialogContent>;
};

const PaymentDialogHeader = ({ children }: Children) => {
  return <DialogHeader>{children}</DialogHeader>;
};

const PaymentDialogPlan = ({ children }: Children) => {
  return (
    <div className="border-t pt-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col gap-3">
          <span className="text-gray-600">Monthly subscription</span>
          <p className="text-sm text-gray-500">
            Billed monthly • Cancel anytime
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};
const PaymentDialogPrice = ({ children }: Children) => {
  return (
    <span className="text-2xl font-bold text-gray-900">${children}/month</span>
  );
};
const PaymentDialogTitle = ({ children }: Children) => {
  return (
    <DialogTitle className="text-2xl font-bold text-center">
      {children}
    </DialogTitle>
  );
};

const PaymentDialogDescription = ({ children }: Children) => {
  return (
    <DialogDescription className="text-base text-gray-600 text-center">
      {children}
    </DialogDescription>
  );
};

const PaymentDialogFooter = ({ children }: Children) => {
  return <div className="w-full flex gap-3 pt-4">{children}</div>;
};

export {
  PaymentDialog,
  PaymentDialogTitle,
  PaymentDialogPlan,
  PaymentDialogPrice,
  PaymentDialogDescription,
  PaymentDialogTrigger,
  PaymentDialogContent,
  PaymentDialogHeader,
  PaymentDialogFooter,
};
