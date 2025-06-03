import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "Can I update the menu myself?",
    answer:
      "We build all our sites with easy-to-use content management systems. You can update your menu, hours, photos, and more without any technical knowledge. We also provide training and ongoing support.",
  },
  {
    id: "item-2",
    question: "What if I don't have a logo or photos?",
    answer:
      "No problem! We can help with basic logo design and provide guidance on photography. For our Premium package, we include professional photography services. We can also work with stock photos initially and update with your own photos later.",
  },
  {
    id: "item-3",
    question: "Do you offer support after launch?",
    answer:
      "Yes! All packages include 30 days of free support after launch. We also offer ongoing maintenance packages for updates, security, and technical support. You'll never be left hanging.",
  },
  {
    id: "item-4",
    question: "How long does the process take?",
    answer:
      "Most projects are completed in 2-4 weeks from start to launch. The timeline depends on the package you choose and how quickly you can provide content and feedback. We'll give you a detailed timeline during our initial consultation.",
  },
  {
    id: "item-5",
    question: "Do you integrate with reservation systems?",
    answer:
      "Yes! We can integrate with popular reservation systems like OpenTable, Resy, and others. We can also build custom booking forms that send reservations directly to your email or preferred management system.",
  },
];

const Faqs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map(({ id, question, answer }) => (
              <AccordionItem
                key={id}
                value={id}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
