import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { WithChildrenAndClass } from "@/types";
import { cn } from "@/lib/utils";

function ProjectCard({ children, className }: WithChildrenAndClass) {
  return (
    <Card
      className={cn(
        "group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between py-0 pb-3",
        className
      )}
    >
      {children}
    </Card>
  );
}

function ProjectCardImage({ image, alt }: { image: string; alt: string }) {
  return (
    <Image
      src={image}
      alt={alt}
      width={600}
      height={400}
      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
    />
  );
}

function ProjectCardContent({
  children,
  className,
  ...props
}: WithChildrenAndClass) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}

function ProjectCardBadge({
  children,
  className,
  ...props
}: WithChildrenAndClass) {
  return (
    <Badge variant="secondary" className={cn("text-xs", className)} {...props}>
      {children}
    </Badge>
  );
}

function ProjectCardTitle({
  children,
  className,
  ...props
}: WithChildrenAndClass) {
  return (
    <h3
      className={cn("text-xl font-bold text-gray-900 mb-2", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

function ProjectCardDescription({
  children,
  className,
  ...props
}: WithChildrenAndClass) {
  return (
    <p
      className={cn("text-gray-600 mb-4 text-sm leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function ProjectCardFooter({
  children,
  className,
  ...props
}: WithChildrenAndClass) {
  return (
    <div className={cn("px-6 pb-6", className)} {...props}>
      {children}
    </div>
  );
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
