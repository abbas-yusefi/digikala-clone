import React, { useEffect, useState } from "react";
import ProductBrands from "./product-brands";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import { filterBrandAction } from "@/lib/actions/filter-brand-action";

type Brands = {
  brand_brand_id: number;
  brand_name: string;
  product_count: number;
  slug: string;
};

const DisplayCategoryProducts = ({
  categorySelected,
}: {
  categorySelected: string;
}) => {
  const [brands, setBrands] = useState<[] | Brands[]>([]);

  const typeOfProduct =
    categorySelected === "mobile"
      ? "موبایل"
      : categorySelected === "laptop"
        ? "لپ تاپ"
        : categorySelected === "headphones"
          ? "هدفون"
          : categorySelected === "smartwatch"
            ? "ساعت"
            : categorySelected === "tablet"
              ? "تبلت"
              : "";

  useEffect(() => {
    const getFilteredBrands = async () => {
      try {
        const result = await filterBrandAction(1);
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
