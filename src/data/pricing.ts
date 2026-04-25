import { Plan } from "@/types";
import { BarChart3, Calendar, Headphones, Mail } from "lucide-react";

export const pricingCardsInfo = [
  {
    title: "Basic",
    description: "For individuals and small businesses starting online",
    features: [
      "3–5 page custom website (Home, About, Services, Contact)",
      "Mobile-first responsive design",
      "Basic SEO setup",
      "Contact form (email integration)",
      "2 content updates per month",
      "CMS for easy content management",
      "Secure hosting (SSL included)",
      "Basic analytics (monthly report)",
      "Maintenance & support",
    ],
    popular: false,
    planId: "P-2XU60119GU648443YNA64AEA",
  },
  {
    title: "Pro",
    description: "For growing businesses that need more features",
    features: [
      "Everything in Basic",
      "6–10 page custom website",
      "Custom branding (colors, typography, UI system)",
      "Advanced SEO optimization",
      "6 content updates per month",
      "Advanced analytics & tracking",
      "Blog or content section",
      "Social media integrations",
      "Lead capture & conversion optimization",
    ],
    popular: true,
    planId: "P-02876306HE3896415NA7AZGQ",
  },
  {
    title: "Premium",
    description: "For brands that want a powerful, scalable website",
    features: [
      "Everything in Pro",
      "10–20+ page custom website",
      "Unlimited content updates",
      "Custom features & integrations",
      "Advanced animations & interactions",
      "Custom dashboard / CMS features",
      "Priority support (24/7)",
      "Performance optimization (speed & UX)",
      "Conversion-focused strategy",
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
      { name: "Multi-Page Website", starter: true, pro: true, premium: true },
      {
        name: "Blog / Content Pages",
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: "Custom Branding System",
        starter: false,
        pro: true,
        premium: true,
      },
      { name: "Advanced Animations", starter: false, pro: true, premium: true },
    ],
  },
  {
    category: "Functionality",
    items: [
      { name: "Basic SEO Setup", starter: true, pro: true, premium: true },
      { name: "Contact Forms", starter: true, pro: true, premium: true },
      { name: "Lead Capture System", starter: false, pro: true, premium: true },
      {
        name: "Social Media Integration",
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: "CMS (Content Management)",
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: "Custom Integrations (APIs)",
        starter: false,
        pro: false,
        premium: true,
      },
      { name: "Advanced Analytics", starter: false, pro: true, premium: true },
    ],
  },
  {
    category: "Support & Maintenance",
    items: [
      { name: "30 Days Free Support", starter: true, pro: true, premium: true },
      { name: "CMS Training", starter: true, pro: true, premium: true },
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
        name: "Strategy & Growth Reviews",
        starter: false,
        pro: false,
        premium: true,
      },
    ],
  },
];

export const plans: Plan[] = [
  { name: "Basic", key: "starter" },
  {
    name: "Pro",
    key: "pro",
    badge: "Most Popular",
    highlight: true,
  },
  {
    name: "Premium",
    key: "premium",
  },
];

export const addOns = [
  {
    title: "Advanced SEO Optimization",
    description: "Improve rankings and visibility on search engines",
    icon: BarChart3,
  },
  {
    title: "Extended Support",
    description: "Priority support and updates for 6 months",
    icon: Headphones,
  },
  {
    title: "Email Marketing Setup",
    description: "Newsletter system to capture and engage your audience",
    icon: Mail,
  },
  {
    title: "Custom Web App Features",
    description: "Custom functionality tailored to your business needs",
    icon: Calendar,
  },
];
