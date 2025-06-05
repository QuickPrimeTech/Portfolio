import { LucideIcon } from "lucide-react";

export interface Review {
  id: number;
  name?: string;
  restaurant: string;
  location?: string;
  rating: number;
  date: string;
  helpful?: number;
  verified?: boolean;
  image?: string;
  review?: string;
}

export interface ReviewStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterConfig {
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
}

export interface FilterSectionProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  ratingFilter: string;
  setRatingFilter: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  filterOptions: {
    rating: { value: string; label: string }[];
    category: { value: string; label: string }[];
    sort: { value: string; label: string }[];
  };
  filteredLength: number;
  currentLength: number;
}
