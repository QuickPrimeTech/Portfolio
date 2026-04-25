import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Section, Header, H1, SubTitle } from "@/components/typography";
import Link from "next/link";
import { CircuitBoard } from "@/components/patterns/circuit-board";

export const Hero = () => {
  return (
    <Section className="relative py-20" aria-labelledby="work-header">
      {/* Diagonal Grid with Light */}
      <CircuitBoard />
      {/* Your Content/Components */}
      <Header>
        <H1 id="work-header">
          Our <span className="text-primary">Restaurant</span> Success Stories
        </H1>
        <SubTitle>
          Discover how we've helped restaurants transform their online presence,
          increase bookings, and grow their business with custom websites that
          deliver real results.
        </SubTitle>
      </Header>
      <Button size="lg" asChild>
        <Link href={`${process.env.NEXT_PUBLIC_CONTACT_ME_URL}`}>
          Start Your Project
          <ExternalLink />
        </Link>
      </Button>
    </Section>
  );
};
