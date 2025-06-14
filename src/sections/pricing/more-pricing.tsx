import { CheckCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { FeatureCategory, Plan } from "@/types";

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
const plans: Plan[] = [
  { name: "Starter", price: "$800", key: "starter" },
  {
    name: "Pro",
    price: "$1,500",
    key: "pro",
    badge: "Most Popular",
    highlight: true,
  },
  { name: "Premium", price: "$2,500+", key: "premium" },
];

const MorePricing = () => {
  return (
    <Section className="bg-gray-50">
      <div className="container px-4 mx-auto">
        <Header>
          <Title>Detailed Feature Comparison</Title>
          <SubTitle>
            See exactly what's included in each package to make the best choice
            for your restaurant.
          </SubTitle>
        </Header>
        {/* Responsive Table Wrapper */}
        <FeatureTable features={features} />
      </div>
    </Section>
  );
};

const FeatureTable = ({ features }: { features: FeatureCategory[] }) => {
  return (
    <div className="max-w-6xl mx-auto overflow-x-auto relative">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-4 text-center bg-white border-b border-gray-200 sticky top-[72px] z-40">
          <div className="text-left px-4 py-4 bg-white sticky left-0 z-50 border-r border-gray-200 backdrop-blur-md">
            <h3 className="text-lg font-semibold">Features</h3>
          </div>
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`px-4 py-4 ${
                plan.highlight ? "bg-secondary/20 rounded-t-lg" : ""
              }`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-secondary font-bold">{plan.price}</p>
              {plan.badge && (
                <Badge className="mt-1 bg-secondary text-white">
                  {plan.badge}
                </Badge>
              )}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-200">
          {features.map((category) => (
            <div key={category.category} className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 my-6 px-4">
                {category.category}
              </h4>

              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-4 items-center text-center py-4"
                >
                  <div className="text-left px-4 text-gray-700 font-medium sticky left-0 z-10 bg-gray-50 border-r border-gray-200 backdrop-blur-md">
                    {item.name}
                  </div>
                  {plans.map((plan) => (
                    <FeatureCheck
                      key={plan.key}
                      available={
                        item[plan.key as "starter" | "pro" | "premium"]
                      }
                      highlight={plan.highlight}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCheck = ({
  available,
  highlight = false,
}: {
  available: boolean;
  highlight?: boolean;
}) => {
  const classes = highlight ? "bg-secondary/10 py-3 rounded" : "py-3";
  return (
    <div className={`${classes}`}>
      {available ? (
        <CheckCircle className="h-5 w-5 text-secondary mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-300 mx-auto" />
      )}
    </div>
  );
};

export default MorePricing;
