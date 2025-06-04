"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChefHat, LayoutDashboard, Globe, BarChart3, Star, Settings, LogOut, Menu, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NotificationDropdown } from "@/components/notification-dropdown"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Clients", href: "/dashboard/clients", icon: Users },
    { name: "Projects", href: "/dashboard/projects", icon: Globe },
    { name: "Analytics", href: "/dashboard/traffic", icon: BarChart3 },
    { name: "Reviews", href: "/dashboard/reviews", icon: Star },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  const handleMarkAsRead = (id: number) => {
    console.log("Mark notification as read:", id)
    // In a real app, this would update the notification status
  }

  const handleMarkAllAsRead = () => {
    console.log("Mark all notifications as read")
    // In a real app, this would mark all notifications as read
  }

  const handleClearAll = () => {
    console.log("Clear all notifications")
    // In a real app, this would clear all notifications
  }

  const NavLinks = ({ mobile = false, onLinkClick }: { mobile?: boolean; onLinkClick?: () => void }) => (
    <nav className={`${mobile ? "flex flex-col space-y-2" : "hidden md:flex md:space-x-8"}`}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onLinkClick}
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
            isActive(item.href) ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          } ${mobile ? "w-full" : ""}`}
        >
          <item.icon className="h-4 w-4 mr-2" />
          {item.name}
        </Link>
      ))}
    </nav>
  )

  return (
    <div className="min-h-screen bg-red-50">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ChefHat className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">QuickPrimeTech</span>
              </Link>
              <div className="hidden md:block ml-8">
                <span className="text-sm text-gray-500">Dashboard</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavLinks />
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <NotificationDropdown
                onMarkAsRead={handleMarkAsRead}
                onMarkAllAsRead={handleMarkAllAsRead}
                onClearAll={handleClearAll}
              />

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-blue-100 text-blue-600">SC</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Sarah Chen</p>
                      <p className="text-xs leading-none text-muted-foreground">sarah@quickprimetech.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Back to Website</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-2 mb-8">
                      <ChefHat className="h-6 w-6 text-blue-600" />
                      <span className="text-lg font-bold text-gray-900">QuickPrimeTech</span>
                    </div>

                    <NavLinks mobile onLinkClick={() => {}} />

                    <div className="mt-auto pt-8">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-blue-800 mb-1">Need Help?</h3>
                        <p className="text-xs text-blue-600 mb-3">Contact our support team for assistance.</p>
                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
                          Get Support
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>
    </div>
  )
}
