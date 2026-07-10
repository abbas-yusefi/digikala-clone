import React from "react";
import HorizontalNav from "../../shared/horizontal-nav";
import Link from "next/link";
import DiscountProductCard from "./discount-product-card";
import { BiLeftArrowAlt } from "react-icons/bi";
import { ProductCard, WithImage } from "@/lib/types/product";
import DiscountMdHeader from "./discount-md-header";

const DisplayMobileDiscount = ({
  data,
  secondRow,
}: {
  data: WithImage<ProductCard>[];
  secondRow?: boolean;
}) => {
  return (
    <section
      className={`${secondRow ? "bg-discount-green" : "bg-brand-discount"} text-surface-primary lg:rounded-2xl lg:hidden`}
    >
      <DiscountMdHeader />
      <HorizontalNav className="pb-5 gap-1 px-3 text-black lg:flex-row-reverse">
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
          <span className="border-black border-2 p-2 rounded-full">
            <BiLeftArrowAlt className="text-4xl" />
          </span>
          مشاهده همه
        </Link>
      </HorizontalNav>
    </section>
  );
};

export default DisplayMobileDiscount;
