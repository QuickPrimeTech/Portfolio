"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, Globe, Star, Eye, MousePointer, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "./layout-dashboard"
import { StatsCard } from "@/components/stats-card"
import { StatusBadge } from "@/components/status-badge"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Visitors",
      value: "12,847",
      change: "+12.5%",
      trend: "up" as const,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Page Views",
      value: "45,231",
      change: "+8.2%",
      trend: "up" as const,
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-0.3%",
      trend: "down" as const,
      icon: MousePointer,
      color: "text-blue-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Avg. Session",
      value: "2m 34s",
      change: "+15.1%",
      trend: "up" as const,
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const recentProjects = [
    {
      name: "Bella Vista Italian",
      status: "Live",
      lastUpdated: "2 days ago",
      traffic: "1,247 visits",
    },
    {
      name: "Green Garden Cafe",
      status: "In Progress",
      lastUpdated: "1 day ago",
      traffic: "892 visits",
    },
    {
      name: "The Rooftop Bar",
      status: "Live",
      lastUpdated: "5 days ago",
      traffic: "2,156 visits",
    },
  ]

  const recentReviews = [
    {
      client: "Maria Rodriguez",
      restaurant: "Bella Vista Italian",
      rating: 5,
      comment: "Exceeded our expectations completely!",
      date: "2 hours ago",
    },
    {
      client: "James Chen",
      restaurant: "Green Garden Cafe",
      rating: 5,
      comment: "Professional and fast delivery.",
      date: "1 day ago",
    },
    {
      client: "Sarah Kim",
      restaurant: "The Rooftop Bar",
      rating: 4,
      comment: "Great design, minor issues with timeline.",
      date: "3 days ago",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Recent Projects</CardTitle>
              <Link href="/dashboard/projects">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{project.name}</h3>
                      <p className="text-sm text-gray-500">Updated {project.lastUpdated}</p>
                    </div>
                    <div className="text-right">
                      <StatusBadge status={project.status} />
                      <p className="text-sm text-gray-500 mt-1">{project.traffic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Reviews */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Recent Reviews</CardTitle>
              <Link href="/dashboard/reviews">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReviews.map((review, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{review.client}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">"{review.comment}"</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{review.restaurant}</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/dashboard/projects/new">
                <Button className="w-full h-20 bg-blue-600 hover:bg-blue-700 flex flex-col items-center justify-center">
                  <Globe className="h-6 w-6 mb-2" />
                  New Project
                </Button>
              </Link>
              <Link href="/dashboard/traffic">
                <Button
                  variant="outline"
                  className="w-full h-20 flex flex-col items-center justify-center border-blue-200 hover:bg-blue-50"
                >
                  <BarChart3 className="h-6 w-6 mb-2 text-blue-600" />
                  View Analytics
                </Button>
              </Link>
              <Link href="/dashboard/reviews">
                <Button
                  variant="outline"
                  className="w-full h-20 flex flex-col items-center justify-center border-yellow-200 hover:bg-yellow-50"
                >
                  <Star className="h-6 w-6 mb-2 text-yellow-600" />
                  Manage Reviews
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
