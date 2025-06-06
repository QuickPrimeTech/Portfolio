import { ArrowRight } from "lucide-react";
import {
  Cta,
  CtaContent,
  CtaDescription,
  CtaTitle,
  CtaPrimaryButton,
} from "@/components/client/cta";

const CTA = () => {
  return (
    <Cta>
      <CtaTitle>Ready to Get Started?</CtaTitle>
      <CtaDescription>
        Let's discuss which package is perfect for your restaurant. Book a free
        consultation and we'll create a custom proposal.
      </CtaDescription>
      <CtaContent>
        <CtaPrimaryButton href={`${process.env.NEXT_PUBLIC_CONTACT_ME_URL}`}>
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </CtaPrimaryButton>
      </CtaContent>
    </Cta>
  );
};

export default CTA;
