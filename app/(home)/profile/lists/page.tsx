"use client";

import Sorting from "@/components/profile/lists/sorting";
import ProductCard from "@/components/search/product-card";
import { getAllFavoriteProductsAction } from "@/lib/actions/product";
import { Icons } from "@/lib/icons";
import { Product, WithImage } from "@/lib/types/product";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ListsPage = () => {
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
          <span className="-mt-1">لیست ها</span>
          <Icons.RightArrow className="text-2xl" />
        </button>
      </header>
      <div>
        <Sorting setOrder={setOrder} order={order} />
        <div className="min-[425px]:grid min-[425px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1440px]:grid-cols-4">
          {products?.map((product) => (
            <ProductCard data={product} key={product.product_id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListsPage;
