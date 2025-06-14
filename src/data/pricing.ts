import { Plan } from "@/types";

export const features = [
  {
    category: "Design & Development",
    items: [
      {
        name: "Custom Website Design",
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: "Mobile-First Responsive Design",
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: "Online Menu Display",
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: "Contact Page with Hours",
        starter: true,
        pro: true,
        premium: true,
      },
      { name: "Photo Gallery", starter: false, pro: true, premium: true },
      {
        name: "Custom Branding Strategy",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Professional Photography",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Custom Animations",
        starter: false,
        pro: false,
        premium: true,
      },
    ],
  },
  {
    category: "Functionality",
    items: [
      { name: "Basic SEO Setup", starter: true, pro: true, premium: true },
      {
        name: "Online Reservation System",
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: "Customer Reviews Integration",
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: "Social Media Integration",
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: "Event Booking System",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Online Ordering Integration",
        starter: false,
        pro: false,
        premium: true,
      },
      { name: "Newsletter Signup", starter: false, pro: true, premium: true },
      {
        name: "Advanced Analytics",
        starter: false,
        pro: false,
        premium: true,
      },
    ],
  },
  {
    category: "Support & Maintenance",
    items: [
      {
        name: "30 Days Free Support",
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: "Content Management Training",
        starter: true,
        pro: true,
        premium: true,
      },
      { name: "Priority Support", starter: false, pro: true, premium: true },
      {
        name: "Monthly Performance Reports",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Ongoing Maintenance",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "24/7 Technical Support",
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: "Quarterly Strategy Reviews",
        starter: false,
        pro: false,
        premium: true,
      },
    ],
  },
];

export const plans: Plan[] = [
  { name: "Starter", price: "$800", key: "starter" },
  {
    name: "Pro",
    price: "$1,500",
    key: "pro",
    badge: "Most Popular",
    highlight: true,
  },
  { name: "Premium", price: "$2,500+", key: "premium" },
];
