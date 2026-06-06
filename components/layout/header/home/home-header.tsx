"use client";

import LgHeader from "./lg-header";
import MdHeader from "./md-header";
import Image from "next/image";
import { useScreenWidth } from "@/lib/hooks";
import headerImage from "@/public/header.png";
import Toolbar from "@/components/layout/header/home/toolbar";
import useScrollThreshold from "@/lib/hooks/useScrollThreshold";

const HomeHeader = () => {
  const screenWidth = useScreenWidth();
  const scrolled = useScrollThreshold({
    enableThreshold: 500,
    disableThreshold: 400,
  });

  if (screenWidth === undefined) {
    return (
      <>
        <Image
          src={headerImage}
          alt="header ad"
          title="خرید کولر"
          priority
          className="cursor-pointer max-lg:h-8.5 object-cover"
        />
        <MdHeader />
      </>
    );
  }

  if (screenWidth < 1024)
    return (
      <>
        <Image
          src={headerImage}
          alt="header ad"
          title="خرید کولر"
          priority
          className="cursor-pointer max-lg:h-8.5 object-cover"
        />
        <MdHeader />
      </>
    );

  return (
    <>
      <LgHeader scrolled={scrolled} />
      <Toolbar
        className={` transition-transform 
          ${scrolled ? "-translate-y-10" : "sticky top-30"}
        `}
      />
    </>
  );
};

export default HomeHeader;
