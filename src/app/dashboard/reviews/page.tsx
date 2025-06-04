"use client"

import React from "react"
import { Star, Reply, Plus, Check } from "lucide-react"
import { MessageSquare, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [filterRating, setFilterRating] = React.useState("all")
  const [filterStatus, setFilterStatus] = React.useState("all")
  const [replyText, setReplyText] = React.useState("")
  const [replyDialogOpen, setReplyDialogOpen] = React.useState(false)
  const [editDialogOpen, setEditDialogOpen] = React.useState(false)
  const [currentReview, setCurrentReview] = React.useState<any>(null)
  const [expandedReplyIds, setExpandedReplyIds] = React.useState<number[]>([])

  const reviewStats = [
    {
      title: "Total Reviews",
      value: "247",
      change: "+12",
      trend: "up" as const,
      icon: MessageSquare,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      trend: "up" as const,
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Response Rate",
      value: "94%",
      change: "+5%",
      trend: "up" as const,
      icon: Reply,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "5-Star Reviews",
      value: "189",
      change: "+8",
      trend: "up" as const,
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const reviews = [
    {
      id: 1,
      client: "Maria Rodriguez",
      restaurant: "Bella Vista Italian",
      rating: 5,
      date: "2024-01-20",
      comment:
        "QuickPrimeTech completely transformed our online presence. The new website is beautiful and our online reservations increased by 40% in the first month. The team was professional, responsive, and really understood our brand. Highly recommend!",
      reply:
        "Thank you so much for the wonderful review, Maria! We're thrilled to hear about the 40% increase in reservations. It was a pleasure working with you and the Bella Vista team.",
      status: "replied",
      helpful: 24,
      verified: true,
    },
    {
      id: 2,
      client: "James Chen",
      restaurant: "Green Garden Cafe",
      rating: 5,
      date: "2024-01-18",
      comment:
        "As a small cafe owner, I was worried about the cost and complexity of getting a professional website. QuickPrimeTech made it so easy and affordable. The mobile-first design has been perfect for our customers who often browse our menu on their phones.",
      reply: null,
      status: "pending",
      helpful: 18,
      verified: true,
    },
    {
      id: 3,
      client: "Sarah Kim",
      restaurant: "The Rooftop Bar",
      rating: 4,
      date: "2024-01-15",
      comment:
        "Great experience overall. The website looks fantastic and the integration with our POS system works seamlessly. Only minor issue was a small delay",
      reply: null,
      status: "pending",
      helpful: 12,
      verified: false,
    },
  ]

  const handleSubmitReply = () => {
    // Placeholder function
  }

  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <p className="text-muted-foreground">Manage and respond to customer feedback.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Request Review
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reviewStats.map((stat) => (
          <div key={stat.title} className="relative overflow-hidden rounded-lg bg-card p-6 shadow-xs">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <span className="text-sm font-medium">{stat.title}</span>
                <p className="text-2xl font-semibold leading-none">{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color} rounded-full p-1`} />
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="mr-1 text-green-600 dark:text-green-400">{stat.change}</span>
              <span>from last month</span>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-1 rounded-bl-lg rounded-br-lg"
              style={{ background: stat.bgColor }}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-md border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Search reviews..."
              className="w-64 rounded-md border px-3 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="rounded-md border px-3 py-2"
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
            <select
              className="rounded-md border px-3 py-2"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="replied">Replied</option>
            </select>
          </div>
        </div>
        <div className="divide-y">
          {reviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{review.client}</h3>
                  <p className="text-sm text-muted-foreground">
                    {review.restaurant} - {review.date}
                  </p>
                  <div className="mt-1 flex items-center">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {review.verified && (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Verified
                    </span>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCurrentReview(review)
                      setReplyDialogOpen(true)
                    }}
                  >
                    Reply
                  </Button>
                </div>
              </div>
              <p className="text-sm">{review.comment}</p>
              {review.reply ? (
                <div className="mt-3 rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Reply className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Your Reply:</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setCurrentReview(review)
                        setReplyText(review.reply)
                        setEditDialogOpen(true)
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                  <p className="mt-1 text-sm">{review.reply}</p>
                </div>
              ) : (
                <div className="mt-3 flex items-center space-x-4">
                  <button className="text-sm text-muted-foreground hover:underline">
                    Mark as Helpful ({review.helpful})
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Reply Dialog */}
      {replyDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="text-lg font-semibold mb-4">Reply to Review</h2>
            <textarea
              className="w-full rounded-md border px-3 py-2 mb-4"
              rows={4}
              placeholder="Write your reply here..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <Button variant="ghost" onClick={() => setReplyDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmitReply}>
                <Reply className="h-4 w-4 mr-2" />
                Send Reply
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Reply Dialog */}
      {editDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="text-lg font-semibold mb-4">Edit Reply</h2>
            <textarea
              className="w-full rounded-md border px-3 py-2 mb-4"
              rows={4}
              placeholder="Edit your reply here..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <Button variant="ghost" onClick={() => setEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmitReply}>
                <Check className="h-4 w-4 mr-2" />
                Update Reply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
