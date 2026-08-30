"use client";

import { getAllFavoriteProductsAction } from "@/lib/actions/product";
import { Icons } from "@/lib/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartHeader = ({
  cartLength,
  user_id,
}: {
  cartLength: number;
  user_id: string | undefined;
}) => {
  const isEmpty = cartLength === 0 || !cartLength;
  const [favoriteLength, setFavoriteLength] = useState(0);
  useEffect(() => {
    const getFavoriteLength = async () => {
      if (!user_id) return;
      try {
        const products = await getAllFavoriteProductsAction(user_id, "recent");
        if (products) setFavoriteLength(products.length);
      } catch (err) {
        console.log(err);
      }
    };
    getFavoriteLength();
  }, [user_id]);
  return (
    <header className="w-full h-14 border-b border-black/30 flex items-center justify-between px-6 sticky top-0">
      <div className="flex items-center justify-center gap-3 text-2xl text-text-secondary">
        <Icons.More
          className={`${isEmpty ? "hidden" : ""} cursor-pointer hover:text-black`}
        />
        <Link href={"/profile/lists"} className="relative">
          <Icons.Heart className="cursor-pointer hover:text-black" />
          <span
            className={`${isEmpty ? "hidden" : ""} bg-brand-discount text-white text-xs px-1.5 rounded-lg absolute -left-2 -top-1`}
          >
            {favoriteLength}
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <span
          className={`${isEmpty ? "hidden" : ""} text-text-secondary text-xs`}
          dir="rtl"
        >
          {cartLength} کالا
        </span>
        <h1 className="font-semibold">سبد خرید</h1>
      </div>
    </header>
  );
};

export default CartHeader;
