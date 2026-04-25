import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingFaqs } from "@/data/faqs";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const Faqs = () => {
  return (
    <Section className="bg-muted/30">
      <Header>
        <Title>Pricing FAQs</Title>
        <SubTitle> Common questions about our pricing and packages.</SubTitle>
      </Header>
      <div className="max-w-3xl w-full">
        <Accordion type="single" collapsible className="space-y-4">
          {pricingFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default Faqs;
