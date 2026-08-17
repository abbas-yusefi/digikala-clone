import Image from "next/image";
import React from "react";
import emptyCart from "@/public/other/empty-cart.svg";

const EmptyCart = () => {
  return (
    <div>
      <div className="text-brand-primary flex justify-center items-center w-full border-b-4 pt-2 pb-3 rounded-b-sm">
        سبد خرید
      </div>
      <div className="w-full flex flex-col justify-center items-center my-20 border-b border-black/15 pb-10">
        <Image
          priority
          src={emptyCart}
          alt="cart image"
          width={200}
          height={200}
        />
        <p className="my-5">!سبد خرید شما خالی است</p>
        <span className="text-xs">
          :می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید
        </span>
      </div>
    </div>
  );
};

export default EmptyCart;
