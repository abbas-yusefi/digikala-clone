import { Image as ImageType, Product, WithImage } from "@/lib/types/product";
import Image from "next/image";

import React from "react";

const ProductDetailBody = ({
  productImage,
  productData,
}: {
  productImage: Omit<ImageType, "product_id">;
  productData: WithImage<Product>;
}) => {
  return (
    <article className="bg-surface-primary">
      <Image
        key={productImage.product_image_id}
        alt={productData.title}
        src={productImage.image_url}
        height={70}
        width={70}
      />
    </article>
  );
};

export default ProductDetailBody;
