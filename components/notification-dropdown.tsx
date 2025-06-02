"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Star, MessageSquare, Globe, TrendingUp, Calendar, Check, X } from "lucide-react"

interface Notification {
  id: number
  type: "review" | "project" | "traffic" | "system"
  title: string
  message: string
  time: string
  read: boolean
  icon?: React.ReactNode
}

interface NotificationDropdownProps {
  notifications?: Notification[]
  onMarkAsRead?: (id: number) => void
  onMarkAllAsRead?: () => void
  onClearAll?: () => void
}

export function NotificationDropdown({
  notifications = [],
  onMarkAsRead,
  onMarkAllAsRead,
  onClearAll,
}: NotificationDropdownProps) {
  const defaultNotifications: Notification[] = [
    {
      id: 1,
      type: "review",
      title: "New Review Received",
      message: "Maria Rodriguez left a 5-star review for Bella Vista Italian",
      time: "2 minutes ago",
      read: false,
      icon: <Star className="h-4 w-4 text-yellow-500" />,
    },
    {
      id: 2,
      type: "project",
      title: "Project Update",
      message: "Green Garden Cafe website is ready for review",
      time: "1 hour ago",
      read: false,
      icon: <Globe className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 3,
      type: "traffic",
      title: "Traffic Milestone",
      message: "The Rooftop Bar reached 10,000 monthly visitors",
      time: "3 hours ago",
      read: true,
      icon: <TrendingUp className="h-4 w-4 text-green-500" />,
    },
    {
      id: 4,
      type: "review",
      title: "Review Response Needed",
      message: "James Chen's review is awaiting your response",
      time: "5 hours ago",
      read: false,
      icon: <MessageSquare className="h-4 w-4 text-orange-500" />,
    },
    {
      id: 5,
      type: "system",
      title: "Scheduled Maintenance",
      message: "System maintenance scheduled for tonight at 2 AM PST",
      time: "1 day ago",
      read: true,
      icon: <Calendar className="h-4 w-4 text-purple-500" />,
    },
  ]

  const allNotifications = notifications.length > 0 ? notifications : defaultNotifications
  const unreadCount = allNotifications.filter((n) => !n.read).length

  const getTypeColor = (type: string) => {
    switch (type) {
      case "review":
        return "bg-yellow-50 border-yellow-200"
      case "project":
        return "bg-blue-50 border-blue-200"
      case "traffic":
        return "bg-green-50 border-green-200"
      case "system":
        return "bg-purple-50 border-purple-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {unreadCount} new
            </Badge>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Action Buttons */}
        {allNotifications.length > 0 && (
          <>
            <div className="flex justify-between p-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-7"
                onClick={onMarkAllAsRead}
                disabled={unreadCount === 0}
              >
                <Check className="h-3 w-3 mr-1" />
                Mark all read
              </Button>
              <Button variant="ghost" size="sm" className="text-xs h-7 text-red-600" onClick={onClearAll}>
                <X className="h-3 w-3 mr-1" />
                Clear all
              </Button>
            </div>
            <DropdownMenuSeparator />
          </>
        )}

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {allNotifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <Bell className="h-8 w-8 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">No notifications</p>
            </div>
          ) : (
            allNotifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`p-3 cursor-pointer border-l-4 ${getTypeColor(notification.type)} ${
                  !notification.read ? "bg-blue-50" : ""
                }`}
                onClick={() => onMarkAsRead?.(notification.id)}
              >
                <div className="flex items-start space-x-3 w-full">
                  <div className="shrink-0 mt-0.5">{notification.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-medium ${!notification.read ? "text-gray-900" : "text-gray-600"}`}>
                        {notification.title}
                      </p>
                      {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))
          )}
        </div>

        {allNotifications.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-sm text-blue-600 hover:text-blue-800">
              View all notifications
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
