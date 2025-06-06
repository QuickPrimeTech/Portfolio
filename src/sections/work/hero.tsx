import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-primary">
          Our <span className="text-secondary">Restaurant</span> Success Stories
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover how we've helped restaurants transform their online presence,
          increase bookings, and grow their business with custom websites that
          deliver real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
        <div className="text-gray-600">Projects Completed</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
        <div className="text-gray-600">Client Satisfaction</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
        <div className="text-gray-600">Avg. Booking Increase</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">2-4</div>
        <div className="text-gray-600">Weeks to Launch</div>
      </div>
    </div>
  );
};
export default Hero;
