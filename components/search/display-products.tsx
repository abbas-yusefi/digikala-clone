import React from "react";
import ProductCard from "./product-card";
import Link from "next/link";

type Products = {
  brand_id: number;
  category_id: number;
  description: string;
  discount: number;
  price: number;
  product_id: number;
  title: string;
  image_url: string;
};

const DisplayProducts = ({
  products,
  productsLength,
  category,
}: {
  products: Products[];
  productsLength: number;
  category: string;
}) => {
  const isCategory = category.length > 0;

  const categoryName =
    category === "mobile"
      ? "موبایل"
      : category === "laptop"
        ? "لپ تاپ"
        : category === "headphones"
          ? "هدفون"
          : category === "smartwatch"
            ? "ساعت"
            : category === "tablet"
              ? "تبلت"
              : "";
  return (
    <div className="pb-10">
      <div
        className={`${isCategory ? "hidden" : ""} flex justify-between text-xs text-text-secondary pb-7`}
      >
        <span style={{ direction: "rtl" }}>{productsLength} کالا</span>
        <span>همه کالاها</span>
      </div>
      <div
        className={`${isCategory ? "" : "hidden"} flex justify-start py-6 text-xs text-gray-400 font-semibold cursor-default`}
        style={{
          direction: "rtl",
        }}
      >
        <Link href="/">فروشگاه اینترنتی دیجی کالا</Link>
        <span className="px-3">/</span>
        <span>{categoryName}</span>
      </div>

      <div className="min-[425px]:grid min-[425px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1440px]:grid-cols-4">
        {products.map((product) => (
          <ProductCard data={product} key={product.product_id} />
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
