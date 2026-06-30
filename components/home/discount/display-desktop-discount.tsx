"use client";

import React, { useRef } from "react";
import HorizontalNav from "../../shared/horizontal-nav";
import Link from "next/link";
import DiscountProductCard from "./discount-product-card";
import { BiLeftArrowAlt } from "react-icons/bi";
import DiscountMdHeader from "./discount-md-header";
import ScrollLeftButton from "@/components/ui/scroll-left-button";
import ScrollRightButton from "@/components/ui/scroll-right-button";
import { ProductCard, WithImage } from "@/lib/types/product";

const DisplayDesktopDiscount = ({
  data,
  secondRow,
}: {
  data: WithImage<ProductCard>[];
  secondRow?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section
      className={`${secondRow ? "bg-discount-green" : "bg-brand-discount"} text-surface-primary lg:rounded-2xl max-lg:hidden`}
    >
      <DiscountMdHeader />

      <div className="relative flex justify-center items-center w-full">
        <ScrollLeftButton
          scrollContainerRef={ref}
          className="text-2xl left-5"
        />
        <ScrollRightButton
          scrollContainerRef={ref}
          className="right-5 text-2xl"
        />
        <HorizontalNav
          ref={ref}
          className="pb-5 gap-1 px-3 text-black lg:flex-row-reverse"
        >
          {data.map((product) => (
            <DiscountProductCard
              product={product}
              key={`discount-${product.product_id}`}
            />
          ))}
          <Link
            href={"/search?discount"}
            className="bg-surface-primary w-32 h-52 flex flex-col items-center justify-center px-10 rounded-l-xl text-sm pt-2"
          >
            <span className="border-black border-2 p-4 rounded-full">
              <BiLeftArrowAlt className="scale-250" />
            </span>
            مشاهده همه
          </Link>
        </HorizontalNav>
      </div>
    </section>
  );
};

export default DisplayDesktopDiscount;
