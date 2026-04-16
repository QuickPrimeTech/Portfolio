// @/app/projects/page.tsx
import type { Metadata } from "next";
import Hero from "@/sections/projects/hero";
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
  title: "Restaurant Website Portfolio | QuickPrimeTech Projects",
  description:
    "Explore our portfolio of custom restaurant websites. See real examples of QuickPrimeTech projects designed to attract more customers and grow restaurant businesses — with no upfront cost.",
  keywords: [
    "restaurant website portfolio",
    "restaurant website projects",
    "QuickPrimeTech portfolio",
    "restaurant website design examples",
    "restaurant website showcase",
  ],
  openGraph: {
    title: "Restaurant Website Portfolio | QuickPrimeTech Projects",
    description:
      "Browse real restaurant website projects built by QuickPrimeTech. Stunning, mobile-friendly, and high-converting websites — with zero upfront cost.",
    url: "https://quickprimetech.vercel.app/projects",
    siteName: "QuickPrimeTech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "QuickPrimeTech Projects - Restaurant Website Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title: "Restaurant Website Portfolio | QuickPrimeTech Projects",
    description:
      "See our restaurant website portfolio — real projects that help restaurants grow online. Built by QuickPrimeTech with no upfront cost.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

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
