import Link from "next/link";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";

const Brand = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className={cn("flex items-center space-x-2")} {...props}>
      <Logo className="text-primary size-8" />
      <Link className="font-serif text-xl font-bold text-primary" href={"/"}>
        QuickPrimeTech
      </Link>
    </div>
  );
};

export default Brand;
