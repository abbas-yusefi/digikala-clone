import { calculateDiscountedPrice } from "@/lib/utils/discount";
import React from "react";

const PriceTag = ({
  price,
  discount,
}: {
  price: number;
  discount: null | number;
}) => {
  const discountedPrice = calculateDiscountedPrice(price, discount);

  const isDiscounted = discount ? discount > 0 : false;
  return (
    <div className="mt-auto">
      <span className="text-sm font-semibold block" dir="rtl">
        {isDiscounted
          ? discountedPrice.toLocaleString()
          : price.toLocaleString()}{" "}
        تومان
      </span>
      <span className="text-[0.7rem] text-gray-300 ml-9 line-through">
        {isDiscounted && price.toLocaleString()}
      </span>
    </div>
  );
};

export default PriceTag;
