"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import Brand from "@/components/brand";
import { ClassName } from "@/types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { links } from "@/config/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between sticky top-0 z-50 bg-white/95 backdrop-blur-xs border-b section-x py-4">
      <Brand />
      <div className="hidden lg:flex items-center space-x-6">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={cn(
              "text-gray-600 hover:text-secondary transition-colors",
              pathname === link.href && "text-secondary"
            )}
          >
            {link.link}
          </Link>
        ))}
      </div>
      <SideNavigation />
    </nav>
  );
};

const SideNavigation = () => {
  return (
    <>
      <NavButton className="hidden lg:inline-flex" />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-3/4 md:w-1/2 section-x">
          <SheetHeader className="border-b pb-4 mb-4">
            <SheetTitle className="flex items-center">
              <Brand />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <SheetClose asChild key={link.id}>
                <Link
                  href={link.href}
                  className="flex items-center py-2 px-4 rounded-md hover:bg-gray-100 text-gray-700 hover:text-secondary transition-colors"
                >
                  {link.link}
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className="pt-4 border-t">
            <SheetClose asChild>
              <NavButton />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

const NavButton = ({ className }: ClassName) => {
  return (
    <Button className={cn(className)} asChild>
      <Link
        href="https://api.whatsapp.com/send/?phone=254717448835&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact Us
        <ExternalLink className="size-4" />
      </Link>
    </Button>
  );
};

export default Navbar;
