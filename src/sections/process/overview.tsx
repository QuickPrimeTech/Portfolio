import { Section, Header, H1, SubTitle } from "@/components/typography";
import { Lightbulb, Palette, Code, Rocket, Headphones } from "lucide-react";

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
