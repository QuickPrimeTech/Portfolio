import {
  ProjectCard,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardBadge,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardFooter,
} from "@/components/ui/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SiTrustpilot } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { projects } from "@/data/projects";
import { Aurora } from "@/components/patterns/aurora";

const FeaturedProjects = () => {
  return (
    <Section
      id="work"
      aria-labelledby="work-header"
      className="relative bg-muted dark:bg-muted/40 -mt-2 rounded-t-4xl overflow-hidden isolate"
    >
      <Aurora />
      <Header>
        <Title id="work-header">Featured Projects</Title>
        <SubTitle>Showcasing my latest work</SubTitle>
      </Header>
      <ProjectCarousel />
      <div className="flex flex-col sm:flex-row gap-2">
        <Button size={"lg"} asChild>
          <Link href={`/projects`}>
            See All Projects
            <ArrowRight />
          </Link>
        </Button>
        <Button variant={"outline"} size={"lg"} asChild>
          <Link
            href={`https://www.trustpilot.com/review/quickprimetech.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTrustpilot />
            Review us on Truspilot
          </Link>
        </Button>
      </div>
    </Section>
  );
};

function ProjectCarousel() {
  return (
    <div className="relative max-w-6xl w-full mx-auto overflow-hidden px-4">
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-4 md:-ml-6">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <ProjectCard>
                <ProjectCardImage image={project.image} alt={project.name} />
                <ProjectCardContent>
                  <ProjectCardBadge>{project.category}</ProjectCardBadge>
                  <ProjectCardTitle>{project.name}</ProjectCardTitle>
                  <ProjectCardDescription>
                    {project.shortDescription}
                  </ProjectCardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    {project.description}
                  </p>
                </ProjectCardContent>
                <ProjectCardFooter className="flex  gap-2">
                  {project.caseStudy && (
                    <Button variant={"outline"} asChild>
                      <Link
                        href={project.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Case Study
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                  <Button className="flex-1" asChild>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Live Demo
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </ProjectCardFooter>
              </ProjectCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6" />
        <CarouselNext className="-right-6" />
      </Carousel>
    </div>
  );
}

export default FeaturedProjects;
