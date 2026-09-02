import React from "react";
import DisplayMobileDiscount from "./display-mobile-discount";
import DisplayDesktopDiscount from "./display-desktop-discount";
import { getHomeDiscountProducts } from "@/lib/queries";
import { connection } from "next/server";

const DiscountSection = async ({ secondRow }: { secondRow?: boolean }) => {
  await connection();
  const products = await getHomeDiscountProducts(secondRow);
  return (
    <>
      <DisplayMobileDiscount data={products} secondRow={secondRow} />
      <DisplayDesktopDiscount data={products} secondRow={secondRow} />
    </>
  );
};

export default DiscountSection;
