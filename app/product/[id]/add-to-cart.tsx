"use client";

import { addToCartAction } from "@/lib/actions/cart";
import { Cart } from "@/lib/types/product";
import React from "react";

const AddToCart = ({
  product_id,
  user_id,
  quantity,
}: Pick<Cart, "quantity" | "product_id"> & {
  user_id: string | number | undefined;
}) => {
  const handleDatabaseAddToCart = async () => {
    try {
      if (!user_id) return;
      await addToCartAction(product_id, user_id, quantity);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLocalstorageAddToCart = () => {
    const data = localStorage.getItem("cart") || null;
    const parsedData = data ? JSON.parse(data) : null;
    const exists = parsedData
      ? parsedData.some(
          (item: Pick<Cart, "id" | "quantity">) => +item.id === product_id,
        )
      : false;
    const itemExistsInCart = () => {
      if (exists) {
        return;
      }
      if (parsedData) {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...parsedData,
            { id: product_id, quantity: quantity },
          ]),
        );
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([{ id: product_id, quantity: quantity }]),
        );
      }
    };
    itemExistsInCart();
  };

  return (
    <button
      onClick={user_id ? handleDatabaseAddToCart : handleLocalstorageAddToCart}
    >
      add to cart
    </button>
  );
};

export default AddToCart;
