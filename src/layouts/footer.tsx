import Link from "next/link";
import Logo from "@/components/logo";
import { Facebook, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/quickprimetech/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577138158760",
    icon: Facebook,
  },
];

const footerSections = [
  {
    title: "Solutions",
    links: [
      { name: "Smart Menus", href: "/features" },
      { name: "Management Dashboard", href: "/features" },
      { name: "QR Code Integration", href: "/features" },
      { name: "Event Management", href: "/features" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const footerSecondaryLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-950 to-black text-white pt-16 pb-8 section-x">
      {/* Logo and Description */}
      <div className="flex flex-wrap gap-20">
        <div className="flex flex-col gap-6 max-w-md">
          <Link href="/" className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center p-3">
              <Logo className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              QuickPrimeTech
            </span>
          </Link>

          <p className="text-base text-gray-400 leading-relaxed">
            Transforming restaurants with simple, cutting-edge digital solutions
            that drive growth and enhance customer experiences worldwide.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                key={index}
                className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
        {/* Footer Sections */}
        <div className="flex flex-wrap gap-12">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition duration-300 hover:underline hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-16 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-base text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} RestaurantTech. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {footerSecondaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
