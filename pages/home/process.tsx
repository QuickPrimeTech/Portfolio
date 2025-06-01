import Link from "next/link";
import { Lightbulb, Palette, Code, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to launch, we make building your restaurant website
            simple and stress-free.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-red-200"></div>
              <div className="absolute top-16 left-0 w-1/3 h-0.5 bg-blue-600"></div>

              <div className="grid grid-cols-3 gap-8">
                {/* Step 1: Ideation */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-100 hover:border-blue-200 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Step 1: Ideation
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          Short discovery session to understand your brand,
                          menu, and clientele.
                        </p>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-700"
                        >
                          "We listen before we create."
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Design */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                      <Palette className="h-8 w-8 text-red-700" />
                    </div>
                    <div className="text-center">
                      <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-200 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Step 2: Design
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          Wireframes and modern design tailored to your
                          restaurant's vibe — elegant, rustic, modern, or chic.
                        </p>
                        <Badge
                          variant="secondary"
                          className="bg-red-100 text-red-700"
                        >
                          "Every pixel reflects your brand."
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Development */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                      <Code className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-blue-200 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Step 3: Development
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          Fast, mobile-first websites with online menus,
                          reservation systems, and social media integrations.
                        </p>
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700"
                        >
                          "Built to impress on every device."
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-200"></div>
              <div className="absolute left-8 top-0 h-32 w-0.5 bg-blue-600"></div>

              <div className="space-y-12">
                {/* Step 1: Ideation */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10 shadow-lg mr-6">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Step 1: Ideation
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Short discovery session to understand your brand, menu,
                        and clientele.
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-700"
                      >
                        "We listen before we create."
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Step 2: Design */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center relative z-10 shadow-lg mr-6">
                    <Palette className="h-8 w-8 text-red-700" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Step 2: Design
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Wireframes and modern design tailored to your
                        restaurant's vibe — elegant, rustic, modern, or chic.
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-red-100 text-red-700"
                      >
                        "Every pixel reflects your brand."
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Step 3: Development */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center relative z-10 shadow-lg mr-6">
                    <Code className="h-8 w-8 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Step 3: Development
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Fast, mobile-first websites with online menus,
                        reservation systems, and social media integrations.
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-700"
                      >
                        "Built to impress on every device."
                      </Badge>
                    </div>
                  </div>
                </div>
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
