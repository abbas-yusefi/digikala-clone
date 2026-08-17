"use client";

import LoadingDots from "@/components/ui/loading-dots";
import { getProductAction } from "@/lib/actions/product";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import EmptyCart from "@/components/checkout/empty-cart";
import { ProductCard as ProductCardType, WithImage } from "@/lib/types/product";
import { getCartProductsAction } from "@/lib/actions/cart";
import ProductCard from "@/components/ui/product-card";

type parsedData = { id: number; quantity: number };

const CheckoutPage = () => {
  const [products, setProducts] = useState<WithImage<ProductCardType>[]>();
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    const setLocalStorageProducts = async () => {
      try {
        const data = localStorage.getItem("cart");
        const parsedData: parsedData[] = data ? JSON.parse(data) : null;
        const products = await Promise.all(
          parsedData.map((item) => getProductAction(item.id.toString())),
        );
        setProducts(products);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    const getDatabaseCartProducts = async () => {
      try {
        const products = await getCartProductsAction();
        if (!products) {
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
    } else {
      setLocalStorageProducts();
    }
  }, [session?.user?.email]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <LoadingDots />
      </div>
    );
  } else if (
    products &&
    typeof products !== "undefined" &&
    typeof products !== null
  ) {
    return (
      <main className="flex flex-col w-full mb-14">
        {products.map((product) => (
          <ProductCard
            variant="checkout"
            data={product}
            key={product.product_id}
          />
        ))}
      </main>
    );
  } else {
    return <EmptyCart />;
  }
};

export default CheckoutPage;
