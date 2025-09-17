import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="py-20 md:py-32 lg:py-40">
          {/* Heading and description */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Elevate Your Restaurant&apos;s Digital Presence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional restaurant websites that drive reservations, showcase
              your cuisine, and streamline operations. From menu management to
              private events — we&apos;ve got you covered.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full h-12 px-8 text-base"
                asChild
              >
                <Link href={"#features"}>
                  Explore Features
                  <ArrowDownCircle className="size-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base bg-transparent"
                asChild
              >
                <Link href={process.env.NEXT_PUBLIC_CONTACT_ME_URL ?? ""}>
                  Contact Us
                  <ExternalLink className="size-5" />
                </Link>
              </Button>
            </div>

            {/* Selling points */}
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Check className="size-4 text-primary" />
                <span>No upfront cost</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="size-4 text-primary" />
                <span>Results Based Pricing</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="size-4 text-primary" />
                <span>Value First</span>
              </div>
            </div>
          </div>

          {/* Image preview */}
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-xl p-6 overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
              <Image
                src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1752168690/PortfolioShotRestaurantManagement_rlx1im.png"
                width={1280}
                height={720}
                alt="QuickPrimeTech dashboard"
                className="w-full h-auto rounded-xl"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
