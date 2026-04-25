import Link from "next/link";
import Logo from "@/components/logo";

const Brand = () => {
  return (
    <div className="flex items-center space-x-2">
      <Logo className="text-blue-600 size-8" />
      <Link className="font-serif text-xl font-bold text-primary" href={"/"}>
        QuickPrimeTech
      </Link>
    </div>
  );
};

export default Brand;
