"use client";

import React from "react";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import {
  Lightbulb,
  Palette,
  Code,
  Rocket,
  Users,
  CheckCircle,
  MessageSquare,
  FileText,
  Monitor,
  Smartphone,
  Search,
  Camera,
  Settings,
  BarChart3,
  Shield,
  Headphones,
  Calendar,
  Phone,
} from "lucide-react";

import Link from "next/link";
import Hero from "@/sections/process/overview";
import Steps from "@/sections/process/steps";
import Communication from "@/sections/process/communication";
import Tools from "@/sections/process/tools";
import Standards from "@/sections/process/standards";
import Timeline from "@/sections/process/timeline";
import CTA from "@/sections/process/cta";

export default function ProcessPage() {
  const [activePhase, setActivePhase] = React.useState("discovery");

  const phases = [
    {
      id: "discovery",
      name: "Discovery & Planning",
      duration: "Week 1",
      icon: Lightbulb,
      color: "orange",
      description: "Understanding your vision, goals, and requirements",
      progress: 100,
    },
    {
      id: "design",
      name: "Design & Wireframing",
      duration: "Week 2",
      icon: Palette,
      color: "blue",
      description: "Creating visual designs and user experience",
      progress: 75,
    },
    {
      id: "development",
      name: "Development & Build",
      duration: "Week 3",
      icon: Code,
      color: "green",
      description: "Building your website with modern technology",
      progress: 50,
    },
    {
      id: "launch",
      name: "Testing & Launch",
      duration: "Week 4",
      icon: Rocket,
      color: "purple",
      description: "Quality assurance and going live",
      progress: 25,
    },
    {
      id: "support",
      name: "Support & Growth",
      duration: "Ongoing",
      icon: Headphones,
      color: "gray",
      description: "Maintenance, updates, and optimization",
      progress: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero activePhase={activePhase} setActivePhase={setActivePhase} />
      <Steps
        activePhase={activePhase}
        setActivePhase={setActivePhase}
        phases={phases}
      />

      {/* Communication & Collaboration */}
      <Communication />
      {/* Tools & Technology */}
      <Tools />
      <Standards />
      <Timeline />
      <CTA />
    </div>
  );
}
