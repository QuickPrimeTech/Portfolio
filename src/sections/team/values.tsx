import { Card } from "@/components/ui/card";
import {
  ChefHat,
  BarChart3,
  Users,
  Camera,
  Smartphone,
  Palette,
} from "lucide-react";

const data = [
  {
    icon: ChefHat,
    title: "Restaurant-First",
    desc: "We only work with restaurants, so we understand your unique challenges and opportunities better than anyone.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We're not just vendors – we're partners in your success. Your growth is our success, and we're committed for the long term.",
  },
  {
    icon: BarChart3,
    title: "Results-Driven",
    desc: "Every decision we make is focused on driving real business results – more customers, more bookings, more revenue.",
  },
  {
    icon: Palette,
    title: "Craftsmanship",
    desc: "We take pride in our work and attention to detail. Every pixel, every line of code, every interaction is carefully crafted.",
  },
  {
    icon: Smartphone,
    title: "Innovation",
    desc: "We stay ahead of technology trends and continuously improve our processes to deliver better results faster.",
  },
  {
    icon: Camera,
    title: "Transparency",
    desc: "Clear communication, honest timelines, and transparent pricing. No surprises, no hidden fees, no confusion.",
  },
];

const Values = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              id="values-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and how we work with
              our restaurant partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;
