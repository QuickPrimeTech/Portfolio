"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/client/project-card";

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
      name: "Open Karen",
      category: "Fine Dining",
      description:
        "Transformed a family restaurant's outdated site into a modern, reservation-friendly experience that captures the authentic Indian atmosphere.",
      shortDescription: "Modern Indian restaurant website",
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749234158/OpenKaren_tmjjte.png",
      liveUrl: "https://first-restaurant-five.vercel.app/",
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

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full shrink-0 px-4">
              <ProjectCard key={project.id} project={project} />
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
