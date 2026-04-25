import { cn } from "@/lib/utils";

const Section = ({ className, ...props }: React.ComponentProps<"section">) => {
  return (
    <section
      className={cn(
        "section-x section-y gap-12 flex flex-col items-center justify-center",
        className,
      )}
      {...props}
    />
  );
};
const Header = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("space-y-2 text-center", className)} {...props} />;
};

const Title = ({ className, ...props }: React.ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl lg:text-4xl font-bold font-serif tracking-wider",
        className,
      )}
      {...props}
    />
  );
};

const H1 = ({ className, ...props }: React.ComponentProps<"h1">) => {
  return (
    <h1
      className={cn("font-bold text-3xl md:text-4xl lg:text-6xl", className)}
      {...props}
    />
  );
};

const SubTitle = ({ className, ...props }: React.ComponentProps<"h3">) => {
  return (
    <h3
      className={cn(
        "font-sans text-muted-foreground max-w-3xl mx-auto",
        className,
      )}
      {...props}
    />
  );
};

export { Section, Header, Title, SubTitle, H1 };
