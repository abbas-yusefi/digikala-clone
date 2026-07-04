import React, { useEffect, useState } from "react";
import ProductBrands from "./product-brands";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import { filterBrandAction } from "@/lib/actions/filter-brand-action";
import PulsingDotLoader from "../ui/pulsing-dot-loader";
import { notFound } from "next/navigation";
import { CategorySlugs, FilteredBrands } from "@/lib/types/product";

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
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full text-sm items-center flex justify-end px-5 py-5 text-text-link cursor-pointer">
        <Link href={`search?category=${categorySelected}`}>
          <h2 className="flex items-center">
            <FaAngleLeft className="mr-5" /> همه محصولات {typeOfProduct}
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
