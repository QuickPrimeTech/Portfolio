"use client";
import { useState, useEffect } from "react";
import { Check, Clock, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-white rounded-lg p-4 mb-6">
      <p className="text-center text-sm mb-2 text-red-300">
        ⏰ OFFER EXPIRES IN:
      </p>
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <div className="text-2xl font-bold">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="text-xs">DAYS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-xs">HOURS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-xs">MINS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-xs">SECS</div>
        </div>
      </div>
    </div>
  );
}

export default function CrazyOffers() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-4 text-red-600 bg-red-100 animate-pulse"
          >
            🔥 CRAZY OFFER - Limited Time!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">CRAZY OFFER:</span> Get a Custom
            Restaurant Website —{" "}
            <span className="text-orange-600">Risk-Free!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I know how busy running a restaurant can be — and how hard it is to
            trust someone with your online presence. That's why I've created a
            simple, no-risk offer just for restaurant owners like you:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What You Get */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-2 mr-3">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  What You Get
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    A fully custom-designed website, built around your goals
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Optimized for repeat customers, online orders, and
                    reservations
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Hosted <strong>FREE</strong> for the first 3 months
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Designed to look great on both phones and computers
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="border-2 border-red-200 bg-red-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-4 -translate-y-2">
              SAVE 92%!
            </div>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-red-500 rounded-full p-2 mr-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Your Only Upfront Cost
                </h3>
              </div>

              {/* Countdown Timer */}
              <CountdownTimer />

              <div className="text-center mb-6">
                <div className="mb-4">
                  <span className="text-2xl text-gray-400 line-through mr-4">
                    Ksh 40,000
                  </span>
                  <div className="text-5xl font-bold text-red-600 mb-2">
                    Ksh 3,000
                  </div>
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-2 inline-block">
                    <span className="text-yellow-800 font-semibold">
                      You Save Ksh 37,000!
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Just a small one-time commitment fee.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  This is to show you're serious. That's it.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      If You Love It:
                    </p>
                    <p className="text-sm text-gray-600">
                      Keep it at 50% off my basic package after 3 months
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      If It's Not For You:
                    </p>
                    <p className="text-sm text-gray-600">
                      No hard feelings. I'll take the site down and you'll have
                      spent nothing more.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk-Free Guarantee */}
        <Card className="border-2 border-purple-200 bg-purple-50 mb-8">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-500 rounded-full p-3 mr-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                100% Risk-Free Guarantee
              </h3>
            </div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              No pressure. No hidden fees. Just a chance to build something
              great together.
            </p>
          </CardContent>
        </Card>

        {/* Consultation Section */}
        <Card className="border-2 border-gray-200 bg-white mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gray-800 rounded-full p-2 mr-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Let's Talk First
              </h3>
            </div>
            <p className="text-gray-700 text-lg mb-6">
              This isn't just about a website — it's about your business goals.
              Before I start, we'll have a short meeting to understand your
              vision, your challenges, and how I can help your restaurant grow
              online.
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            🚀 CLAIM THIS CRAZY OFFER NOW!
          </Button>
          <p className="text-gray-600 mt-4 text-lg">
            👉 Only 3 spots left this month! No pressure. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
}
