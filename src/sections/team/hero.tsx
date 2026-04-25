import { CircuitBoard } from "@/components/patterns/circuit-board";

export const Hero = () => {
  return (
    <section className="relative py-20">
      <CircuitBoard />
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Meet the <span className="text-primary">QuickPrimeTech</span> Team
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          We're a passionate team of designers, developers, and restaurant
          industry experts dedicated to helping your restaurant succeed online.
        </p>
      </div>
    </section>
  );
};
