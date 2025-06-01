"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  MoreHorizontal,
  Reply,
  Flag,
  Trash2,
  Edit,
  X,
  ThumbsUp,
  ExternalLink,
  TrendingUp,
  MapPin,
  Calendar,
  Users,
} from "lucide-react"
import Image from "next/image"
import { StarRating } from "./star-rating"
import { StatusBadge } from "./status-badge"

interface Review {
  id: number
  name?: string
  client?: string
  restaurant: string
  location?: string
  rating: number
  date: string
  category?: string
  package?: string
  helpful?: number
  verified?: boolean
  image?: string
  review?: string
  comment?: string
  businessImpact?: string
  projectDuration?: string
  reply?: string
  status?: string
  response?: {
    author: string
    role: string
    date: string
    text: string
  }
}

interface ReviewCardProps {
  review: Review
  variant?: "public" | "dashboard"
  onReply?: (review: Review) => void
  onEdit?: (review: Review) => void
  onFlag?: (review: Review) => void
  onDelete?: (review: Review) => void
  showInlineReply?: boolean
  onToggleInlineReply?: (reviewId: number) => void
  expandedReplyIds?: number[]
  replyText?: string
  onReplyTextChange?: (text: string) => void
  onSubmitInlineReply?: (reviewId: number) => void
}

export function ReviewCard({
  review,
  variant = "public",
  onReply,
  onEdit,
  onFlag,
  onDelete,
  showInlineReply = false,
  onToggleInlineReply,
  expandedReplyIds = [],
  replyText = "",
  onReplyTextChange,
  onSubmitInlineReply,
}: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const displayName = review.name || review.client || "Anonymous"
  const reviewText = review.review || review.comment || ""
  const isInlineReplyExpanded = expandedReplyIds.includes(review.id)

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 md:p-8">
        {/* Review Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-100 rounded-full flex items-center justify-center">
              {review.image ? (
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={displayName}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              ) : (
                <span className="text-blue-600 font-semibold">
                  {displayName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{displayName}</h3>
              <p className="text-blue-600 font-medium">{review.restaurant}</p>
              {review.location && (
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {review.location}
                </div>
              )}
              {variant === "dashboard" && <p className="text-xs text-gray-500">{formatDate(review.date)}</p>}
            </div>
          </div>
          <div className="text-right">
            {review.verified && <Badge className="bg-green-100 text-green-800 mb-2">Verified</Badge>}
            {review.status && variant === "dashboard" && <StatusBadge status={review.status} className="mb-2" />}
            <StarRating rating={review.rating} />
            {variant === "dashboard" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="ml-2">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {review.reply ? (
                    <DropdownMenuItem onClick={() => onEdit?.(review)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Reply
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onClick={() => onReply?.(review)}>
                      <Reply className="h-4 w-4 mr-2" />
                      Reply
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={() => onFlag?.(review)}>
                    <Flag className="h-4 w-4 mr-2" />
                    Flag
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600" onClick={() => onDelete?.(review)}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        {/* Review Content */}
        <p className="text-gray-700 leading-relaxed mb-6">{reviewText}</p>

        {/* Business Impact (Public variant only) */}
        {variant === "public" && review.businessImpact && (
          <div className="bg-red-50 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-red-600 mr-2" />
              <span className="font-semibold text-red-800">Business Impact</span>
            </div>
            <p className="text-red-700 font-medium">{review.businessImpact}</p>
          </div>
        )}

        {/* Response from QuickPrimeTech (Public variant) */}
        {variant === "public" && review.response && (
          <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
            <div className="flex items-center mb-2">
              <Reply className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-800">Response from QuickPrimeTech</span>
            </div>
            <p className="text-gray-700 mb-3 italic">{review.response.text}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="text-blue-700 font-medium">
                {review.response.author}, {review.response.role}
              </div>
              <div className="text-gray-500">{formatDate(review.response.date)}</div>
            </div>
          </div>
        )}

        {/* Existing Reply (Dashboard variant) */}
        {variant === "dashboard" && review.reply && (
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Reply className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-800">Your Reply</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-800"
                onClick={() => onEdit?.(review)}
              >
                <Edit className="h-3 w-3 mr-1" />
                Edit
              </Button>
            </div>
            <p className="text-gray-700 text-sm">{review.reply}</p>
          </div>
        )}

        {/* Inline Reply Form (Dashboard variant) */}
        {variant === "dashboard" && isInlineReplyExpanded && !review.reply && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium">Reply to {displayName}</h4>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700"
                onClick={() => onToggleInlineReply?.(review.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Textarea
              placeholder="Write your reply..."
              className="mb-3"
              rows={3}
              value={replyText}
              onChange={(e) => onReplyTextChange?.(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm" onClick={() => onToggleInlineReply?.(review.id)}>
                Cancel
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => onSubmitInlineReply?.(review.id)}
              >
                <Reply className="h-3 w-3 mr-1" />
                Send Reply
              </Button>
            </div>
          </div>
        )}

        {/* Project Details (Public variant only) */}
        {variant === "public" && (review.package || review.projectDuration || review.category) && (
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            {review.package && (
              <div>
                <span className="text-gray-500">Package:</span>
                <span className="ml-2 font-medium">{review.package}</span>
              </div>
            )}
            {review.projectDuration && (
              <div>
                <span className="text-gray-500">Duration:</span>
                <span className="ml-2 font-medium">{review.projectDuration}</span>
              </div>
            )}
            {review.category && (
              <div>
                <span className="text-gray-500">Category:</span>
                <span className="ml-2 font-medium">{review.category}</span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-gray-500">{formatDate(review.date)}</span>
            </div>
          </div>
        )}

        {/* Review Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            {variant === "public" && review.helpful && (
              <button className="flex items-center hover:text-blue-600 transition-colors mr-4">
                <ThumbsUp className="h-4 w-4 mr-2" />
                <span>Helpful ({review.helpful})</span>
              </button>
            )}
            {variant === "dashboard" && review.helpful && (
              <>
                <Users className="h-4 w-4 mr-1" />
                <span>{review.helpful} people found this helpful</span>
              </>
            )}
            {review.verified && (
              <Badge variant="outline" className="ml-2 text-xs">
                Verified
              </Badge>
            )}
          </div>
          {variant === "public" && (
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Project
            </Button>
          )}
          {variant === "dashboard" && !review.reply && !isInlineReplyExpanded && (
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => onToggleInlineReply?.(review.id)}
            >
              <Reply className="h-4 w-4 mr-1" />
              Reply
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
