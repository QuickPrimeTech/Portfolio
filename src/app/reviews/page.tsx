import Hero from "@/sections/reviews/hero";
import CTA from "@/sections/reviews/CTA";
import EmptyReviews from "@/sections/reviews/empty-reviews";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <EmptyReviews />
      <CTA />
    </div>
  );
}
