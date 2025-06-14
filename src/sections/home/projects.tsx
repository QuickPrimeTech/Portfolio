import {
  ProjectCard,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardBadge,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardFooter,
} from "@/components/client/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Section, Header, Title, SubTitle } from "@/components/typography";

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
  {
    id: 2,
    name: "Savoria",
    category: "Russian Cuisine",
    description:
      "Transformed a family restaurant's outdated site into a modern, reservation-friendly experience that captures the authentic Indian atmosphere.",
    shortDescription: "Authentic Russian restaurant website",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749888453/Thumbnail1_jsvp41.png",
    liveUrl: "http://savoria-swart.vercel.app/",
  },
  {
    id: 3,
    name: "The Obsidian Plate",
    category: "Ethiopian Cusine",
    description:
      "Built a vibrant and interactive menu system for a trendy Ethiopian restaurant with seamless integrations for reservations and menu access.",
    shortDescription: "Interactive Ethiopian restaurant site",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749892416/Thumbnail_xnwpt9.png",
    liveUrl: "https://third-restaurant.vercel.app/",
  },
];

const FeaturedProjects = () => {
  return (
    <Section id="work" aria-labelledby="work-header" className="bg-gray-50">
      <Header>
        <Title id="work-header">Featured Projects</Title>
        <SubTitle>Showcasing my latest work</SubTitle>
      </Header>
      <ProjectCarousel />
      <Button variant={"outline"} asChild>
        <Link href={`/work`}>See All Projects</Link>
      </Button>
    </Section>
  );
};

function ProjectCarousel() {
  return (
    <div className="relative max-w-6xl mx-auto">
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-4 md:-ml-6">
          {projects.map(
            (
              {
                id,
                name,
                category,
                description,
                shortDescription,
                image,
                liveUrl,
              },
              index
            ) => (
              <CarouselItem
                key={id}
                className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard>
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
                <div className="text-center mt-2 text-sm text-muted-foreground">
                  {index + 1} of {projects.length} projects
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="-left-6" />
        <CarouselNext className="-right-6" />
      </Carousel>
    </div>
  );
}

export default FeaturedProjects;
