import React, { useEffect, useState } from "react";
import ProductBrands from "./product-brands";
import { FaAngleLeft } from "react-icons/fa";
import { GetBrandNamesAction } from "@/lib/actions/get-brand-names";
import Link from "next/link";

type Brands = {
  name: string;
  brand_id: string;
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
    const getBrands = async () => {
      try {
        const result = await GetBrandNamesAction();
        if (result?.error) {
          console.log(result?.error?.message);
        }

        if (result) setBrands(result);
      } catch (err) {
        console.log(err);
      }
    };
    getBrands();
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
            key={brand.brand_id}
            categorySelected={categorySelected}
            brand={brand.slug}
          >
            {typeOfProduct} های {brand.name}
          </ProductBrands>
        ))}
    </div>
  );
};

export default DisplayCategoryProducts;
