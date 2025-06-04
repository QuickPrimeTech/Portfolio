"use client";

import React, { useEffect, useRef } from "react";

interface PaypalButtonProps {
  planId: string;
}

const PaypalSubscriptionButton = ({ planId }: PaypalButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paypalButtonInstance = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;

    const renderPaypalButtons = () => {
      container.innerHTML = ""; // Clear previous

      // @ts-ignore
      paypalButtonInstance.current = window.paypal?.Buttons({
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
      });

      if (paypalButtonInstance.current) {
        paypalButtonInstance.current.render(container);
      }
    };

    const existingScript = document.getElementById("paypal-sdk");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "paypal-sdk";
      script.src = `https://www.paypal.com/sdk/js?client-id=Aa_MPpsDYYrpYnB9cCp-bJYNI5M7LWytwvq4QIwVOxI6WhpiWUL263bjgRxqgDGbTzxDcpHySqRxrkjo&vault=true&intent=subscription`;
      script.async = true;
      script.dataset.sdkIntegrationSource = "button-factory";

      script.onload = () => {
        renderPaypalButtons();
      };

      document.body.appendChild(script);
    } else {
      renderPaypalButtons();
    }

    // Cleanup on unmount
    return () => {
      if (paypalButtonInstance.current) {
        paypalButtonInstance.current.close().catch(() => {
          // Sometimes the button might already be gone, ignore errors
        });
      }
      container.innerHTML = "";
    };
  }, [planId]);

  return <div ref={containerRef} className="w-full" />;
};

export default PaypalSubscriptionButton;
