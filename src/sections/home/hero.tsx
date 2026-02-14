import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Utensils, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import { generateWhatsappLink } from "@/lib/helpers";
import { YouTubePlayer } from "@/components/ui/youtube-video-player";
import { Section } from "@/components/typography";

const heroFeatures = [
  {
    icon: Clock,
    text: "Accept reservations automatically, even while you sleep",
  },
  {
    icon: TrendingUp,
    text: "Capture private event inquiries worth thousands in revenue",
  },
  {
    icon: Utensils,
    text: "Showcase your menu beautifully to hungry customers online",
  },
  {
    icon: Star,
    text: "Build your brand and stand out from competitors",
  },
];

export default function Hero() {
  return (
    <Section id="hero" className="relative bg-muted overflow-hidden">
      {/* Content */}
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                Stop Losing Diners to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">
                    Bad Websites
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 text-primary/60"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6C25.75 8.375 83.5 -3 198 6"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                While you're cooking, your website should be booking. Get a 24/7
                revenue machine that fills tables while you sleep.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {heroFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-0.5 shrink-0 size-8 rounded-lg bg-primary/30 border border-primary/30 flex items-center justify-center group-hover:border-primary/70 group-hover:bg-primary/40 transition-all duration-200">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm md:text-base leading-relaxed pt-1">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" asChild>
                <Link
                  href={generateWhatsappLink(
                    "Hey there, I'm interested in getting my restaurant website done",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href={"/projects"}>See Our Work</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-2 text-muted-foreground text-xs">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-medium text-muted-foreground"
                  >
                    {i === 4 ? "+" : "R"}
                  </div>
                ))}
              </div>
              <p>Join other restaurants already growing</p>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative lg:pl-8">
            {/* Subtle Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-40" />

            {/* Video Container */}
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-border bg-card">
              <div className="aspect-video relative">
                <YouTubePlayer
                  className="w-full h-full"
                  videoId="2RRE2Hosyxk"
                  customThumbnail="https://res.cloudinary.com/quick-prime-tech/image/upload/v1771076145/Thumbnail_hwa60a.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
