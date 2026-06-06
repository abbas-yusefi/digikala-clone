import React from "react";
import HorizantalNav from "../shared/horizantal-nav";
import Link from "next/link";
import DiscountProductCard from "./discount-product-card";
import { BiLeftArrowAlt } from "react-icons/bi";
import DiscountMdHeader from "./discount-md-header";
import DiscountLgHeader from "./discount-lg-header";

type Product = {
  product_id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image_url: string;
};

const DiscountProducts = async ({ data }: { data: Promise<Product[]> }) => {
  const products = await data;
  return (
    <section className="bg-brand-discount text-surface-primary lg:rounded-2xl">
      <DiscountMdHeader />

      <HorizantalNav className="pb-5 gap-1 px-3 text-black lg:flex-row-reverse">
        {products.map((product) => (
          <DiscountProductCard
            product={product}
            key={`discount-${product.product_id}`}
          />
        ))}
        <Link
          href={"/"}
          className="bg-surface-primary w-32 h-52 flex flex-col items-center justify-center px-10 rounded-l-xl"
        >
          <div className="border-2 rounded-full p-4">
            <BiLeftArrowAlt className="scale-250" />
          </div>
          <h3 className="text-sm pt-2">مشاهده همه</h3>
        </Link>
      </HorizantalNav>
    </section>
  );
};

export default DiscountProducts;
