import React from "react";

const ProductsLength = ({
  isCategory,
  productsLength,
}: {
  isCategory?: boolean;
  productsLength: number | undefined;
}) => {
  return (
    <div
      className={`${isCategory || typeof productsLength == "undefined" ? "hidden" : ""} flex justify-between text-xs text-text-secondary pb-7 mx-4`}
    >
      <span dir="rtl">{productsLength} کالا</span>
      <span>همه کالاها</span>
    </div>
  );
};

export default ProductsLength;
