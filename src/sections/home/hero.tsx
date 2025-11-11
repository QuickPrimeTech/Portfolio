import { WavePattern, LinePattern } from "@/components/ui/background-pattern";
import { Button } from "@/components/ui/button";
import { FeaturesContainer } from "@/components/ui/feature";
import { Lightbulb, CheckCircle, Lock, Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const points = [
  {
    icon: CheckCircle,
    text: "Start taking reservations online",
  },
  {
    icon: Lightbulb,
    text: "Start getting reservations online",
  },
  {
    icon: Lock,
    text: "Start receiving private events inquiries online",
  },
  {
    icon: Rocket,
    text: "Showcase your menu online",
  },
  {
    icon: Rocket,
    text: "And much, much more",
  },
];

const Hero = () => {
  return (
    <section className="container py-8 h-screen lg:h-180 lg:py-12 relative bg-gray-50 overflow-hidden">
      <WavePattern className="w-full h-full bottom-0 absolute" />
      <LinePattern className="w-full h-full inset-0 absolute" />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="relative z-10 flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight font-serif">
            <span className="text-secondary">Supercharge</span> Your Restaurant{" "}
            <span className="text-secondary">Sales</span> With a Smart Website.
          </h1>
          <FeaturesContainer>
            {points.map((point, index) => (
              <li className="flex items-center" key={index}>
                <point.icon className="size-5 text-secondary mr-3 shrink-0" />
                {point.text}
              </li>
            ))}
          </FeaturesContainer>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=254717448835&text&type=phone_number&app_absent=0"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Website
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href={"/projects"}>See Work</Link>
            </Button>
          </div>
        </div>
        <Mockups />
      </div>
    </section>
  );
};

const Mockups = () => {
  return (
    <div className="relative z-10 w-100 aspect-9/16 shrink-0">
      <Image
       fill
        src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1749112634/mockup1_xvblxz.png"
        alt="Image of a quickprimetech restaurant website mockup"
        className="object-contain"
      />
      {/* <Image
        width={430}
        height={900}
        src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1749112635/mockup2_hfwijf.png"
        alt="Image of a quickprimetech restaurant website mockup"
        className="relative z-10 shadow-sm w-1/2"
      /> */}
    </div>
  );
};
export default Hero;
