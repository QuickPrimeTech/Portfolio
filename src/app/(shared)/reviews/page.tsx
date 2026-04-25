// @/app/reviews/page.tsx
import type { Metadata } from "next";
import Hero from "@/sections/reviews/hero";
import CTA from "@/sections/reviews/CTA";
import Testimonials from "@/sections/home/testimonial";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what clients say about QuickPrimeTech. Real testimonials, success stories, and reviews from businesses using our high-converting websites to grow online.",
  keywords: [
    "QuickPrimeTech reviews",
    "website testimonials",
    "client success stories",
    "e-commerce website reviews",
    "business website feedback",
  ],
  openGraph: {
    title: "QuickPrimeTech Reviews | Client Testimonials & Success Stories",
    description:
      "Discover how businesses grow with QuickPrimeTech. Read real testimonials and success stories from our website clients.",
    url: "https://quickprimetech.vercel.app/reviews",
    siteName: "QuickPrimeTech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "QuickPrimeTech Reviews - Client Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title: "QuickPrimeTech Reviews | Client Testimonials & Success Stories",
    description:
      "See what our clients say about working with QuickPrimeTech. Real reviews from businesses growing with high-performing websites.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

export default function ReviewsPage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <CTA />
    </>
  );
}
