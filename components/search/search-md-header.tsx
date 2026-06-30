import Image from "next/image";
import React, { Suspense } from "react";
import HorizantalNav from "../shared/horizontal-nav";
import SuperwebTab from "../layout/header/home/superweb-tab";
import DisplayProductHeader from "./display-product-header";
import PulsingDotLoader from "../ui/pulsing-dot-loader";
import HeaderImage from "@/public/header.png";
import tabsData from "@/public/superweb";

const SearchMdHeader = ({
  category,
  query,
}: {
  category: string | undefined;
  query: string;
}) => {
  return (
    <header className="lg:hidden">
      {category === undefined && (
        <>
          <Image
            priority
            alt="header ad"
            src={HeaderImage}
            className="h-8 object-cover sticky w-full"
          />
        </>
      )}
      <HorizantalNav className="gap-2 px-5 py-2">
        {tabsData.map((tab) => (
          <SuperwebTab
            key={tab.href}
            alt={tab.alt}
            superTabName={tab.superTabName}
            image={tab.image}
            href={tab.href}
            bgColor={tab.bgColor}
            scrolled
          />
        ))}
      </HorizantalNav>
      <Suspense fallback={<PulsingDotLoader />}>
        <DisplayProductHeader category={category} query={query} />
      </Suspense>
    </header>
  );
};

export default SearchMdHeader;
