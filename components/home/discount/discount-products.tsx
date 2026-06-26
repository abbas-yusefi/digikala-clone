import React from "react";
import DisplayMobileDiscount from "./display-mobile-discount";
import DisplayDesktopDiscount from "./display-desktop-discount";
import { getHomeDiscountProducts } from "@/lib/querys";

const DiscountProducts = async ({ secondRow }: { secondRow?: boolean }) => {
  const products = await getHomeDiscountProducts(secondRow);
  return (
    <>
      <DisplayMobileDiscount data={products} secondRow={secondRow} />
      <DisplayDesktopDiscount data={products} secondRow={secondRow} />
    </>
  );
};

export default DiscountProducts;
