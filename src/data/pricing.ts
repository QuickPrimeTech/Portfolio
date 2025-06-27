import { Plan } from "@/types";

export const pricingCardsInfo = [
  {
    title: "Basic",
    description: "For small cafes or takeout spots",
    price: "40,000",
    features: [
      "3-page custom website (Homepage, Menu, Contact)",
      "Unlimited menu items",
      "Third-party reservation system integration",
      "Basic SEO setup",
      "2 changes per month",
      "Dashboard for content management",
      "Secure hosting (SSL included)",
      "Basic website analytics (monthly report)",
      "Maintenance & support",
    ],
    popular: false,
    planId: "P-2XU60119GU648443YNA64AEA",
  },
  {
    title: "Pro",
    description: "For growing restaurants",
    price: "60,000",
    features: [
      "Everything in Basic",
      "Custom branding",
      "8-10 page custom website",
      "Advanced SEO",
      "6 content updates per month",
      "Advanced website analytics",
      "Gallery, Private Dining, Private Events Pages (optional)",
      "Unlimited gallery images",
      "Social media feed integration on website",
    ],
    popular: true,
    planId: "P-02876306HE3896415NA7AZGQ",
  },
  {
    title: "Premium",
    description: "For upscale brands",
    price: "80,000",
    features: [
      "Everything in Pro",
      "10-20 page custom website",
      "Unlimited page updates",
      "Custom feature requests",
      "Event booking system",
      "24/7 priority support (phone + email)",
      "Google My Business management & optimization",
    ],
    popular: false,
    planId: "P-44256660A5342815BNA7A5VY",
  },
];

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
  { name: "Basic", price: "$69.99/month", key: "starter" },
  {
    name: "Pro",
    price: "$99.99/month",
    key: "pro",
    badge: "Most Popular",
    highlight: true,
  },
  { name: "Premium", price: "$149.99/month", key: "premium" },
];
