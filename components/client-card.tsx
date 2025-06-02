import type React from "react"

interface ClientCardProps {
  name: string
  description: string
  imageUrl: string
  websiteUrl: string
}

export const ClientCard: React.FC<ClientCardProps> = ({ name, description, imageUrl, websiteUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl || "/placeholder.svg"} alt={name} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-md shadow-xs text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  )
}
