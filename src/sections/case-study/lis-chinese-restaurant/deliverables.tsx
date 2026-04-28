const deliverables = [
  {
    icon: "🎨",
    title: "Brand-Led Web Design",
    desc: "A visual identity that honours the warmth and heritage of Li's Fusion's Cantonese and Szechuan cuisine.",
  },
  {
    icon: "📱",
    title: "Mobile-First Build",
    desc: "Fully responsive across all devices — most diners search on mobile before visiting.",
  },
  {
    icon: "📅",
    title: "Reservations System",
    desc: "Real-time table booking widget integrated directly into the website.",
  },
  {
    icon: "💼",
    title: "Careers Portal",
    desc: "Dedicated page for job seekers to browse roles and submit applications online.",
  },
  {
    icon: "🔍",
    title: "Local SEO",
    desc: "Keyword strategy and on-page optimisation targeting Orleans and Ottawa-area diners.",
  },
  {
    icon: "🗺️",
    title: "Google Maps Integration",
    desc: "Location embed with directions, hours, and click-to-call for easy discovery.",
  },
];

export const Deliverables = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-0.5 bg-primary block" />
          <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-primary">
            What We Delivered
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-12">
          Every Feature,
          <br />
          <span className="italic text-primary">Purpose-Built</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-200"
            >
              <div className="text-2xl mb-3">{d.icon}</div>
              <div className="font-semibold text-sm text-foreground mb-2">
                {d.title}
              </div>
              <div className="text-xs text-muted-foreground font-light leading-relaxed">
                {d.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
