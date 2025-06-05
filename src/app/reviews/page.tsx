"use client";

import React from "react";
import { Users, Star, Award, TrendingUp } from "lucide-react";
import Hero from "@/pages/reviews/hero";
import CTA from "@/pages/reviews/CTA";
import Reviews from "@/pages/reviews/reviews";
import FilterSection from "@/pages/reviews/filter";

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
      helpful: 24,
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
      review:
        "QuickPrimeTech completely transformed our online presence. The new website is beautiful and our online reservations increased by 40% in the first month. The team was professional, responsive, and really understood our brand. Highly recommend!",
    },
    {
      id: 3,
      name: "Sarah Kim",
      restaurant: "The Rooftop Bar",
      location: "Miami, FL",
      rating: 5,
      date: "2024-01-05",
      category: "Bar & Lounge",
      helpful: 31,
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
      review:
        "Working with QuickPrimeTech was an absolute pleasure. They delivered a stunning website that perfectly captures our upscale atmosphere. The event booking system has tripled our private event inquiries. Worth every penny!",
    },
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
      <Hero stats={stats} />
      <FilterSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterOptions={filterOptions}
        filteredLength={filteredReviews.length}
        currentLength={paginatedReviews.length}
      />
      <Reviews reviews={filteredReviews} />
      <CTA />
    </div>
  );
}
