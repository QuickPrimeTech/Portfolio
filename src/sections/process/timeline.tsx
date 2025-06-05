import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Feature, FeaturesContainer } from "@/components/client/feature";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Starter",
    description: "Perfect for small cafes",
    duration: "1-2 Weeks",
    price: "From $69.99/month",
    features: [
      "Streamlined 3-week process",
      "Essential features only",
      "Basic design customization",
      "30 days support included",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Ideal for growing restaurants",
    duration: "2-3 Weeks",
    price: "From $99.99/month",
    features: [
      "Full 4-week process",
      "Advanced features included",
      "Custom design & branding",
      "Priority support included",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    description: "For upscale establishments",
    duration: "4-6 Weeks",
    price: "From $149.99/month",
    features: [
      "Extended 6-week process",
      "Custom features & integrations",
      "Professional photography",
      "Ongoing maintenance included",
    ],
    highlighted: false,
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Timeline & Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent timelines and pricing for each package level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, id) => (
            <Card
              key={id}
              className={cn(
                "border-2",
                pkg.highlighted
                  ? "border-secondary relative"
                  : "hover:border-secondary transition-colors"
              )}
            >
              {pkg.highlighted && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-secondary-foreground bg-secondary">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle
                  className={cn(
                    "text-2xl",
                    pkg.highlighted && "text-secondary"
                  )}
                >
                  {pkg.name}
                </CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="text-3xl font-bold mt-4">{pkg.duration}</div>
                <div className="text-lg text-gray-600">{pkg.price}</div>
              </CardHeader>
              <CardContent>
                <FeaturesContainer>
                  {pkg.features.map((feature, index) => (
                    <Feature key={index}>{feature}</Feature>
                  ))}
                </FeaturesContainer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
