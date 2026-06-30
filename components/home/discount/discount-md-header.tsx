import Link from "next/link";
import React from "react";
import Timer from "../timer";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import amazingoffer from "@/public/other/amazing-discount.svg";
import discounticon from "@/public/other/discounticon.svg";

const DiscountMdHeader = () => {
  return (
    <div className="flex justify-between items-center px-5 py-5">
      <Link href={"/search?discount"}>
        <FaChevronLeft className="inline scale-90" />
        همه
      </Link>
      <div className="flex">
        <Timer />
        <div className="flex gap-2 ml-4">
          <Image
            src={amazingoffer}
            alt="شگفت انگیز"
            width={110}
            height={110}
            className="w-28"
            draggable="false"
          />
          <Image
            src={discounticon}
            alt="تخفیف"
            width={25}
            height={25}
            className="w-7"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountMdHeader;
