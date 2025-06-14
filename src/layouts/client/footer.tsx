import Link from "next/link";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo className="text-primary" />
            <Link className="text-xl font-bold text-primary" href={"/"}>
              QuickPrimeTech
            </Link>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-gray-400 text-sm">
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
