import { ChefHat, Clock, Users, Smartphone } from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-secondary">Choose</span> QuickPrimeTech?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just web developers – we're restaurant industry
            specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
