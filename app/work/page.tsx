"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChefHat, Search, ExternalLink, Calendar, ArrowRight, Eye, Zap, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "Bella Vista Italian",
    category: "Fine Dining",
    description:
      "Transformed a family restaurant's outdated site into a modern, reservation-friendly experience that captures the authentic Italian atmosphere.",
    shortDescription: "Modern Italian restaurant website with reservation system",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://bellavista-demo.com",
    completedDate: "2024-03-15",
    duration: "3 weeks",
    package: "Pro",
    client: "Maria Rodriguez",
    location: "San Francisco, CA",
    results: {
      bookings: "+40%",
      traffic: "+65%",
      conversion: "+35%",
      revenue: "+28%",
    },
    features: [
      "Online Reservations",
      "Digital Menu",
      "Photo Gallery",
      "Customer Reviews",
      "Social Media Integration",
      "Mobile Optimization",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "OpenTable API"],
    testimonial: {
      text: "QuickPrimeTech transformed our online presence completely. Our bookings increased by 40% in the first month!",
      author: "Maria Rodriguez",
      role: "Owner",
    },
    metrics: [
      { label: "Page Load Speed", value: "1.2s", improvement: "+75%" },
      { label: "Mobile Score", value: "98/100", improvement: "+45%" },
      { label: "SEO Score", value: "95/100", improvement: "+60%" },
    ],
    challenges: [
      "Outdated design not mobile-friendly",
      "No online reservation system",
      "Poor search engine visibility",
    ],
    solutions: ["Modern responsive design", "Integrated OpenTable reservations", "Comprehensive SEO optimization"],
    tags: ["Restaurant", "Reservations", "Italian", "Family Business"],
  },
  {
    id: 2,
    name: "Green Garden Cafe",
    category: "Casual Dining",
    description:
      "Built a fresh, mobile-first site for a health-focused cafe with online ordering integration and sustainability messaging.",
    shortDescription: "Health-focused cafe with online ordering system",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://greengarden-demo.com",
    completedDate: "2024-02-28",
    duration: "2 weeks",
    package: "Starter",
    client: "James Chen",
    location: "Portland, OR",
    results: {
      orders: "+60%",
      traffic: "+45%",
      conversion: "+50%",
      revenue: "+35%",
    },
    features: [
      "Online Ordering",
      "Nutritional Information",
      "Sustainability Page",
      "Blog Integration",
      "Email Newsletter",
      "Location Finder",
    ],
    technologies: ["React", "Next.js", "Stripe", "Mailchimp API"],
    testimonial: {
      text: "The team made the whole process so easy. They understood our brand perfectly and delivered exactly what we wanted.",
      author: "James Chen",
      role: "Manager",
    },
    metrics: [
      { label: "Mobile Conversion", value: "60%", improvement: "+40%" },
      { label: "Order Value", value: "$24", improvement: "+15%" },
      { label: "Return Visitors", value: "45%", improvement: "+25%" },
    ],
    challenges: ["No online ordering capability", "Unclear brand messaging", "Limited mobile experience"],
    solutions: ["Custom ordering system", "Clear sustainability focus", "Mobile-first design approach"],
    tags: ["Cafe", "Health Food", "Online Ordering", "Sustainability"],
  },
  {
    id: 3,
    name: "The Rooftop Bar",
    category: "Bar & Lounge",
    description:
      "Created an upscale, event-focused website with stunning photo galleries and private dining booking system.",
    shortDescription: "Upscale rooftop bar with event booking system",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://rooftopbar-demo.com",
    completedDate: "2024-01-20",
    duration: "4 weeks",
    package: "Premium",
    client: "Sarah Kim",
    location: "New York, NY",
    results: {
      events: "+300%",
      traffic: "+80%",
      conversion: "+45%",
      revenue: "+55%",
    },
    features: [
      "Event Booking",
      "Private Dining",
      "Photo Galleries",
      "Cocktail Menu",
      "Live Music Calendar",
      "VIP Reservations",
    ],
    technologies: ["React", "Next.js", "Calendly API", "Instagram API"],
    testimonial: {
      text: "Professional, fast, and the results speak for themselves. Our event bookings tripled after the new site launched.",
      author: "Sarah Kim",
      role: "Owner",
    },
    metrics: [
      { label: "Event Inquiries", value: "3x", improvement: "+200%" },
      { label: "Average Booking", value: "$2,500", improvement: "+40%" },
      { label: "Social Engagement", value: "+85%", improvement: "+85%" },
    ],
    challenges: ["No event booking system", "Poor photo presentation", "Limited social media presence"],
    solutions: ["Custom event booking flow", "Professional photo galleries", "Social media integration"],
    tags: ["Bar", "Events", "Upscale", "Private Dining"],
  },
  {
    id: 4,
    name: "Coastal Seafood House",
    category: "Fine Dining",
    description:
      "Redesigned a waterfront restaurant's site with stunning visuals and comprehensive online table reservation system.",
    shortDescription: "Waterfront seafood restaurant with stunning visuals",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://coastalseafood-demo.com",
    completedDate: "2024-04-10",
    duration: "3 weeks",
    package: "Pro",
    client: "Michael Torres",
    location: "San Diego, CA",
    results: {
      bookings: "+50%",
      traffic: "+70%",
      conversion: "+40%",
      revenue: "+45%",
    },
    features: [
      "Table Reservations",
      "Fresh Catch Display",
      "Wine Pairing Guide",
      "Chef's Specials",
      "Location Map",
      "Weather Integration",
    ],
    technologies: ["React", "Next.js", "OpenTable", "Weather API"],
    testimonial: {
      text: "The new website perfectly captures our oceanfront atmosphere. Weekend bookings have increased by 50%!",
      author: "Michael Torres",
      role: "General Manager",
    },
    metrics: [
      { label: "Weekend Bookings", value: "+50%", improvement: "+50%" },
      { label: "Average Party Size", value: "4.2", improvement: "+20%" },
      { label: "Repeat Customers", value: "65%", improvement: "+30%" },
    ],
    challenges: ["Outdated reservation system", "Poor mobile experience", "Limited visual appeal"],
    solutions: ["Modern reservation flow", "Mobile-optimized design", "Stunning visual presentation"],
    tags: ["Seafood", "Waterfront", "Fine Dining", "Reservations"],
  },
  {
    id: 5,
    name: "Urban Bistro",
    category: "Casual Dining",
    description:
      "Created a modern, minimalist site for a trendy downtown bistro with integrated social feeds and delivery options.",
    shortDescription: "Modern downtown bistro with social integration",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://urbanbistro-demo.com",
    completedDate: "2024-03-05",
    duration: "2 weeks",
    package: "Starter",
    client: "Alex Rivera",
    location: "Austin, TX",
    results: {
      social: "+35%",
      traffic: "+55%",
      conversion: "+30%",
      revenue: "+25%",
    },
    features: [
      "Social Media Feed",
      "Delivery Integration",
      "Daily Specials",
      "Chef's Blog",
      "Loyalty Program",
      "Gift Cards",
    ],
    technologies: ["React", "Next.js", "Instagram API", "DoorDash API"],
    testimonial: {
      text: "Our social media engagement has grown tremendously since the new site launched. The integration is seamless!",
      author: "Alex Rivera",
      role: "Owner",
    },
    metrics: [
      { label: "Social Engagement", value: "+35%", improvement: "+35%" },
      { label: "Delivery Orders", value: "+40%", improvement: "+40%" },
      { label: "Newsletter Signups", value: "+60%", improvement: "+60%" },
    ],
    challenges: ["Poor social media integration", "No delivery options", "Limited customer engagement"],
    solutions: ["Live social media feeds", "Multiple delivery platforms", "Engaging content strategy"],
    tags: ["Bistro", "Urban", "Social Media", "Delivery"],
  },
  {
    id: 6,
    name: "Farm Table Kitchen",
    category: "Farm-to-Table",
    description:
      "Developed a farm-to-table restaurant website emphasizing local sourcing and seasonal menus with farmer partnerships.",
    shortDescription: "Farm-to-table restaurant with local sourcing focus",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://farmtable-demo.com",
    completedDate: "2024-02-15",
    duration: "3 weeks",
    package: "Pro",
    client: "Emma Johnson",
    location: "Nashville, TN",
    results: {
      bookings: "+45%",
      traffic: "+60%",
      conversion: "+38%",
      revenue: "+42%",
    },
    features: [
      "Seasonal Menus",
      "Farmer Profiles",
      "Ingredient Sourcing",
      "Cooking Classes",
      "Private Events",
      "Sustainability Story",
    ],
    technologies: ["React", "Next.js", "CMS Integration", "Map API"],
    testimonial: {
      text: "The website beautifully tells our farm-to-table story. Customers love learning about our local partnerships!",
      author: "Emma Johnson",
      role: "Chef & Owner",
    },
    metrics: [
      { label: "Cooking Class Bookings", value: "+80%", improvement: "+80%" },
      { label: "Private Events", value: "+60%", improvement: "+60%" },
      { label: "Local Engagement", value: "+70%", improvement: "+70%" },
    ],
    challenges: ["Complex seasonal menu management", "Storytelling about sourcing", "Event booking coordination"],
    solutions: ["Dynamic menu system", "Farmer partnership pages", "Integrated event calendar"],
    tags: ["Farm-to-Table", "Local", "Seasonal", "Sustainability"],
  },
]

const categories = ["All", "Fine Dining", "Casual Dining", "Bar & Lounge", "Farm-to-Table"]
const packages = ["All", "Starter", "Pro", "Premium"]

export default function WorkPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPackage, setSelectedPackage] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState("grid")

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
      const matchesPackage = selectedPackage === "All" || project.package === selectedPackage
      return matchesSearch && matchesCategory && matchesPackage
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
        case "oldest":
          return new Date(a.completedDate).getTime() - new Date(b.completedDate).getTime()
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

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
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/process" className="text-gray-600 hover:text-blue-600 transition-colors">
              Process
            </Link>
            <Link href="/work" className="text-blue-600 font-medium">
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
          <Button className="bg-blue-600 hover:bg-blue-700">Book Free Consultation</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-blue-100">Portfolio Showcase</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="text-blue-600">Restaurant</span> Success Stories
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped restaurants transform their online presence, increase bookings, and grow their
            business with custom websites that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
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

          {/* Quick Stats */}
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
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Package" />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pkg) => (
                    <SelectItem key={pkg} value={pkg}>
                      {pkg}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setSelectedPackage("All")
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
            Let's create a website that transforms your restaurant's online presence and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 text-white">{project.package}</Badge>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(project.completedDate).toLocaleDateString()}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.shortDescription}</p>

        {/* Key Results */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {Object.entries(project.results)
            .slice(0, 2)
            .map(([key, value]) => (
              <div key={key} className="text-center p-2 bg-red-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600">{value}</div>
                <div className="text-xs text-gray-600 capitalize">{key}</div>
              </div>
            ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 flex-1">View Details</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <ProjectModal project={project} />
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectModal({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="space-y-6">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <div>
            <DialogTitle className="text-2xl font-bold">{project.name}</DialogTitle>
            <DialogDescription className="text-lg mt-1">
              {project.category} • {project.location}
            </DialogDescription>
          </div>
          <Badge className="bg-blue-600 text-white">{project.package} Package</Badge>
        </div>
      </DialogHeader>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {project.gallery.map((image, index) => (
          <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${project.name} screenshot ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="process">Process</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Project Description</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Project Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Client:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed:</span>
                  <span className="font-medium">{new Date(project.completedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Package:</span>
                  <span className="font-medium">{project.package}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {project.testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 italic mb-3">"{project.testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{project.testimonial.author}</p>
                    <p className="text-sm text-gray-600">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {/* Key Metrics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(project.results).map(([key, value]) => (
                <Card key={key}>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Performance Improvements</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {project.metrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                        {metric.improvement}
                      </Badge>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Features Delivered</h3>
              <div className="space-y-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="process" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Challenges</h3>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <div className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4 border-t">
        <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            View Live Site
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Link href="/book-consultation">
          <Button variant="outline" className="flex-1">
            Start Similar Project
          </Button>
        </Link>
      </div>
    </div>
  )
}
