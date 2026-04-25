import { ArrowRight } from "lucide-react";
import {
  CtaDescription,
  CtaContent,
  CtaPrimaryButton,
  CtaSecondaryButton,
} from "@/components/ui/cta";
import { Aurora } from "@/components/patterns/aurora";

const CTA = () => {
  return (
    <div className="section-x section-y relative isolate">
      <Aurora />
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-center">
        Ready to Join Our Success Stories?
      </h2>
      <CtaDescription className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-8">
        Let's create a website that transforms your restaurant's online presence
        and drives real business results.
      </CtaDescription>
      <CtaContent className="flex flex-col sm:flex-row gap-4 justify-center">
        <CtaPrimaryButton href={`${process.env.NEXT_PUBLIC_CONTACT_ME_URL}`}>
          Start Your Project
          <ArrowRight className="ml-2 h-5 w-5" />
        </CtaPrimaryButton>
        <CtaSecondaryButton href="/pricing">View Pricing</CtaSecondaryButton>
      </CtaContent>
    </div>
  );
};

export default CTA;
