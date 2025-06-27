import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WithChildrenAndClass } from "@/types";

interface Href {
  href: string;
}

function Cta({ children, className }: WithChildrenAndClass) {
  return (
    <section
      className={cn("py-20 bg-secondary text-secondary-foreground", className)}
    >
      <div className="container mx-auto px-4 text-center">{children}</div>
    </section>
  );
}

function CtaTitle({ children, className }: WithChildrenAndClass) {
  return (
    <h1
      className={cn(
        "text-3xl md:text-4xl font-bold mb-4 font-primary",
        className
      )}
    >
      {children}
    </h1>
  );
}

function CtaDescription({ children, className }: WithChildrenAndClass) {
  return (
    <p
      className={cn(
        "text-xl text-orange-100 max-w-2xl mx-auto mb-8",
        className
      )}
    >
      {children}
    </p>
  );
}

function CtaContent({ children, className }: WithChildrenAndClass) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row gap-4 justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}

function CtaPrimaryButton({
  children,
  className,
  href,
}: WithChildrenAndClass & Href) {
  return (
    <Button size="lg" asChild className={cn(className)}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

function CtaSecondaryButton({
  children,
  className,
  href,
}: WithChildrenAndClass & Href) {
  return (
    <Button size="lg" variant="outline" className={cn(className)} asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export {
  Cta,
  CtaTitle,
  CtaDescription,
  CtaContent,
  CtaPrimaryButton,
  CtaSecondaryButton,
};
