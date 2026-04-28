import { Aurora } from "@/components/patterns/aurora";
import { Section } from "@/components/typography";
import { ImageWithFallback } from "@/components/ui/image";

export const HeroSection = () => {
  return (
    <Section
      id="hero"
      aria-labelledby="hero-header"
      className="relative isolate section-x overflow-hidden rounded-b-4xl"
    >
      <Aurora />
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-primary block" />
              <span className="text-sm font-semibold tracking-[0.22em] uppercase text-primary">
                Li's Chinese Restaurant — Case Study
              </span>
            </div>
            <h1
              id="hero-header"
              className="font-serif text-5xl md:text-7xl font-black leading-[1.05] mb-6"
            >
              Chinese Cuisine Restaurant
              <br />
              <span className="italic text-primary">Gigiri</span>
            </h1>
            <p className="text-muted-foreground font-light text-base max-w-md leading-relaxed">
              How Quickprimtech built a full-featured digital presence for one
              of Gigiris' most beloved Chinese restaurants — driving
              reservations, careers, and footfall through a single website.
            </p>
          </div>
          <div className="relative flex-1 aspect-3/2 bg-red-100 rounded-3xl overflow-hidden">
            <ImageWithFallback
              src={
                "https://res.cloudinary.com/quick-prime-tech/image/upload/v1761301076/lis-chinese-restaurant_xmgsxq.png"
              }
              alt="li's Chinese Restaurant website Mockup"
              sizes=""
              fill
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-foreground/30 border-dashed">
          {[
            ["Location", "Petrocity, Gigiri, Nairobi"],
            ["Industry", "Food & Hospitality"],
            ["Services", "Web Design, Dev, SEO"],
            ["Website", "lischineserestaurantnairobi.com"],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1">
              <span className="text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground font-medium">
                {k}
              </span>
              <span className="text-sm text-foreground">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
