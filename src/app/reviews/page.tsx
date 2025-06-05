import React from "react";
// import dynamic from "next/dynamic";
import { Users, Star, Award, TrendingUp } from "lucide-react";
import Hero from "@/sections/reviews/hero";
import CTA from "@/sections/reviews/CTA";
import { Review, ReviewStat, FilterOption } from "@/types";
import EmptyReviews from "@/sections/reviews/empty-reviews";

// const ReviewsFilterAndGrid = dynamic(
//   () => import("@/sections/reviews/review-filter-grid"),
//   {
//     ssr: !!false,
//     loading: () => (
//       <p className="text-center py-10 text-gray-600">
//         Loading interactive reviews...
//       </p>
//     ),
//   }
// );

// const allReviews: Review[] = [
//   {
//     id: 1,
//     name: "Maria Rodriguez",
//     restaurant: "Bella Vista Italian",
//     location: "San Francisco, CA",
//     rating: 5,
//     date: "2024-01-15",
//     helpful: 24,
//     verified: true,
//     image: "/placeholder.svg?height=60&width=60",
//     review:
//       "QuickPrimeTech completely transformed our online presence. The new website is beautiful and our online reservations increased by 40% in the first month. The team was professional, responsive, and really understood our brand. Highly recommend!",
//   },
//   {
//     id: 2, // Added for more data to test filtering
//     name: "James Chen",
//     restaurant: "Green Garden Cafe",
//     location: "Portland, OR",
//     rating: 5,
//     date: "2024-01-10",
//     helpful: 18,
//     verified: true,
//     image: "/placeholder.svg?height=60&width=60",
//     review:
//       "As a small cafe owner, I was worried about the cost and complexity of getting a professional website. QuickPrimeTech made it so easy and affordable. The mobile-first design has been perfect for our customers who often browse our menu on their phones.",
//   },
//   {
//     id: 3,
//     name: "Sarah Kim",
//     restaurant: "The Rooftop Bar",
//     location: "Miami, FL",
//     rating: 5,
//     date: "2024-01-05",
//     // Ensure 'category' is removed here if it existed
//     helpful: 31,
//     verified: true,
//     image: "/placeholder.svg?height=60&width=60",
//     review:
//       "Working with QuickPrimeTech was an absolute pleasure. They delivered a stunning website that perfectly captures our upscale atmosphere. The event booking system has tripled our private event inquiries. Worth every penny!",
//   },
//   {
//     id: 4,
//     name: "Michael Brown",
//     restaurant: "Ocean Fresh Seafood",
//     location: "Seattle, WA",
//     rating: 4,
//     date: "2023-12-28",
//     helpful: 15,
//     verified: true,
//     image: "/placeholder.svg?height=60&width=60",
//     review:
//       "QuickPrimeTech did a great job with our new website. It's clean, modern, and really highlights our fresh seafood. The online ordering system integrated seamlessly.",
//   },
//   {
//     id: 5,
//     name: "Emily White",
//     restaurant: "The Urban Eatery",
//     location: "Chicago, IL",
//     rating: 5,
//     date: "2023-12-20",
//     helpful: 10,
//     verified: false,
//     image: "/placeholder.svg?height=60&width=60",
//     review:
//       "Affordable and quick! QuickPrimeTech delivered a functional website that looks professional. Perfect for our new restaurant.",
//   },
//   {
//     id: 6,
//     name: "David Lee",
//     restaurant: "Mama Mia's Pizzeria",
//     location: "Boston, MA",
//     rating: 5,
//     date: "2023-12-10",
//     helpful: 40,
//     verified: true,
//     image: "/placeholder.svg?height=60&width=60",
//     review:
//       "Our old website was a disaster. QuickPrimeTech came in and rebuilt it from scratch. It's so much faster and our customers love the new design. Customer support was excellent too!",
//   },
// ];

const stats: ReviewStat[] = [
  { label: "Total Reviews", value: "150+", icon: Users },
  { label: "Average Rating", value: "4.9", icon: Star },
  { label: "Verified Reviews", value: "98%", icon: Award },
  { label: "Business Growth", value: "45%", icon: TrendingUp },
];

// const filterOptions: {
//   rating: FilterOption[];
//   // category: FilterOption[]; // REMOVED: category from filterOptions
//   sort: FilterOption[];
// } = {
//   rating: [
//     { value: "all", label: "All Ratings" },
//     { value: "5", label: "5 Stars" },
//     { value: "4", label: "4 Stars" },
//     { value: "3", label: "3 Stars" },
//     { value: "2", label: "2 Stars" },
//     { value: "1", label: "1 Star" },
//   ],
//   sort: [
//     { value: "newest", label: "Newest" },
//     { value: "oldest", label: "Oldest" },
//     { value: "highest", label: "Highest Rated" },
//     { value: "lowest", label: "Lowest Rated" },
//     { value: "helpful", label: "Most Helpful" },
//   ],
// };

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero stats={stats} />
      <EmptyReviews />
      {/* <ReviewsFilterAndGrid
        reviews={allReviews}
        filterOptions={filterOptions}
      /> */}
      <CTA />
    </div>
  );
}
