import React from "react";

const DiscountPercentage = ({
  discount,
  className,
}: {
  discount: number;
  className?: string;
}) => {
  return (
    <span
      className={`${className} bg-brand-secondary text-white rounded-2xl  flex justify-center items-center h-fit w-fit px-2 ml-1`}
    >
      {discount > 0 && discount}%
    </span>
  );
};

export default DiscountPercentage;
