import { ChefHat, Clock, Users, Smartphone } from "lucide-react";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: ChefHat,
    title: "Restaurant Specialists",
    description:
      "We only work with restaurants, so we understand your unique needs and challenges.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get your new website live in just 2-4 weeks, not months.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Built for mobile, optimized for Google, designed to convert visitors into customers.",
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description:
      "Easy updates and optional ongoing support to keep your site fresh and current.",
  },
];

const WhyChooseUs = () => {
  return (
    <Section id="why-choose-us" aria-labelledby="why-choose-us-header">
      <Header>
        <Title id="why-choose-us-header">
          Why <span className="text-secondary">Choose</span> QuickPrimeTech?
        </Title>
        <SubTitle>
          We're not just web developers – we're restaurant industry specialists.
        </SubTitle>
      </Header>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, description }, index) => (
          <Card
            key={index}
            className="text-center p-6 flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Icon className="h-8 w-8 text-secondary" />
            </div>
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
