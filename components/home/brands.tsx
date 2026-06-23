"use client";

import React, { useRef } from "react";
import HorizontalNav from "../shared/horizontal-nav";
import { brandImages } from "@/public/brands";
import BrandCard from "./brand-card";
import { FaRegStar, FaStar } from "react-icons/fa";
import ScrollLeftButton from "../ui/scroll-left-button";
import ScrollRightButton from "../ui/scroll-right-button";

const Brands = () => {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Mobile brands */}
      <div className="my-5 lg:hidden px-5 font-semibold flex justify-end flex-col items-end">
        <div className="flex items-center">
          <h2 className="text-right text-lg mr-1">برند ها</h2>
          <FaRegStar />
        </div>

        <div className="flex items-center gap-3 w-full relatives">
          <ScrollLeftButton scrollContainerRef={mobileScrollRef} />
          <ScrollRightButton scrollContainerRef={mobileScrollRef} />
          <HorizontalNav ref={mobileScrollRef} className="gap-5 flex-1">
            {brandImages.map((brand) => (
              <BrandCard key={brand.alt} data={brand} />
            ))}
          </HorizontalNav>
        </div>
      </div>

      {/* Desktop brands */}
      <div className="max-lg:hidden py-10 border border-black/10 mt-10 rounded-2xl mx-4 font-semibold justify-end flex-col items-end text-2xl">
        <div className="flex items-center w-full justify-center pb-10">
          <h2 className="text-right mr-1">محبوب ترین برند ها</h2>
          <FaStar className="text-amber-300" />
        </div>

        <div className="flex items-center gap-3">
          <ScrollLeftButton scrollContainerRef={desktopScrollRef} />
          <ScrollRightButton scrollContainerRef={desktopScrollRef} />
          <HorizontalNav ref={desktopScrollRef} className="gap-5 flex-1">
            {brandImages.map((brand) => (
              <BrandCard key={brand.alt} data={brand} />
            ))}
          </HorizontalNav>
        </div>
      </div>
    </>
  );
};

export default Brands;
