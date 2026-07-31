"use client";

import {
  addToCartAction,
  decrementProductQuantityAction,
  deleteProductFromCartAction,
  incrementProductQuantityAction,
  itemExistsInCartAction,
  itemQuantityAction,
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

  const addToCart = async () => {
    // Guest (localStorage)
    if (!user_id) {
      try {
        const data = localStorage.getItem("cart");
        const parsedData: Array<{ id: number; quantity: number }> = data
          ? JSON.parse(data)
          : [];

        const exists = parsedData.some(
          (item) => Number(item.id) === Number(product_id),
        );

        if (exists) return; // already in cart – do nothing (or increment if you prefer)

        const updatedCart = [
          ...parsedData,
          { id: Number(product_id), quantity: 1 },
        ];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setIsItemInCart(true);
        setQuantity(1);
      } catch (err) {
        console.error(err);
        setIsItemInCart(false);
      }
      return;
    }

    // Authenticated (server action)
    try {
      const result = await addToCartAction(product_id, user_id, "1");
      if (result.success) {
        setIsItemInCart(true);
        setQuantity(1);
      }
    } catch (err) {
      console.error(err);
      setIsItemInCart(false);
    }
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
  }, [product_id, user_id]);

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

  return (
    <>
      {isItemInCart ? (
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
      ) : (
        <button
          onClick={addToCart}
          className="w-[47%] h-14 rounded-lg bg-brand-secondary cursor-pointer text-white font-semibold text-sm"
        >
          افزودن به سبد خرید
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
