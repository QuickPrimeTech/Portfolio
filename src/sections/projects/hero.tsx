import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Section, Header, H1, SubTitle } from "@/components/typography";
import Link from "next/link";
import { CircuitBoard } from "@/components/patterns/circuit-board";

export const Hero = () => {
  return (
    <Section className="relative py-16" aria-labelledby="work-header">
      <CircuitBoard />

      <Header>
        <H1 id="work-header">
          Our <span className="text-primary">Web Design</span> Success Stories
        </H1>

        <SubTitle>
          Discover how we've helped businesses transform their online presence,
          attract more customers, and grow through high-performance custom
          websites built for real results.
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
