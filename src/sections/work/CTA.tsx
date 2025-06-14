import { ArrowRight } from "lucide-react";
import {
  Cta,
  CtaTitle,
  CtaDescription,
  CtaContent,
  CtaPrimaryButton,
  CtaSecondaryButton,
} from "@/components/client/cta";

const CTA = () => {
  return (
    <Cta>
      <CtaTitle>Ready to Join Our Success Stories?</CtaTitle>
      <CtaDescription className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
        Let's create a website that transforms your restaurant's online presence
        and drives real business results.
      </CtaDescription>
      <CtaContent className="flex flex-col sm:flex-row gap-4 justify-center">
        <CtaPrimaryButton href={`${process.env.NEXT_PUBLIC_CONTACT_ME_URL}`}>
          Start Your Project
          <ArrowRight className="ml-2 h-5 w-5" />
        </CtaPrimaryButton>
        <CtaSecondaryButton href="/pricing">
          View Pricing
        </CtaSecondaryButton>
      </CtaContent>
    </Cta>
  );
};

export default CTA;
