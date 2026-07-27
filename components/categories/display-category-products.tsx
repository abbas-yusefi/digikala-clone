import React, { useEffect, useState } from "react";
import ProductBrands from "./product-brands";
import Link from "next/link";
import { filterBrandAction } from "@/lib/actions/filter-brand-action";
import LoadingDots from "../ui/loading-dots";
import { notFound } from "next/navigation";
import { CategorySlugs, FilteredBrands } from "@/lib/types/product";
import { Icons } from "@/lib/icons";

const DisplayCategoryProducts = ({
  categorySelected,
}: {
  categorySelected: CategorySlugs;
}) => {
  const [brands, setBrands] = useState<undefined | FilteredBrands[]>([]);

  const categoryMap = {
    mobile: { id: 1, label: "موبایل" },
    laptop: { id: 2, label: "لپ تاپ" },
    headphones: { id: 3, label: "هدفون" },
    smartwatch: { id: 4, label: "ساعت" },
    tablet: { id: 5, label: "تبلت" },
  } as const;

  const { id: categoryId, label: typeOfProduct } =
    categoryMap[categorySelected] || {};

  useEffect(() => {
    const getFilteredBrands = async () => {
      try {
        const result = await filterBrandAction(categoryId);
        setBrands(result);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    getFilteredBrands();
  }, [categoryId]);

  if (!categoryId) return notFound();

  if (!brands) return <LoadingDots className="w-full h-200" />;

  return (
    <div className="flex flex-col w-full">
      <div className="w-full text-sm items-center flex justify-end px-5 py-5 text-text-link cursor-pointer">
        <Link href={`search?category=${categorySelected}`}>
          <h2 className="flex items-center">
            <Icons.Left className="mr-5 text-xl" /> همه محصولات {typeOfProduct}
          </h2>
        </Link>
      </div>
      {brands &&
        brands.map((brand) => (
          <ProductBrands
            key={brand.brand_brand_id}
            categorySelected={categorySelected}
            brand={brand.slug}
          >
            {typeOfProduct} های {brand.brand_name}
          </ProductBrands>
        ))}
    </div>
  );
};

export default DisplayCategoryProducts;
