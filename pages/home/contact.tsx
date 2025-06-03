import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram, Send } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build a Site That Feeds Your Growth
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Ready to transform your restaurant's online presence? Let's start
            with a free consultation.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 mb-8"
          >
            <Link href="/book-consultation">Schedule a Free 15-Min Call</Link>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
          <MessageCard />
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

const MessageCard = () => {
  return (
    <Card className="bg-white/10 border border-white/20 rounded-xl shadow-lg w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-white text-center">
          Send Us a Message
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            placeholder="Your Name"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
          />
          <Input
            placeholder="Email Address"
            type="email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
          />
        </div>
        <Input
          placeholder="Restaurant Name"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
        />
        <Textarea
          placeholder="Tell us about your project..."
          className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
          rows={4}
        />
        <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
          Send Message
        </Button>
      </CardContent>
    </Card>
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
          <Link href={"https://wa.me/254717448835"}>
            Text Us On Whatsapp
            <Send />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
export default Contact;
