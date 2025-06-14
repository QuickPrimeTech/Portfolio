import { Section, Header, Title, SubTitle } from "@/components/typography";

const steps = [
  {
    number: 1,
    title: "Week 1: Discovery",
    description: "Understanding your vision and requirements",
  },
  {
    number: 2,
    title: "Week 2: Design",
    description: "Creating wireframes and visual designs",
  },
  {
    number: 3,
    title: "Week 3: Build",
    description: "Development and functionality integration",
  },
  {
    number: 4,
    title: "Week 4: Launch",
    description: "Testing, refinements, and going live",
  },
];

const ClientExperience = () => {
  return (
    <Section className="bg-gray-50">
      <Header>
        <Title>The Client Experience</Title>
        <SubTitle>
          No tech experience needed – we handle everything from start to finish.
        </SubTitle>
      </Header>
      <div className="max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex-1 flex md:block items-start md:items-center text-center md:text-left mb-10 md:mb-0"
            >
              {/* Connector line - horizontal (desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6  w-full h-0.5 bg-secondary transform translate-x-1/2" />
              )}

              {/* Connector line - vertical (mobile/tablet) */}
              {index !== steps.length - 1 && (
                <div className="block md:hidden absolute left-6 top-12 h-full w-0.5 bg-secondary z-0" />
              )}

              {/* Step Content */}
              <div className="relative z-10 flex md:flex-col md:items-center gap-2">
                <div className="w-12 h-12 shrink-0 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {step.number}
                </div>
                <div className="text-start md:text-center">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ClientExperience;
