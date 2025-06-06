import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the base price?",
    answer:
      "All packages include complete design, development, testing, and launch of your website. You also get 30 days of free support, content management training, and basic SEO setup. No hidden fees or surprises.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! We offer flexible payment options including 50% upfront and 50% on completion, or monthly payment plans for Premium packages. Contact us to discuss what works best for your budget.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "You can upgrade your package at any time. We'll credit what you've already paid and only charge the difference. Many clients start with Starter and upgrade to Pro as their business grows.",
  },
  {
    question: "What if I need custom features?",
    answer:
      "We love custom projects! If you need features not listed in our packages, we'll provide a custom quote. Our Premium package is designed to be flexible and can accommodate most custom requirements.",
  },
  {
    question: "Are there any ongoing costs?",
    answer:
      "The only ongoing costs are optional: hosting ($10-20/month), domain name ($15/year), and maintenance packages (starting at $99/month). We'll help you set up affordable hosting and can manage everything for you if preferred.",
  },
];

const Faqs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing FAQs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about our pricing and packages.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
