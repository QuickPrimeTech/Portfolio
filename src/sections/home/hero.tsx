import { WavePattern, LinePattern } from "@/components/ui/background-pattern";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FeaturesContainer, Feature } from "@/components/client/feature";
import Link from "next/link";

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
            <span className="text-secondary">Grow</span> Your{" "}
            <span className="text-secondary">Revenue</span>.
          </h1>
          <FeaturesContainer>
            {points.map((point, index) => (
              <Feature key={index}>{point}</Feature>
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
                {" "}
                Get Free Website
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href={"/work"}>See Work</Link>
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
    <div className="relative z-10 flex -space-x-8">
      <Image
        width={430}
        height={900}
        src="https://res.cloudinary.com/dhlyei79o/image/upload/v1749112634/mockup1_xvblxz.png"
        alt="Image of a quickprimetech restaurant website mockup"
        className="relative z-10 shadow-sm w-1/2"
      />
      <Image
        width={430}
        height={900}
        src="https://res.cloudinary.com/dhlyei79o/image/upload/v1749112635/mockup2_hfwijf.png"
        alt="Image of a quickprimetech restaurant website mockup"
        className="w-1/2"
      />
    </div>
  );
};
export default Hero;
