"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ChefHat,
  Lightbulb,
  Palette,
  Code,
  Rocket,
  Users,
  CheckCircle,
  Clock,
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
  ArrowRight,
  Calendar,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function ProcessPage() {
  const [activePhase, setActivePhase] = React.useState("discovery")

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
  ]

  const processSteps = {
    discovery: [
      {
        title: "Initial Consultation",
        description: "Free 30-minute call to understand your restaurant and goals",
        deliverables: ["Project scope document", "Timeline proposal", "Budget estimate"],
        duration: "1 day",
        icon: MessageSquare,
      },
      {
        title: "Brand & Content Audit",
        description: "Review existing materials, competitors, and target audience",
        deliverables: ["Competitive analysis", "Brand guidelines", "Content inventory"],
        duration: "2-3 days",
        icon: Search,
      },
      {
        title: "Requirements Gathering",
        description: "Detailed discussion of features, functionality, and preferences",
        deliverables: ["Technical requirements", "Feature specifications", "Project roadmap"],
        duration: "2-3 days",
        icon: FileText,
      },
      {
        title: "Project Kickoff",
        description: "Official project start with team introductions and timeline",
        deliverables: ["Project charter", "Communication plan", "Access credentials"],
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
        deliverables: ["Desktop wireframes", "Mobile wireframes", "Interactive prototypes"],
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
        deliverables: ["Design presentation", "Revision rounds", "Final approval"],
        duration: "2-3 days",
        icon: CheckCircle,
      },
    ],
    development: [
      {
        title: "Frontend Development",
        description: "Convert designs into responsive, interactive web pages",
        deliverables: ["HTML/CSS/JS code", "Responsive layouts", "Interactive elements"],
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
        description: "Add restaurant-specific features like menus and reservations",
        deliverables: ["Online menu system", "Reservation integration", "Contact forms"],
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
        deliverables: ["Monthly reports", "Performance insights", "Recommendations"],
        duration: "Ongoing",
        icon: BarChart3,
      },
      {
        title: "Maintenance Plans",
        description: "Optional ongoing maintenance and updates",
        deliverables: ["Security updates", "Content changes", "Feature additions"],
        duration: "Monthly",
        icon: Settings,
      },
      {
        title: "Growth Optimization",
        description: "Continuous improvement based on data and feedback",
        deliverables: ["A/B testing", "Conversion optimization", "Feature enhancements"],
        duration: "Quarterly",
        icon: BarChart3,
      },
    ],
  }

  const tools = [
    { name: "Figma", category: "Design", description: "UI/UX design and prototyping" },
    { name: "React", category: "Development", description: "Modern frontend framework" },
    { name: "Next.js", category: "Development", description: "Full-stack React framework" },
    { name: "Tailwind CSS", category: "Development", description: "Utility-first CSS framework" },
    { name: "Vercel", category: "Hosting", description: "Fast, reliable hosting platform" },
    { name: "Google Analytics", category: "Analytics", description: "Website performance tracking" },
    { name: "Lighthouse", category: "Testing", description: "Performance and SEO auditing" },
    { name: "Notion", category: "Project Management", description: "Collaboration and documentation" },
  ]

  const qualityStandards = [
    {
      title: "Performance",
      description: "90+ PageSpeed score on all devices",
      icon: BarChart3,
      metrics: ["< 3s load time", "90+ Lighthouse score", "Optimized images"],
    },
    {
      title: "Accessibility",
      description: "WCAG 2.1 AA compliance for all users",
      icon: Users,
      metrics: ["Screen reader compatible", "Keyboard navigation", "Color contrast"],
    },
    {
      title: "SEO",
      description: "Optimized for search engines and local discovery",
      icon: Search,
      metrics: ["Meta tags", "Schema markup", "Local SEO"],
    },
    {
      title: "Security",
      description: "Industry-standard security measures",
      icon: Shield,
      metrics: ["SSL certificate", "Secure forms", "Regular updates"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">QuickPrimeTech</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/process" className="text-blue-600 font-medium">
              Process
            </Link>
            <Link href="/#work" className="text-gray-600 hover:text-blue-600 transition-colors">
              Our Work
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/team" className="text-gray-600 hover:text-blue-600 transition-colors">
              Team
            </Link>
            <Link href="/reviews" className="text-gray-600 hover:text-blue-600 transition-colors">
              Reviews
            </Link>
          </div>
          <Link href="/book-consultation">
            <Button className="bg-blue-600 hover:bg-blue-700">Book Free Consultation</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Proven Process</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From initial consultation to ongoing support, we've refined our process over 200+ restaurant projects to
            ensure your success every step of the way.
          </p>

          {/* Process Overview Timeline */}
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
                        activePhase === phase.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
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
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activePhase} onValueChange={setActivePhase}>
              <TabsList className="grid w-full grid-cols-5 mb-12">
                {phases.map((phase) => (
                  <TabsTrigger key={phase.id} value={phase.id} className="text-xs">
                    {phase.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(processSteps).map(([phaseId, steps]) => (
                <TabsContent key={phaseId} value={phaseId}>
                  <div className="mb-12">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {phases.find((p) => p.id === phaseId)?.name}
                      </h2>
                      <p className="text-xl text-gray-600">{phases.find((p) => p.id === phaseId)?.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {steps.map((step, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <step.icon className="h-6 w-6 text-blue-600" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{step.title}</CardTitle>
                                <CardDescription className="flex items-center mt-1">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {step.duration}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">{step.description}</p>
                            <div>
                              <h4 className="font-semibold text-sm text-gray-900 mb-2">Deliverables:</h4>
                              <ul className="space-y-1">
                                {step.deliverables.map((deliverable, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    {deliverable}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Communication & Collaboration */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Communication & Collaboration</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in transparent communication and keeping you involved throughout the entire process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Regular Check-ins</h3>
              <p className="text-gray-600 mb-4">
                Weekly progress calls and milestone reviews to ensure we're on track and aligned with your vision.
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
                Your project gets a dedicated team including a project manager, designer, and developer.
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
                Access to our project workspace where you can track progress, provide feedback, and access files.
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

      {/* Tools & Technology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tools & Technology</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use industry-leading tools and modern technology to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <Badge className="mb-4 bg-red-100 text-red-800">{tool.category}</Badge>
                  <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality Standards</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every website we deliver meets our rigorous quality standards for performance, accessibility, and user
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <standard.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{standard.title}</h3>
                <p className="text-gray-600 mb-6">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Timeline & Investment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent timelines and pricing for each package level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for small cafes</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">2-3 Weeks</div>
                <div className="text-lg text-gray-600">From $800</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Streamlined 3-week process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Essential features only
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Basic design customization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    30 days support included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Most Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>Ideal for growing restaurants</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">3-4 Weeks</div>
                <div className="text-lg text-gray-600">From $1,500</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Full 4-week process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Advanced features included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom design & branding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Priority support included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>For upscale establishments</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">4-6 Weeks</div>
                <div className="text-lg text-gray-600">From $2,500+</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Extended 6-week process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom features & integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Professional photography
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Ongoing maintenance included
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
            Let's discuss your restaurant's goals and walk through our process together. Book a free consultation to get
            started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <ChefHat className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">QuickPrimeTech</span>
            </Link>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 QuickPrimeTech. All rights reserved. Specialized in restaurant website development.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
