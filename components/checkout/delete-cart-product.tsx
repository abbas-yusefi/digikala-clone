"use client";

import { deleteProductFromCartAction } from "@/lib/actions/cart";
import React from "react";

const DeleteCartProduct = ({ id }: { id: number }) => {
  const deleteProduct = async () => {
    try {
      const result = await deleteProductFromCartAction(+id);
      if (result.success) {
        console.log("Item deleted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <button onClick={deleteProduct}>delete</button>;
};

export default DeleteCartProduct;
