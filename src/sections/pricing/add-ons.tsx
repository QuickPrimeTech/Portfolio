import { Card } from "@/components/ui/card";
import { BarChart3, Calendar, Headphones, Mail } from "lucide-react";

const addOns = [
  {
    title: "Advanced SEO Optimization",
    description: "Advanced SEO setup and local search optimization",
    price: "$199.99",
    icon: BarChart3,
  },
  {
    title: "Extended Support",
    description: "6 months of priority support and updates",
    price: "$99.99",
    icon: Headphones,
  },
  {
    title: "Newsletter Signup",
    description:
      "Get your customers to sign up to your newletter and keep them engaged",
    price: "$89.99",
    icon: Mail,
  },
  {
    title: "Custom Reservation System",
    description:
      "Stop paying expensive prices for third-party apps and have it get table bookings right from your webiste",
    price: "$299.99",
    icon: Calendar,
  },
];

const AddOns = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Optional Add-ons
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enhance your website with these additional services available for
            any package.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {addOns.map((addon, index) => {
            const Icon = addon.icon;
            return (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <Icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{addon.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {addon.description}
                </p>
                <p className="text-2xl font-bold text-secondary">
                  {addon.price}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
