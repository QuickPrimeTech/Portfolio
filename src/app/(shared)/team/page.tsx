// @/app/team/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/sections/team/hero";
import { Team } from "@/sections/team/team";
import { CTA } from "@/sections/team/cta";
import { Values } from "@/sections/team/values";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Get to know the QuickPrimeTech team — passionate designers, developers, and digital strategists dedicated to building high-converting websites that help businesses grow online.",
  keywords: [
    "QuickPrimeTech team",
    "website design team",
    "e-commerce website experts",
    "about QuickPrimeTech",
    "web development team",
  ],
  openGraph: {
    title:
      "Meet the QuickPrimeTech Team | Designers, Developers & Growth Experts",
    description:
      "We’re a team of designers, developers, and strategists focused on building high-performing websites that drive real business growth.",
    url: "https://quickprimetech.vercel.app/team",
    siteName: "QuickPrimeTech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "QuickPrimeTech Team - Designers, Developers & Growth Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title:
      "Meet the QuickPrimeTech Team | Designers, Developers & Growth Experts",
    description:
      "Meet the team behind QuickPrimeTech — experts in building high-converting websites that help businesses succeed online.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

export default function TeamPage() {
  return (
    <>
      <Hero />
      <Team />
      <Values />
      <CTA />
    </>
  );
}
