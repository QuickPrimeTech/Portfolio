import Link from "next/link";
import { Lightbulb, Palette, Code, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Step 1: Ideation",
    description:
      "Short discovery session to understand your brand, menu, and clientele.",
    quote: "We listen before we create.",
    icon: Lightbulb,
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    cardBg: "bg-blue-50",
    borderColor: "border-blue-100",
    quoteColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Step 2: Design",
    description:
      "Wireframes and modern design tailored to your restaurant's vibe — elegant, rustic, modern, or chic.",
    quote: "Every pixel reflects your brand.",
    icon: Palette,
    iconBg: "bg-red-200",
    iconColor: "text-red-700",
    cardBg: "bg-red-50",
    borderColor: "border-red-200",
    quoteColor: "bg-red-100 text-red-700",
  },
  {
    id: 3,
    title: "Step 3: Development",
    description:
      "Fast, mobile-first websites with online menus, reservation systems, and social media integrations.",
    quote: "Built to impress on every device.",
    icon: Code,
    iconBg: "bg-gray-300",
    iconColor: "text-gray-600",
    cardBg: "bg-gray-50",
    borderColor: "border-gray-200",
    quoteColor: "bg-gray-100 text-gray-700",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-secondary">Proven</span> Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to launch, we make building your restaurant website
            simple and stress-free.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Mobile Timeline */}
          <div className="">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary"></div>
              <div className="absolute left-8 top-0 h-32 w-0.5 bg-blue-600"></div>
              <div className="space-y-12">
                {/* Step 1: Ideation */}
                {steps.map((step) => (
                  <div className="relative flex items-start" key={step.id}>
                    <div
                      className={cn(
                        "w-16 h-16",
                        step.iconBg,
                        "rounded-full flex items-center justify-center relative z-10 shadow-lg mr-6"
                      )}
                    >
                      <step.icon className={cn("h-8 w-8", step.iconColor)} />
                    </div>
                    <div className="flex-1">
                      <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          {step.description}
                        </p>
                        <Badge
                          variant="secondary"
                          className={cn("bg-secondary/10", step.quoteColor)}
                        >
                          "{step.quote}"
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA to detailed process */}
        <div className="text-center mt-12">
          <Link href="/process">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              View Detailed Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;
