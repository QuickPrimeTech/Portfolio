import { Star, Users, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function EmptyReviews() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Card className="border-dashed border-2 border-muted-foreground/25">
        <CardContent className="flex flex-col items-center justify-center text-center p-8 space-y-6">
          <div className="relative">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full">
              <Star className="w-8 h-8 text-secondary" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Badge variant="secondary" className="text-xs px-2 py-1">
                <Gift className="w-3 h-3 mr-1" />
                New
              </Badge>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight">
              No testimonials yet
            </h3>
            <p className="text-muted-foreground max-w-md">
              We're just getting started! Be among our first clients and help us
              build our reputation.
            </p>
          </div>
          <div className="bg-secondary/10 rounded-lg p-6 w-full border border-blue-200/50">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-5 h-5 text-secondary mr-2" />
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary"
              >
                Limited Time Offer
              </Badge>
            </div>
            <h4 className="text-lg font-semibold text-gray-900mb-2">
              Exclusive free add-ons for our first 5 clients!
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get advanced SEO and up to 6 months of technical support from our
              team.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-secondary">
              <span className="font-medium">Only 5 spots available</span>
              <span>•</span>
              <span>No long-term commitment</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <Button className="flex-1" asChild>
              <Link href={"/pricing"}>Claim Your Spot</Link>
            </Button>
          </div>

          {/* Additional Info */}
          <p className="text-xs text-muted-foreground">
            Join our early adopters and get premium service at a fraction of the
            cost
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
