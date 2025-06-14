import { ProcessSteps } from "@/types";
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
  CheckCircle,
} from "lucide-react";

export const processSteps: ProcessSteps = {
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
