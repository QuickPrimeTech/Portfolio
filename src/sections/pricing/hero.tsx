import { CircuitBoard } from "@/components/patterns/circuit-board";
import { Section, Header, H1, SubTitle } from "@/components/typography";

export const Hero = () => {
  return (
    <Section className="relative">
      <CircuitBoard />

      <Header>
        <H1>
          <span className="text-primary">Transparent Pricing</span> for Every
          Business
        </H1>

        <SubTitle>
          Choose the right package for your needs. No hidden fees, no surprises
          — just high-quality design, development, and launch built for real
          results.
        </SubTitle>
      </Header>
    </Section>
  );
};
