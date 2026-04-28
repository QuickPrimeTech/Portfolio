import { TrendingUp } from "lucide-react";

export const ChallengeSection = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Challenge */}
          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-destructive/50 via-destructive/20 to-transparent hidden lg:block" />

            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-destructive/10 text-destructive">
                <TrendingUp className="size-4 rotate-180" />
              </span>
              <span className="text-sm font-mono font-bold tracking-[0.2em] uppercase text-destructive">
                The Challenge
              </span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">
              No Online Presence,{" "}
              <span className="text-muted-foreground">No Digital Pipeline</span>
            </h3>

            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Before working with Quickprimtech, Li's Fusion had no dedicated
              website. Potential diners couldn't find their menu or location
              online, and there was no way to book a table without calling in.
            </p>

            <ul className="space-y-4">
              {[
                "Reservations handled by phone only",
                "No online menu discoverability",
                "No careers page, limiting hiring reach",
                "Missing from local search results entirely",
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-4 group">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-destructive/10 text-destructive text-xs font-bold shrink-0 mt-0.5 group-hover:bg-destructive group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block" />

            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                <TrendingUp className="size-4" />
              </span>
              <span className="text-sm font-mono font-bold tracking-[0.2em] uppercase text-primary">
                Our Solution
              </span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">
              A Complete Digital Home,{" "}
              <span className="text-primary">Built to Convert</span>
            </h3>

            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Quickprimtech designed and developed a refined, mobile-first
              website that reflects the warmth and authenticity of Li's Fusion —
              while driving real business results.
            </p>

            <ul className="space-y-4">
              {[
                "Branded website with full menu showcase",
                "Integrated table reservation system",
                "Careers portal with streamlined applications",
                "Local SEO optimisation for Orleans searches",
                "Google Business integration & structured data",
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-4 group">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
