"use client"

import React from "react"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import {
  Search,
  Plus,
  Filter,
  Download,
  AlertCircle,
  CheckCircle2,
  Clock,
  XCircle,
  CreditCard,
  Globe,
  Star,
  Crown,
  Shield,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ClientCard } from "@/components/client-card"
import { ClientActions } from "@/components/client-actions"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Client tiers configuration
const clientTiers = {
  vip: {
    id: "vip",
    title: "VIP Clients",
    icon: Crown,
    color: "bg-linear-to-br from-yellow-50 to-amber-50 border-yellow-200",
    headerColor: "bg-linear-to-r from-yellow-500 to-amber-500",
    description: "Premium clients with priority support",
    maxClients: null,
  },
  premium: {
    id: "premium",
    title: "Premium Clients",
    icon: Star,
    color: "bg-linear-to-br from-purple-50 to-indigo-50 border-purple-200",
    headerColor: "bg-linear-to-r from-purple-500 to-indigo-500",
    description: "High-value clients with advanced features",
    maxClients: null,
  },
  standard: {
    id: "standard",
    title: "Standard Clients",
    icon: Shield,
    color: "bg-linear-to-br from-blue-50 to-cyan-50 border-blue-200",
    headerColor: "bg-linear-to-r from-blue-500 to-cyan-500",
    description: "Regular clients with standard support",
    maxClients: null,
  },
  trial: {
    id: "trial",
    title: "Trial Clients",
    icon: Clock,
    color: "bg-linear-to-br from-green-50 to-emerald-50 border-green-200",
    headerColor: "bg-linear-to-r from-green-500 to-emerald-500",
    description: "New clients in trial period",
    maxClients: null,
  },
  inactive: {
    id: "inactive",
    title: "Inactive Clients",
    icon: Users,
    color: "bg-linear-to-br from-gray-50 to-slate-50 border-gray-200",
    headerColor: "bg-linear-to-r from-gray-500 to-slate-500",
    description: "Paused or cancelled clients",
    maxClients: null,
  },
}

// Mock data organized by tiers
const initialClientsByTier = {
  vip: [
    {
      id: "client-1",
      name: "Coastal Cuisine",
      email: "info@coastalcuisine.com",
      logo: "/placeholder.svg",
      website: "coastalcuisine.com",
      status: "active",
      tier: "vip",
      subscription: {
        plan: "Enterprise",
        amount: "$299/mo",
        status: "active",
        nextBilling: "2025-07-01",
        paymentMethod: "Visa •••• 4242",
      },
      lastLogin: "2 hours ago",
      joinDate: "Jan 15, 2025",
      projects: 5,
      notes: "VIP client, priority support",
      revenue: "$14,950",
      satisfaction: 98,
    },
  ],
  premium: [
    {
      id: "client-2",
      name: "Urban Bites",
      email: "contact@urbanbites.com",
      logo: "/placeholder.svg",
      website: "urbanbites.com",
      status: "active",
      tier: "premium",
      subscription: {
        plan: "Professional",
        amount: "$129/mo",
        status: "active",
        nextBilling: "2025-06-15",
        paymentMethod: "Mastercard •••• 5555",
      },
      lastLogin: "1 day ago",
      joinDate: "May 3, 2025",
      projects: 3,
      notes: "Great client, always pays on time",
      revenue: "$3,870",
      satisfaction: 95,
    },
    {
      id: "client-4",
      name: "Fusion Flavors",
      email: "support@fusionflavors.com",
      logo: "/placeholder.svg",
      website: "fusionflavors.com",
      status: "active",
      tier: "premium",
      subscription: {
        plan: "Professional",
        amount: "$129/mo",
        status: "active",
        nextBilling: "2025-07-12",
        paymentMethod: "Discover •••• 1234",
      },
      lastLogin: "Just now",
      joinDate: "Feb 8, 2025",
      projects: 2,
      notes: "Expanding to multiple locations",
      revenue: "$2,580",
      satisfaction: 92,
    },
  ],
  standard: [
    {
      id: "client-6",
      name: "Local Bistro",
      email: "hello@localbistro.com",
      logo: "/placeholder.svg",
      website: "localbistro.com",
      status: "active",
      tier: "standard",
      subscription: {
        plan: "Basic",
        amount: "$79/mo",
        status: "active",
        nextBilling: "2025-06-20",
        paymentMethod: "Visa •••• 9876",
      },
      lastLogin: "3 hours ago",
      joinDate: "Mar 12, 2025",
      projects: 1,
      notes: "Small family restaurant",
      revenue: "$1,580",
      satisfaction: 89,
    },
  ],
  trial: [
    {
      id: "client-7",
      name: "New Restaurant",
      email: "info@newrestaurant.com",
      logo: "/placeholder.svg",
      website: "newrestaurant.com",
      status: "pending",
      tier: "trial",
      subscription: {
        plan: "Basic",
        amount: "$79/mo",
        status: "trial",
        nextBilling: "2025-06-25",
        paymentMethod: "Pending",
      },
      lastLogin: "30 minutes ago",
      joinDate: "May 25, 2025",
      projects: 1,
      notes: "Just started trial, very interested",
      revenue: "$0",
      satisfaction: null,
    },
  ],
  inactive: [
    {
      id: "client-3",
      name: "Sweet Delights",
      email: "hello@sweetdelights.com",
      logo: "/placeholder.svg",
      website: "sweetdelights.com",
      status: "blocked",
      tier: "inactive",
      subscription: {
        plan: "Professional",
        amount: "$129/mo",
        status: "past_due",
        nextBilling: "2025-06-10",
        paymentMethod: "Amex •••• 7890",
      },
      lastLogin: "5 days ago",
      joinDate: "Nov 22, 2024",
      projects: 3,
      notes: "Payment issues, follow up required",
      revenue: "$3,870",
      satisfaction: 75,
    },
    {
      id: "client-5",
      name: "Gourmet Express",
      email: "info@gourmetexpress.com",
      logo: "/placeholder.svg",
      website: "gourmetexpress.com",
      status: "inactive",
      tier: "inactive",
      subscription: {
        plan: "Basic",
        amount: "$79/mo",
        status: "canceled",
        nextBilling: "N/A",
        paymentMethod: "N/A",
      },
      lastLogin: "2 weeks ago",
      joinDate: "Oct 5, 2024",
      projects: 1,
      notes: "Contract ended, potential renewal in Q3",
      revenue: "$1,896",
      satisfaction: 88,
    },
  ],
}

// Status badge mapping
const statusConfig = {
  active: { label: "Active", color: "bg-green-100 text-green-800" },
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  blocked: { label: "Blocked", color: "bg-red-100 text-red-800" },
  inactive: { label: "Inactive", color: "bg-gray-100 text-gray-800" },
}

// Subscription status mapping
const subscriptionStatusConfig = {
  active: { label: "Active", color: "bg-green-100 text-green-800", icon: CheckCircle2 },
  trial: { label: "Trial", color: "bg-blue-100 text-blue-800", icon: Clock },
  past_due: { label: "Past Due", color: "bg-red-100 text-red-800", icon: AlertCircle },
  canceled: { label: "Canceled", color: "bg-gray-100 text-gray-800", icon: XCircle },
}

export default function ClientsPage() {
  const [clientsByTier, setClientsByTier] = useState(initialClientsByTier)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [planFilter, setPlanFilter] = useState("all")
  const [selectedClient, setSelectedClient] = useState(null)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [confirmAction, setConfirmAction] = useState({ type: "", clientId: "" })
  const [viewMode, setViewMode] = useState("tiers") // "tiers" or "list"

  // Handle drag and drop between tiers
  const handleDragEnd = (result) => {
    if (!result.destination) return

    const { source, destination } = result
    const sourceDroppableId = source.droppableId
    const destDroppableId = destination.droppableId

    // Create a copy of the current state
    const newClientsByTier = { ...clientsByTier }

    // Get the dragged client
    const sourceClients = Array.from(newClientsByTier[sourceDroppableId])
    const [draggedClient] = sourceClients.splice(source.index, 1)

    // Update the client's tier
    const updatedClient = { ...draggedClient, tier: destDroppableId }

    if (sourceDroppableId === destDroppableId) {
      // Reordering within the same tier
      sourceClients.splice(destination.index, 0, updatedClient)
      newClientsByTier[sourceDroppableId] = sourceClients
    } else {
      // Moving between tiers
      const destClients = Array.from(newClientsByTier[destDroppableId])
      destClients.splice(destination.index, 0, updatedClient)

      newClientsByTier[sourceDroppableId] = sourceClients
      newClientsByTier[destDroppableId] = destClients
    }

    setClientsByTier(newClientsByTier)
  }

  // Get all clients for filtering
  const allClients = Object.values(clientsByTier).flat()

  // Filter clients based on search and filters
  const filteredClients = allClients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.website.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || client.status === statusFilter
    const matchesPlan = planFilter === "all" || client.subscription.plan === planFilter

    return matchesSearch && matchesStatus && matchesPlan
  })

  // Filter clients by tier for tier view
  const getFilteredClientsForTier = (tierId) => {
    return clientsByTier[tierId].filter((client) => {
      const matchesSearch =
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.website.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || client.status === statusFilter
      const matchesPlan = planFilter === "all" || client.subscription.plan === planFilter

      return matchesSearch && matchesStatus && matchesPlan
    })
  }

  // Handle client actions
  const handleClientAction = (action, clientId) => {
    if (["block", "unblock", "delete", "takedown", "restore"].includes(action)) {
      setConfirmAction({ type: action, clientId })
      setConfirmDialogOpen(true)
      return
    }

    // Handle other actions immediately
    switch (action) {
      case "view":
        setSelectedClient(allClients.find((c) => c.id === clientId))
        break
      case "edit":
        console.log("Edit client", clientId)
        break
      case "email":
        console.log("Email client", clientId)
        break
      case "renewSubscription":
        console.log("Renew subscription", clientId)
        break
      default:
        console.log("Action not implemented:", action)
    }
  }

  // Handle confirmation dialog actions
  const handleConfirmAction = () => {
    const { type, clientId } = confirmAction

    // Find and update the client across all tiers
    const newClientsByTier = { ...clientsByTier }

    Object.keys(newClientsByTier).forEach((tierId) => {
      newClientsByTier[tierId] = newClientsByTier[tierId].map((client) => {
        if (client.id === clientId) {
          switch (type) {
            case "block":
              return { ...client, status: "blocked", tier: "inactive" }
            case "unblock":
              return { ...client, status: "active" }
            case "takedown":
              return { ...client, status: "inactive", tier: "inactive" }
            case "restore":
              return { ...client, status: "active" }
            default:
              return client
          }
        }
        return client
      })
    })

    // Handle deletion
    if (type === "delete") {
      Object.keys(newClientsByTier).forEach((tierId) => {
        newClientsByTier[tierId] = newClientsByTier[tierId].filter((client) => client.id !== clientId)
      })
    }

    setClientsByTier(newClientsByTier)
    setConfirmDialogOpen(false)
  }

  // Calculate tier statistics
  const getTierStats = (tierId) => {
    const clients = clientsByTier[tierId]
    const totalRevenue = clients.reduce((sum, client) => {
      const revenue = Number.parseFloat(client.revenue.replace(/[$,]/g, "")) || 0
      return sum + revenue
    }, 0)

    const avgSatisfaction =
      clients.length > 0 ? clients.reduce((sum, client) => sum + (client.satisfaction || 0), 0) / clients.length : 0

    return {
      count: clients.length,
      revenue: totalRevenue,
      satisfaction: Math.round(avgSatisfaction),
    }
  }

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Client Management</h1>
          <p className="text-gray-600 mt-1">Organize and manage your restaurant clients by tier</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setViewMode(viewMode === "tiers" ? "list" : "tiers")}>
            {viewMode === "tiers" ? "List View" : "Tier View"}
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Client
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search clients by name, email, or website..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <Select value={planFilter} onValueChange={setPlanFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="Basic">Basic</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Content */}
      {viewMode === "tiers" ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Object.entries(clientTiers).map(([tierId, tier]) => {
              const tierClients = getFilteredClientsForTier(tierId)
              const stats = getTierStats(tierId)
              const TierIcon = tier.icon

              return (
                <Card key={tierId} className={`${tier.color} border-2 overflow-hidden`}>
                  <CardHeader className={`${tier.headerColor} text-white p-4`}>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TierIcon className="h-5 w-5" />
                        <span className="font-semibold">{tier.title}</span>
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {tierClients.length}
                      </Badge>
                    </CardTitle>
                    <p className="text-white/90 text-sm">{tier.description}</p>

                    {/* Tier Stats */}
                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-lg font-bold">{stats.count}</div>
                        <div className="text-xs text-white/80">Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">${(stats.revenue / 1000).toFixed(0)}k</div>
                        <div className="text-xs text-white/80">Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">{stats.satisfaction}%</div>
                        <div className="text-xs text-white/80">Satisfaction</div>
                      </div>
                    </div>
                  </CardHeader>

                  <Droppable droppableId={tierId}>
                    {(provided, snapshot) => (
                      <CardContent
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`p-4 min-h-[200px] space-y-3 ${snapshot.isDraggingOver ? "bg-white/50" : ""}`}
                      >
                        {tierClients.length === 0 ? (
                          <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                              <TierIcon className="h-6 w-6 text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-500">No clients in this tier</p>
                            <p className="text-xs text-gray-400 mt-1">Drag clients here to organize</p>
                          </div>
                        ) : (
                          tierClients.map((client, index) => (
                            <Draggable key={client.id} draggableId={client.id} index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`${snapshot.isDragging ? "rotate-2 shadow-lg" : ""} transition-transform`}
                                >
                                  <ClientCard
                                    client={client}
                                    onAction={(action) => handleClientAction(action, client.id)}
                                    statusConfig={statusConfig}
                                    subscriptionStatusConfig={subscriptionStatusConfig}
                                    compact={true}
                                  />
                                </div>
                              )}
                            </Draggable>
                          ))
                        )}
                        {provided.placeholder}
                      </CardContent>
                    )}
                  </Droppable>
                </Card>
              )
            })}
          </div>
        </DragDropContext>
      ) : (
        /* List View */
        <div className="space-y-4">
          {filteredClients.length === 0 ? (
            <Card className="p-8">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <AlertCircle className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No clients found</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            </Card>
          ) : (
            filteredClients.map((client) => (
              <ClientCard
                key={client.id}
                client={client}
                onAction={(action) => handleClientAction(action, client.id)}
                statusConfig={statusConfig}
                subscriptionStatusConfig={subscriptionStatusConfig}
                compact={false}
              />
            ))
          )}
        </div>
      )}

      {/* Confirmation Dialog */}
      <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {confirmAction.type === "block" && "Block Client"}
              {confirmAction.type === "unblock" && "Unblock Client"}
              {confirmAction.type === "delete" && "Delete Client"}
              {confirmAction.type === "takedown" && "Take Down Client Site"}
              {confirmAction.type === "restore" && "Restore Client Site"}
            </DialogTitle>
            <DialogDescription>
              {confirmAction.type === "block" &&
                "This will prevent the client from accessing their account and move them to the inactive tier."}
              {confirmAction.type === "unblock" && "This will restore the client's access to their account."}
              {confirmAction.type === "delete" &&
                "This will permanently delete the client's account and all associated data. This action cannot be undone."}
              {confirmAction.type === "takedown" &&
                "This will take down the client's website and move them to the inactive tier."}
              {confirmAction.type === "restore" &&
                "This will restore the client's website and make it publicly accessible again."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant={confirmAction.type === "delete" ? "destructive" : "default"}
              className={confirmAction.type !== "delete" ? "bg-blue-600 hover:bg-blue-700" : ""}
              onClick={handleConfirmAction}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Client Details Dialog */}
      {selectedClient && (
        <Dialog open={!!selectedClient} onOpenChange={() => setSelectedClient(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedClient.logo || "/placeholder.svg"} alt={selectedClient.name} />
                  <AvatarFallback>{selectedClient.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    {selectedClient.name}
                    <Badge className={statusConfig[selectedClient.status].color}>
                      {statusConfig[selectedClient.status].label}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 font-normal">{selectedClient.email}</p>
                </div>
              </DialogTitle>
            </DialogHeader>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="subscription">Subscription</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Client Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Website</p>
                        <p className="flex items-center">
                          <Globe className="mr-2 h-4 w-4 text-gray-500" />
                          <a
                            href={`https://${selectedClient.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {selectedClient.website}
                          </a>
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Client Tier</p>
                        <div className="flex items-center gap-2">
                          {React.createElement(clientTiers[selectedClient.tier].icon, { className: "h-4 w-4" })}
                          <span className="capitalize">{selectedClient.tier}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Join Date</p>
                        <p>{selectedClient.joinDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Last Login</p>
                        <p>{selectedClient.lastLogin}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Performance Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                        <p className="text-2xl font-bold text-green-600">{selectedClient.revenue}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Satisfaction Score</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${selectedClient.satisfaction || 0}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{selectedClient.satisfaction || 0}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Projects</p>
                        <p className="text-xl font-semibold">{selectedClient.projects}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {selectedClient.notes && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{selectedClient.notes}</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="subscription" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Subscription Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Plan</p>
                        <p className="font-medium">{selectedClient.subscription.plan}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Amount</p>
                        <p className="font-medium">{selectedClient.subscription.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Status</p>
                        <Badge className={subscriptionStatusConfig[selectedClient.subscription.status].color}>
                          {subscriptionStatusConfig[selectedClient.subscription.status].label}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Next Billing</p>
                        <p>{selectedClient.subscription.nextBilling}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Payment Method</p>
                      <p className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4 text-gray-500" />
                        {selectedClient.subscription.paymentMethod}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Project History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Project details would be displayed here...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Activity timeline would be displayed here...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <DialogFooter className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => setSelectedClient(null)}>
                Close
              </Button>
              <ClientActions
                client={selectedClient}
                onAction={(action) => {
                  setSelectedClient(null)
                  handleClientAction(action, selectedClient.id)
                }}
                asDropdown={false}
              />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
