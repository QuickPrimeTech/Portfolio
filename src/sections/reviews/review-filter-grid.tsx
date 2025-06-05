"use client";

import React from "react";
import Reviews from "@/sections/reviews/reviews";
import FilterSection from "@/sections/reviews/filter";

import { Review, FilterConfig, FilterOption } from "@/types";

interface ReviewsFilterAndGridProps {
  reviews: Review[];
  filterOptions: {
    rating: FilterOption[];
    sort: FilterOption[];
  };
}

export default function ReviewsFilterAndGrid({
  reviews,
  filterOptions,
}: ReviewsFilterAndGridProps) {
  // All state for filtering, searching, and sorting
  const [searchTerm, setSearchTerm] = React.useState("");
  const [ratingFilter, setRatingFilter] = React.useState("all");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("newest");

  const filteredReviews =
    reviews
      ?.filter((review) => {
        const matchesSearch =
          (review?.name?.toLowerCase() ?? "").includes(
            searchTerm.toLowerCase()
          ) ||
          (review?.restaurant?.toLowerCase() ?? "").includes(
            searchTerm.toLowerCase()
          ) ||
          (review?.review?.toLowerCase() ?? "").includes(
            searchTerm.toLowerCase()
          );

        const matchesRating =
          ratingFilter === "all" ||
          (review?.rating?.toString() ?? "") === ratingFilter;

        return matchesSearch && matchesRating;
      })
      ?.sort((a, b) => {
        const helpfulA = a?.helpful ?? 0;
        const helpfulB = b?.helpful ?? 0;

        switch (sortBy) {
          case "newest":
            return (
              new Date(b?.date ?? 0).getTime() -
              new Date(a?.date ?? 0).getTime()
            );
          case "oldest":
            return (
              new Date(a?.date ?? 0).getTime() -
              new Date(b?.date ?? 0).getTime()
            );
          case "highest":
            return (b?.rating ?? 0) - (a?.rating ?? 0);
          case "lowest":
            return (a?.rating ?? 0) - (b?.rating ?? 0);
          case "helpful":
            return helpfulB - helpfulA;
          default:
            return 0;
        }
      }) ?? [];

  const filterConfigs: FilterConfig[] = [
    {
      label: "Rating",
      value: ratingFilter,
      options: filterOptions.rating,
      onChange: setRatingFilter,
    },
    {
      label: "Sort",
      value: sortBy,
      options: filterOptions.sort,
      onChange: setSortBy,
    },
  ];

  return (
    <>
      {/* Your FilterSection component is rendered here */}
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
        currentLength={filteredReviews.length}
      />

      {/* Reviews Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Now directly pass filteredReviews, no pagination */}
          <Reviews reviews={filteredReviews} />
        </div>
      </section>
    </>
  );
}
