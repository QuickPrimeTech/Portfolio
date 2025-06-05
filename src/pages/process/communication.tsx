import { Card } from "@/components/ui/card";
import { FileText, MessageSquare, Users } from "lucide-react";

const communicationItems = [
  {
    icon: MessageSquare,
    title: "Regular Check-ins",
    description:
      "Weekly progress calls and milestone reviews to ensure we're on track and aligned with your vision.",
    points: [
      "Weekly progress calls",
      "Milestone presentations",
      "Real-time project updates",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Your project gets a dedicated team including a project manager, designer, and developer.",
    points: ["Project manager", "UI/UX designer", "Frontend developer"],
  },
  {
    icon: FileText,
    title: "Shared Workspace",
    description:
      "Access to our project workspace where you can track progress, provide feedback, and access files.",
    points: ["Project dashboard", "File sharing", "Feedback system"],
  },
];

const Communication = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Communication & Collaboration
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in transparent communication and keeping you involved
            throughout the entire process.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {communicationItems.map(
            ({ icon: Icon, title, description, points }, idx) => (
              <Card key={idx} className="text-center p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {points.map((point, index) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Communication;
