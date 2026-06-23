import React from "react";
import HorizontalNav from "../../shared/horizontal-nav";
import Link from "next/link";
import DiscountProductCard from "./discount-product-card";
import { BiLeftArrowAlt } from "react-icons/bi";
import Timer from "../timer";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import discountEmoji from "@/public/other/discount-emoji.svg";
import amazingDiscount from "@/public/other/amazing-discount.svg";

type Product = {
  product_id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image_url: string;
};

const DisplayMobileDiscount = async ({
  data,
  secondRow,
}: {
  data: Product[];
  secondRow?: boolean;
}) => {
  return (
    <section
      className={`${secondRow ? "bg-[#84bf3a]" : "bg-brand-discount"} text-surface-primary lg:rounded-2xl lg:hidden`}
    >
      <div className="flex justify-between items-center px-5 py-5">
        <Link href={"/search?discount"}>
          <FaChevronLeft className="inline scale-90" />
          همه
        </Link>
        <div className="flex">
          <Timer />
          <div className="flex gap-2 ml-4">
            <Image
              src={amazingDiscount}
              alt="شگفت انگیز"
              width={110}
              height={110}
              className="w-28"
              draggable="false"
            />
            <Image
              src={discountEmoji}
              alt="تخفیف"
              width={25}
              height={25}
              className="w-7"
              draggable="false"
            />
          </div>
        </div>
      </div>
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
          <span className="border-black border-2 p-4 rounded-full">
            <BiLeftArrowAlt className="scale-250" />
          </span>
          مشاهده همه
        </Link>
      </HorizontalNav>
    </section>
  );
};

export default DisplayMobileDiscount;
