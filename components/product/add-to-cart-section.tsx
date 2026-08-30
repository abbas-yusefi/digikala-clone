import { calculateDiscountedPrice } from "@/lib/utils/discount";
import React from "react";
import DiscountPercentage from "../ui/discount-percentage";
import AddToCartButton from "./add-to-cart-button";
import { Product, WithImage } from "@/lib/types/product";
import { CartProvider } from "@/lib/providers/cart-providers";

const AddToCartSection = ({
  data,
}: {
  data: Pick<WithImage<Product>, "price" | "discount" | "product_id">;
}) => {
  const isDiscounted = data?.discount && data.discount > 0;
  const discountedPrice = calculateDiscountedPrice(data.price, data.discount);

  return (
    <div className="fixed bottom-0 right-0 w-full h-20 border border-black/15 px-3 z-50 bg-surface-primary">
      <div className="flex justify-between items-center h-full w-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[0.7rem] text-text-secondary line-through">
              {isDiscounted && data.price.toLocaleString()}
            </span>
            <DiscountPercentage
              className="text-xs"
              discount={data.discount ? data.discount : 0}
            />
          </div>
          <span
            className="text-balance max-[425px]:text-xs font-bold"
            dir="rtl"
          >
            {isDiscounted
              ? discountedPrice.toLocaleString()
              : data.price.toLocaleString()}{" "}
            تومان
          </span>
        </div>
        <CartProvider>
          <AddToCartButton product_id={data.product_id} />
        </CartProvider>
      </div>
    </div>
  );
};

export default AddToCartSection;
