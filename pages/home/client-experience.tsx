import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Week 1: Discovery</h3>
              <p className="text-gray-600 text-sm">
                Understanding your vision and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Week 2: Design</h3>
              <p className="text-gray-600 text-sm">
                Creating wireframes and visual designs
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Week 3: Build</h3>
              <p className="text-gray-600 text-sm">
                Development and functionality integration
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2">Week 4: Launch</h3>
              <p className="text-gray-600 text-sm">
                Testing, refinements, and going live
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "QuickPrimeTech transformed our online presence completely. Our
                bookings increased by 40% in the first month!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">MR</span>
                </div>
                <div>
                  <p className="font-semibold">Maria Rodriguez</p>
                  <p className="text-sm text-gray-500">
                    Owner, Bella Vista Italian
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The team made the whole process so easy. They understood our
                brand perfectly and delivered exactly what we wanted."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">JC</span>
                </div>
                <div>
                  <p className="font-semibold">James Chen</p>
                  <p className="text-sm text-gray-500">
                    Manager, Green Garden Cafe
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, fast, and the results speak for themselves. Our
                event bookings tripled after the new site launched."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">SK</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Kim</p>
                  <p className="text-sm text-gray-500">
                    Owner, The Rooftop Bar
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;
