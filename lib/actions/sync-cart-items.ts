"use server";

import { addProductToCart } from "@/lib/queries";

export async function SyncCartItemsAction(
  userId: string,
  cartItems: Array<{ id: string; quantity: string }> | null,
) {
  if (!cartItems || cartItems.length === 0) return { ok: true };

  try {
    await Promise.all(
      cartItems.map(async (item) => {
        try {
          await addProductToCart(item.id, userId, item.quantity);
        } catch (err) {
          console.log("Sync cart failed! ", err);
        }
      }),
    );
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
}
