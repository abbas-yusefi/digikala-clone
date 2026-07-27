"use client";

import { Icons } from "@/lib/icons";
import React from "react";
import CartItemsLength from "../nav/cart-items-length";
import BackButton from "../ui/back-button";
import Link from "next/link";

const ProductHeader = () => {
  return (
    <header className="flex justify-between items-center px-5 py-3">
      <div className="flex items-center gap-6">
        <Link href={"/checkout"} className="relative">
          <Icons.CartOutline className="text-3xl cursor-pointer" />
          <CartItemsLength position="-right-1 -bottom-1" />
        </Link>
        <button
          className="cursor-pointer"
          onClick={() => (window.location.hash = "search")}
        >
          <Icons.Search className="text-2xl" />
        </button>
      </div>
      <BackButton variant="x" />
    </header>
  );
};

export default ProductHeader;
