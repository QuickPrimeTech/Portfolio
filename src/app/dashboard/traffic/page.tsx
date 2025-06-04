"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Calendar,
} from "lucide-react"
import DashboardLayout from "../layout-dashboard"

export default function TrafficPage() {
  const [timeRange, setTimeRange] = React.useState("30d")
  const [selectedProject, setSelectedProject] = React.useState("all")

  const overviewStats = [
    {
      title: "Total Visitors",
      value: "45,231",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Page Views",
      value: "128,547",
      change: "+8.2%",
      trend: "up",
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Bounce Rate",
      value: "32.1%",
      change: "-2.3%",
      trend: "up",
      icon: MousePointer,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Avg. Session",
      value: "3m 24s",
      change: "+15.1%",
      trend: "up",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const topPages = [
    { page: "/", views: "12,847", percentage: "28.4%" },
    { page: "/menu", views: "8,932", percentage: "19.7%" },
    { page: "/reservations", views: "6,543", percentage: "14.5%" },
    { page: "/about", views: "4,321", percentage: "9.6%" },
    { page: "/contact", views: "3,876", percentage: "8.6%" },
  ]

  const deviceStats = [
    { device: "Desktop", percentage: 45.2, visitors: "20,454", color: "bg-blue-500" },
    { device: "Mobile", percentage: 38.7, visitors: "17,504", color: "bg-green-500" },
    { device: "Tablet", percentage: 16.1, visitors: "7,273", color: "bg-blue-500" },
  ]

  const trafficSources = [
    { source: "Organic Search", visitors: "18,234", percentage: "40.3%", color: "bg-green-500" },
    { source: "Direct", visitors: "12,876", percentage: "28.5%", color: "bg-blue-500" },
    { source: "Social Media", visitors: "8,543", percentage: "18.9%", color: "bg-purple-500" },
    { source: "Referral", visitors: "3,421", percentage: "7.6%", color: "bg-blue-500" },
    { source: "Email", visitors: "2,157", percentage: "4.7%", color: "bg-pink-500" },
  ]

  const projects = [
    { value: "all", label: "All Projects" },
    { value: "bella-vista", label: "Bella Vista Italian" },
    { value: "green-garden", label: "Green Garden Cafe" },
    { value: "rooftop-bar", label: "The Rooftop Bar" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Traffic & Analytics</h1>
            <p className="text-gray-600 mt-2">Monitor website performance and visitor behavior</p>
          </div>
          <div className="flex gap-4">
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project.value} value={project.value}>
                    {project.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span
                        className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">vs last period</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traffic Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                Visitor Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Traffic chart would be displayed here</p>
                  <p className="text-sm text-gray-400">Integration with analytics service required</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Device Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-green-600" />
                Device Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deviceStats.map((device) => (
                  <div key={device.device} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {device.device === "Desktop" && <Monitor className="h-5 w-5 text-gray-600" />}
                      {device.device === "Mobile" && <Smartphone className="h-5 w-5 text-gray-600" />}
                      {device.device === "Tablet" && <Globe className="h-5 w-5 text-gray-600" />}
                      <span className="font-medium">{device.device}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{device.visitors}</p>
                      <p className="text-sm text-gray-500">{device.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={page.page} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                        {index + 1}
                      </div>
                      <span className="font-medium">{page.page}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{page.views}</p>
                      <p className="text-sm text-gray-500">{page.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trafficSources.map((source) => (
                  <div key={source.source} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${source.color}`} />
                      <span className="font-medium">{source.source}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{source.visitors}</p>
                      <p className="text-sm text-gray-500">{source.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle>Export Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Export PDF Report
              </Button>
              <Button variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Export CSV Data
              </Button>
              <Button variant="outline">
                <Globe className="h-4 w-4 mr-2" />
                Schedule Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
