"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChefHat, Users, Star, Award, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ReviewCard } from "@/components/review-card";
import { FilterBar } from "@/components/filter-bar";

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [ratingFilter, setRatingFilter] = React.useState("all");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("newest");
  const [currentPage, setCurrentPage] = React.useState(1);

  const reviews = [
    {
      id: 1,
      name: "Maria Rodriguez",
      restaurant: "Bella Vista Italian",
      location: "San Francisco, CA",
      rating: 5,
      date: "2024-01-15",
      category: "Fine Dining",
      package: "Pro",
      helpful: 24,
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
      review:
        "QuickPrimeTech completely transformed our online presence. The new website is beautiful and our online reservations increased by 40% in the first month. The team was professional, responsive, and really understood our brand. Highly recommend!",
      businessImpact: "40% increase in online reservations",
      projectDuration: "3 weeks",
      response: {
        author: "Sarah Chen",
        role: "Founder & Lead Developer",
        date: "2024-01-16",
        text: "Thank you so much for the wonderful review, Maria! We're thrilled to hear about the 40% increase in reservations. It was a pleasure working with you and the Bella Vista team, and we look forward to supporting your continued success online.",
      },
    },
    {
      id: 2,
      name: "James Chen",
      restaurant: "Green Garden Cafe",
      location: "Portland, OR",
      rating: 5,
      date: "2024-01-10",
      category: "Casual Dining",
      package: "Starter",
      helpful: 18,
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
      review:
        "As a small cafe owner, I was worried about the cost and complexity of getting a professional website. QuickPrimeTech made it so easy and affordable. The mobile-first design has been perfect for our customers who often browse our menu on their phones.",
      businessImpact: "60% mobile traffic conversion",
      projectDuration: "2 weeks",
      response: {
        author: "Marcus Rodriguez",
        role: "Creative Director",
        date: "2024-01-11",
        text: "We appreciate your kind words, James! Our team specifically designed your site with mobile users in mind, and we're delighted to hear it's working so well for your customers. Please let us know if you need any assistance with updates in the future.",
      },
    },
    {
      id: 3,
      name: "Sarah Kim",
      restaurant: "The Rooftop Bar",
      location: "Miami, FL",
      rating: 5,
      date: "2024-01-05",
      category: "Bar & Lounge",
      package: "Premium",
      helpful: 31,
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
      review:
        "Working with QuickPrimeTech was an absolute pleasure. They delivered a stunning website that perfectly captures our upscale atmosphere. The event booking system has tripled our private event inquiries. Worth every penny!",
      businessImpact: "3x increase in event bookings",
      projectDuration: "4 weeks",
      response: null,
    },
    // Add more reviews as needed...
  ];

  const stats = [
    { label: "Total Reviews", value: "150+", icon: Users },
    { label: "Average Rating", value: "4.9", icon: Star },
    { label: "Verified Reviews", value: "98%", icon: Award },
    { label: "Business Growth", value: "45%", icon: TrendingUp },
  ];

  // Filter and sort reviews
  const filteredReviews = reviews
    .filter((review) => {
      const matchesSearch =
        review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.restaurant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.review.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRating =
        ratingFilter === "all" || review.rating.toString() === ratingFilter;
      const matchesCategory =
        categoryFilter === "all" || review.category === categoryFilter;

      return matchesSearch && matchesRating && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "highest":
          return b.rating - a.rating;
        case "lowest":
          return a.rating - b.rating;
        case "helpful":
          return (b.helpful || 0) - (a.helpful || 0);
        default:
          return 0;
      }
    });

  const reviewsPerPage = 6;
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const paginatedReviews = filteredReviews.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  const filterOptions = {
    rating: [
      { value: "all", label: "All Ratings" },
      { value: "5", label: "5 Stars" },
      { value: "4", label: "4 Stars" },
      { value: "3", label: "3 Stars" },
      { value: "2", label: "2 Stars" },
      { value: "1", label: "1 Star" },
    ],
    category: [
      { value: "all", label: "All Categories" },
      { value: "Fine Dining", label: "Fine Dining" },
      { value: "Casual Dining", label: "Casual Dining" },
      { value: "Bar & Lounge", label: "Bar & Lounge" },
      { value: "Seafood", label: "Seafood" },
      { value: "Modern American", label: "Modern American" },
      { value: "Diner", label: "Diner" },
    ],
    sort: [
      { value: "newest", label: "Newest" },
      { value: "oldest", label: "Oldest" },
      { value: "highest", label: "Highest Rated" },
      { value: "lowest", label: "Lowest Rated" },
      { value: "helpful", label: "Most Helpful" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Restaurant Partners</span>{" "}
            Say
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Real reviews from real restaurant owners who've transformed their
            online presence with QuickPrimeTech.
          </p>

          {/* Review Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              searchPlaceholder="Search reviews, restaurants, or owners..."
              filters={[
                {
                  label: "Rating",
                  value: ratingFilter,
                  options: filterOptions.rating,
                  onChange: setRatingFilter,
                },
                {
                  label: "Category",
                  value: categoryFilter,
                  options: filterOptions.category,
                  onChange: setCategoryFilter,
                },
                {
                  label: "Sort",
                  value: sortBy,
                  options: filterOptions.sort,
                  onChange: setSortBy,
                },
              ]}
            />
          </div>

          {/* Results count */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Showing {paginatedReviews.length} of {filteredReviews.length}{" "}
              reviews
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {paginatedReviews.map((review) => (
              <ReviewCard key={review.id} review={review} variant="public" />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i + 1}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(i + 1)}
                    className={
                      currentPage === i + 1
                        ? "bg-blue-600 hover:bg-blue-700"
                        : ""
                    }
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            See why restaurant owners consistently rate us 5 stars. Let's create
            your success story next.
          </p>
          <Link href="/book-consultation">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
