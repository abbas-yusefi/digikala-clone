import { getFilteredProducts } from "@/lib/queries";
import React, { Suspense } from "react";

import DisplayProducts from "@/components/search/display-products";
import NavButtons from "./nav-buttons";
import LoadingDots from "@/components/ui/loading-dots";
import { Params } from "@/lib/types/params";

const AwaitedDisplayProducts = async ({
  params,
  category,
}: {
  params: Params;
  category: string;
}) => {
  const limit = 8;

  const products = await getFilteredProducts(params.limitedParams, limit);
  const productsLength = await getFilteredProducts(params.params);

  return (
    <>
      <DisplayProducts
        productsLength={productsLength.length}
        products={products}
        category={category}
      />
      <NavButtons products={products} />
    </>
  );
};

const SearchResultPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const param = await searchParams;
  const query = param.q || "";
  const category = param.category || "";
  const brand = param.brand || "";
  const discount = param.discount !== undefined || "";
  const cursor = param.cursor || "";
  const dir = param.dir || "";

  const params = {
    params: {
      q: query,
      category: category,
      brand: brand,
      discount: discount,
      cursor: "",
      dir: "",
    },
    limitedParams: {
      q: query,
      category: category,
      brand: brand,
      discount: discount,
      cursor,
      dir,
    },
  };
  return (
    <>
      <main className="min-[425px]:px-7">
        <Suspense fallback={<LoadingDots className="min-h-screen w-full" />}>
          <AwaitedDisplayProducts category={category} params={params} />
        </Suspense>
      </main>
    </>
  );
};

export default SearchResultPage;
