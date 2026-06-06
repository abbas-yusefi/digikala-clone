"use server";

import { addProductToCart } from "@/lib/querys";

export async function syncCartToServer(
  userId: string,
  cartItems: Array<{ id: string; quantity: number }>,
) {
  if (cartItems && cartItems.length > 0) {
    await Promise.all(
      cartItems.map((item) => addProductToCart(item.id, userId, item.quantity)),
    );
  }
}
