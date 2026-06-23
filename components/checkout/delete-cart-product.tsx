// app/(home)/checkout/delete-cart-product.tsx
"use client";

import { deleteCartItem } from "@/lib/actions/cart";
import React from "react";

const DeleteCartProduct = ({ id }) => {
  const deleteProduct = async () => {
    try {
      const result = await deleteCartItem(id);
      if (result.success) {
        // Optional: add some UI feedback
        console.log("Item deleted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <button onClick={deleteProduct}>delete</button>;
};

export default DeleteCartProduct;
