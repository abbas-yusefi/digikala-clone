import { Icons } from "@/lib/icons";
import React from "react";

const DiscountTag = () => {
  return (
    <div className="flex justify-center items-center text-brand-discount bg-brand-discount/20 h-fit w-fit rounded-lg px-1 text-xs">
      <Icons.Discount className="text-sm" />
      <span className="-mt-1 font-normal">فروش ویژه</span>
    </div>
  );
};

export default DiscountTag;
