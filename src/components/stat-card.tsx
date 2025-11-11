import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  change?: string;
  className?: string;
}

export const StatCard = ({
  icon: Icon,
  value,
  label,
  change,
  className,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-xl shadow-lg p-4 backdrop-blur-sm border border-border/50",
        "hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-1.5 items-center">
          <div className="p-2 bg-muted rounded-lg">
            <Icon className="size-5 text-foreground" />
          </div>
          <div className="text-2xl font-bold text-foreground">{value}</div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-muted-foreground mt-1">{label}</div>
          {change && (
            <div className="text-xs text-stat-highlight font-medium mt-1">
              {change}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
