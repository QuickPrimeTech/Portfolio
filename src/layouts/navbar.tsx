"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Menu,
  Sun,
  Moon,
  Monitor,
  Type,
  Accessibility,
  Phone,
  Mail,
  MessageCircle,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import Brand from "@/components/brand";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { links } from "@/config/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FaWhatsapp } from "react-icons/fa";

/* ─────────────────────────────────────────
   CONTACT INFO — Update these
   ───────────────────────────────────────── */
const CONTACT = {
  email: "hello@quickprimetech.com",
  phone: "+254 717 448 835",
  phoneRaw: "254717448835",
  whatsapp: "254717448835",
};

/* ─────────────────────────────────────────
   TEXT SIZE HOOK (persisted via localStorage)
   ───────────────────────────────────────── */
type TextSize = "small" | "default" | "large";

const TEXT_SIZE_MAP: Record<TextSize, string> = {
  small: "14px",
  default: "16px",
  large: "18px",
};

function useTextSize() {
  const [textSize, setTextSizeState] = useState<TextSize>("default");

  useEffect(() => {
    const saved = localStorage.getItem("qpt-text-size") as TextSize | null;
    if (saved && saved in TEXT_SIZE_MAP) {
      setTextSizeState(saved);
      document.documentElement.style.fontSize = TEXT_SIZE_MAP[saved];
    }
  }, []);

  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
    localStorage.setItem("qpt-text-size", size);
    document.documentElement.style.fontSize = TEXT_SIZE_MAP[size];
  };

  return { textSize, setTextSize };
}

/* ─────────────────────────────────────────
   REDUCED MOTION HOOK (persisted)
   ───────────────────────────────────────── */
function useReducedMotion() {
  const [reducedMotion, setReducedMotionState] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("qpt-reduced-motion");
    if (saved !== null) {
      const val = saved === "true";
      setReducedMotionState(val);
      document.documentElement.classList.toggle("reduce-motion", val);
    }
  }, []);

  const setReducedMotion = (val: boolean) => {
    setReducedMotionState(val);
    localStorage.setItem("qpt-reduced-motion", String(val));
    document.documentElement.classList.toggle("reduce-motion", val);
  };

  return { reducedMotion, setReducedMotion };
}

/* ═════════════════════════════════════════
   NAVBAR
   ═════════════════════════════════════════ */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-500",
        scrolled
          ? "bg-muted/80 backdrop-blur-xl shadow-sm border-border/50"
          : "bg-muted/40 backdrop-blur-md border-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          {/* Brand */}
          <Brand />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {link.link}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5">
            {/* Accessibility Popover */}
            <AccessibilityPopover />

            {/* Contact Popover */}
            <div className="hidden sm:block">
              <ContactPopover />
            </div>

            {/* WhatsApp CTA */}
            <Button size="lg" className="hidden md:inline-flex" asChild>
              <Link
                href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20QuickPrimeTech,%20I'm%20interested%20in%20a%20website`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="size-5" />
                WhatsApp Us
              </Link>
            </Button>

            {/* Mobile Menu */}
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function AccessibilityOptions() {
  const { theme, setTheme } = useTheme();
  const { textSize, setTextSize } = useTextSize();
  const { reducedMotion, setReducedMotion } = useReducedMotion();

  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const;

  const textSizes = [
    { key: "small" as TextSize, icon: Minus, label: "Small" },
    { key: "default" as TextSize, icon: Type, label: "Default" },
    { key: "large" as TextSize, icon: Plus, label: "Large" },
  ];

  return (
    <div className="space-y-6">
      {/* Theme */}
      <div className="space-y-2.5">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Appearance
        </Label>
        <div className="grid grid-cols-3 gap-2">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => setTheme(t.value)}
              className={cn(
                "flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-xs font-medium transition-all",
                theme === t.value
                  ? "border-primary bg-primary/10 text-primary ring-1 ring-primary/20"
                  : "border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <t.icon className="size-4" />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Text Size */}
      <div className="space-y-2.5">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Text Size
        </Label>
        <div className="flex items-center gap-1.5 bg-muted/50 rounded-4xl p-1.5 border border-border">
          {textSizes.map((item) => (
            <Button
              key={item.key}
              onClick={() => setTextSize(item.key)}
              className="flex-1"
              variant={textSize === item.key ? "default" : "outline"}
            >
              <item.icon className="size-3" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Reduced Motion */}
      <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-muted/30">
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Reduced Motion</p>
          <p className="text-xs text-muted-foreground">Minimize animations</p>
        </div>
        <Switch
          checked={reducedMotion}
          onCheckedChange={setReducedMotion}
          aria-label="Toggle reduced motion"
        />
      </div>
    </div>
  );
}

/* ─── Accessibility Popover ─── */
function AccessibilityPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full transition-colors"
          aria-label="Accessibility settings"
        >
          <Accessibility className="size-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={12}
        className="w-80 p-5 rounded-2xl"
      >
        <h3 className="text-sm font-semibold flex items-center gap-2 mb-5">
          <Accessibility className="size-4 text-primary" />
          Accessibility
        </h3>
        <AccessibilityOptions />
      </PopoverContent>
    </Popover>
  );
}

function ContactCards() {
  return (
    <div className="space-y-2.5">
      <ContactCard
        href={`mailto:${CONTACT.email}`}
        icon={Mail}
        title="Email Us"
        detail={CONTACT.email}
        color="primary"
      />
      <ContactCard
        href={`tel:${CONTACT.phoneRaw}`}
        icon={Phone}
        title="Call Us"
        detail={CONTACT.phone}
        color="primary"
      />
      <ContactCard
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20QuickPrimeTech,%20I'm%20interested%20in%20a%20website`}
        icon={MessageCircle}
        title="WhatsApp"
        detail="Quick response guaranteed"
        color="green"
        external
      />
    </div>
  );
}

/* ─── Contact Popover ─── */
function ContactPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="rounded-full gap-2">
          <Phone />
          <span className="hidden md:inline">Contact</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={12}
        className="w-80 p-5 rounded-2xl"
      >
        <h3 className="text-sm font-semibold mb-5">Get in Touch</h3>

        <ContactCards />
      </PopoverContent>
    </Popover>
  );
}

/* ─── Contact Card ─── */
function ContactCard({
  href,
  icon: Icon,
  title,
  detail,
  color,
  external,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  detail: string;
  color: "primary" | "green";
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 p-3 rounded-xl border border-border bg-muted/30 hover:bg-muted/60 hover:border-primary/30 transition-all group"
    >
      <div
        className={cn(
          "size-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
          color === "green"
            ? "bg-green-500/10 group-hover:bg-green-500/20"
            : "bg-primary/10 group-hover:bg-primary/20",
        )}
      >
        <Icon
          className={cn(
            "size-5",
            color === "green" ? "text-green-600" : "text-primary",
          )}
        />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground truncate group-hover:text-foreground transition-colors">
          {detail}
        </p>
      </div>
      <ArrowLink className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

function ArrowLink({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-4 text-muted-foreground", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

/* ─── Mobile Sheet ─── */
function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden rounded-full hover:bg-muted"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:w-1/2 lg:w-2/3 bg-background/95 backdrop-blur-xl border-l border-border p-0"
      >
        <SheetHeader className="border-b border-border">
          <SheetTitle>
            <Brand />
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-0 flex-1 px-5">
          <div className="flex flex-col space-y-12 pb-8">
            {/* Links */}
            <div className="space-y-1.5">
              {links.map((link, i) => (
                <SheetClose asChild key={link.id}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-muted-foreground hover:bg-muted hover:text-foreground border border-border/30 flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        pathname === link.href && "bg-primary/10 text-primary",
                      )}
                    >
                      {link.link}
                      {pathname === link.href && <Check className="size-4" />}
                    </Link>
                  </motion.div>
                </SheetClose>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Contact
              </h4>
              <ContactCards />
            </div>

            {/* Accessibility Mobile */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Accessibility
              </h4>

              <AccessibilityOptions />
            </div>

            {/* Mobile CTA */}
            <SheetClose asChild>
              <Button
                className="w-full rounded-xl h-11 shadow-lg shadow-primary/20"
                asChild
              >
                <Link
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20QuickPrimeTech,%20I'm%20interested%20in%20a%20website`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="size-5" />
                  Start on WhatsApp
                </Link>
              </Button>
            </SheetClose>
          </div>
          <ScrollBar />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
