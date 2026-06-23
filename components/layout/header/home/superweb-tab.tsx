"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type CategoryProps = {
  alt: string;
  image: StaticImageData;
  superTabName: string;
  href: string;
  bgColor: string;
  scrolled?: boolean;
};

const SuperwebTab = ({
  alt,
  image,
  superTabName,
  href,
  bgColor,
  scrolled,
}: CategoryProps) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link href={href} className="lg:hidden">
      <div
        className={`flex justify-center items-center flex-col  py-2 border-black/10 rounded-md transition duration-700 border cursor-pointer px-[clamp(5px,3.9vw,50px)] min-w-16 max-[425px]:px-1.5 mb-0.5 text-black
          ${isActive ? `${bgColor} text-white` : ""}
          ${path === "/categories" && superTabName === "دیجی کالا" ? `${bgColor} text-white` : ""} ${path === "/search" && superTabName === "دیجی کالا" ? `${bgColor} text-white` : ""}
    `}
      >
        <Image
          alt={alt}
          src={image}
          width={32}
          height={32}
          priority
          className={`transition-all duration-300 ease-out ${
            scrolled
              ? "opacity-0 h-0 w-0 mb-0 scale-0"
              : "opacity-100 h-8 w-8 mb-1 scale-100"
          }`}
        />
        <h2 className="text-center text-xs font-bold px-0">{superTabName}</h2>
      </div>
    </Link>
  );
};

export default SuperwebTab;
