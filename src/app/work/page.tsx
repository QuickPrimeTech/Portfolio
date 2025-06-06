import Hero from "@/sections/work/hero";
import CTA from "@/sections/work/CTA";
import { ProjectCard } from "@/components/client/project-card";

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

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="text-sm text-gray-600 container mx-auto">
          {projects.length} project
          {projects.length !== 1 ? "s" : ""} found
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}
