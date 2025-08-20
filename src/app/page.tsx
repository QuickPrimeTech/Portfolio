import Hero from "@/sections/home/hero";
import { Process } from "@/sections/home/process";
import FeaturedProjects from "@/sections/home/projects";
import Pricing from "@/sections/home/pricing";
import { Features } from "@/sections/home/features";
import Faqs from "@/sections/home/faqs";
import Contact from "@/sections/home/contact";
// import CrazyOffers from "@/sections/home/crazy-offers";

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      {/* <CrazyOffers /> */}
      <Features />
      <FeaturedProjects />
      <Pricing />
      <Process />
      <Faqs />
      <Contact />
    </div>
  );
}

export default Portfolio;
