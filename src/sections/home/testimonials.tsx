import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Week 1: Discovery",
    description: "Understanding your vision and requirements",
  },
  {
    number: 2,
    title: "Week 2: Design",
    description: "Creating wireframes and visual designs",
  },
  {
    number: 3,
    title: "Week 3: Build",
    description: "Development and functionality integration",
  },
  {
    number: 4,
    title: "Week 4: Launch",
    description: "Testing, refinements, and going live",
  },
];

const ClientExperience = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Client Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No tech experience needed – we handle everything from start to
            finish.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;
