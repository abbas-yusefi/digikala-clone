"use client";

import {
  Product,
  ProductCard as ProductCardType,
  WithImage,
} from "@/lib/types/product";
import Image from "next/image";
import Link from "next/link";
import PriceTag from "./price-tag";
import DiscountPercentage from "./discount-percentage";
import { Icons } from "@/lib/icons";
import AddToCartButton from "../product/add-to-cart-button";
import specialSell from "@/public/other/SpecialSell.svg";
import ChangeQuantityButton from "../product/change-quantity-button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import DiscountTag from "./discount-tag";
import { calculateDiscountedPrice } from "@/lib/utils/discount";
import BuyLater from "./buy-later";

const CardActions = ({
  product_id,
  onClick,
}: {
  product_id: number;
  onClick?: () => void;
}) => (
  <div className="flex gap-2 mt-2 lg:px-4">
    <AddToCartButton product_id={product_id} variant="lists" />
    <button
      onClick={onClick}
      className="w-20 flex justify-center items-center bg-surface-primary rounded-xl border border-black/20 cursor-pointer"
    >
      <Icons.Trash className="text-2xl max-[375px]:text-xl text-black/40" />
    </button>
  </div>
);

const ProductCard = ({
  data,
  variant,
  onClick,
}: {
  data: WithImage<Product | ProductCardType>;
  variant: "lists" | "slim" | "checkout";
  onClick?: () => void;
}) => {
  const [quantity, setQuantity] = useState(1);
  const { data: session } = useSession();
  const discountedPrice = calculateDiscountedPrice(data.price, data.discount);

  if (variant === "checkout")
    return (
      <article className="lg:hidden w-full flex h-52 px-5 gap-4 font-semibold border-b border-black/20 py-2">
        <div className="w-full flex flex-col">
          <div
            dir="rtl"
            className="h-[33.3%] text-xs flex flex-col items-start justify-center gap-1"
          >
            {data.discount && data.discount > 0 && <DiscountTag />}
            <Link href={`/product/${data.product_id}`}>{data.title}</Link>
          </div>
          <div className="h-[33.3%] flex items-center gap-1 text-xs ">
            {data.discount && data.discount > 0 && (
              <span className="text-sm">
                {discountedPrice.toLocaleString()}
              </span>
            )}
            <span className="text-xs text-text-secondary line-through">
              {data.price.toLocaleString()}
            </span>
            {data.discount && <DiscountPercentage discount={data.discount} />}
          </div>
          <div className=" h-[33.3%] flex justify-end items-center">
            <BuyLater product_id={data.product_id} user_id={session?.user.id} />
          </div>
        </div>
        <div className="w-36 flex  flex-col justify-center items-center">
          <Link
            href={`/product/${data.product_id}`}
            className="relative w-full h-[70%] aspect-video"
          >
            <Image
              priority
              alt={data.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              quality={90}
              src={data.image_url}
            />
          </Link>
          <div className="w-full h-[30%] flex justify-center items-center">
            <ChangeQuantityButton
              product_id={data.product_id}
              quantity={quantity}
              setQuantity={setQuantity}
              user_id={session?.user.id}
              variant="rounded"
            />
          </div>
        </div>
      </article>
    );

  if (variant === "lists")
    return (
      <>
        {/* Mobile version */}
        <article className="flex flex-col justify-end px-4 font-semibold my-8 lg:hidden">
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
          <CardActions onClick={onClick} product_id={data.product_id} />
        </article>

        {/* Desktop version */}
        <article
          className={`h-auto w-auto flex flex-col py-6 border border-black/7 bg-surface-primary z-10 border-b-0 text-sm font-semibold hover:z-20 max-lg:hidden hover:shadow-[0px_0px_22px_7px_rgba(0,0,0,0.1)]`}
        >
          <Link href={`/product/${data.product_id}`} className=" ">
            <div className="w-full h-auto flex-col justify-center items-center relative pt-5">
              {data.discount && (
                <Image
                  alt="فروش ویژه"
                  src={specialSell}
                  className="ml-auto absolute right-3 top-0"
                  width={60}
                  height={60}
                />
              )}
              <Image
                alt={data.title}
                src={data.image_url}
                width={235}
                height={235}
                className="object-contain mx-auto"
              />
            </div>
            <div className="h-[35%] w-full px-5 flex flex-col justify-between">
              <div className="text-right line-clamp-2 h-10" dir="rtl">
                {data.title}
              </div>
              <div className="flex justify-between pb-10">
                <PriceTag discount={data.discount} price={data.price} />
                {data.discount && (
                  <DiscountPercentage
                    discount={data.discount !== null ? data.discount : 0}
                  />
                )}
              </div>
            </div>
          </Link>
          <CardActions onClick={onClick} product_id={data.product_id} />
        </article>
      </>
    );

  if (variant === "slim")
    return (
      <article
        className={`h-auto w-auto flex flex-col py-6 border border-black/7 bg-surface-primary z-10 border-b-0 text-sm font-semibold hover:z-20 max-lg:hidden hover:shadow-[0px_0px_22px_7px_rgba(0,0,0,0.1)]`}
      >
        <Link href={`/product/${data.product_id}`} className=" ">
          <div className="w-full h-auto flex-col justify-center items-center relative pt-5">
            {data.discount && (
              <Image
                alt="فروش ویژه"
                src={specialSell}
                className="ml-auto absolute right-3 top-0"
                width={60}
                height={60}
              />
            )}
            <Image
              alt={data.title}
              src={data.image_url}
              width={235}
              height={235}
              className="object-contain mx-auto"
            />
          </div>
          <div className="h-[35%] w-full px-5 flex flex-col justify-between">
            <div className="text-right line-clamp-2" dir="rtl">
              {data.title}
            </div>
            <div className="flex justify-between pb-10">
              <PriceTag discount={data.discount} price={data.price} />
              {data.discount && (
                <DiscountPercentage
                  discount={data.discount !== null ? data.discount : 0}
                />
              )}
            </div>
          </div>
        </Link>
        <AddToCartButton product_id={data.product_id} variant="lists" />
      </article>
    );

  return (
    <>
      <Link href={`/product/${data.product_id}`} className="min-[425px]:hidden">
        <article className="flex w-full justify-between px-5 border-b border-black/10 py-3 h-32 mt-5 cursor-pointer">
          <div className="w-full pr-7 flex flex-col justify-between">
            <div dir="rtl" className="pt-3 text-sm">
              {data.title}
            </div>
            <div className="flex justify-between">
              <PriceTag discount={data.discount} price={data.price} />
              <div>
                {data.discount && (
                  <DiscountPercentage
                    discount={data.discount !== null ? data.discount : 0}
                    className="text-2xl"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-40 flex flex-col justify-between pb-2 items-end ">
            {data.discount && (
              <Image
                alt="فروش ویژه"
                src={specialSell}
                className="-mt-5 pb-3"
                width={60}
                height={60}
              />
            )}
            <Image
              className=" object-cover"
              alt={data.title}
              src={data.image_url}
              width={100}
              height={100}
            />
          </div>
        </article>
      </Link>

      <Link
        href={`/product/${data.product_id}`}
        className="hover:z-20 max-[425px]:hidden hover:shadow-[0px_0px_22px_7px_rgba(0,0,0,0.1)]"
      >
        <article
          className={`h-96 w-auto flex flex-col justify-center items-center py-4 border border-black/7 -mr-0.5 bg-surface-primary z-10 border-b-0 text-sm font-semibold`}
        >
          <div className="w-full h-auto flex-col justify-center items-center relative pt-5">
            {data.discount && (
              <Image
                alt="فروش ویژه"
                src={specialSell}
                className="ml-auto absolute right-3 top-0"
                width={60}
                height={60}
              />
            )}
            <Image
              alt={data.title}
              src={data.image_url}
              width={235}
              height={235}
              className="object-contain mx-auto"
            />
          </div>
          <div className="h-[35%] w-full px-5 flex flex-col justify-between">
            <div className="text-right line-clamp-2" dir="rtl">
              {data.title}
            </div>
            <div className="flex justify-between">
              <PriceTag discount={data.discount} price={data.price} />
              {data.discount && (
                <DiscountPercentage
                  discount={data.discount !== null ? data.discount : 0}
                />
              )}
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default ProductCard;
