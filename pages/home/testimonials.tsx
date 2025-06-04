import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "QuickPrimeTech transformed our online presence completely. Our bookings increased by 40% in the first month!",
    initials: "MR",
    name: "Maria Rodriguez",
    role: "Owner, Bella Vista Italian",
  },
  {
    quote:
      "The team made the whole process so easy. They understood our brand perfectly and delivered exactly what we wanted.",
    initials: "JC",
    name: "James Chen",
    role: "Manager, Green Garden Cafe",
  },
  {
    quote:
      "Professional, fast, and the results speak for themselves. Our event bookings tripled after the new site launched.",
    initials: "SK",
    name: "Sarah Kim",
    role: "Owner, The Rooftop Bar",
  },
];

const steps = [
  {
    number: 1,
    title: "Week 1: Discovery",
    description: "Understanding your vision and requirements",
  },
  {
    number: 2,
    title: "Week 2: Design",
    description: "Creating wireframes and visual designs",
  },
  {
    number: 3,
    title: "Week 3: Build",
    description: "Development and functionality integration",
  },
  {
    number: 4,
    title: "Week 4: Launch",
    description: "Testing, refinements, and going live",
  },
];

const ClientExperience = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Client Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No tech experience needed – we handle everything from start to
            finish.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ClientExperience;
