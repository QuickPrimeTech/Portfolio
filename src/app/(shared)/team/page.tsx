// @/app/team/page.tsx
import type { Metadata } from "next";
import Hero from "@/sections/team/hero";
import Team from "@/sections/team/team";
import CTA from "@/sections/team/cta";
import Values from "@/sections/team/values";

export const metadata: Metadata = {
  title: "Meet the QuickPrimeTech Team | Restaurant Website Experts",
  description:
    "Get to know the QuickPrimeTech team — passionate designers, developers, and marketers dedicated to building high-converting restaurant websites with no upfront cost.",
  keywords: [
    "restaurant website team",
    "QuickPrimeTech team",
    "restaurant website experts",
    "about QuickPrimeTech",
    "restaurant website designers",
  ],
  openGraph: {
    title: "Meet the QuickPrimeTech Team | Restaurant Website Experts",
    description:
      "We’re a team of restaurant website specialists helping restaurants grow with stunning, custom websites — at no upfront cost.",
    url: "https://quickprimetech.vercel.app/team",
    siteName: "QuickPrimeTech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "QuickPrimeTech Team - Restaurant Website Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title: "Meet the QuickPrimeTech Team | Restaurant Website Experts",
    description:
      "Passionate designers, developers, and marketers — all dedicated to creating restaurant websites that grow your business. Meet the QuickPrimeTech team.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Team />
      <Values />
      <CTA />
    </div>
  );
}
