import { ChefHat, Camera, QrCode, Utensils } from "lucide-react";

export const features = [
  {
    title: "Menu Management",
    description:
      "Easily update your menu items, prices, and descriptions with our intuitive management system.",
    publicId: "menuManagement",
    icon: ChefHat,
    benefits: [
      "Easily add and remove menu items",
      "Seamlessly update item descriptions and prices",
      "Organize items by category (e.g. drinks, mains, desserts)",
      "Add item images for better visual appeal",
      "Highlight specials and popular dishes",
    ],
  },
  {
    title: "Gallery Management",
    description:
      "Showcase your delicious dishes and restaurant ambiance with beautiful photo galleries.",
    publicId: "galleryManagement",
    icon: Camera,
    benefits: [
      "Upload high-quality images of your food and space",
      "Organize photos by category or event",
      "Easily reorder or remove images",
      "Highlight featured dishes visually",
      "Keep your gallery fresh with seasonal updates",
    ],
  },
  {
    title: "QR Code Menus",
    description:
      "Generate QR codes for contactless menu viewing, perfect for modern dining experiences.",
    publicId: "qrCode",
    icon: QrCode,
    benefits: [
      "Create dynamic QR codes that link directly to your online menu",
      "Provide a hygienic, touch-free menu experience for customers",
      "Update menu content without reprinting codes",
      "Display QR codes at tables, counters, or to-go packaging",
    ],
  },
  {
    title: "Smart Menu",
    description:
      "Offer an interactive, personalized dining experience with a smart digital menu that adapts to customer preferences and device types.",
    publicId: "smartMenu", // replace with actual Cloudinary public ID
    icon: Utensils, // Or another relevant icon
    benefits: [
      "Highlight popular or recommended items using customer data",
      "Support for multiple languages and dietary filters",
      "Optimized layout for mobile, tablet, and desktop views",
      "Quick updates for promotions, combos, and limited-time offers",
    ],
  },
];
