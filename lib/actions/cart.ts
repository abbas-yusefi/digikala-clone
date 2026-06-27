"use server";

import { addProductToCart, deleteProductFromCart } from "@/lib/querys";
import { revalidatePath } from "next/cache";

async function deleteProductFromCartAction(cartId: number) {
  try {
    await deleteProductFromCart(cartId);
    revalidatePath("/checkout");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to delete item" };
  }
}

const addToCartAction = async (
  productId: string | number,
  userId: string | number,
  quantity: string | number,
): Promise<void> => {
  try {
    const result = await addProductToCart(productId, userId, quantity);
    console.log(result);
    revalidatePath("/checkout");
  } catch (err) {
    console.log(err);
  }
};

export { deleteProductFromCartAction, addToCartAction };
