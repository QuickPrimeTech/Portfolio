import { BarChart3, Users, Search, Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every website we deliver meets our rigorous quality standards for
            performance, accessibility, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {qualityStandards.map((standard, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <standard.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{standard.title}</h3>
              <p className="text-gray-600 mb-6">{standard.description}</p>
              <ul className="space-y-2">
                {standard.metrics.map((metric, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center text-sm text-gray-500"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {metric}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standards;
