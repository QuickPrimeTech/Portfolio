import { ChefHat } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Logo className="text-blue-600" />
          <span className="text-xl font-bold text-primary">QuickPrimeTech</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/process"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Process
          </Link>
          <Link
            href="/work"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/pricing"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/team"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Team
          </Link>
          <Link
            href="/reviews"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Reviews
          </Link>
        </div>
        <Link href="/book-consultation">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Book Free Consultation
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
