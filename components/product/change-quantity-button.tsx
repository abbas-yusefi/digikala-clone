"use client";

import {
  decrementProductQuantityAction,
  deleteProductFromCartAction,
  incrementProductQuantityAction,
  itemQuantityAction,
} from "@/lib/actions/cart";
import { Icons } from "@/lib/icons";
import { useCart } from "@/lib/providers/cart-providers";
import { Cart } from "@/lib/types/product";
import React, { Dispatch, SetStateAction, useEffect } from "react";

const ChangeQuantityButton = ({
  quantity,
  user_id,
  product_id,
  setIsItemInCart,
  setQuantity,
  variant,
}: {
  quantity: number;
  user_id: string | undefined;
  product_id: number;
  setIsItemInCart?: Dispatch<SetStateAction<boolean>>;
  setQuantity: Dispatch<SetStateAction<number>>;
  variant?: "lists" | "rounded";
}) => {
  const { setProducts } = useCart();

  const deleteProductFromCart = async () => {
    const deleteDatabaseProduct = async () => {
      if (!user_id) return;
      try {
        const result = await deleteProductFromCartAction(product_id, user_id);
        if (result.success && setIsItemInCart) {
          setIsItemInCart(false);
        }
        if (result.success) {
          setProducts((prevProducts) =>
            prevProducts?.filter(
              (product) => product.product_id !== product_id,
            ),
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    const deleteLocalStorageProduct = () => {
      const data = localStorage.getItem("cart");
      const parsedData = data ? JSON.parse(data) : null;
      if (!parsedData) return;
      const updatedCart = parsedData.filter(
        (product: Pick<Cart, "id" | "quantity">) => product.id !== product_id,
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      if (setIsItemInCart) setIsItemInCart(false);
    };
    if (user_id) {
      deleteDatabaseProduct();
    } else {
      deleteLocalStorageProduct();
    }
  };

  const decrementProductQuantity = async () => {
    try {
      if (!user_id) {
        const data = localStorage.getItem("cart");
        const parsedData = data ? JSON.parse(data) : null;
        if (parsedData) {
          const updatedCart = parsedData.map(
            (item: Pick<Cart, "id" | "quantity">) =>
              item.id === product_id
                ? { ...item, quantity: item.quantity - 1 }
                : item,
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          setQuantity((prev) => (prev = prev - 1));
        }
        return;
      }
      const result = await decrementProductQuantityAction(product_id, user_id);
      if (result?.success) setQuantity((prev) => prev - 1);
    } catch (err) {
      console.log(err);
    }
  };

  const incrementProductQuantity = async () => {
    try {
      if (!user_id) {
        const data = localStorage.getItem("cart");
        const parsedData = data ? JSON.parse(data) : null;
        if (parsedData) {
          const updatedCart = parsedData.map(
            (item: Pick<Cart, "id" | "quantity">) =>
              item.id === product_id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          setQuantity((prev) => (prev = prev + 1));
        }
        return;
      }
      const result = await incrementProductQuantityAction(product_id, user_id);
      if (result?.success) setQuantity((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getItemQuantity = async () => {
      if (!user_id) {
        const data = localStorage.getItem("cart");
        const parsedData = data ? JSON.parse(data) : null;
        if (parsedData) {
          const product = parsedData.find(
            (item: Pick<Cart, "id" | "quantity">) => item.id === product_id,
          );
          if (product) {
            setQuantity(product.quantity);
          } else {
            setQuantity(0);
          }
        } else {
          setQuantity(0);
        }
        return;
      }
      try {
        const result = await itemQuantityAction(user_id, product_id);
        if (result && result.length > 0) {
          setQuantity(result[0].quantity);
        } else {
          setQuantity(0);
        }
      } catch (err) {
        console.log(err);
        setQuantity(0);
      }
    };
    getItemQuantity();
  }, [product_id, user_id, setQuantity]);

  if (variant === "rounded")
    return (
      <button className="w-30 h-10 rounded-4xl bg-surface-primary border border-black/15 font-semibold flex justify-between items-center px-4 text-brand-discount cursor-default">
        <span
          onClick={
            quantity <= 1 ? deleteProductFromCart : decrementProductQuantity
          }
          className="text-lg cursor-pointer"
        >
          {quantity <= 1 ? <Icons.Trash /> : <Icons.Minus />}
        </span>
        <span className="text-sm">{quantity}</span>
        <span
          className="text-xl cursor-pointer"
          onClick={incrementProductQuantity}
        >
          <Icons.Plus />
        </span>
      </button>
    );

  if (variant === "lists")
    return (
      <button className="flex-3 py-2 rounded-lg bg-surface-primary border border-black/15 font-semibold flex justify-between items-center px-4 text-brand-discount cursor-default">
        <span
          onClick={
            quantity <= 1 ? deleteProductFromCart : decrementProductQuantity
          }
          className="text-2xl cursor-pointer p-1"
        >
          {quantity <= 1 ? <Icons.Trash /> : <Icons.Minus />}
        </span>
        <span className="text-lg cursor-pointer">{quantity}</span>
        <span
          className="text-2xl cursor-pointer p-1"
          onClick={incrementProductQuantity}
        >
          <Icons.Plus />
        </span>
      </button>
    );
  return (
    <button className="w-[47%] h-14 rounded-lg bg-surface-primary border border-black/15 font-semibold flex justify-between items-center px-4 text-brand-discount cursor-default">
      <span
        onClick={
          quantity <= 1 ? deleteProductFromCart : decrementProductQuantity
        }
        className="text-2xl cursor-pointer p-1"
      >
        {quantity <= 1 ? <Icons.Trash /> : <Icons.Minus />}
      </span>
      <span className="text-lg cursor-pointer">{quantity}</span>
      <span
        className="text-2xl cursor-pointer p-1"
        onClick={incrementProductQuantity}
      >
        <Icons.Plus />
      </span>
    </button>
  );
};

export default ChangeQuantityButton;
