"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Phone,
  Mail,
  CheckCircle,
  Users,
  Globe,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function BookConsultationPage() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    restaurantName: "",
    location: "",
    website: "",
    restaurantType: "",
    currentChallenges: "",
    goals: "",
    timeline: "",
    budget: "",
    selectedPackage: "",
    hearAboutUs: "",
    newsletter: false,
  });

  const steps = [
    {
      title: "Personal Info",
      description: "Tell us about yourself",
      subtitle: "Let's start with your contact information",
    },
    {
      title: "Restaurant Details",
      description: "Tell us about your restaurant",
      subtitle: "Help us understand your business",
    },
    {
      title: "Project Goals",
      description: "Tell us about your project",
      subtitle: "What are you looking to achieve?",
    },
    {
      title: "Final Details",
      description: "Almost there!",
      subtitle: "Just a few more questions",
    },
  ];

  const restaurantTypes = [
    "Fine Dining",
    "Casual Dining",
    "Fast Casual",
    "Coffee Shop/Cafe",
    "Bar/Pub",
    "Food Truck",
    "Bakery",
    "Pizza Restaurant",
    "Ethnic Cuisine",
    "Seafood Restaurant",
    "Steakhouse",
    "Other",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Let's discuss",
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring",
  ];

  const packages = [
    {
      value: "starter",
      label: "Starter Package ($800)",
      description: "Perfect for small cafes",
    },
    {
      value: "pro",
      label: "Pro Package ($1,500)",
      description: "Ideal for growing restaurants",
    },
    {
      value: "premium",
      label: "Premium Package ($2,500+)",
      description: "For upscale establishments",
    },
    {
      value: "custom",
      label: "Custom Solution",
      description: "Let's discuss your unique needs",
    },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // In a real app, this would send data to your backend
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="restaurantName">Restaurant Name *</Label>
                <Input
                  id="restaurantName"
                  value={formData.restaurantName}
                  onChange={(e) =>
                    handleInputChange("restaurantName", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="location">Location (City, State) *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  placeholder="e.g., San Francisco, CA"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="restaurantType">Restaurant Type *</Label>
                <Select
                  value={formData.restaurantType}
                  onValueChange={(value) =>
                    handleInputChange("restaurantType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select restaurant type" />
                  </SelectTrigger>
                  <SelectContent>
                    {restaurantTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="website">Current Website (if any)</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://yourrestaurant.com"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="package">Interested Package</Label>
              <Select
                value={formData.selectedPackage}
                onValueChange={(value) =>
                  handleInputChange("selectedPackage", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a package or custom solution" />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pkg) => (
                    <SelectItem key={pkg.value} value={pkg.value}>
                      <div>
                        <div className="font-medium">{pkg.label}</div>
                        <div className="text-sm text-gray-500">
                          {pkg.description}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="timeline">Project Timeline</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleInputChange("timeline", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="When do you need this?" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline} value={timeline}>
                        {timeline}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => handleInputChange("budget", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((budget) => (
                      <SelectItem key={budget} value={budget}>
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="currentChallenges">Current Challenges</Label>
              <Textarea
                id="currentChallenges"
                value={formData.currentChallenges}
                onChange={(e) =>
                  handleInputChange("currentChallenges", e.target.value)
                }
                placeholder="What challenges are you facing with your current online presence?"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="goals">Goals & Objectives</Label>
              <Textarea
                id="goals"
                value={formData.goals}
                onChange={(e) => handleInputChange("goals", e.target.value)}
                placeholder="What do you hope to achieve with your new website?"
                rows={3}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
              <Select
                value={formData.hearAboutUs}
                onValueChange={(value) =>
                  handleInputChange("hearAboutUs", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="referral">
                    Referral from another restaurant
                  </SelectItem>
                  <SelectItem value="review">Online Reviews</SelectItem>
                  <SelectItem value="advertising">
                    Online Advertising
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter as boolean}
                onCheckedChange={(checked) =>
                  handleInputChange("newsletter", checked as boolean)
                }
              />
              <Label htmlFor="newsletter" className="text-sm">
                Subscribe to our newsletter for restaurant marketing tips and
                industry insights
              </Label>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-6">
                By submitting this form, you agree to our Terms of Service and
                Privacy Policy. We'll never share your information with third
                parties.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your <span className="text-blue-600">Free Consultation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your restaurant's goals and create a custom plan to
            transform your online presence. No pressure, no sales pitch – just
            expert advice tailored to your needs.
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">100% Free Consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Custom Strategy Session</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">No Obligation Quote</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-6">
                      Schedule Your Consultation
                    </CardTitle>

                    {/* Step Indicator */}
                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                      <div className="flex items-center justify-between">
                        {steps.map((step, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center flex-1"
                          >
                            {/* Circle with Number */}
                            <div className="relative">
                              <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                  index <= currentStep
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-500"
                                }`}
                              >
                                {index + 1}
                              </div>
                              {/* Connecting Line */}
                              {index < steps.length - 1 && (
                                <div
                                  className={`absolute top-6 left-12 h-0.5 transition-all duration-300 ${
                                    index < currentStep
                                      ? "bg-blue-600"
                                      : "bg-gray-200"
                                  }`}
                                  style={{
                                    width: `calc(100vw / ${steps.length} - 3rem)`,
                                    maxWidth: "120px",
                                  }}
                                />
                              )}
                            </div>

                            {/* Step Label */}
                            <div className="text-center mt-3">
                              <div
                                className={`text-sm font-semibold transition-colors duration-300 ${
                                  index <= currentStep
                                    ? "text-blue-600"
                                    : "text-gray-400"
                                }`}
                              >
                                {step.title}
                              </div>
                              <div
                                className={`text-xs mt-1 transition-colors duration-300 ${
                                  index === currentStep
                                    ? "text-gray-600"
                                    : "text-gray-400"
                                }`}
                              >
                                {step.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <CardDescription className="text-lg text-gray-600">
                      {steps[currentStep].subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit}>{renderStepContent()}</form>
                  </CardContent>

                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className={
                        currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                      }
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>

                    {currentStep < steps.length - 1 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Schedule My Free Consultation
                        <Calendar className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Prefer to Call?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">(555) 123-4567</p>
                        <p className="text-sm text-gray-500">
                          Mon-Fri, 9AM-6PM PST
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">hello@quickprimetech.com</p>
                        <p className="text-sm text-gray-500">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* What to Expect */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">15-30 Minute Call</p>
                        <p className="text-sm text-gray-500">
                          We'll discuss your goals and current challenges
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Expert Recommendations</p>
                        <p className="text-sm text-gray-500">
                          Get personalized advice for your restaurant
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Custom Proposal</p>
                        <p className="text-sm text-gray-500">
                          Receive a detailed plan and timeline
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial */}
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle
                          key={i}
                          className="h-4 w-4 text-blue-600"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic mb-4">
                      "The consultation was incredibly valuable. They understood
                      our needs immediately and provided actionable insights
                      even before we hired them."
                    </p>
                    <div className="text-sm">
                      <p className="font-medium">Maria Rodriguez</p>
                      <p className="text-gray-500">
                        Owner, Bella Vista Italian
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
