import Link from "next/link";
import Logo from "@/components/logo";
import { ArrowUpRight, Facebook, Instagram } from "lucide-react";

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
      { name: "Web Design", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "SEO Optimization", href: "#" },
      { name: "Custom Solutions", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Projects", href: "/projects" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/#contact" },
    ],
  },
];

type FooterLink = {
  name: string;
  href: string;
};

export const footerSecondaryLinks: FooterLink[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-service" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-background from-10% backdrop-blur-xl rounded-t-4xl -mt-6 to-primary/30 pt-16 pb-8 section-x">
      {/* Logo and Description */}
      <div className="flex flex-wrap gap-20">
        <div className="flex flex-col gap-6 max-w-md">
          <Link
            href="/"
            className="flex items-center gap-4"
            aria-label="head back to home page"
          >
            <Logo className="size-10" />
            <span className="font-serif tracking-wider text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              QuickPrimeTech
            </span>
          </Link>

          <p className="text-base text-muted-foreground leading-relaxed">
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
                aria-label={`visit our ${link.name} profile`}
                className="group p-3 bg-background/30 border rounded-xl hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <link.icon className="size-5 text-foreground group-hover:text-primary-foreground" />
              </Link>
            ))}
          </div>
        </div>
        {/* Footer Sections */}
        <div className="flex flex-wrap gap-12">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex gap-1.5 items-center text-muted-foreground hover:text-foreground transition duration-300 hover:underline hover:-translate-x-1"
                    >
                      {link.name}
                      <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-dashed border-foreground/20 mt-16 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-base text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} RestaurantTech. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {footerSecondaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center hover:-translate-x-2 transition-all hover:underline gap-1.5 text-sm text-muted-foreground hover:text-foreground duration-300"
            >
              {link.name}
              <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
