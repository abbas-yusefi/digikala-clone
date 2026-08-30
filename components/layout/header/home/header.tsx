"use client";

import DesktopHeader from "./desktop-header";
import Image from "next/image";
import headerImage from "@/public/header.png";
import Toolbar from "@/components/layout/header/home/toolbar";
import useScrollThreshold from "@/lib/hooks/useScrollThreshold";
import { usePathname } from "next/navigation";
import MobileHeaderWrapper from "./mobile-header-wrapper";

const Header = () => {
  const scrolled = useScrollThreshold({
    enableThreshold: 400,
    disableThreshold: 300,
  });

  const path = usePathname();

  const advertisementHeader =
    path.startsWith("/profile") ||
    path === "/checkout" ||
    path === "/search" ? null : (
      <Image
        src={headerImage}
        alt="header ad"
        title="خرید صنایع دستی"
        priority
        className={`${path == "/search" ? "hidden" : ""} lg:hidden cursor-pointer max-lg:h-8.5 object-cover`}
      />
    );

  return (
    <>
      {advertisementHeader}
      <MobileHeaderWrapper />
      <DesktopHeader scrolled={scrolled} />
      <Toolbar
        className={` transition-transform
          ${scrolled ? "-translate-y-10" : "sticky top-30"}
        `}
      />
    </>
  );
};

export default Header;
