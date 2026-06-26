"use server";

import { getProduct } from "../querys";

const getProductAction = async (id: string) => {
  try {
    if (typeof id === "undefined" || id == null) {
      throw new Error("there was no id provided");
      return null;
    }
    const result = await getProduct(id);
    return result[0];
  } catch (err) {
    console.log("there was an error: ", err);
  }
};

export { getProductAction };
