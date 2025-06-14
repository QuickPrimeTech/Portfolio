import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ExternalLink, MapPin } from "lucide-react";
import { Review } from "@/types";
import { StarRating } from "./star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReviewCardProps {
  review: Review;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function ReviewCard({ review }: ReviewCardProps) {
  const displayName = review.name || "Anonymous";
  const reviewText = review.review || "";

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 md:p-8">
        {/* Review Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={review.image} />
              <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{displayName}</h3>
              <p className="text-primary font-medium">{review.restaurant}</p>
              {review.location && (
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {review.location}
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            {review.verified && (
              <Badge className="bg-green-100 text-green-800 mb-2">
                Verified
              </Badge>
            )}
            <StarRating rating={review.rating} />
          </div>
        </div>

        {/* Review Content */}
        <p className="text-gray-700 leading-relaxed mb-6">{reviewText}</p>
        {/* Review Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <button className="flex items-center hover:text-blue-600 transition-colors mr-4">
              <ThumbsUp className="h-4 w-4 mr-2" />
              <span>Helpful ({review.helpful})</span>
            </button>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 border-blue-600 hover:bg-blue-50"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Project
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
