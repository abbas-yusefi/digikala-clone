"use server";

import {
  addProductToCart,
  deleteProductFromCart,
  itemExistsInCart,
  getAllCartProducts,
} from "@/lib/queries";
import { auth } from "@/auth";

async function deleteProductFromCartAction(
  product_id: string | number,
  user_Id: string | number,
) {
  try {
    const result = await deleteProductFromCart(product_id, user_Id);
    return result;
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to delete item" };
  }
}

const addToCartAction = async (
  productId: string | number,
  userId: string | number,
  quantity: string | number,
): Promise<{ success: boolean; rowCount: number | null }> => {
  try {
    const result = await addProductToCart(productId, userId, quantity);
    return result;
  } catch (err) {
    console.log(err);
    return { success: false, rowCount: null };
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

const itemExistsInCartAction = async (
  product_id: number | string,
  user_id: undefined | string,
): Promise<boolean | undefined> => {
  try {
    if (!user_id) return;
    const result = itemExistsInCart(product_id, user_id);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export {
  deleteProductFromCartAction,
  addToCartAction,
  getCartProductsAction,
  SyncCartItemsAction,
  itemExistsInCartAction,
};
