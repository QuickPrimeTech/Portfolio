// @/app/reviews/page.tsx
import type { Metadata } from "next";
import Hero from "@/sections/reviews/hero";
import CTA from "@/sections/reviews/CTA";
import EmptyReviews from "@/sections/reviews/empty-reviews";

export const metadata: Metadata = {
  title: "QuickPrimeTech Reviews | Client Testimonials & Success Stories",
  description:
    "See what restaurant owners say about QuickPrimeTech. Real client testimonials, success stories, and reviews of our custom restaurant website design services — with no upfront cost.",
  keywords: [
    "QuickPrimeTech reviews",
    "restaurant website testimonials",
    "QuickPrimeTech client feedback",
    "restaurant website success stories",
    "QuickPrimeTech ratings",
  ],
  openGraph: {
    title: "QuickPrimeTech Reviews | Client Testimonials & Success Stories",
    description:
      "Discover how restaurant owners grow their business with QuickPrimeTech. Read testimonials and reviews of our custom restaurant websites.",
    url: "https://quickprimetech.vercel.app/reviews",
    siteName: "QuickPrimeTech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "QuickPrimeTech Reviews - Restaurant Website Client Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title: "QuickPrimeTech Reviews | Client Testimonials & Success Stories",
    description:
      "See what our clients say. Reviews and testimonials from restaurant owners who got stunning, high-converting websites with QuickPrimeTech — at zero upfront cost.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <EmptyReviews />
      <CTA />
    </div>
  );
}
