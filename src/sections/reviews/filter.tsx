"use client";

import { FilterBar } from "@/components/filter-bar";
import { FilterSectionProps, FilterConfig } from "@/types"; // Updated import path for types

export default function FilterSection({
  searchTerm,
  onSearchChange,
  ratingFilter,
  setRatingFilter,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy,
  filterOptions,
  filteredLength,
  currentLength, // This will now typically be the same as filteredLength
}: FilterSectionProps) {
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
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            searchPlaceholder="Search reviews, restaurants, or owners..."
            filters={filterConfigs}
          />
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Showing {currentLength} of {filteredLength} reviews
          </p>
        </div>
      </div>
    </section>
  );
}
