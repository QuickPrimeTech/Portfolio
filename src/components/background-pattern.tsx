import { cn } from "@/lib/utils";

interface PatternBackgroundProps {
  width?: string;
  height?: string;
  className?: string;
}

export function BackgroundPattern({
  width = "100%",
  height = "100%",
  className,
}: PatternBackgroundProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid slice"
      className={cn("absolute inset-0 pointer-events-none z-[-1]", className)}
      style={{ width, height, opacity: 0.5 }}
    >
      <rect fill="#bfdbfe" width="1600" height="800" />{" "}
      {/* Tailwind blue-100 */}
      <g stroke="#000" strokeWidth="66.7" strokeOpacity="0.03">
        <circle fill="#bfdbfe" cx="0" cy="0" r="1800" />
        <circle fill="#c7d2fe" cx="0" cy="0" r="1700" />
        <circle fill="#dbeafe" cx="0" cy="0" r="1600" />
        <circle fill="#e0e7ff" cx="0" cy="0" r="1500" />
        <circle fill="#e0f2fe" cx="0" cy="0" r="1400" />
        <circle fill="#dbeafe" cx="0" cy="0" r="1300" />
        <circle fill="#dbeafe" cx="0" cy="0" r="1200" />
        <circle fill="#c7d2fe" cx="0" cy="0" r="1100" />
        <circle fill="#bfdbfe" cx="0" cy="0" r="1000" />
        <circle fill="#c7d2fe" cx="0" cy="0" r="900" />
        <circle fill="#dbeafe" cx="0" cy="0" r="800" />
        <circle fill="#e0e7ff" cx="0" cy="0" r="700" />
        <circle fill="#e0f2fe" cx="0" cy="0" r="600" />
        <circle fill="#dbeafe" cx="0" cy="0" r="500" />
        <circle fill="#e0e7ff" cx="0" cy="0" r="400" />
        <circle fill="#c7d2fe" cx="0" cy="0" r="300" />
        <circle fill="#bfdbfe" cx="0" cy="0" r="200" />
        <circle fill="#c7d2fe" cx="0" cy="0" r="100" />
      </g>
    </svg>
  );
}
