"use server";

import {
  addFavorite,
  deleteFavorite,
  getAllFavorites,
  getFavorite,
  getProduct,
} from "../queries";
import {
  ActionResponse,
  Product,
  ProductCard,
  WithImage,
} from "../types/product";

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

const addFavoriteAction = async (
  user_id: string | number,
  product_id: string | number,
): Promise<ActionResponse> => {
  if (!user_id || !product_id) return;
  try {
    const result = await addFavorite(user_id, product_id);
    return result;
  } catch (err) {
    console.log(err);
  }
};
const getFavoriteActoin = async (
  user_id: string | number,
  product_id: string | number,
): Promise<boolean | undefined> => {
  if (!user_id || !product_id) {
    console.log("user id or product id is not provided");
    return false;
  }
  try {
    const result = await getFavorite(user_id, product_id);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const deleteFavoriteAction = async (
  user_id: string | number,
  product_id: string | number,
): Promise<ActionResponse> => {
  if (!user_id || !product_id) return;
  try {
    const result = await deleteFavorite(user_id, product_id);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const getAllFavoriteProductsAction = async (
  user_id: string | undefined,
  order_by: "lowest price" | "highest price" | "recent" | "oldest",
): Promise<WithImage<Product>[] | undefined> => {
  if (!user_id || !order_by) return;
  try {
    const result = await getAllFavorites(user_id, order_by);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export {
  getProductAction,
  addFavoriteAction,
  getFavoriteActoin,
  deleteFavoriteAction,
  getAllFavoriteProductsAction,
};
