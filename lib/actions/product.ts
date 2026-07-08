"use server";

import { getProduct } from "../querys";
import { ProductCard, WithImage } from "../types/product";

const getProductAction = async (
  id: string,
): Promise<WithImage<ProductCard>> => {
  if (!id) {
    throw new Error("there was no id provided");
  }
  try {
    const result = await getProduct(id);
    return result[0];
  } catch (err) {
    console.log("there was an error: ", err);
    throw err;
  }
};

export { getProductAction };
