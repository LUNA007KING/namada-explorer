import LogoSVG from "@/public/icons/logo.svg";

import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className=" flex items-center gap-5">
      <LogoSVG width={80} height={80} />
      <div className="text-white-0 text-center text-[1.0625rem] font-semibold leading-[1.375rem]">
        NAMADA
      </div>
    </Link>
  );
};
