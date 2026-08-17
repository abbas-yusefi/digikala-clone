"use client";

import { addFavoriteAction, getFavoriteActoin } from "@/lib/actions/product";
import { useEffect, useState } from "react";

const BuyLater = ({
  user_id,
  product_id,
}: {
  user_id: string | undefined;
  product_id: string | number;
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addProductToFavorite = async () => {
    if (!user_id) return;
    try {
      const result = await addFavoriteAction(user_id, product_id);
      if (result?.success) {
        setIsFavorite(true);
      } else setIsFavorite(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const checkFavorite = async () => {
      if (!user_id) return;
      try {
        const result = await getFavoriteActoin(user_id, product_id);
        if (result) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkFavorite();
  }, [product_id, user_id]);

  return (
    <button
      onClick={() => addProductToFavorite()}
      className={`${!user_id || isFavorite ? "hidden" : ""} px-5 py-2 border rounded-lg border-black/20 font-normal cursor-pointer`}
    >
      <h2>بعدا میخرم</h2>
    </button>
  );
};

export default BuyLater;
