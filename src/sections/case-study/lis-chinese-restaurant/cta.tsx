export const CTA = () => {
  return (
    <section className="bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-primary block" />
            <span className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-primary">
              Work With Us
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
            Ready to grow your
            <br />
            <span className="italic text-primary">digital presence?</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 shrink-0">
          <p className="text-background/50 text-sm font-light max-w-xs">
            Quickprimtech builds purposeful websites for restaurants, local
            businesses, and growing brands.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground text-[0.75rem] font-semibold tracking-[0.18em] uppercase px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
