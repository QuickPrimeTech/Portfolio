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
      <CtaTitle>Ready to Work with Our Team?</CtaTitle>
      <CtaDescription>
        Let's discuss your restaurant's goals and how our team can help you
        achieve them. Book a free consultation today.
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
