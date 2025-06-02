import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          We Build Restaurant Websites That Boost Your Revenue with{" "}
          <span className="text-blue-600">No Setup Fees.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          No setup fees. No big upfront costs. Just a simple monthly plan to
          keep your website updated, secure, and looking fresh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Get Free Website
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            See Work
          </Button>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="70%" stopColor="#EE4B2B" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <path
          fill="url(#heroGradient)"
          d="M0,224L60,213.3C120,203,240,181,360,154.7C480,128,600,96,720,112C840,128,960,192,1080,192C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
