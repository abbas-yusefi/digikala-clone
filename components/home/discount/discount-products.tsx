import React from "react";
import HorizontalNav from "../../shared/horizontal-nav";
import Link from "next/link";
import DiscountProductCard from "./discount-product-card";
import { BiLeftArrowAlt } from "react-icons/bi";
import DiscountMdHeader from "./discount-md-header";
import DiscountLgHeader from "./discount-lg-header";
import ScrollLeftButton from "../../ui/scroll-left-button";
import ScrollRightButton from "../../ui/scroll-right-button";
import DisplayMobileDiscount from "./display-mobile-discount";
import DisplayDesktopDiscount from "./display-desktop-discount";

type Product = {
  product_id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image_url: string;
};

const DiscountProducts = async ({
  data,
  secondRow,
}: {
  data: Promise<Product[]>;
  secondRow?: boolean;
}) => {
  const products = await data;
  return (
    <>
      <DisplayMobileDiscount data={products} secondRow={secondRow} />
      <DisplayDesktopDiscount data={products} secondRow={secondRow} />
    </>
  );
};

export default DiscountProducts;
