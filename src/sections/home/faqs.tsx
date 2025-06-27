import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { homeFaqs } from "@/data/faqs";

const Faqs = () => {
  return (
    <Section className="bg-gray-50" id="faqs" aria-labelledby="faqs-title">
      <Header>
        <Title id="faqs-title"> Frequently Asked Questions</Title>
        <SubTitle>Get all of your doubts clarified</SubTitle>
      </Header>
      <div className="max-w-4xl w-full">
        <Accordion type="single" collapsible className="space-y-4">
          {homeFaqs.map(({ question, answer }, index) => (
            <AccordionItem
              key={index}
              value={`item - ${index + 1}`}
              className="bg-white rounded-lg px-6"
            >
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default Faqs;
