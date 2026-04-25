// @/components/ui/aurora.tsx
import { cn } from "@/lib/utils";

export function Aurora({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none -z-1 dark:opacity-40",
        "bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,var(--aurora-blob-1),transparent_68%),radial-gradient(ellipse_70%_60%_at_20%_80%,var(--aurora-blob-2),transparent_68%),radial-gradient(ellipse_60%_50%_at_60%_65%,var(--aurora-blob-3),transparent_68%),radial-gradient(ellipse_65%_40%_at_50%_60%,var(--aurora-blob-4),transparent_68%),linear-gradient(180deg,var(--aurora-base)_0%,var(--aurora-mix)_100%)]",
        className,
      )}
      {...props}
    />
  );
}
