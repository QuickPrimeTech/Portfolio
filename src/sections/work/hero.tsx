import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Section, Header, H1, SubTitle } from "@/components/typography";
import Link from "next/link";

const Hero = () => {
  return (
    <Section className="py-20 bg-gray-50" aria-labelledby="work-header">
      <Header>
        <H1 id="work-header">
          Our <span className="text-secondary">Restaurant</span> Success Stories
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

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
        <div className="text-gray-600">Projects Completed</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
        <div className="text-gray-600">Client Satisfaction</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
        <div className="text-gray-600">Avg. Booking Increase</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">2-4</div>
        <div className="text-gray-600">Weeks to Launch</div>
      </div>
    </div>
  );
};
export default Hero;
