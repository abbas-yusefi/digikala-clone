"use client";

import LgHeader from "./lg-header";
import MdHeader from "./md-header";
import Image from "next/image";
import headerImage from "@/public/header.png";
import Toolbar from "@/components/layout/header/home/toolbar";
import useScrollThreshold from "@/lib/hooks/useScrollThreshold";
import { usePathname } from "next/navigation";

const HomeHeader = ({ lgHeader }: { lgHeader?: boolean }) => {
  const scrolled = useScrollThreshold({
    enableThreshold: 400,
    disableThreshold: 300,
  });

  const path = usePathname();

  if (path == "/profile") return null;

  return (
    <>
      {path !== "/search" && path !== "/checkout" && (
        <Image
          src={headerImage}
          alt="header ad"
          title="خرید کولر"
          priority
          className={`${path == "/search" ? "hidden" : ""} lg:hidden cursor-pointer max-lg:h-8.5 object-cover`}
        />
      )}
      <MdHeader />
      <LgHeader scrolled={scrolled} />
      <Toolbar
        className={` transition-transform
          ${scrolled ? "-translate-y-10" : "sticky top-30"}
        `}
      />
    </>
  );

  // if (screenWidth === undefined) {
  //   return (
  //     <>
  //       <Image
  //         src={headerImage}
  //         alt="header ad"
  //         title="خرید کولر"
  //         priority
  //         className={`${path == "/search" ? "hidden" : ""} cursor-pointer max-lg:h-8.5 object-cover`}
  //       />
  //       <MdHeader />
  //     </>
  //   );
  // }

  // if (screenWidth < 1024 && path !== "/checkout")
  //   return (
  //     <>
  //       {path !== "/search" && (
  //         <Image
  //           src={headerImage}
  //           alt="header ad"
  //           title="خرید کولر"
  //           priority
  //           className="cursor-pointer max-lg:h-8.5 object-cover"
  //         />
  //       )}
  //       <MdHeader />
  //     </>
  //   );

  // if (screenWidth > 1024)
  //   return (
  //     <>
  //       <LgHeader scrolled={scrolled} />
  //       <Toolbar
  //         className={` transition-transform
  //         ${scrolled ? "-translate-y-10" : "sticky top-30"}
  //       `}
  //       />
  //     </>
  //   );
};

export default HomeHeader;
