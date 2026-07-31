import { Icons } from "@/lib/icons";
import { Product } from "@/lib/types/product";
import Link from "next/link";
import React from "react";

const ProductDetailNav = ({
  category_id,
  brand_id,
}: {
  category_id: Product["category_id"];
  brand_id: Product["brand_id"];
}) => {
  const productCategory: { name: string; slug: string } | false = (() => {
    switch (category_id) {
      case 1:
        return { name: "موبایل", slug: "mobile" };
      case 2:
        return { name: "لپ‌تاپ", slug: "laptop" };
      case 3:
        return { name: "هدفون و هنزفری", slug: "headphones" };
      case 4:
        return { name: "ساعت هوشمند", slug: "smartwatch" };
      case 5:
        return { name: "تبلت", slug: "tablet" };
      default:
        return false;
    }
  })();
  const productBrand: string | false = (() => {
    switch (brand_id) {
      case 1:
        return "سامسونگ";
      case 2:
        return "اپل";
      case 3:
        return "شیائومی";
      case 4:
        return "هوآوی";
      case 5:
        return "سونی";
      case 6:
        return "لنوو";
      case 7:
        return "ایسوس";
      case 8:
        return "اچ پی";
      case 9:
        return "جی بی ال";
      case 10:
        return "بوز";
      default:
        return false;
    }
  })();
  return (
    <>
      {productCategory && productBrand && (
        <nav
          dir="rtl"
          className="w-full flex justify-start items-center px-4 text-sm font-semibold text-text-secondary"
        >
          <Link href={"/"} className="mx-3 border-b pb-1">
            دیجی کالا
          </Link>
          <Icons.Left className="text-xs" />
          <Link
            className="mx-3 border-b pb-1"
            href={`/search?category=${productCategory.slug}`}
          >
            {productCategory.name}
          </Link>
          <Icons.Left className="text-xs" />
          <Link
            className="mx-3 border-b pb-1"
            href={`/search?q=${productBrand}`}
          >
            {productBrand}
          </Link>
        </nav>
      )}
    </>
  );
};

export default ProductDetailNav;
