import Hero from "@/sections/work/hero";
import CTA from "@/sections/work/CTA";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  ProjectCard,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardBadge,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardFooter,
} from "@/components/client/project-card";
import { Section } from "@/components/typography";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <>
      <Hero />
      <section className="py-12 bg-white border-b">
        <div className="text-sm text-gray-600 container mx-auto section-x">
          {projects.length} project
          {projects.length !== 1 ? "s" : ""} found
        </div>
      </section>
      <Section className="bg-gray-50" aria-label="Projects Section">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">
          {projects.map(
            ({
              id,
              name,
              category,
              description,
              shortDescription,
              image,
              liveUrl,
            }) => (
              <ProjectCard key={id}>
                <ProjectCardImage image={image} alt={name} />
                <ProjectCardContent>
                  <ProjectCardBadge>{category}</ProjectCardBadge>
                  <ProjectCardTitle>{name}</ProjectCardTitle>
                  <ProjectCardDescription>
                    {shortDescription}
                  </ProjectCardDescription>
                  <p className="text-sm text-gray-600 mt-2">{description}</p>
                </ProjectCardContent>
                <ProjectCardFooter>
                  <Button className="w-full" asChild>
                    <Link
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Live Demo
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </ProjectCardFooter>
              </ProjectCard>
            )
          )}
        </div>
      </Section>
      <CTA />
    </>
  );
}
