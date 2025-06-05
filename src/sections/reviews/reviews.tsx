import { ReviewCard } from "@/components/review-card";
import { Review } from "@/types";

type ReviewsProps = {
  reviews: Review[];
};

const Reviews = ({ reviews = [] }: ReviewsProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
