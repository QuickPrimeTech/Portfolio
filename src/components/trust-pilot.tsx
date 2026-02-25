"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, forceReload: boolean) => void;
    };
  }
}

export default function TrustpilotReviewWidget() {
  useEffect(() => {
    if (window.Trustpilot) {
      const element = document.querySelector(".trustpilot-widget");
      if (element) {
        window.Trustpilot.loadFromElement(element as HTMLElement, true);
      }
    }
  }, []);

  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />

      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="699f287f92d37a2f7c7b4f90"
        data-style-height="52px"
        data-style-width="100%"
        data-token="264f87be-efd8-4e87-b790-9f146da9e495"
      >
        <a
          href="https://www.trustpilot.com/review/quickprimetech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
}
