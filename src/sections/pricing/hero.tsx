import { CircuitBoard } from "@/components/patterns/circuit-board";
import { Section, Header, H1, SubTitle } from "@/components/typography";

export const Hero = () => {
  return (
    <Section className="relative">
      <CircuitBoard />
      <Header>
        <H1>
          <span className="text-primary">Transparent Pricing</span> for Every
          Restaurant
        </H1>
        <SubTitle>
          Choose the perfect package for your restaurant. No hidden fees, no
          surprises. All prices include design, development, and launch.
        </SubTitle>
      </Header>
    </Section>
  );
};
