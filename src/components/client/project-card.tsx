import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <Image
        src={project.image}
        alt={project.name}
        width={600}
        height={400}
        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <CardContent className="p-6">
        <Badge variant="secondary" className="text-xs">
          {project.category}
        </Badge>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            See Live Demo
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export { ProjectCard };
