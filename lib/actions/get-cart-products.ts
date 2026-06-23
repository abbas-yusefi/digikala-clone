"use server";

import { auth } from "@/auth";
import { getAllCartProducts } from "../querys";

export const getCartProductsAction = async () => {
  try {
    const session = await auth();
    const email = session?.user?.email;
    const products = email ? await getAllCartProducts(email) : undefined;
    return products;
  } catch (err) {
    console.log(err);
  }
};
