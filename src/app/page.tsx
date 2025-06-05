import Hero from "@/sections/home/hero";
import Process from "@/sections/home/process";
import FeaturedProjects from "@/sections/home/projects";
import Pricing from "@/sections/home/pricing";
import ClientExperience from "@/sections/home/testimonials";
import WhyChooseUs from "@/sections/home/why-choose-us";
import Faqs from "@/sections/home/faqs";
import Contact from "@/sections/home/contact";

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
