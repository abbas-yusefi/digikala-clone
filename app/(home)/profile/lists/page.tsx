"use client";

import Sorting from "@/components/profile/lists/sorting";
import desktopProductCard from "@/components/search/product-card";
import ProductsLength from "@/components/search/products-length";
import ProductCard from "@/components/ui/product-card";
import { getAllFavoriteProductsAction } from "@/lib/actions/product";
import { useFavorite } from "@/lib/hooks/useFavorite";
import { Icons } from "@/lib/icons";
import { Product, WithImage } from "@/lib/types/product";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ListsPage = () => {
  const { deleteFavorite } = useFavorite();
  const { data: session } = useSession();
  const user_id = session?.user.id;
  const [products, setProducts] = useState<WithImage<Product>[] | undefined>(
    [],
  );
  const [order, setOrder] = useState<
    "lowest price" | "highest price" | "recent" | "oldest"
  >("recent");

  const router = useRouter();

  useEffect(() => {
    const getFavoriteProducts = async () => {
      try {
        const products = await getAllFavoriteProductsAction(user_id, order);
        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    };
    getFavoriteProducts();
  }, [user_id, order]);

  return (
    <>
      <header className="flex w-full justify-end items-center px-4 py-4">
        <button
          onClick={() => router.back()}
          className="flex items-center text-sm gap-2 font-semibold cursor-pointer"
        >
          <h1 className="-mt-1">لیست ها</h1>
          <Icons.RightArrow className="text-2xl" />
        </button>
      </header>
      <main className="mb-14">
        <Sorting setOrder={setOrder} order={order} />
        <ProductsLength productsLength={products?.length} />
        <div className="flex flex-col gap-5 justify-center lg:grid lg:grid-cols-2">
          {products?.map((product) => (
            <ProductCard
              variant="lists"
              data={product}
              key={product.product_id}
              onClick={() => deleteFavorite(user_id, product.product_id)}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default ListsPage;
