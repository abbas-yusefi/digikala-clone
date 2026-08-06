"use client";

import { getFavoriteActoin } from "@/lib/actions/product";
import { useFavorite } from "@/lib/hooks/useFavorite";
import { Icons } from "@/lib/icons";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const FavoriteButton = ({ product_id }: { product_id: string | number }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { data: session } = useSession();
  const user_id = session?.user.id;

  const { addToFavorites, deleteFavorite } = useFavorite();

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
      onClick={() =>
        isFavorite
          ? deleteFavorite(user_id, product_id, setIsFavorite)
          : addToFavorites(user_id, product_id, setIsFavorite)
      }
      className="cursor-pointer"
    >
      <Icons.Heart
        className={`${isFavorite ? "fill-brand-discount stroke-brand-discount text-brand-discount" : ""}`}
      />
    </button>
  );
};

export default FavoriteButton;
