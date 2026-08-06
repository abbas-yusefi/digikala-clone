import { Product, WithImage } from "@/lib/types/product";
import Image from "next/image";
import Link from "next/link";
import PriceTag from "./price-tag";
import DiscountPercentage from "./discount-percentage";
import { Icons } from "@/lib/icons";
import AddToCartButton from "../product/add-to-cart-button";

const ProductCard = ({
  data,
  variant,
  onClick,
}: {
  data: WithImage<Product>;
  variant: "lists";
  onClick?: () => void;
}) => {
  if (variant === "lists")
    return (
      <>
        <article className="flex flex-col justify-end px-4 font-semibold my-5">
          <Link href={`/product/${data.product_id}`}>
            <div className="flex justify-end">
              <div className="flex flex-col mr-4 w-full justify-center">
                <div className="flex justify-end">
                  <h2 className="font-semibold text-sm max-[375px]:text-xs">
                    {data.title}
                  </h2>
                </div>
                <div className="w-full flex justify-between mt-10">
                  <PriceTag discount={data.discount} price={data.price} />
                  {data.discount && (
                    <DiscountPercentage discount={data.discount} />
                  )}
                </div>
              </div>
              <div className="h-[35%] w-[35%] pb-10">
                <Image
                  className="w-full h-full object-contain"
                  alt={data.title}
                  src={data.image_url}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </Link>

          <div className="flex gap-2 mt-2">
            <AddToCartButton product_id={data.product_id} variant="lists" />
            <button
              onClick={onClick}
              className="w-20 flex justify-center items-center bg-surface-primary rounded-xl border border-black/20 cursor-pointer"
            >
              <Icons.Trash className="text-2xl max-[375px]:text-xl text-black/40" />
            </button>
          </div>
        </article>
      </>
    );
};

export default ProductCard;
