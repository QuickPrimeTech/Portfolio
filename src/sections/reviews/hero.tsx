import { CircuitBoard } from "@/components/patterns/circuit-board";

export default function Hero() {
  return (
    <section className="py-20">
      <CircuitBoard />
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
          What Our <span className="text-primary">Restaurant Partners</span> Say
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Real reviews from real restaurant owners who've transformed their
          online presence with QuickPrimeTech.
        </p>
      </div>
    </section>
  );
}
