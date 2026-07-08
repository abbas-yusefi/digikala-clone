"use client";

import PulsingDotLoader from "@/components/ui/pulsing-dot-loader";
import { getCartProductsAction } from "@/lib/actions/get-cart-products";
import { getProductAction } from "@/lib/actions/product";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import EmptyCart from "@/components/checkout/empty-cart";
import ProductCard from "@/components/search/product-card";
import { ProductCard as ProductCardType, WithImage } from "@/lib/types/product";

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
        <PulsingDotLoader />
      </div>
    );
  } else if (
    products &&
    typeof products !== "undefined" &&
    typeof products !== null
  ) {
    return (
      <div className="min-[425px]:grid min-[425px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1440px]:grid-cols-4">
        {products.map((product) => (
          <ProductCard data={product} key={product.product_id} />
        ))}
      </div>
    );
  } else {
    return <EmptyCart />;
  }
};

export default CheckoutPage;
