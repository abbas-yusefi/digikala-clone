import React from "react";
import ProductCard from "@/components/search/product-card";

type Products = {
  description: string;
  discount: number;
  image_url: string;
  price: number;
  product_id: number;
  title: string;
};

const DisplayCartItems = ({ products }: { products: Products[] }) => {
  return (
    <div>
      <div className="text-brand-primary flex justify-center items-center w-full border-b-4 pt-2 pb-3 rounded-b-sm">
        سبد خرید
      </div>
      {products.map((product: Products) => (
        <ProductCard data={product} key={product.product_id} />
      ))}
    </div>
  );
};

export default DisplayCartItems;
