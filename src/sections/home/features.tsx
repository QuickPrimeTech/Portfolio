import {
  Smartphone,
  Check,
  ArrowRight,
  BarChart3,
  QrCode,
  Calendar,
} from "lucide-react";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/image";

const features = [
  {
    title: "Smart Digital Menus",
    description:
      "Transform your traditional menu into an interactive digital experience. Customers can browse, customize orders, and see real-time availability with stunning visuals and detailed descriptions.",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752168642/PortfolioShotSmartMenu_bkeq6z.png",
    icon: Smartphone,
    benefits: ["Instant updates", "Visual appeal", "Multilingual support"],
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-700",
  },
  {
    title: "Restaurant Management Dashboard",
    description:
      "Comprehensive control center for your restaurant operations. Manage reservations, track inventory, monitor staff performance, and analyze customer data all from one powerful platform.",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752168690/PortfolioShotRestaurantManagement_rlx1im.png",
    icon: BarChart3,
    benefits: ["Real-time analytics", "Staff management", "Inventory tracking"],
    bgColor: "bg-indigo-500/20",
    iconColor: "text-indigo-700",
  },
  {
    title: "QR Code Integration",
    description:
      "Contactless dining made simple. Generate custom QR codes that instantly connect customers to your smart menu, reducing wait times and enhancing the dining experience.",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752217196/PortfolioShotCustomQRCode_qitvwg.png",
    icon: QrCode,
    benefits: ["Faster service", "Reduced costs"],
    bgColor: "bg-teal-500/20",
    iconColor: "text-teal-700",
  },
  {
    title: "Reservation Management System",
    description:
      "Simplify how guests book tables with an easy-to-use reservation system. Manage seating, prevent overbooking, and deliver a seamless dining experience from the start.",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752168675/PortfolioShotReservation_ohq9mm.png",
    icon: Calendar,
    benefits: [
      "Real-time table availability",
      "Automated confirmations",
      "Peak hour optimization",
    ],
    bgColor: "bg-amber-500/20",
    iconColor: "text-amber-700",
  },
];

export const Features = () => {
  return (
    <Section id="features" aria-labelledby="features-header">
      <Header className="max-w-3xl mx-auto text-center space-y-4">
        <Title id="features-header">Features That Drive Results</Title>
        <SubTitle>
          Our comprehensive suite of tools is designed to revolutionize every
          aspect of your restaurant operations.
        </SubTitle>
      </Header>

      <div className="mt-8 space-y-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10 md:gap-12`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-sm overflow-hidden relative">
              <ImageWithFallback
                src={feature.image}
                alt="Description of the image"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-xl shrink-0 ${feature.bgColor} ${feature.iconColor}`}
                >
                  {<feature.icon className="size-8" />}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size={"lg"} asChild>
                <Link href={"/features#features"}>
                  Learn More
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
