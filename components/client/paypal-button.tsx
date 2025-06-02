"use client"; // Needed if you're using Next.js App Router

import React, { useEffect } from "react";

interface PaypalButtonProps {
  planId: string; // Accept dynamic plan IDs if needed
}

const PaypalSubscriptionButton = ({ planId }: PaypalButtonProps) => {
  useEffect(() => {
    // Avoid SSR issues
    if (typeof window === "undefined") return;

    const existingScript = document.getElementById("paypal-sdk");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "paypal-sdk";
      script.src = `https://www.paypal.com/sdk/js?client-id=Aa_MPpsDYYrpYnB9cCp-bJYNI5M7LWytwvq4QIwVOxI6WhpiWUL263bjgRxqgDGbTzxDcpHySqRxrkjo&vault=true&intent=subscription`;
      script.async = true;
      script.dataset.sdkIntegrationSource = "button-factory";

      script.onload = () => {
        // @ts-ignore
        if (window.paypal) {
          // @ts-ignore
          window.paypal
            .Buttons({
              style: {
                shape: "rect",
                color: "blue",
                layout: "vertical",
                label: "paypal",
              },
              createSubscription: function (data: any, actions: any) {
                return actions.subscription.create({
                  plan_id: planId,
                });
              },
              onApprove: function (data: any, actions: any) {
                alert(`Subscription ID: ${data.subscriptionID}`);
              },
            })
            .render("#paypal-button-container");
        }
      };

      document.body.appendChild(script);
    } else {
      // If the script is already loaded, initialize the button
      // @ts-ignore
      if (window.paypal) {
        // @ts-ignore
        window.paypal
          .Buttons({
            style: {
              shape: "rect",
              color: "blue",
              layout: "vertical",
              label: "paypal",
            },
            createSubscription: function (data: any, actions: any) {
              return actions.subscription.create({
                plan_id: planId,
              });
            },
            onApprove: function (data: any, actions: any) {
              alert(`Subscription ID: ${data.subscriptionID}`);
            },
          })
          .render("#paypal-button-container");
      }
    }
  }, [planId]);

  return <div id="paypal-button-container" className="mt-4"></div>;
};

export default PaypalSubscriptionButton;
