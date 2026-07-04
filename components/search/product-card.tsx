import { calculateDiscountedPrice } from "@/lib/utils/discount";
import Image from "next/image";
import DiscountPercentage from "../ui/discount-percentage";
import Link from "next/link";
import specialSell from "@/public/other/SpecialSell.svg";
import { ProductCard as ProductCardType, WithImage } from "@/lib/types/product";

const ProductCard = ({ data }: { data: WithImage<ProductCardType> }) => {
  const discountedPrice = calculateDiscountedPrice(data.price, data.discount);

  const isDiscounted = data.discount ? data.discount > 0 : false;

  return (
    <>
      <Link href={`/product/${data.product_id}`} className="min-[425px]:hidden">
        <article className="flex w-full justify-between px-5 border-b border-black/10 py-3 h-32 mt-5 cursor-pointer">
          <div className="w-full pr-7 flex flex-col justify-between">
            <div
              style={{
                direction: "rtl",
              }}
              className="pt-3 text-sm"
            >
              {data.title}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-center gap-3">
                <span
                  className="text-sm font-semibold"
                  style={{ direction: "rtl" }}
                >
                  {isDiscounted
                    ? discountedPrice.toLocaleString()
                    : data.price.toLocaleString()}{" "}
                  تومان
                </span>
                <span className="text-[0.7rem] text-text-secondary line-through">
                  {isDiscounted && data.price.toLocaleString()}
                </span>
              </div>
              <div>
                {isDiscounted && (
                  <DiscountPercentage
                    discount={data.discount !== null ? data.discount : 0}
                    className="scale-80"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-40 flex flex-col justify-between pb-2 items-end ">
            {isDiscounted && (
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
        className="hover:z-20 max-[425px]:hidden hover:shadow-[0px_0px_22px_7px_rgba(0,_0,_0,_0.1)]"
      >
        <article
          className={`h-96 w-auto flex flex-col justify-center items-center py-4 border border-black/7 -mr-0.5 bg-surface-primary z-10 border-b-0 text-sm font-semibold`}
        >
          <div className="w-full h-auto flex-col justify-center items-center relative pt-5">
            {isDiscounted && (
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
            <div className="text-right line-clamp-2">{data.title}</div>
            <div className="flex justify-between">
              <div className="mt-auto">
                <span
                  className="text-sm font-semibold block"
                  style={{ direction: "rtl" }}
                >
                  {isDiscounted
                    ? discountedPrice.toLocaleString()
                    : data.price.toLocaleString()}{" "}
                  تومان
                </span>
                <span className="text-[0.7rem] text-gray-300 ml-9 line-through">
                  {isDiscounted && data.price.toLocaleString()}
                </span>
              </div>
              {isDiscounted && (
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
