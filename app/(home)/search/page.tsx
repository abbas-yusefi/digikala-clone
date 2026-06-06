import { getProductsByTitle } from "@/lib/querys";
import React from "react";

const SearchResultPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const params = await searchParams;
  const query = params.q || "";

  const products = await getProductsByTitle(query);
  console.log(products);
  return (
    <div>
      <h2>something</h2>
    </div>
  );
};

export default SearchResultPage;
