import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "@/pages/home/hero";
import Process from "@/pages/home/process";
import FeaturedProjects from "@/pages/home/projects";
import Pricing from "@/pages/home/pricing";
import ClientExperience from "@/pages/home/client-experience";
import WhyChooseUs from "@/pages/home/why-choose-us";
import Faqs from "@/pages/home/faqs";
import Contact from "@/pages/home/contact";
import Footer from "@/layouts/client/footer";

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhyChooseUs />
      <FeaturedProjects />
      <Pricing />
      <ClientExperience />
      <Process />
      <Faqs />
      <Contact />
    </div>
  );
}

export default Portfolio;
