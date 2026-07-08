"use client";

import { getCartProductsAction } from "@/lib/actions/get-cart-products";
import { SyncCartItemsAction } from "@/lib/actions/sync-cart-items";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const CartItemsLength = ({ position }: { position?: string }) => {
  const [cartLength, setCartLength] = useState<number | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const syncCartItems = async (userId: string) => {
      try {
        const data = localStorage.getItem("cart");
        const parsedData = data ? JSON.parse(data) : null;
        const result = await SyncCartItemsAction(userId, parsedData);
        if (result.ok) {
          localStorage.removeItem("cart");
        }
      } catch (err) {
        console.log(err);
      }
    };

    const getLocalCartItems = async () => {
      try {
        const data = localStorage.getItem("cart");
        const parsedData = data ? JSON.parse(data) : null;
        setCartLength(parsedData == null ? null : parsedData.length);
      } catch (err) {
        console.log(err);
      }
    };
    const getDatabaseCartItmes = async () => {
      try {
        const data = await getCartProductsAction();
        setCartLength(typeof data === "undefined" ? null : data.length);
      } catch (err) {
        console.log(err);
      }
    };

    if (session?.user?.id) {
      getDatabaseCartItmes();
      syncCartItems(session.user?.id);
    } else {
      getLocalCartItems();
    }
  }, [session]);
  return (
    <span
      className={`${cartLength == null ? "hidden" : ""} absolute ${position ? `${position}` : "top-0 right-5"} w-4 h-4 bg-brand-secondary rounded-sm flex items-center justify-center text-white text-xs z-20 outline-2`}
    >
      {cartLength && cartLength}
    </span>
  );
};

export default CartItemsLength;
