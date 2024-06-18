import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 md:gap-4 z-50">
      <Image
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
        src={logo}
        quality={80}
        height="60"
        width="60"
        alt="The CABLOCK logo"
      />
      <span className="text-xl font-semibold text-primary-100 md:block hidden">
        The CABLOCK
      </span>
    </Link>
  );
}

export default Logo;
