import { BarChart3, Users, Search, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Feature, FeaturesContainer } from "@/components/ui/feature";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const qualityStandards = [
  {
    title: "Performance",
    description: "90+ PageSpeed score on all devices",
    icon: BarChart3,
    metrics: ["< 3s load time", "90+ Lighthouse score", "Optimized images"],
  },
  {
    title: "Accessibility",
    description: "WCAG 2.1 AA compliance for all users",
    icon: Users,
    metrics: [
      "Screen reader compatible",
      "Keyboard navigation",
      "Color contrast",
    ],
  },
  {
    title: "SEO",
    description: "Optimized for search engines and local discovery",
    icon: Search,
    metrics: ["Meta tags", "Schema markup", "Local SEO"],
  },
  {
    title: "Security",
    description: "Industry-standard security measures",
    icon: Shield,
    metrics: ["SSL certificate", "Secure forms", "Regular updates"],
  },
];

const Standards = () => {
  return (
    <Section className="py-20 bg-gray-50">
      <Header>
        <Title>Quality Standards</Title>
        <SubTitle>
          Every website we deliver meets our rigorous quality standards for
          performance, accessibility, and user experience.
        </SubTitle>
      </Header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        {qualityStandards.map((standard, index) => (
          <Card
            key={index}
            className="p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <standard.icon className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-4">{standard.title}</h3>
            <p className="text-gray-600 mb-6">{standard.description}</p>
            <FeaturesContainer>
              {standard.metrics.map((metric, index) => (
                <Feature key={index}>{metric}</Feature>
              ))}
            </FeaturesContainer>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Standards;
