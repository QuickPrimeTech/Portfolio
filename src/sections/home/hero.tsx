import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";
import { StatCard } from "@/components/stat-card";
import Image from "next/image";
import Link from "next/link";
import { generateWhatsappLink } from "@/lib/helpers";

const heroFeatures = [
  "Accept reservations automatically, even while you sleep",
  "Capture private event inquiries worth thousands in revenue",
  "Showcase your menu beautifully to hungry customers online",
  "Build your brand and stand out from competitors",
];

const statCards = [
  {
    icon: TrendingUp,
    value: "+20%",
    label: "More Online Inquiries",
    change: "After launching their new site",
    position: "absolute -left-8 bottom-7 w-56 lg:w-64 animate-float",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Online Bookings & Menus",
    change: "Even when you're closed",
    position: "absolute -right-16 bottom-16 w-56 lg:w-64 animate-float-delayed",
  },
];

export default function Hero() {
  return (
    <section className="section-x min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
            radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 pt-6 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-4 py-2 rounded-full">
              For Restaurant Owners
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Turn More Diners Into{" "}
              <span className="text-secondary">Loyal Customers</span>
            </h1>

            <p className="md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Your restaurant deserves more than a basic website. Get a smart,
              conversion-focused online presence that takes reservations,
              showcases your menu, and drives revenue 24/7—without the tech
              headaches.
            </p>

            <ul className="space-y-4">
              {heroFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 size-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <Link
                  href={generateWhatsappLink(
                    "Hey there, I'm interested in getting my restaurant website done"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Website
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>

              <Button size="lg" variant="outline">
                See Projects
              </Button>
            </div>
          </div>

          {/* Right content */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2x aspect-3/2 rounded-md overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1753128233/762f6e1d-96c4-43c5-918a-65663b716339_decnfl.jpg"
                fill
                placeholder="blur"
                blurDataURL={
                  "data:image/png;base64,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"
                }
                alt="Successful restaurant owner"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stat Cards */}
            {statCards.map(
              ({ icon, value, label, change, position }, index) => (
                <StatCard
                  key={index}
                  icon={icon}
                  value={value}
                  label={label}
                  change={change}
                  className={position}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3s ease-in-out infinite 1.5s; }
      `}</style>
    </section>
  );
}
