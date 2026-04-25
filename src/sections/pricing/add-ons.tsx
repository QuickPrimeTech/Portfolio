import { Card } from "@/components/ui/card";
import { addOns } from "@/data/pricing";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const AddOns = () => {
  return (
    <Section className="py-20 bg-background">
      <Header>
        <Title>Optional Add-ons</Title>
        <SubTitle>
          Enhance your website with these additional services available for any
          package.
        </SubTitle>
      </Header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {addOns.map((addon, index) => {
          const Icon = addon.icon;
          return (
            <Card
              key={index}
              className="text-center px-4 hover:shadow-lg transition-shadow flex flex-col gap-0"
            >
              <Icon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="tracking-wider text-lg font-semibold mb-2">
                {addon.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {addon.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default AddOns;
