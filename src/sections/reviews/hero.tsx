import { CircuitBoard } from "@/components/patterns/circuit-board";

export default function Hero() {
  return (
    <section className="relative py-20">
      <CircuitBoard />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
          What Our <span className="text-primary">Clients</span> Say
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Real feedback from businesses that have transformed their online
          presence and grown with high-performance websites built by
          QuickPrimeTech.
        </p>
      </div>
    </section>
  );
}
