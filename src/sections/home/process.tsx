// @/sections/home/process.tsx

import { MonitorSmartphone, PencilRuler, Code2, Rocket } from "lucide-react";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "Discovery",
    icon: MonitorSmartphone,
    gradient: "from-blue-500 to-indigo-600",
    description:
      "We start by chatting with you to understand your restaurant’s goals, style, and what makes it special. This helps us build a website that truly represents your brand.",
  },
  {
    number: 2,
    title: "Design",
    icon: PencilRuler,
    gradient: "from-purple-500 to-pink-500",
    description:
      "We create a visual preview of your website—like a sketch. You’ll see what the pages look like, where your menu goes, and how customers will interact with it.",
  },
  {
    number: 3,
    title: "Build",
    icon: Code2,
    gradient: "from-emerald-500 to-teal-600",
    description:
      "We take the approved design and turn it into a real, working website. We connect all the features like menu browsing, booking, or ordering if needed.",
  },
  {
    number: 4,
    title: "Launch",
    icon: Rocket,
    gradient: "from-amber-500 to-orange-600",
    description:
      "After testing everything, we launch your site and make it live for customers. We’ll also show you how to use it—or manage it for you if you prefer.",
  },
];

export const Process = () => {
  return (
    <Section className="bg-gray-50">
      <Header className="text-center mb-12">
        <Title>Our Process</Title>
        <SubTitle>
          This is a very smooth process that doesn&apos;t require any technical
          expertise from your end.
        </SubTitle>
      </Header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step) => (
          <Card
            key={step.number}
            className="flex flex-col items-center text-center p-6 shadow-md border-none"
          >
            <div
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-full mb-4 text-white shadow-lg",
                `bg-gradient-to-tr ${step.gradient}`
              )}
            >
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {step.number}. {step.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
