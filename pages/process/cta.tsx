import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
          Let's discuss your restaurant's goals and walk through our process
          together. Book a free consultation to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            asChild
          >
            <Link href="/book-consultation">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={"tel:+254717448835"}>
              <Phone className="mr-2 h-5 w-5" />
              Call +25417448835
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
