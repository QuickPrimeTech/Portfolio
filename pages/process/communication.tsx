import { Card } from "@/components/ui/card";
import { FileText, MessageSquare, Users } from "lucide-react";

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
          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Regular Check-ins</h3>
            <p className="text-gray-600 mb-4">
              Weekly progress calls and milestone reviews to ensure we're on
              track and aligned with your vision.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Weekly progress calls</li>
              <li>• Milestone presentations</li>
              <li>• Real-time project updates</li>
            </ul>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Dedicated Team</h3>
            <p className="text-gray-600 mb-4">
              Your project gets a dedicated team including a project manager,
              designer, and developer.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Project manager</li>
              <li>• UI/UX designer</li>
              <li>• Frontend developer</li>
            </ul>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Shared Workspace</h3>
            <p className="text-gray-600 mb-4">
              Access to our project workspace where you can track progress,
              provide feedback, and access files.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Project dashboard</li>
              <li>• File sharing</li>
              <li>• Feedback system</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Communication;
