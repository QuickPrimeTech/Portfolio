import { WavePattern, LinePattern } from "@/components/ui/background-pattern";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Children } from "@/types";
import Image from "next/image";

const points = [
  "No setup fees",
  "No big upfront costs",
  "Custom website that will boost your revenue",
  "Low monthly subscription to keep your website secure and modern",
];
const Hero = () => {
  return (
    <section className="py-8 h-screen lg:py-12 relative bg-gray-50 overflow-hidden">
      <WavePattern className="w-full h-full bottom-0 absolute" />
      <LinePattern className="w-full h-full inset-0 absolute" />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="relative z-10 flex flex-col gap-6 grow-1 shrink-1">
          <h1 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight font-primary">
            Get Your Restaurant’s Website That{" "}
            <span className="text-blue-600">Grow</span> Your{" "}
            <span className="text-blue-600">Revenue</span>.
          </h1>
          <div className="flex flex-col gap-4">
            {points.map((point, index) => (
              <Point key={index}>{point}</Point>
            ))}
          </div>
          <div className="flex gap-4">
            <Button size="lg">
              Get Free Website
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              See Work
            </Button>
          </div>
        </div>
        <Mockups />
      </div>
    </section>
  );
};

const Point = ({ children }: Children) => {
  return (
    <div className="flex gap-2">
      <CheckCircle className="w-6 h-6 text-primary shrink-0" />
      {children}
    </div>
  );
};

const Mockups = () => {
  return (
    <div className="relative z-10 flex -space-x-8">
      {" "}
      {/* Removed w-fit for better control if needed */}
      <Image
        width={430}
        height={900}
        src="/mockup1.png"
        alt="Image of a quickprimetech restaurant website mockup"
        className="relative z-10 shadow-sm w-1/2"
      />
      <Image
        width={430}
        height={900}
        src="/mockup2.png"
        alt="Image of a quickprimetech restaurant website mockup"
        className="w-1/2"
      />
    </div>
  );
};
export default Hero;
