"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChefHat,
  CheckCircle,
  X,
  ArrowRight,
  Phone,
  Camera,
  BarChart3,
  Shield,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import Pricing from "@/pages/home/pricing";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annual">(
    "monthly"
  );

  const features = [
    {
      category: "Design & Development",
      items: [
        {
          name: "Custom Website Design",
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: "Mobile-First Responsive Design",
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: "Online Menu Display",
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: "Contact Page with Hours",
          starter: true,
          pro: true,
          premium: true,
        },
        { name: "Photo Gallery", starter: false, pro: true, premium: true },
        {
          name: "Custom Branding Strategy",
          starter: false,
          pro: false,
          premium: true,
        },
        {
          name: "Professional Photography",
          starter: false,
          pro: false,
          premium: true,
        },
        {
          name: "Custom Animations",
          starter: false,
          pro: false,
          premium: true,
        },
      ],
    },
    {
      category: "Functionality",
      items: [
        { name: "Basic SEO Setup", starter: true, pro: true, premium: true },
        {
          name: "Online Reservation System",
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: "Customer Reviews Integration",
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: "Social Media Integration",
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: "Event Booking System",
          starter: false,
          pro: false,
          premium: true,
        },
        {
          name: "Online Ordering Integration",
          starter: false,
          pro: false,
          premium: true,
        },
        { name: "Newsletter Signup", starter: false, pro: true, premium: true },
        {
          name: "Advanced Analytics",
          starter: false,
          pro: false,
          premium: true,
        },
      ],
    },
    {
      category: "Support & Maintenance",
      items: [
        {
          name: "30 Days Free Support",
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: "Content Management Training",
          starter: true,
          pro: true,
          premium: true,
        },
        { name: "Priority Support", starter: false, pro: true, premium: true },
        {
          name: "Monthly Performance Reports",
          starter: false,
          pro: false,
          premium: true,
        },
        {
          name: "Ongoing Maintenance",
          starter: false,
          pro: false,
          premium: true,
        },
        {
          name: "24/7 Technical Support",
          starter: false,
          pro: false,
          premium: true,
        },
        {
          name: "Quarterly Strategy Reviews",
          starter: false,
          pro: false,
          premium: true,
        },
      ],
    },
  ];

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small cafes and takeout spots",
      price: { monthly: 800, annual: 720 },
      popular: false,
      features: [
        "Simple, clean design",
        "Mobile responsive",
        "Basic SEO",
        "30 days support",
      ],
      color: "gray",
    },
    {
      name: "Pro",
      description: "Ideal for growing restaurants",
      price: { monthly: 1500, annual: 1350 },
      popular: true,
      features: [
        "Everything in Starter",
        "Reservations",
        "Reviews",
        "Photo gallery",
        "Priority support",
      ],
      color: "orange",
    },
    {
      name: "Premium",
      description: "For upscale establishments",
      price: { monthly: 2500, annual: 2250 },
      popular: false,
      features: [
        "Everything in Pro",
        "Custom branding",
        "Professional photos",
        "Event booking",
        "24/7 support",
        "Ongoing maintenance",
      ],
      color: "purple",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing for{" "}
            <span className="text-blue-600">Every Restaurant</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect package for your restaurant. No hidden fees, no
            surprises. All prices include design, development, and launch.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span
              className={`mr-3 ${
                billingCycle === "monthly"
                  ? "text-gray-900 font-medium"
                  : "text-gray-500"
              }`}
            >
              One-time
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annual" : "monthly"
                )
              }
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`ml-3 ${
                billingCycle === "annual"
                  ? "text-gray-900 font-medium"
                  : "text-gray-500"
              }`}
            >
              With maintenance
            </span>
            {billingCycle === "annual" && (
              <Badge className="ml-2 bg-red-100 text-red-800">Save 10%</Badge>
            )}
          </div>
        </div>
      </section>

      <Pricing />

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See exactly what's included in each package to make the best
              choice for your restaurant.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="sticky top-16 z-40 bg-white border-b border-gray-200 grid grid-cols-4 gap-4 mb-8 py-4">
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Features</h3>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Starter</h3>
                  <p className="text-blue-600 font-bold">$800</p>
                </div>
                <div className="p-4 text-center bg-red-50 rounded-lg">
                  <h3 className="text-lg font-semibold">Pro</h3>
                  <p className="text-blue-600 font-bold">$1,500</p>
                  <Badge className="mt-1 bg-blue-600">Most Popular</Badge>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Premium</h3>
                  <p className="text-blue-600 font-bold">$2,500+</p>
                </div>
              </div>

              {/* Feature Categories */}
              <div className="pt-4">
                {features.map((category) => (
                  <div key={category.category} className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 px-4">
                      {category.category}
                    </h4>
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="grid grid-cols-4 gap-4 py-3 border-b border-gray-200"
                      >
                        <div className="p-4">
                          <span className="text-gray-700">{item.name}</span>
                        </div>
                        <div className="p-4 text-center">
                          {item.starter ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )}
                        </div>
                        <div className="p-4 text-center bg-red-50">
                          {item.pro ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )}
                        </div>
                        <div className="p-4 text-center">
                          {item.premium ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your website with these additional services available for
              any package.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Professional Photography
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                High-quality food and restaurant photography
              </p>
              <p className="text-2xl font-bold text-blue-600">$500</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-600 text-sm mb-4">
                Advanced SEO setup and local search optimization
              </p>
              <p className="text-2xl font-bold text-blue-600">$300</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Security Package</h3>
              <p className="text-gray-600 text-sm mb-4">
                SSL certificate, security monitoring, and backups
              </p>
              <p className="text-2xl font-bold text-blue-600">$200</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Headphones className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Extended Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                6 months of priority support and updates
              </p>
              <p className="text-2xl font-bold text-blue-600">$400</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our pricing and packages.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  What's included in the base price?
                </AccordionTrigger>
                <AccordionContent>
                  All packages include complete design, development, testing,
                  and launch of your website. You also get 30 days of free
                  support, content management training, and basic SEO setup. No
                  hidden fees or surprises.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  Do you offer payment plans?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We offer flexible payment options including 50% upfront
                  and 50% on completion, or monthly payment plans for Premium
                  packages. Contact us to discuss what works best for your
                  budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  Can I upgrade my package later?
                </AccordionTrigger>
                <AccordionContent>
                  You can upgrade your package at any time. We'll credit what
                  you've already paid and only charge the difference. Many
                  clients start with Starter and upgrade to Pro as their
                  business grows.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  What if I need custom features?
                </AccordionTrigger>
                <AccordionContent>
                  We love custom projects! If you need features not listed in
                  our packages, we'll provide a custom quote. Our Premium
                  package is designed to be flexible and can accommodate most
                  custom requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  Are there any ongoing costs?
                </AccordionTrigger>
                <AccordionContent>
                  The only ongoing costs are optional: hosting ($10-20/month),
                  domain name ($15/year), and maintenance packages (starting at
                  $99/month). We'll help you set up affordable hosting and can
                  manage everything for you if preferred.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let's discuss which package is perfect for your restaurant. Book a
            free consultation and we'll create a custom proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Book Free Consultation
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
