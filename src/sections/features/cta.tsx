import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/typography";

export default function CTA() {
  return (
    <Section className="w-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Ready to Transform Your Restaurant's Online Presence?
        </h2>
        <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
          Join hundreds of successful restaurants who have increased their
          reservations and revenue with our professional websites. We'll prove
          our value upfront - no cost to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full h-12 px-8 text-base"
          >
            Start Free Trial
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
          >
            Schedule a Demo
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
