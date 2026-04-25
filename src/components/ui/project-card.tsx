import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ImageWithFallback } from "./image";
import React from "react";

function ProjectCard({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "group hover:shadow-xl gap-2 transition-all duration-300 overflow-hidden flex flex-col justify-between py-0 pb-3",
        className,
      )}
      {...props}
    />
  );
}

function ProjectCardImage({ image, alt }: { image: string; alt: string }) {
  return (
    <ImageWithFallback
      src={image}
      alt={`${alt} by Quick Prime Tech`}
      width={600}
      height={400}
      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
    />
  );
}

function ProjectCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("p-6", className)} {...props} />;
}

function ProjectCardBadge({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof Badge>) {
  return (
    <Badge
      variant={variant ?? "secondary"}
      className={cn("text-xs mb-2", className)}
      {...props}
    />
  );
}

function ProjectCardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-serif text-xl font-bold tracking-wide mb-2",
        className,
      )}
      {...props}
    />
  );
}

function ProjectCardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-muted-foreground mb-4 text-sm leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

function ProjectCardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

export {
  ProjectCard,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardBadge,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardFooter,
};
