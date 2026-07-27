"use server";

import { addProductToCart, deleteProductFromCart } from "@/lib/queries";
import { revalidatePath } from "next/cache";
import { getAllCartProducts } from "../queries";
import { auth } from "@/auth";

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

const getCartProductsAction = async () => {
  try {
    const session = await auth();
    const email = session?.user?.email;
    const products = email ? await getAllCartProducts(email) : undefined;
    return products;
  } catch (err) {
    console.log(err);
  }
};

async function SyncCartItemsAction(
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

export {
  deleteProductFromCartAction,
  addToCartAction,
  getCartProductsAction,
  SyncCartItemsAction,
};
