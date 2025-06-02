"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Star, ArrowRight } from "lucide-react";

const FeaturedProjects = () => {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped restaurants transform their online presence and
            grow their business.
          </p>
        </div>

        <ProjectCarousel />
      </div>
    </section>
  );
};

function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const projects = [
    {
      id: 1,
      name: "Bella Vista Italian",
      description:
        "Transformed a family restaurant's outdated site into a modern, reservation-friendly experience.",
      result: "40% increase in online bookings",
      gradient: "from-amber-100 to-red-100",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Green Garden Cafe",
      description:
        "Built a fresh, mobile-first site for a health-focused cafe with online ordering integration.",
      result: "60% mobile conversion rate",
      gradient: "from-green-100 to-emerald-100",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "The Rooftop Bar",
      description:
        "Created an upscale, event-focused website with photo galleries and private dining booking.",
      result: "3x event inquiries",
      gradient: "from-purple-100 to-pink-100",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Coastal Seafood House",
      description:
        "Redesigned a waterfront restaurant's site with stunning visuals and online table reservations.",
      result: "50% increase in weekend bookings",
      gradient: "from-blue-100 to-cyan-100",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Urban Bistro",
      description:
        "Created a modern, minimalist site for a trendy downtown bistro with integrated social feeds.",
      result: "35% growth in social engagement",
      gradient: "from-gray-100 to-slate-100",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full shrink-0 px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Main Featured Project */}
                <div className="lg:col-span-2">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                    <div
                      className={`aspect-video bg-linear-to-br ${project.gradient} flex items-center justify-center`}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        width={400}
                        height={250}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-8">
                      <Badge className="mb-4 bg-red-100 text-red-800">
                        Featured Project
                      </Badge>
                      <h3 className="text-2xl font-bold mb-4">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                        {project.description}
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 mb-6">
                        <p className="text-red-800 font-semibold">
                          <strong>Result: {project.result}</strong>
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                          View Live Site{" "}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                          Case Study
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Project Stats & Info */}
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="font-semibold text-lg mb-4">
                      Project Highlights
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Timeline</span>
                        <span className="font-semibold">3 weeks</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Package</span>
                        <span className="font-semibold">Pro</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Industry</span>
                        <span className="font-semibold">Fine Dining</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold text-lg mb-4">
                      Features Delivered
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Online Reservations
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Digital Menu
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Photo Gallery
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Mobile Optimization
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <div className="text-center">
                      <Star className="h-8 w-8 text-yellow-400 fill-current mx-auto mb-2" />
                      <p className="text-sm text-gray-600 italic mb-2">
                        "Exceeded our expectations completely!"
                      </p>
                      <p className="text-xs text-gray-500">
                        - Restaurant Owner
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-10"
        aria-label="Previous project"
      >
        <ArrowRight className="h-6 w-6 text-gray-700 rotate-180" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-10"
        aria-label="Next project"
      >
        <ArrowRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-500">
          {currentSlide + 1} of {projects.length} projects
        </span>
      </div>
    </div>
  );
}

export default FeaturedProjects;
