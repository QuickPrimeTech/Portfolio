"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change?: string
  trend?: "up" | "down"
  icon: LucideIcon
  color: string
  bgColor: string
  period?: string
}

export function StatsCard({
  title,
  value,
  change,
  trend = "up",
  icon: Icon,
  color,
  bgColor,
  period = "vs last month",
}: StatsCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
            {change && (
              <div className="flex items-center mt-2">
                {trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {change}
                </span>
                <span className="text-sm text-gray-500 ml-1">{period}</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-lg ${bgColor}`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
