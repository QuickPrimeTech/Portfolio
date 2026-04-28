import { ImageWithFallback } from "@/components/ui/image";

export const AboutSection = () => {
  return (
    <section id="about" className="section-x section-y">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 h-0.5 bg-primary block" />
        <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-primary">
          About the Client
        </span>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-5">
        Authentic Indo-Chinese &<br />
        <span className="italic text-primary">Cuisine</span> in Gigiri
      </h2>
      <p className="text-muted-foreground font-light text-base leading-relaxed max-w-xl mb-12">
        Li's Chinese Restaurant serves the Gigiri community with a passion for
        traditional Ido-Chinese recipes. Open from Tuesday to Sunday every week,
        they offer dine-in, takeout, and table reservations.
      </p>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-card border border-border rounded-lg aspect-3/2 flex flex-col items-center justify-center relative overflow-hidden">
          <ImageWithFallback
            src={
              "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777367872/lis-chinese-preview_k0eiud.png"
            }
            alt="mockup of li's chinese restaurant nairobi website"
            fill
          />
          <span className="absolute bottom-4 left-4 text-[0.65rem] tracking-widest uppercase text-muted-foreground">
            Petrocity, Gigiri, Nairobi
          </span>
        </div>
        <ul className="divide-y divide-border">
          {[
            ["Cuisine", "Indo-Chinese · Dim Sum"],
            ["Hours", "Tuesday – Sunday, 11:0 am – 10:30 pm"],
            ["Phone", "+254 746 815 106"],
            [
              "Signature Dishes",
              "crispy sticky rice with chicken, fried pigeon, and various Cantonese-style comfort foods",
            ],
            [
              "Project Scope",
              "Web design, development, reservations, careers portal, SEO",
            ],
          ].map(([label, value]) => (
            <li key={label} className="py-4 flex flex-col gap-1">
              <span className="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-primary">
                {label}
              </span>
              <span className="text-sm text-foreground">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
