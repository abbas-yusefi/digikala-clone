"use client";

import { addToCartAction, itemExistsInCartAction } from "@/lib/actions/cart";
import { Icons } from "@/lib/icons";
import { Cart } from "@/lib/types/product";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ChangeQuantityButton from "./change-quantity-button";

const AddToCartButton = ({
  product_id,
  variant,
}: {
  product_id: Cart["product_id"];
  variant?: "lists";
}) => {
  const { data: session } = useSession();
  const user_id = session?.user.id;
  const [isItemInCart, setIsItemInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

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

  if (variant === "lists")
    return (
      <>
        {isItemInCart ? (
          <ChangeQuantityButton
            product_id={product_id}
            quantity={quantity}
            setIsItemInCart={setIsItemInCart}
            user_id={user_id}
            setQuantity={setQuantity}
            variant="lists"
          />
        ) : (
          <button className="flex flex-3 justify-center items-center py-2 bg-surface-primary rounded-xl border border-brand-discount text-sm max-[375px]:text-xs gap-2 cursor-pointer text-brand-discount">
            اضافه به سبد
            <Icons.CartOutline className="text-2xl max-[375px]:text-xl" />
          </button>
        )}
      </>
    );

  return (
    <>
      {isItemInCart ? (
        <ChangeQuantityButton
          product_id={product_id}
          quantity={quantity}
          setIsItemInCart={setIsItemInCart}
          user_id={user_id}
          setQuantity={setQuantity}
        />
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
