"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Palette,
  Code,
  Rocket,
  Users,
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
  Clock,
  CheckCircle,
  LucideIcon,
  Lightbulb,
} from "lucide-react";

// Define the type for a single phase object
interface Phase {
  id: string;
  name: string;
  duration: string;
  icon: LucideIcon;
  color: string;
  description: string;
  progress: number;
}

// Define the type for a single step within a phase
interface ProcessStep {
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
  icon: LucideIcon;
}

// Define the type for the processSteps object
interface ProcessSteps {
  [key: string]: ProcessStep[];
}

interface StepsProps {
  activePhase: string;
  setActivePhase: (phase: string) => void;
  phases: Phase[]; // This prop is correctly passed from ProcessPage
}

const processSteps: ProcessSteps = {
  discovery: [
    {
      title: "Initial Consultation",
      description:
        "Free 30-minute call to understand your restaurant and goals",
      deliverables: [
        "Project scope document",
        "Timeline proposal",
        "Budget estimate",
      ],
      duration: "1 day",
      icon: MessageSquare,
    },
    {
      title: "Brand & Content Audit",
      description:
        "Review existing materials, competitors, and target audience",
      deliverables: [
        "Competitive analysis",
        "Brand guidelines",
        "Content inventory",
      ],
      duration: "2-3 days",
      icon: Search,
    },
    {
      title: "Requirements Gathering",
      description:
        "Detailed discussion of features, functionality, and preferences",
      deliverables: [
        "Technical requirements",
        "Feature specifications",
        "Project roadmap",
      ],
      duration: "2-3 days",
      icon: FileText,
    },
    {
      title: "Project Kickoff",
      description:
        "Official project start with team introductions and timeline",
      deliverables: [
        "Project charter",
        "Communication plan",
        "Access credentials",
      ],
      duration: "1 day",
      icon: Users,
    },
  ],
  design: [
    {
      title: "Information Architecture",
      description: "Organize content structure and navigation flow",
      deliverables: ["Site map", "User flow diagrams", "Content strategy"],
      duration: "2-3 days",
      icon: FileText,
    },
    {
      title: "Wireframing",
      description: "Create low-fidelity layouts for all key pages",
      deliverables: [
        "Desktop wireframes",
        "Mobile wireframes",
        "Interactive prototypes",
      ],
      duration: "3-4 days",
      icon: Monitor,
    },
    {
      title: "Visual Design",
      description: "Develop high-fidelity designs with your brand identity",
      deliverables: ["Homepage design", "Interior page designs", "Style guide"],
      duration: "4-5 days",
      icon: Palette,
    },
    {
      title: "Design Review & Approval",
      description: "Present designs and incorporate your feedback",
      deliverables: [
        "Design presentation",
        "Revision rounds",
        "Final approval",
      ],
      duration: "2-3 days",
      icon: CheckCircle,
    },
  ],
  development: [
    {
      title: "Frontend Development",
      description: "Convert designs into responsive, interactive web pages",
      deliverables: [
        "HTML/CSS/JS code",
        "Responsive layouts",
        "Interactive elements",
      ],
      duration: "5-7 days",
      icon: Code,
    },
    {
      title: "Backend Integration",
      description: "Set up content management and dynamic functionality",
      deliverables: ["CMS setup", "Database configuration", "API integrations"],
      duration: "3-4 days",
      icon: Settings,
    },
    {
      title: "Feature Implementation",
      description:
        "Add restaurant-specific features like menus and reservations",
      deliverables: [
        "Online menu system",
        "Reservation integration",
        "Contact forms",
      ],
      duration: "3-4 days",
      icon: Smartphone,
    },
    {
      title: "Content Population",
      description: "Add your content, images, and menu items",
      deliverables: ["Menu upload", "Photo optimization", "Content entry"],
      duration: "2-3 days",
      icon: Camera,
    },
  ],
  launch: [
    {
      title: "Quality Assurance",
      description: "Comprehensive testing across devices and browsers",
      deliverables: ["Testing report", "Bug fixes", "Performance optimization"],
      duration: "2-3 days",
      icon: Shield,
    },
    {
      title: "SEO Optimization",
      description: "Optimize for search engines and local discovery",
      deliverables: ["SEO audit", "Meta tags", "Local SEO setup"],
      duration: "1-2 days",
      icon: Search,
    },
    {
      title: "Client Training",
      description: "Train your team on managing and updating the website",
      deliverables: ["Training session", "User manual", "Video tutorials"],
      duration: "1 day",
      icon: Users,
    },
    {
      title: "Go Live",
      description: "Deploy your website and monitor initial performance",
      deliverables: ["Live website", "Analytics setup", "Monitoring dashboard"],
      duration: "1 day",
      icon: Rocket,
    },
  ],
  support: [
    {
      title: "30-Day Support",
      description: "Free support and minor adjustments after launch",
      deliverables: ["Bug fixes", "Content updates", "Technical support"],
      duration: "30 days",
      icon: Headphones,
    },
    {
      title: "Performance Monitoring",
      description: "Track website performance and user engagement",
      deliverables: [
        "Monthly reports",
        "Performance insights",
        "Recommendations",
      ],
      duration: "Ongoing",
      icon: BarChart3,
    },
    {
      title: "Maintenance Plans",
      description: "Optional ongoing maintenance and updates",
      deliverables: [
        "Security updates",
        "Content changes",
        "Feature additions",
      ],
      duration: "Monthly",
      icon: Settings,
    },
    {
      title: "Growth Optimization",
      description: "Continuous improvement based on data and feedback",
      deliverables: [
        "A/B testing",
        "Conversion optimization",
        "Feature enhancements",
      ],
      duration: "Quarterly",
      icon: BarChart3,
    },
  ],
};

const Steps = ({ activePhase, setActivePhase, phases }: StepsProps) => {
  // Ensure phases is an array from the start within the component's scope
  // This makes subsequent uses of phases.find() safer.
  const safePhases = phases || [];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activePhase} onValueChange={setActivePhase}>
            <TabsList className="grid w-full grid-cols-5 mb-12">
              {/* Using safePhases here */}
              {safePhases.map((phase: Phase) => (
                <TabsTrigger
                  key={phase.id}
                  value={phase.id}
                  className="text-xs"
                >
                  {phase.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(processSteps).map(
              ([phaseId, currentPhaseStepsArray]) => (
                <TabsContent key={phaseId} value={phaseId}>
                  <div className="mb-12">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {/* Using safePhases here */}
                        {safePhases.find((p) => p.id === phaseId)?.name ||
                          "Unknown Phase"}
                      </h2>
                      <p className="text-xl text-gray-600">
                        {/* Using safePhases here */}
                        {safePhases.find((p) => p.id === phaseId)
                          ?.description || ""}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {(currentPhaseStepsArray || []).map(
                        (step: ProcessStep, index: number) => (
                          <Card
                            key={index}
                            className="hover:shadow-lg transition-shadow"
                          >
                            <CardHeader>
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                  {step.icon && (
                                    <step.icon className="h-6 w-6 text-blue-600" />
                                  )}
                                </div>
                                <div>
                                  <CardTitle className="text-lg">
                                    {step.title}
                                  </CardTitle>
                                  <CardDescription className="flex items-center mt-1">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {step.duration}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">
                                {step.description}
                              </p>
                              <div>
                                <h4 className="font-semibold text-sm text-gray-900 mb-2">
                                  Deliverables:
                                </h4>
                                <ul className="space-y-1">
                                  {(step.deliverables || []).map(
                                    (deliverable: string, idx: number) => (
                                      <li
                                        key={idx}
                                        className="flex items-center text-sm text-gray-600"
                                      >
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                                        {deliverable}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      )}
                    </div>
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Steps;
