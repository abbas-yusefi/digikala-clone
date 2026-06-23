"use server";

import { getProductById } from "../querys";

const getProductByIdAction = async (id: number) => {
  try {
    if (typeof id === "undefined" || id == null) {
      throw new Error("there was no id provided");
      return null;
    }
    const result = await getProductById(id);
    return result[0];
  } catch (err) {
    console.log("there was an error: ", err);
  }
};

export { getProductByIdAction };
