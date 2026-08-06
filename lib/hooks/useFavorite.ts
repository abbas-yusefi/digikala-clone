"use client";

import { useRouter } from "next/navigation";
import { addFavoriteAction, deleteFavoriteAction } from "../actions/product";
import { Dispatch, SetStateAction } from "react";

export const useFavorite = () => {
  const router = useRouter();

  const addToFavorites = async (
    user_id: string | undefined,
    product_id: string | number,
    setIsFavorite?: Dispatch<SetStateAction<boolean>>,
  ) => {
    if (!user_id && product_id) {
      router.push("/signin");
    }
    if (!user_id || !product_id) return;
    try {
      const result = await addFavoriteAction(user_id, product_id);
      if (result && result.success && setIsFavorite) {
        setIsFavorite(true);
      } else if (setIsFavorite) {
        setIsFavorite(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFavorite = async (
    user_id: string | undefined,
    product_id: string | number,
    setIsFavorite?: Dispatch<SetStateAction<boolean>>,
  ) => {
    if (!user_id || !product_id) return;

    try {
      const result = await deleteFavoriteAction(user_id, product_id);
      if (result?.success && setIsFavorite) {
        setIsFavorite(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { addToFavorites, deleteFavorite };
};
