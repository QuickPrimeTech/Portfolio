import {
  ChefHat,
  Camera,
  QrCode,
  Calendar,
  Settings,
  PartyPopper,
} from "lucide-react";

export const features = [
  {
    title: "Menu Management",
    description:
      "Easily update your menu items, prices, and descriptions with our intuitive management system.",
    publicId: "menuManagement",
    icon: <ChefHat className="size-5" />,
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
    icon: <Camera className="size-5" />,
    benefits: [
      "Upload high-quality images of your food and space",
      "Organize photos by category or event",
      "Easily reorder or remove images",
      "Highlight featured dishes visually",
      "Keep your gallery fresh with seasonal updates",
    ],
  },
  // {
  //   title: "QR Code Menus",
  //   description:
  //     "Generate QR codes for contactless menu viewing, perfect for modern dining experiences.",
  //   icon: <QrCode className="size-5" />,
  // },
  // {
  //   title: "Reservation Management",
  //   description:
  //     "Streamline table bookings with integrated reservation system and automated confirmations.",
  //   icon: <Calendar className="size-5" />,
  // },
  // {
  //   title: "Basic Management",
  //   description:
  //     "Complete website management including updates, maintenance, and content management.",
  //   icon: <Settings className="size-5" />,
  // },
  // {
  //   title: "Private Events Management",
  //   description:
  //     "Dedicated section for private events, catering inquiries, and special occasion bookings.",
  //   icon: <PartyPopper className="size-5" />,
  // },
];
