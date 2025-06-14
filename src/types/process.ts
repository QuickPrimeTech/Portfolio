import { LucideIcon } from "lucide-react";

// Define the type for a single phase object
export interface Phase {
  id: string;
  name: string;
  duration: string;
  icon: LucideIcon;
  color: string;
  description: string;
  progress: number;
}

// Define the type for a single step within a phase
export interface ProcessStep {
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
  icon: LucideIcon;
}

// Define the type for the processSteps object
export interface ProcessSteps {
  [key: string]: ProcessStep[];
}

export interface StepsProps {
  activePhase: string;
  setActivePhase: (phase: string) => void;
  phases: Phase[]; // This prop is correctly passed from ProcessPage
}
