import { Section, Header, H1, SubTitle } from "@/components/typography";

const Hero = () => {
  return (
    <Section className="bg-gray-50">
      <Header>
        <H1>
          <span className="text-secondary">Transparent Pricing</span> for Every
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

export default Hero;
