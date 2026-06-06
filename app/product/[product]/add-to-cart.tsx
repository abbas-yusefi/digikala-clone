"use client";

import { addToCart } from "@/lib/actions/cart";
import React from "react";

type AddToCartProps = {
  productId: string;
  userId: string;
  quantity: number;
};

type LocalStorageItem = {
  id: string;
  quantity: string;
};

const AddToCart = ({ productId, userId, quantity }: AddToCartProps) => {
  const handleDatabaseAddToCart = async () => {
    try {
      await addToCart(productId, userId, quantity);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLocalstorageAddToCart = () => {
    const data = localStorage.getItem("cart") || null;
    const parsedData = data ? JSON.parse(data) : null;
    const exists = parsedData
      ? parsedData.some((item: LocalStorageItem) => item.id === productId)
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
            { id: productId, quantity: quantity },
          ]),
        );
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([{ id: productId, quantity: quantity }]),
        );
      }
    };
    itemExistsInCart();
  };

  return (
    <button
      onClick={userId ? handleDatabaseAddToCart : handleLocalstorageAddToCart}
    >
      add to cart
    </button>
  );
};

export default AddToCart;
