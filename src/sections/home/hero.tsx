import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, BarChart3, Layers } from "lucide-react";
import Link from "next/link";
import { generateWhatsappLink } from "@/lib/helpers";
import { ImageWithFallback } from "@/components/ui/image";

const heroFeatures = [
  {
    icon: Globe,
    text: "A professional online presence that works for you 24/7",
  },
  {
    icon: Zap,
    text: "Fast, mobile-first builds delivered in days — not months",
  },
  {
    icon: BarChart3,
    text: "Conversion-focused design that turns visitors into customers",
  },
  {
    icon: Layers,
    text: "Every site custom-built — no templates, no compromises",
  },
];

const industries = [
  "E-commerce",
  "Law Firms",
  "Gyms & Fitness",
  "Consultants",
  "Startups",
  "Portfolios",
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-12 section-x">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}  
      />

      <div className="container flex flex-col-reverse mx-auto relative">
        <div className="relative lg:absolute max-sm:inset-4 lg:-right-30 lg:top-1/2 lg:-translate-y-1/2 lg:w-180 aspect-3/2">
          <div className="absolute hidden lg:block bg-linear-to-br from-background/80 to-transparent size-full z-10" />
          <ImageWithFallback
            src={
              "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777211364/homepage-preview_eytq06.png"
            }
            alt="preview of projects made by QuickPrimeTech"
            fill
          />
        </div>
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left ── */}
          <div className="space-y-7 max-w-xl">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary tracking-wide">
                Available for new projects
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.05] tracking-tight">
                Your website should be your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">
                    best salesperson.
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 text-primary/50"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6C40 2 120 2 198 6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We build custom, high-converting websites for businesses of
                every kind — with{" "}
                <span className="text-foreground font-medium">
                  no upfront cost
                </span>
                . Beautiful design, fast delivery, real results.
              </p>
            </div>

            {/* Feature list */}
            <ul className="space-y-3">
              {heroFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-0.5 shrink-0 size-8 rounded-lg bg-primary/20 border border-primary/25 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/35 transition-all duration-200">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm md:text-base leading-relaxed pt-1">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" asChild>
                <Link
                  href={generateWhatsappLink(
                    "Hey, I'm interested in getting a website built for my business",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">See Our Work</Link>
              </Button>
            </div>

            {/* Social proof + industry tags */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 text-muted-foreground text-xs">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-semibold text-muted-foreground"
                    >
                      {i === 4 ? "+" : "C"}
                    </div>
                  ))}
                </div>
                <p>
                  Trusted by businesses across{" "}
                  <span className="text-foreground font-medium">
                    6+ industries
                  </span>
                </p>
              </div>

              {/* Industry pills */}
              <div className="flex flex-wrap gap-2">
                {industries.map((name) => (
                  <span
                    key={name}
                    className="text-[11px] font-medium px-3 py-1 rounded-full bg-background border border-border text-muted-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* ── Right — Video + floating stat cards ── */}
          <div className="relative">
            {/* Floating stat — top left */}
            <div className="absolute -left-6 top-6 hidden lg:flex items-center gap-3 bg-card/60 backdrop-blur-sm border rounded-xl px-4 py-3 shadow-lg">
              <div className="size-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground leading-none mb-0.5">
                  Avg. delivery
                </p>
                <p className="text-sm font-bold text-foreground leading-none">
                  7 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
