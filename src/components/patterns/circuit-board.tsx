import { cn } from "@/lib/utils";
import React from "react";

export function CircuitBoard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none -z-1",
        "bg-[repeating-linear-gradient(45deg,var(--muted)_0,var(--muted)_1px,transparent_1px,transparent_20px),repeating-linear-gradient(-45deg,var(--muted)_0,var(--muted)_1px,transparent_1px,transparent_20px)]",
        "bg-[length:40px_40px]",
        className,
      )}
      {...props}
    />
  );
}
