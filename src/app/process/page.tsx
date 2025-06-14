import Hero from "@/sections/process/overview";
import Steps from "@/sections/process/steps";
import Communication from "@/sections/process/communication";
import Tools from "@/sections/process/tools";
import Standards from "@/sections/process/standards";
import Timeline from "@/sections/process/timeline";
import CTA from "@/sections/process/cta";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Steps />
      <Communication />
      <Tools />
      <Standards />
      <Timeline />
      <CTA />
    </div>
  );
}
