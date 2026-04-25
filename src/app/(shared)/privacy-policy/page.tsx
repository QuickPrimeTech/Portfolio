// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | QuickPrimeTech",
  description:
    "Learn how QuickPrimeTech collects, uses, stores, and protects your data. Understand your rights, data usage, cookies, and our security practices.",
};

export default function PrivacyPolicy() {
  return (
    <main
      id="main-content"
      role="main"
      aria-labelledby="page-title"
      className="max-w-4xl mx-auto px-6 md:px-8 py-12 leading-relaxed space-y-8"
    >
      <header
        role="banner"
        className="space-y-2 text-center"
        aria-label="Privacy Policy Header"
      >
        <h1
          id="page-title"
          className="text-4xl md:text-5xl font-bold tracking-wider"
        >
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm">
          Effective Date: 1 January 2025
        </p>
      </header>

      <section id="introduction" aria-labelledby="intro-heading">
        <h2 id="intro-heading" className="sr-only">
          Introduction
        </h2>
        <p>
          At <strong>QuickPrimeTech</strong>, we build and manage websites,
          e-commerce platforms, and digital systems for businesses. We respect
          your privacy and are committed to protecting the data of every client,
          customer, and website visitor. This Privacy Policy explains how we
          collect, use, store, and protect information when you or your users
          interact with any platform we manage, including online purchases,
          contact forms, and marketing tools.
        </p>
      </section>

      <section
        id="information-we-collect"
        aria-labelledby="info-collect-heading"
      >
        <h2
          id="info-collect-heading"
          className="tracking-wider text-2xl font-semibold mb-3"
        >
          1. Information We Collect
        </h2>
        <p>
          We collect information necessary to operate and maintain websites and
          digital services securely and efficiently. This may include:
        </p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>
            User details such as name, email address, phone number, delivery
            address, and transaction or inquiry information.
          </li>
          <li>
            Payment and transaction information (processed securely via
            third-party payment gateways — we never store full card details).
          </li>
          <li>
            Technical information such as IP address, browser type, device
            identifiers, pages visited, and general location data.
          </li>
          <li>
            Communication preferences and marketing opt-ins (when explicitly
            provided).
          </li>
        </ul>
      </section>

      <section id="how-we-use-information" aria-labelledby="use-info-heading">
        <h2
          id="use-info-heading"
          className="tracking-wider text-2xl font-semibold mb-3"
        >
          2. How We Use Information
        </h2>
        <p>
          We use collected data only to provide and improve our services. This
          includes:
        </p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>Processing transactions, orders, or service requests.</li>
          <li>Providing customer support and confirming interactions.</li>
          <li>
            Maintaining and improving platform performance, security, and
            reliability.
          </li>
          <li>
            Sending service-related notifications (e.g., confirmations or
            updates).
          </li>
          <li>
            Sending marketing emails or SMS messages only if the recipient has
            opted in.
          </li>
          <li>Detecting and preventing fraud or unauthorized access.</li>
        </ul>
      </section>

      <section id="data-ownership" aria-labelledby="data-ownership-heading">
        <h2
          id="data-ownership-heading"
          className="tracking-wider text-2xl font-semibold mb-3"
        >
          3. Data Ownership & Access
        </h2>
        <p>
          While we <strong>manage the technical infrastructure</strong> that
          powers client websites and platforms, all client data remains the
          property of the client. We have technical access to this data for the
          purpose of system maintenance, troubleshooting, and ensuring
          operational integrity — but we do <strong>not</strong> use or disclose
          data for unrelated purposes.
        </p>
        <p className="mt-3">
          We may only share or disclose data if the client explicitly provides
          permission or if disclosure is required by law.
        </p>
      </section>

      <section id="data-sharing" aria-labelledby="data-sharing-heading">
        <h2
          id="data-sharing-heading"
          className="tracking-wider text-2xl font-semibold mb-3"
        >
          4. Data Sharing
        </h2>
        <p>
          We never sell, rent, or trade any information. We may share limited
          data with trusted third-party service providers who help us operate
          our services, such as:
        </p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>Payment processors (for secure transactions).</li>
          <li>
            Email or SMS service providers (for notifications or opt-in
            marketing).
          </li>
          <li>Analytics tools (to improve performance and user experience).</li>
          <li>
            Legal authorities, if required by applicable law or court order.
          </li>
        </ul>
        <p className="mt-2">
          All third parties are bound by confidentiality and data protection
          agreements.
        </p>
      </section>

      <section id="cookies-tracking" aria-labelledby="cookies-heading">
        <h2
          id="cookies-heading"
          className="tracking-wider text-2xl font-semibold mb-3"
        >
          5. Cookies & Tracking
        </h2>
        <p>
          Our platforms use essential cookies to ensure functionality (such as
          login sessions or cart persistence). Non-essential cookies, such as
          those used for analytics or marketing, are activated only after user
          consent. Users can manage or withdraw cookie preferences through
          available settings.
        </p>
      </section>

      <section id="data-retention" aria-labelledby="data-retention-heading">
        <h2
          id="data-retention-heading"
          className="tracking-wider text-2xl font-semibold mb-3"
        >
          6. Data Retention & Security
        </h2>
        <p>
          We retain data only as long as necessary to fulfill legitimate
          business, tax, or legal obligations:
        </p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>Transaction data: retained for up to 1 year.</li>
          <li>
            Marketing data: retained until the user unsubscribes or requests
            deletion.
          </li>
        </ul>
        <p className="mt-2">
          All data is securely encrypted, stored on industry-standard servers,
          and protected with access control, firewalls, and regular audits.
        </p>
      </section>

      <section id="your-rights" aria-labelledby="rights-heading">
        <h2
          id="rights-heading"
          className="tracking-wider text-2xl font-semibold mb-3"
        >
          7. Your Rights
        </h2>
        <p>Clients and their users have the right to:</p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>Access a copy of their personal data.</li>
          <li>Request correction or deletion of inaccurate data.</li>
          <li>Limit or object to data processing.</li>
          <li>Withdraw consent to marketing communications at any time.</li>
        </ul>
        <p className="mt-2">
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:privacy@quickprimetech.com"
            className="text-blue-600 underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-sm"
          >
            privacy@quickprimetech.com
          </a>
          .
        </p>
      </section>

      <section id="policy-updates" aria-labelledby="policy-updates-heading">
        <h2
          id="policy-updates-heading"
          className="tracking-wider text-2xl font-semibold mb-3"
        >
          8. Policy Updates
        </h2>
        <p>
          We may occasionally update this Privacy Policy to reflect operational
          changes, legal requirements, or security improvements. The “Effective
          Date” above indicates when the latest revision took effect.
        </p>
      </section>

      <section id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-2xl font-semibold mb-3">
          9. Contact Us
        </h2>
        <p>For any questions, concerns, or data requests, please contact:</p>
        <address className="mt-2 not-italic">
          <strong>Data Protection Officer:</strong> Derick, Founder & CEO of
          QuickPrimeTech <br />
          <a
            href="mailto:privacy@quickprimetech.com"
            className="text-blue-600 underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-sm"
          >
            privacy@quickprimetech.com
          </a>
          <br />
          Address: Wood Ave, Nairobi
        </address>
      </section>

      <footer
        id="footer"
        role="contentinfo"
        className="pt-8 border-t text-xs text-gray-500"
      >
        <p>
          This Privacy Policy explains how we handle client and user data. While
          QuickPrimeTech manages the technical infrastructure, each client is
          responsible for ensuring compliance with applicable data protection
          laws. Review this policy with legal counsel to ensure alignment with
          regulations such as the GDPR, CCPA, and the Kenyan Data Protection
          Act.
        </p>
      </footer>
    </main>
  );
}
