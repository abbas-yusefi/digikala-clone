"use client";

import { Icons } from "@/lib/icons";
import { ProductCard, WithImage } from "@/lib/types/product";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const NavButtons = ({ products }: { products: WithImage<ProductCard>[] }) => {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get("page");

  const [page, setPage] = useState(1 || pageNumber);

  if (!products || products.length === 0) return null;

  const lastProductId = products[products.length - 1].product_id;
  const firstProductId = products[0].product_id;

  const createHref = (cursor: number, dir: string, page: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("cursor", cursor.toString());
    params.set("dir", dir);
    params.set("page", page);
    return `/search?${params.toString()}`;
  };

  const noPrevPage = firstProductId === 1;
  const noNextPage = products.length < 8;

  return (
    <div className="flex justify-between mb-32 lg:mb-16">
      {noPrevPage ? (
        <span className="flex items-center bg-gray-500 text-surface-primary text-sm font-semibold px-4 py-2 rounded-lg cursor-not-allowed">
          <Icons.Left />
          صفحه قبل
        </span>
      ) : (
        <Link
          onClick={() => setPage((prev) => (prev -= 1))}
          href={createHref(firstProductId, "prev", page.toString())}
          className="flex items-center bg-brand-discount text-surface-primary text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[#f02a4f]"
        >
          <Icons.Left />
          صفحه قبل
        </Link>
      )}

      <span className="px-3 py-1.5 bg-surface-secondary border-b">
        {page} : صفحه
      </span>

      {noNextPage ? (
        <span className="flex items-center bg-gray-500 text-surface-primary text-sm font-semibold px-4 py-2 rounded-lg cursor-not-allowed">
          صفحه بعد
          <Icons.Right />
        </span>
      ) : (
        <Link
          onClick={() => setPage((prev) => (prev += 1))}
          href={createHref(lastProductId, "next", page.toString())}
          className="flex items-center bg-brand-discount text-surface-primary text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[#f02a4f]"
        >
          صفحه بعد
          <Icons.Right />
        </Link>
      )}
    </div>
  );
};

export default NavButtons;
