"use client";

import {
  addToCartAction,
  deleteProductFromCartAction,
  itemExistsInCartAction,
} from "@/lib/actions/cart";
import { Icons } from "@/lib/icons";
import { Cart } from "@/lib/types/product";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const AddToCartButton = ({ product_id }: Pick<Cart, "product_id">) => {
  const { data: session } = useSession();
  const user_id = session?.user.id;
  const [isItemInCart, setIsItemInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // const getProductQuantity =

  const deleteProductFromCart = async () => {
    const deleteDatabaseProduct = async () => {
      if (!user_id) return;
      try {
        const result = await deleteProductFromCartAction(product_id, user_id);
        if (result.success) setIsItemInCart(false);
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
      setIsItemInCart(false);
    };
    if (user_id) {
      deleteDatabaseProduct();
    } else {
      deleteLocalStorageProduct();
    }
  };

  const handleDatabaseAddToCart = async () => {
    try {
      if (!user_id) return;
      const result = await addToCartAction(product_id, user_id, "1");
      if (result.success) {
        setIsItemInCart(true);
        setQuantity(1);
      }
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
          JSON.stringify([...parsedData, { id: product_id, quantity: 1 }]),
        );

        setIsItemInCart(true);
        setQuantity(1);
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([{ id: product_id, quantity: 1 }]),
        );
      }
    };
    itemExistsInCart();
  };

  useEffect(() => {
    const checkExistsInCart = async (
      product_id: string | number,
      user_id: string | undefined,
    ) => {
      try {
        if (!user_id) {
          const data = localStorage.getItem("cart");
          const parsedData = data ? JSON.parse(data) : null;
          if (!parsedData) return;
          const exists = parsedData.some(
            (item: Pick<Cart, "id" | "quantity">) => item.id === +product_id,
          );
          if (exists) setIsItemInCart(true);
          return;
        }

        const result = await itemExistsInCartAction(
          product_id,
          user_id.toString(),
        );
        if (!result) return;
        setIsItemInCart(result);
      } catch (err) {
        console.log(err);
      }
    };
    checkExistsInCart(product_id, user_id);
  }, [product_id, user_id]);

  return (
    <>
      {isItemInCart ? (
        <button className="w-[47%] h-14 rounded-lg bg-surface-primary border border-black/15 font-semibold flex justify-between items-center px-4 text-brand-discount cursor-default">
          <span
            onClick={deleteProductFromCart}
            className="text-2xl cursor-pointer p-1"
          >
            {quantity <= 1 ? <Icons.Trash /> : <Icons.Minus />}
          </span>
          <span className="text-lg cursor-pointer">{quantity}</span>
          <span className="text-2xl cursor-pointer p-1">
            <Icons.Plus />
          </span>
        </button>
      ) : (
        <button
          onClick={
            user_id ? handleDatabaseAddToCart : handleLocalstorageAddToCart
          }
          className="w-[47%] h-14 rounded-lg bg-brand-secondary cursor-pointer text-white font-semibold text-sm"
        >
          افزودن به سبد خرید
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
