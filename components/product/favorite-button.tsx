"use client";

import {
  addFavoriteAction,
  deleteFavoriteAction,
  getFavoriteActoin,
} from "@/lib/actions/product";
import { Icons } from "@/lib/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FavoriteButton = ({ product_id }: { product_id: string | number }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const user_id = session?.user.id;

  const addToFavorites = async () => {
    if (!user_id && product_id) {
      router.push("/signin");
    }
    if (!user_id || !product_id) return;
    try {
      const result = await addFavoriteAction(user_id, product_id);
      if (result && result.success) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFavorite = async () => {
    if (!user_id || !product_id) return;

    try {
      const result = await deleteFavoriteAction(user_id, product_id);
      if (result?.success) {
        setIsFavorite(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        if (!product_id || !user_id) return;
        const result = await getFavoriteActoin(user_id!, product_id);
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
  }, [user_id, product_id]);

  return (
    <button
      onClick={isFavorite ? deleteFavorite : addToFavorites}
      className="cursor-pointer"
    >
      <Icons.Heart
        className={`${isFavorite ? "fill-brand-discount stroke-brand-discount text-brand-discount" : ""}`}
      />
    </button>
  );
};

export default FavoriteButton;
