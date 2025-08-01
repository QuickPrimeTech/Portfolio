// @/sections/home/crazy-offers.ts

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";
import { generateWhatsappLink } from "@/lib/helpers";
import { FeatureItem } from "@/components/ui/feature";
import { CountdownTimer } from "@/components/countdown";

export default function CrazyOffers() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-6">
            🔥 CRAZY OFFER - Limited Time!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">CRAZY OFFER:</span> Get a Custom
            Restaurant Website —{" "}
            <span className="text-secondary">Risk-Free!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I know running a restaurant is tough. That&apos;s why I created this
            no-risk deal just for you:
          </p>
        </div>

        {/* Offer and Pricing */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What You Get */}
          <Card className="border border-green-300 bg-green-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-2 mr-3">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">What You Get</h3>
              </div>
              <ul className="space-y-4">
                <FeatureItem
                  icon={Check}
                  text="Advertise seasonal offers & promotions instantly"
                  iconColor="text-green-500"
                />
                <FeatureItem
                  icon={Check}
                  text="Let customers book reservations without calling"
                  iconColor="text-green-500"
                />
                <FeatureItem
                  icon={Check}
                  text="Showcase your full menu beautifully — no more sending PDFs"
                  iconColor="text-green-500"
                />
                <FeatureItem
                  icon={Check}
                  text="Keep repeat customers coming back with a smooth experience"
                  iconColor="text-green-500"
                />
                <FeatureItem
                  icon={Check}
                  text="Manage pickup & delivery orders directly through your site"
                  iconColor="text-green-500"
                />
                <FeatureItem
                  icon={Check}
                  text="Looks great on phones, tablets, and desktops"
                  iconColor="text-green-500"
                />
                <FeatureItem
                  icon={Check}
                  text="Hosted FREE for the first 3 months"
                  iconColor="text-green-500"
                  bold
                />
                <FeatureItem
                  icon={Check}
                  text="Built custom — not a template — around your restaurant’s goals"
                  iconColor="text-green-500"
                />
              </ul>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-4 -translate-y-2 shadow-md">
              SAVE 92%!
            </div>

            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-2 mr-3 shadow-md">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Your Only Upfront Cost
                </h3>
              </div>

              <CountdownTimer />

              <div className="text-center mb-6">
                <div className="mb-4">
                  <span className="text-2xl text-muted-foreground line-through mr-4">
                    Ksh 40,000
                  </span>
                  <div className="text-5xl font-bold text-primary mb-2">
                    Ksh 3,000
                  </div>
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-2 inline-block">
                    <span className="text-yellow-800 font-semibold">
                      You Save Ksh 37,000!
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Just a small one-time commitment fee.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  This is to show you&apos;re serious. That&apos;s it.
                </p>
              </div>

              <ul className="space-y-4">
                <FeatureItem
                  icon={Users}
                  text="Keep it at 50% off after 3 months if you love it"
                  iconColor="text-primary"
                  bold
                />
                <FeatureItem
                  icon={Shield}
                  text="Don't love it? I’ll remove it — no extra cost"
                  iconColor="text-primary"
                  bold
                />
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Risk-Free Guarantee */}
        <Card className="border border-secondary bg-secondary-foreground mb-8">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-secondary rounded-full p-3 mr-4">
                <Shield className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">100% Risk-Free Guarantee</h3>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No pressure. No hidden fees. Just a chance to build something
              great together.
            </p>
          </CardContent>
        </Card>

        {/* Consultation */}
        <Card className="border border-border bg-white mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-secondary rounded-full p-2 mr-3">
                <Clock className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Let&apos;s Talk First</h3>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              This isn&apos;t just about a website — it&apos;s about your
              business goals. We&apos;ll start with a short call to align your
              vision.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="md:px-8 py-4 md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            <Link
              href={generateWhatsappLink(
                "Hi! I saw your crazy offer about getting a restaurant website for just a small commitment fee of KES 3,000. I’m really interested and would love to book a quick meeting to discuss how it can help my business. Let’s talk!"
              )}
              rel="noopener noreferrer"
              target="_blank"
            >
              🚀 CLAIM THIS CRAZY OFFER NOW!
            </Link>
          </Button>
          <p className="text-muted-foreground mt-4 text-lg">
            👉 Only 3 spots left this month!
          </p>
        </div>
      </div>
    </section>
  );
}
