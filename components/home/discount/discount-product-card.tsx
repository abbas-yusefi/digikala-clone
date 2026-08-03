import Image from "next/image";
import Link from "next/link";
import React from "react";
import DiscountPercentage from "../../ui/discount-percentage";
import { ProductCard, WithImage } from "@/lib/types/product";
import { calculateDiscountedPrice } from "@/lib/utils/discount";

const DiscountProductCard = ({
  product,
}: {
  product: WithImage<ProductCard>;
}) => {
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discount,
  );

  return (
    <>
      <Link
        href={`/product/${product.product_id}`}
        className="bg-surface-primary flex flex-col first:rounded-r-xl last:rounded-l-xl"
      >
        <article className="w-32 h-52 px-2 text-sm rounded">
          <div className="h-28 w-full py-2">
            {product.image_url && (
              <Image
                alt={product.title}
                src={product.image_url}
                width={50}
                height={50}
                className="object-cover w-full h-full "
              />
            )}
          </div>
          <div className="flex flex-col">
            <h3
              style={{
                direction: "rtl",
              }}
              className="line-clamp-2"
            >
              {product.title}
            </h3>
            <div className="flex items-end flex-col mt-4">
              <div className="flex items-center">
                <div className="block text-text-secondary line-through text-xs">
                  {product.price.toLocaleString()}
                </div>
                {product.discount && (
                  <DiscountPercentage discount={product.discount} />
                )}
              </div>
              <span className="flex font-semibold">
                <span className="px-1">تومان</span>
                {discountedPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default DiscountProductCard;
