"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Star,
  Flame,
  Home,
  Building2,
  Utensils,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { TestimonialDialog } from "./testimonial-dialog";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Testimonial {
  image: string;
  name: string;
  text: string;
  role: string;
  rating: number;
  category: "Residential" | "Restaurant" | "Industrial";
  url?: string;
  location: string;
}

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const isMobile = useIsMobile();

  const testimonials: Testimonial[] = [
    {
      image:
        "https://res.cloudinary.com/quick-prime-tech/image/upload/v1763838006/rdeyxjzcdjp2s2eiidgd_1_ewdj02.jpg",
      name: "Morris Motivo",
      role: "Head of Strategy, Operations & Compliance",
      text: "Honestly, I really like the website — it’s very clean and professional. It represents the restaurant well. Before this, customers had to call or just walk in without really knowing much. Now everything is in one place — the menu, location, opening hours, and even reservations. We’ve already started getting bookings online, which has made things easier for us to organise and also more convenient for customers. What I really liked is how you took time to understand how the restaurant runs, not just building something for looks. You were also very responsive whenever we needed changes, and you pay attention to small details, which really improved the final result. I also appreciated the flexibility on pricing. The website has already improved how customers interact with us. I would definitely recommend your services to other restaurant owners 👍",
      rating: 5,
      category: "Restaurant",
      url: "https://www.instagram.com/stories/highlights/18100204627953661/",
      location: "Petrocity Gigiri, Nairobi",
    },
  ];

  const hasMultipleReviews = testimonials.length > 1;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Residential":
        return <Home className="h-3 w-3" />;
      case "Commercial":
        return <Utensils className="h-3 w-3" />;
      case "Industrial":
        return <Building2 className="h-3 w-3" />;
      default:
        return <Flame className="h-3 w-3" />;
    }
  };

  const getCategoryColor = (category: Testimonial["category"]) => {
    switch (category) {
      case "Residential":
        return "bg-blue-100 text-blue-700 hover:bg-blue-200";
      case "Restaurant":
        return "bg-green-100 text-green-700 hover:bg-green-200";
      case "Industrial":
        return "bg-orange-100 text-orange-700 hover:bg-orange-200";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  // Single review card component to avoid duplication
  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <Card
      className={cn(
        "h-full flex flex-col hover:shadow-lg transition-shadow dur ation-300 border-border/50",
        !hasMultipleReviews && "max-w-lg mx-auto w-full",
      )}
    >
      <CardHeader className="pt-6 pb-4">
        <div className="flex gap-3 items-center mb-4">
          <Avatar className="h-12 w-12 border-2 border-primary/10">
            <AvatarImage
              src={testimonial.image}
              alt={testimonial.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1.5">
            <p className="text-sm font-bold text-foreground">
              {testimonial.name}
              <span className="text-muted-foreground text-xs font-medium">
                ({testimonial.role})
              </span>
            </p>
            <div className="flex items-center gap-4 justify-between">
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="size-3" />
                {testimonial.location}
              </p>
              <Badge
                variant="secondary"
                className={`text-[10px] font-medium ${getCategoryColor(testimonial.category)}`}
              >
                <span className="flex items-center gap-1">
                  {getCategoryIcon(testimonial.category)}
                  {testimonial.category}
                </span>
              </Badge>
            </div>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                testimonial.rating > i
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col pb-6 pt-0">
        <div className="flex-1">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </div>

        <div className="flex gap-4 items-center">
          {testimonial.text.length > 120 && (
            <Button
              className="flex-1 mt-4 px-0 h-auto"
              variant="link"
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              Read full story
            </Button>
          )}
          {testimonial.url && (
            <Button
              className="mt-4 px-0 h-auto text-xs font-semibold flex-1 text-muted-foreground"
              variant="link"
              asChild
            >
              <Link
                href={testimonial.url}
                rel="noreferrer noopener"
                target="_blank"
              >
                Read original review
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-muted rounded-xl px-4 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">
          <Flame className="h-3 w-3 mr-1" />
          Customer Stories
        </Badge>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foregroundtracking-wide">
          Don't just take our word for it
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear more from restaurants about how a website has elevated their
          online presence.
        </p>
      </div>

      {/* Reviews Display */}
      {hasMultipleReviews ? (
        // Carousel for multiple reviews
        <div className="relative w-full max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      ) : (
        // Centered single card for one review
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <TestimonialCard testimonial={testimonials[0]} />
          </div>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-8 text-center">
        <div className="w-px h-12 bg-border hidden sm:block" />
        <div className="space-y-1">
          <p className="text-3xl font-bold text-primary">4.9/5</p>
          <p className="text-sm text-muted-foreground">Average Rating</p>
        </div>
        <div className="w-px h-12 bg-border hidden sm:block" />
        <div className="space-y-1">
          <p className="text-3xl font-bold text-primary">98%</p>
          <p className="text-sm text-muted-foreground">Would Recommend</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size={isMobile ? "default" : "lg"} asChild>
          <Link
            href={"https://g.page/r/CSg8DRgjlgW3EAI/review"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle className="mr-2" /> Review us on Google <ExternalLink />
          </Link>
        </Button>
        <Button size={isMobile ? "default" : "lg"} variant={"outline"} asChild>
          <Link
            href={
              "https://www.google.com/maps/place/QuickPrimeTech/@-1.2960364,35.6329317,9z/data=!4m10!1m2!2m1!1squick+primetech!3m6!1s0x8b0c5a5b3f88bdfb:0xb7059623180d3c28!8m2!3d-1.2960364!4d36.7864962!15sCg9xdWljayBwcmltZXRlY2haESIPcXVpY2sgcHJpbWV0ZWNokgEQd2Vic2l0ZV9kZXNpZ25lcuABAA!16s%2Fg%2F11xf46wbbc?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            Read All Reviews
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {selectedTestimonial && (
        <TestimonialDialog
          isOpen={!!selectedTestimonial}
          testimonial={selectedTestimonial}
          onOpenChange={(open: boolean) =>
            setSelectedTestimonial((prev) => (open ? prev : null))
          }
        />
      )}
    </section>
  );
}
