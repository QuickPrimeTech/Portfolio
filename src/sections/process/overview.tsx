import { Progress } from "@/components/ui/progress";
import {
  Lightbulb,
  Palette,
  Code,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";

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

interface OverviewProps {
  activePhase: string;
  setActivePhase: (phase: string) => void;
}

const Hero = ({ activePhase, setActivePhase }: OverviewProps) => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our <span className="text-secondary">Proven Process</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          From initial consultation to ongoing support, we've refined our
          process over 200+ restaurant projects to ensure your success every
          step of the way.
        </p>

        {/* Process Overview Timeline */}
        <Overview activePhase={activePhase} setActivePhase={setActivePhase} />
      </div>
    </section>
  );
};

const Overview = ({ activePhase, setActivePhase }: OverviewProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-5 gap-4">
        {phases.map((phase, index) => (
          <div key={phase.id} className="relative">
            <button
              onClick={() => setActivePhase(phase.id)}
              className={`w-full p-6 rounded-lg border-2 transition-all ${
                activePhase === phase.id
                  ? "border-blue-600 bg-red-50"
                  : "border-gray-200 bg-white hover:border-blue-200"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  activePhase === phase.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <phase.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{phase.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{phase.duration}</p>
              <Progress value={phase.progress} className="h-2" />
            </button>
            {index < phases.length - 1 && (
              <ArrowRight className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-300 h-4 w-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
