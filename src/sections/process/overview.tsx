import { Section, Header, H1, SubTitle } from "@/components/typography";
import { Lightbulb, Palette, Code, Rocket, Headphones } from "lucide-react";

const phases = [
  {
    id: "discovery",
    name: "Discovery & Planning",
    duration: "Week 1",
    icon: Lightbulb,
    color: "orange",
    description: "Understanding your vision, goals, and requirements",
    progress: 100,
  },
  {
    id: "design",
    name: "Design & Wireframing",
    duration: "Week 2",
    icon: Palette,
    color: "blue",
    description: "Creating visual designs and user experience",
    progress: 75,
  },
  {
    id: "development",
    name: "Development & Build",
    duration: "Week 3",
    icon: Code,
    color: "green",
    description: "Building your website with modern technology",
    progress: 50,
  },
  {
    id: "launch",
    name: "Testing & Launch",
    duration: "Week 4",
    icon: Rocket,
    color: "purple",
    description: "Quality assurance and going live",
    progress: 25,
  },
  {
    id: "support",
    name: "Support & Growth",
    duration: "Ongoing",
    icon: Headphones,
    color: "gray",
    description: "Maintenance, updates, and optimization",
    progress: 0,
  },
];

const Hero = () => {
  return (
    <Section className="bg-muted">
      <Header>
        <H1>
          Our <span className="text-secondary">Proven Process</span>
        </H1>
        <SubTitle>
          From initial consultation to ongoing support, we've refined our
          process over 200+ restaurant projects to ensure your success every
          step of the way.
        </SubTitle>
      </Header>
    </Section>
  );
};

export default Hero;
