"use client"

import type React from "react"

import { Eye } from "lucide-react"

interface ClientActionsProps {
  onAction: (action: string) => void
}

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <button className={`px-4 py-2 rounded-md text-white font-semibold ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export const ClientActions: React.FC<ClientActionsProps> = ({ onAction }) => {
  return (
    <div className="flex items-center space-x-2">
      <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => onAction("view")}>
        <Eye className="h-4 w-4 mr-2" />
        View Details
      </Button>
    </div>
  )
}
