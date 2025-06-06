import { CheckCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const features = [
  {
    category: "Design & Development",
    items: [
      {
        name: "Custom Website Design",
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: "Mobile-First Responsive Design",
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: "Online Menu Display",
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: "Contact Page with Hours",
        starter: true,
        pro: true,
        premium: true,
      },
      { name: "Photo Gallery", starter: false, pro: true, premium: true },
      {
        name: "Custom Branding Strategy",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Professional Photography",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Custom Animations",
        starter: false,
        pro: false,
        premium: true,
      },
    ],
  },
  {
    category: "Functionality",
    items: [
      { name: "Basic SEO Setup", starter: true, pro: true, premium: true },
      {
        name: "Online Reservation System",
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: "Customer Reviews Integration",
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: "Social Media Integration",
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: "Event Booking System",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Online Ordering Integration",
        starter: false,
        pro: false,
        premium: true,
      },
      { name: "Newsletter Signup", starter: false, pro: true, premium: true },
      {
        name: "Advanced Analytics",
        starter: false,
        pro: false,
        premium: true,
      },
    ],
  },
  {
    category: "Support & Maintenance",
    items: [
      {
        name: "30 Days Free Support",
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: "Content Management Training",
        starter: true,
        pro: true,
        premium: true,
      },
      { name: "Priority Support", starter: false, pro: true, premium: true },
      {
        name: "Monthly Performance Reports",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Ongoing Maintenance",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "24/7 Technical Support",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Quarterly Strategy Reviews",
        starter: false,
        pro: false,
        premium: true,
      },
    ],
  },
];

const MorePricing = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detailed Feature Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See exactly what's included in each package to make the best choice
            for your restaurant.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="sticky top-16 z-40 bg-white border-b border-gray-200 grid grid-cols-4 gap-4 mb-8 py-4">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Features</h3>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Starter</h3>
                <p className="text-blue-600 font-bold">$800</p>
              </div>
              <div className="p-4 text-center bg-red-50 rounded-lg">
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="text-blue-600 font-bold">$1,500</p>
                <Badge className="mt-1 bg-blue-600">Most Popular</Badge>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Premium</h3>
                <p className="text-blue-600 font-bold">$2,500+</p>
              </div>
            </div>

            {/* Feature Categories */}
            <div className="pt-4">
              {features.map((category) => (
                <div key={category.category} className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 px-4">
                    {category.category}
                  </h4>
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-4 gap-4 py-3 border-b border-gray-200"
                    >
                      <div className="p-4">
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      <div className="p-4 text-center">
                        {item.starter ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </div>
                      <div className="p-4 text-center bg-red-50">
                        {item.pro ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </div>
                      <div className="p-4 text-center">
                        {item.premium ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorePricing;
