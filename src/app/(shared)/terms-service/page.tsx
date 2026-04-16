// app/terms-service/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for QuickPrimeTech. Understand your rights, responsibilities, payment obligations, ownership of source code, liability limits, and data handling policies for restaurant websites and digital services.",
  keywords: [
    "QuickPrimeTech",
    "Terms of Service",
    "Restaurant Websites",
    "Online Menu",
    "Dashboard",
    "Digital Services",
    "Payment Policy",
    "Liability",
    "Data Privacy",
    "Source Code Ownership",
  ],
};

export default function TermsOfService() {
  return (
    <main
      id="main-content"
      className="max-w-4xl mx-auto px-6 md:px-8 py-12 text-gray-800 space-y-8 leading-relaxed"
    >
      <header className="space-y-2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500">Effective Date: 1 January 2025</p>
      </header>

      <section id="introduction">
        <p>
          Welcome to <strong>QuickPrimeTech</strong> (“we,” “us,” “our”). These
          Terms of Service (“Terms”) govern your use of our digital products and
          services, including restaurant websites, dashboards, and online
          ordering tools (collectively, the “Services”). By using our Services,
          you agree to these Terms in full.
        </p>
      </section>

      <section id="use-of-services">
        <h2 className="text-2xl font-semibold mb-3">1. Use of Services</h2>
        <p>
          You must be a restaurant owner, authorized representative, or have
          written permission to use our Services. You agree to provide accurate,
          up-to-date information and to maintain the confidentiality of your
          login credentials. Misuse of our Services or any unlawful activity is
          strictly prohibited.
        </p>
      </section>

      <section id="ownership-and-intellectual-property">
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Ownership and Intellectual Property
        </h2>
        <p>
          All software, source code, designs, and platform infrastructure remain
          the intellectual property of QuickPrimeTech until full payment is
          received. Upon complete payment, the restaurant owner may request
          delivery of the project’s source code and related assets. Once
          delivered, ownership of that specific project code transfers to the
          restaurant owner.
        </p>

        <p className="mt-4">
          However, because our system operates on a multi-tenant infrastructure,
          the underlying database that powers the platform is shared and cannot
          be transferred. If a restaurant chooses to host or manage the code
          independently, they must set up and manage their own database at their
          own cost. QuickPrimeTech is not obligated to migrate, create, or
          maintain an external database after handover.
        </p>

        <p className="mt-4">
          Alternatively, the restaurant owner may choose to have QuickPrimeTech
          continue managing the website, source code, security, and
          infrastructure on their behalf under a monthly maintenance and hosting
          plan. This ensures continued updates, scalability, and data protection
          without the need for the restaurant owner to handle technical
          management independently.
        </p>
      </section>

      <section id="payment-and-obligation">
        <h2 className="text-2xl font-semibold mb-3">
          3. Payment and Obligation
        </h2>
        <p>
          Restaurants agree to pay the agreed fees upon completion of the
          project or according to the specified payment schedule. Once all
          agreed deliverables have been completed and the website is fully
          functional as outlined in the project scope, payment is due in full —
          regardless of whether the restaurant has begun generating revenue.
        </p>
        <p className="mt-2">
          QuickPrimeTech is tax-compliant and may issue invoices using ETIMS or
          any other payment method convenient to the customer. We are not
          obligated to generate or send an invoice until payment has been
          received to protect against fraudulent requests. After full payment is
          confirmed, we will issue the corresponding invoice promptly.
        </p>
        <p className="mt-2">
          The restaurant owner’s financial or marketing performance is not a
          condition for payment. QuickPrimeTech’s obligation ends once all
          promised features have been delivered, tested, and integrated. We are
          not responsible for the restaurant’s profitability, traffic, or sales
          outcomes after delivery.
        </p>
      </section>

      <section id="limitation-of-liability">
        <h2 className="text-2xl font-semibold mb-3">
          7. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, QuickPrimeTech’s total
          liability for any claim arising from or related to these Terms, the
          Services, or the project shall not exceed the total amount paid by the
          restaurant owner for the relevant Services.
        </p>
        <p className="mt-2">
          QuickPrimeTech shall not be held liable for indirect, incidental,
          consequential, or special damages, including but not limited to lost
          profits, loss of data, loss of business opportunities, or any damages
          related to the restaurant’s marketing performance or operational
          outcomes.
        </p>
      </section>

      <section id="data-handling">
        <h2 className="text-2xl font-semibold mb-3">
          4. Data Handling and Privacy
        </h2>
        <p>
          We manage and maintain the shared databases that power restaurant
          websites. While we have technical access to the data for maintenance
          and troubleshooting, we do not view, sell, or disclose restaurant or
          customer information unless required by law or explicitly permitted by
          the restaurant owner. All data processing complies with our{" "}
          <a href="/privacy-policy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section id="restaurant-responsibilities">
        <h2 className="text-2xl font-semibold mb-3">
          5. Restaurant Responsibilities
        </h2>
        <p>
          Restaurant owners are responsible for ensuring that all business
          information, pricing, menus, and media provided to QuickPrimeTech are
          accurate and lawful. You are solely responsible for marketing and
          promoting your website after launch.
        </p>
      </section>

      <section id="termination">
        <h2 className="text-2xl font-semibold mb-3">6. Termination</h2>
        <p>
          Either party may terminate the agreement in writing. We reserve the
          right to suspend or terminate accounts that violate these Terms or
          misuse our Services. Upon termination, hosted websites may be taken
          offline, but restaurants may request a copy of their code and
          restaurant data (excluding shared infrastructure) within 30 days.
        </p>
      </section>

      <section id="changes-to-terms">
        <h2 className="text-2xl font-semibold mb-3">8. Changes to Terms</h2>
        <p>
          We may revise these Terms periodically to reflect operational updates
          or legal changes. The latest version will always be available on this
          page. Continued use of our Services after an update constitutes
          acceptance of the revised Terms.
        </p>
      </section>

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-3">9. Contact</h2>
        <p>
          For questions or disputes regarding these Terms, please contact our
          Data Protection Officer:
        </p>
        <address className="not-italic mt-2">
          <strong>Derick, Founder & CEO</strong>
          <br />
          QuickPrimeTech
          <br />
          Email:{" "}
          <a
            href="mailto:privacy@quickprimetech.com"
            className="text-indigo-600 hover:underline"
          >
            privacy@quickprimetech.com
          </a>
          <br />
          Address: Wood Ave, Nairobi, Kenya
        </address>
      </section>

      <footer
        id="legal-disclaimer"
        className="pt-8 border-t text-xs text-gray-500"
      >
        <p>
          This Terms of Service document is provided for general information
          purposes only and should be reviewed by legal counsel to ensure
          compliance with applicable laws in your jurisdiction. By using our
          Services, you acknowledge and agree to these Terms in full.
        </p>
      </footer>
    </main>
  );
}
