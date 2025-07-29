import Hero from "@/sections/team/hero";
import Team from "@/sections/team/team";
import CTA from "@/sections/team/cta";
import Values from "@/sections/team/values";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Team />
      <Values />
      <CTA />
    </div>
  );
}
