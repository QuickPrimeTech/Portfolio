// app/privacy-policy/page.tsx

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Effective Date: 1 January 2025</p>

      <p>
        [Agency Name] (“we”, “us”, “our”) builds and manages websites for
        restaurants. This policy explains how we collect, use and protect
        information when visitors browse a restaurant site we host, place online
        orders or bookings, sign up for marketing, or contact customer support.
      </p>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Name, email, phone, delivery address, dietary notes, payment details
            (PCI-compliant processor; we never store full card numbers).
          </li>
          <li>
            Reservation details (date, time, party size, special requests).
          </li>
          <li>
            IP address, browser type, device identifiers, pages visited,
            approximate location, cookies.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use It</h2>
        <p>
          Process orders & payments, confirm reservations, send service emails,
          deliver marketing (opt-in only), detect fraud, improve performance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing</h2>
        <p>
          We never sell data. We share only with the restaurant owner, payment
          processor, email/SMS platform, analytics providers or when legally
          required.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
        <p>
          Essential cookies keep you logged-in; analytics/marketing cookies are
          set only after consent. Manage choices via the footer “Cookie
          Settings” link.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Retention & Security
        </h2>
        <p>
          Orders: 7 years for tax; marketing: until unsubscribe. Data is
          encrypted, hashed, and hosted on ISO-certified servers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p>
          Access, correct, delete, restrict, export, object, opt-out. Email
          privacy@[agency-domain].com with the restaurant name.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact</h2>
        <p>
          Data Protection Officer: [Name] | privacy@[agency-domain].com |
          [Agency Legal Address]
        </p>
      </section>

      <p className="text-xs text-gray-500 mt-8">
        This template is for general information only; adapt to each
        restaurant’s data flows and obtain legal review.
      </p>
    </main>
  );
}
