import { ProductCard, WithImage } from "@/lib/types/product";
import { calculateDiscountedPrice } from "@/lib/utils/discount";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProCard = ({ product }: { product: WithImage<ProductCard> }) => {
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discount,
  );
  return (
    <Link href={`/product/${product.product_id}`} className="flex">
      <article className="flex flex-col justify-center bg-green-200">
        <div>
          {product.image_url && (
            <Image
              alt={product.title}
              src={product.image_url}
              width={80}
              height={80}
            />
          )}
        </div>
        <div>
          <h3 className="text-xs line-clamp-1 w-fit">{product.title}</h3>
          <span className="block">{discountedPrice}</span>
          <span>{product.price}</span>
        </div>
      </article>
    </Link>
  );
};

export default ProCard;
