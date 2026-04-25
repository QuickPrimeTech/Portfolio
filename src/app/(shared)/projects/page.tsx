// @/app/projects/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/sections/projects/hero";
import CTA from "@/sections/projects/CTA";
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
} from "@/components/ui/project-card";
import { Section } from "@/components/typography";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of high-converting websites for businesses. From e-commerce stores to custom business websites, QuickPrimeTech helps brands grow online.",
  keywords: [
    "website portfolio",
    "e-commerce website projects",
    "business website design",
    "QuickPrimeTech portfolio",
    "high converting websites",
  ],
  openGraph: {
    title: "Website Portfolio | QuickPrimeTech Projects",
    description:
      "Browse real projects built by QuickPrimeTech — modern, mobile-friendly, and optimized for business growth.",
    url: "https://quickprimetech.vercel.app/projects",
    siteName: "QuickPrimeTech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "QuickPrimeTech Projects - Website Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title: "Website Portfolio | QuickPrimeTech Projects",
    description:
      "See our portfolio of business and e-commerce websites built to drive results.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

export default function WorkPage() {
  return (
    <>
      <Hero />
      <section className="py-12 bg-muted/50 rounded-t-4xl border-b">
        <div className="text-sm text-muted-foreground container mx-auto section-x">
          {projects.length} project
          {projects.length !== 1 ? "s" : ""} found
        </div>
      </section>
      <Section className="bg-muted/50" aria-label="Projects Section">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">
          {projects.map(
            ({
              name,
              category,
              description,
              shortDescription,
              image,
              caseStudy,
              liveUrl,
            }) => (
              <ProjectCard key={name}>
                <ProjectCardImage image={image} alt={name} />
                <ProjectCardContent>
                  <ProjectCardBadge>{category}</ProjectCardBadge>
                  <ProjectCardTitle>{name}</ProjectCardTitle>
                  <ProjectCardDescription>
                    {shortDescription}
                  </ProjectCardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    {description}
                  </p>
                </ProjectCardContent>
                <ProjectCardFooter className="flex  gap-2">
                  {caseStudy && (
                    <Button variant={"outline"} asChild>
                      <Link
                        href={caseStudy}
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
            ),
          )}
        </div>
      </Section>
      <CTA />
    </>
  );
}
