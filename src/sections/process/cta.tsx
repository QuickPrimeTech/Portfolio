import { ArrowRight } from "lucide-react";
import {
  Cta,
  CtaContent,
  CtaDescription,
  CtaTitle,
  CtaPrimaryButton,
  CtaSecondaryButton,
} from "@/components/ui/cta";

const CTA = () => {
  return (
    <Cta>
      <CtaTitle>Ready to Start Your Project?</CtaTitle>
      <CtaDescription>
        Let's discuss your restaurant's goals and walk through our process
        together. Book a free consultation to get started.
      </CtaDescription>
      <CtaContent>
        <CtaPrimaryButton href={`${process.env.NEXT_PUBLIC_CONTACT_ME_URL}`}>
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </CtaPrimaryButton>
        <CtaSecondaryButton href="tel:+254717448835">
          Call +25417448835
        </CtaSecondaryButton>
      </CtaContent>
    </Cta>
  );
};

export default CTA;
