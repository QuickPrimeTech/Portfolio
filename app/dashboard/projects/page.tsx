"use client"

import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Search, Filter, MoreHorizontal, ExternalLink, Edit, Trash2, Plus, Eye, Calendar } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "../layout-dashboard"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [filterStatus, setFilterStatus] = React.useState("all")

  const projects = [
    {
      id: 1,
      name: "Bella Vista Italian",
      client: "Maria Rodriguez",
      status: "Live",
      package: "Pro",
      launchDate: "2024-01-15",
      lastUpdated: "2 days ago",
      url: "https://bellavista-italian.com",
      traffic: "1,247 visits",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      name: "Green Garden Cafe",
      client: "James Chen",
      status: "In Progress",
      package: "Starter",
      launchDate: "2024-02-01",
      lastUpdated: "1 day ago",
      url: "https://greengarden-cafe.com",
      traffic: "892 visits",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 3,
      name: "The Rooftop Bar",
      client: "Sarah Kim",
      status: "Live",
      package: "Premium",
      launchDate: "2024-01-10",
      lastUpdated: "5 days ago",
      url: "https://rooftop-bar.com",
      traffic: "2,156 visits",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      name: "Coastal Seafood House",
      client: "Michael Thompson",
      status: "In Review",
      package: "Pro",
      launchDate: "2024-02-15",
      lastUpdated: "3 hours ago",
      url: "https://coastal-seafood.com",
      traffic: "0 visits",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 5,
      name: "Urban Bistro",
      client: "Lisa Park",
      status: "Live",
      package: "Pro",
      launchDate: "2024-01-20",
      lastUpdated: "1 week ago",
      url: "https://urban-bistro.com",
      traffic: "1,543 visits",
      statusColor: "bg-green-100 text-green-800",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || project.status.toLowerCase().replace(" ", "-") === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-2">Manage all your restaurant website projects</p>
          </div>
          <Link href="/dashboard/projects/new">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search projects or clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter by Status
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setFilterStatus("all")}>All Projects</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterStatus("live")}>Live</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterStatus("in-progress")}>In Progress</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterStatus("in-review")}>In Review</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <Badge className={project.statusColor}>{project.status}</Badge>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Project
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Site
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600">Client: {project.client}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Package:</span>
                      <p className="font-medium">{project.package}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Traffic:</span>
                      <p className="font-medium">{project.traffic}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    Updated {project.lastUpdated}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || filterStatus !== "all"
                  ? "Try adjusting your search or filter criteria."
                  : "Get started by creating your first project."}
              </p>
              {!searchTerm && filterStatus === "all" && (
                <Link href="/dashboard/projects/new">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Project
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
