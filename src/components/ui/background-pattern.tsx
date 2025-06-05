import { cn } from "@/lib/utils";
import { ClassName } from "@/types";

const WavePattern = ({ className }: ClassName) => {
  return (
    <svg
      viewBox="0 0 1440 717"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      preserveAspectRatio="none"
    >
      <path
        d="M475.166 522.147C259.292 519.926 -3 717 -3 717H1441V0C1441 0 1364.75 511.744 1049.36 497.349C980.731 494.217 946.576 455.129 879.306 465.188C798.587 477.257 808.414 551.786 730.254 570.39C632.546 593.647 578.322 523.209 475.166 522.147Z"
        fill="url(#paint0_linear_2_7)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_7"
          x1="13.75"
          y1="717.351"
          x2="1072.37"
          y2="-361.217"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.528846" stopColor="var(--secondary)" />
          <stop offset="1" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const LinePattern = ({ className }: ClassName) => {
  return (
    <svg
      className={className}
      viewBox="0 0 440 834"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1080V8.25246M96 1080V8.25246M192 1080V8.25246M288 1080V8.25246M384 1080V8.25246M480 1080V8.25246M576 1080V8.25246M768 1080V8.25246M864 1080V8.25246M960 1080V8.25246M672 1080V8.25246M960 1071.75V0M1056 1071.75V0M1152 1071.75V0M1248 1071.75V0M1344 1071.75V0M1440 1071.75V0M1536 1071.75V0M1728 1071.75V0M1824 1071.75V0M1920 1071.75V0M1632 1071.75V0"
        stroke="url(#paint0_linear_6_984)"
        strokeOpacity="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_984"
          x1="960"
          y1="0"
          x2="960"
          y2="716"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DC2626" stopOpacity="0.3" />
          <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { WavePattern, LinePattern };
