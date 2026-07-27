"use client";

import { addToCartAction } from "@/lib/actions/cart";
import { Cart } from "@/lib/types/product";
import { useSession } from "next-auth/react";

const AddToCartButton = ({ product_id }: Pick<Cart, "product_id">) => {
  const { data: session } = useSession();
  const user_id = session?.user.id;

  const handleDatabaseAddToCart = async () => {
    try {
      if (!user_id) return;
      await addToCartAction(product_id, user_id, "1");
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
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([{ id: product_id, quantity: 1 }]),
        );
      }
    };
    itemExistsInCart();
  };
  return (
    <button
      onClick={user_id ? handleDatabaseAddToCart : handleLocalstorageAddToCart}
      className="w-[47%] py-4 rounded-lg bg-brand-secondary cursor-pointer text-white font-semibold text-sm"
    >
      افزودن به سبد خرید
    </button>
  );
};

export default AddToCartButton;
