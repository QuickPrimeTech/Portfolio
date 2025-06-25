import Link from "next/link";
import Logo from "@/components/logo";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { links } from "@/config/navigation";

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

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary to-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex gap-3">
            <Logo className="text-white size-8" />
            <Link href="/" className="text-2xl font-bold text-white">
              QuickPrimeTech
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              {links.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="hover:underline">
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
            <ul className="flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    className="inline-flex p-3 rounded-full bg-black/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {<social.icon className="size-6" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} QuickPrimeTech. All rights
            reserved. Specialized in restaurant website development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
