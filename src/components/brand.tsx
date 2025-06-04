import Link from "next/link";
import Logo from "@/components/logo";

const Brand = () => {
  return (
    <div className="flex items-center space-x-2">
      <Logo className="text-blue-600" />
      <Link className="text-xl font-bold text-primary" href={"/"}>
        QuickPrimeTech
      </Link>
    </div>
  );
};

export default Brand;
