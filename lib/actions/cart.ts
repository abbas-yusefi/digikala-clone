"use server";

import { addProductToCart, deleteProductFromCart } from "@/lib/querys";
import { revalidatePath } from "next/cache";

async function deleteCartItem(cartId: number) {
  try {
    await deleteProductFromCart(cartId);
    revalidatePath("/checkout");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to delete item" };
  }
}

const addToCart = async (productId, userId, quantity) => {
  try {
    const result = await addProductToCart(productId, userId, quantity);
    console.log(result);
    revalidatePath("/checkout");
  } catch (err) {
    console.log(err);
  }
};

export { deleteCartItem, addToCart };
