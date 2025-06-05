import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Join Our Success Stories?
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          See why restaurant owners consistently rate us 5 stars. Let's create
          your success story next.
        </p>
        <Link href="/book-consultation">
          <Button size="lg" variant={"outline"}>
            Book Free Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
}
