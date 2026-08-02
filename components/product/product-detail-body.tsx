import { Image as ImageType, Product, WithImage } from "@/lib/types/product";
import Image from "next/image";

import ShareButton from "../shared/share-button";
import FavoriteButton from "./favorite-button";

const ProductDetailBody = ({
  productImage,
  productData,
}: {
  productImage: Omit<ImageType, "product_id">;
  productData: WithImage<Product>;
}) => {
  return (
    <article className="h-full">
      <div className="flex justify-center items-center w-full h-72 bg-surface-primary my-10">
        <Image
          priority
          key={productImage.product_image_id}
          alt={productData.title}
          src={productImage.image_url}
          height={70}
          width={70}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="border-t border-black/20 py-8">
        <div className="flex justify-between px-5 font-semibold">
          <div className="text-xl flex items-center gap-4">
            <FavoriteButton product_id={productData.product_id} />
            <ShareButton />
          </div>
          <h1 dir="rtl">{productData.title}</h1>
        </div>
        <h2 dir="rtl" className="px-10 py-4 text-text-primary/80">
          {productData.description}
        </h2>
      </div>
    </article>
  );
};

export default ProductDetailBody;
