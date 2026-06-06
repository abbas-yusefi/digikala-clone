"use client";

import { getCartProducts } from "@/lib/actions/get-cart-products";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [products, setProducts] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const setLocalStorageProducts = () => {
      const data = localStorage.getItem("cart");
      setProducts(data ? JSON.parse(data) : null);
    };
    setLocalStorageProducts();
    const getDatabaseCartProducts = async () => {
      try {
        setIsLoading(true);
        const products = await getCartProducts();
        if (typeof products === "undefined") {
          return;
        } else {
          setProducts(products);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (session?.user?.email) {
      getDatabaseCartProducts();
    }
  }, [session?.user?.email]);

  return (
    <div>
      <h2>checkout</h2>
      {products &&
        products?.map((product) => (
          <div key={product.id}>
            product id: {product.id} - product quantity: {product.quantity}
          </div>
        ))}
    </div>
  );
};

export default CheckoutPage;
