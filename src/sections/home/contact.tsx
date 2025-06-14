import ContactForm from "@/components/client/contact-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Instagram, Send } from "lucide-react";
import Link from "next/link";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const Contact = () => {
  return (
    <Section id="contact" className="py-20 bg-blue-600 text-white">
      <Header>
        <Title>Let's Build a Site That Feeds Your Growth</Title>
        <SubTitle className="text-white">
          Ready to transform your restaurant's online presence? Let's start with
          a free consultation.
        </SubTitle>
      </Header>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
        <ContactForm />
        <ContactCard />
      </div>
    </Section>
  );
};

const contactDetails = [
  {
    name: "Phone",
    icon: Phone,
    value: "+254717448835",
  },
  {
    name: "Email",
    icon: Mail,
    value: "quickprimetech@gmail.com",
  },
  {
    name: "Instagram",
    icon: Instagram,
    value: "@quickprimetech",
  },
];

const ContactCard = () => {
  return (
    <Card className="bg-white/10 border border-white/20 rounded-xl shadow-lg w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-white text-center">
          Or Contact Us Through
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactDetails.map((contact, index) => (
          <div className="flex text-white gap-2" key={index}>
            <div className="p-2 rounded-full bg-blue-400 h-fit">
              <contact.icon className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="text-semibold">{contact.name}</h4>
              <p>{contact.value}</p>
            </div>
          </div>
        ))}
        <Button
          className="w-full bg-white text-blue-600 hover:bg-gray-100"
          asChild
        >
          <Link href={`${process.env.NEXT_PUBLIC_CONTACT_ME_URL}`}>
            Text Us On Whatsapp
            <Send />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
export default Contact;
