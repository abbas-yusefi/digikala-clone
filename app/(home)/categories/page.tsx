"use client";

import React, { Suspense, useState } from "react";
import { CiMobile2, CiLaptop, CiHeadphones } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";
import { FaTabletAlt } from "react-icons/fa";
import CategoryCard from "@/components/categories/category-card";
import DisplayCategoryProducts from "@/components/categories/display-category-products";
import { useScreenWidth } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import PulsingDotLoader from "@/components/ui/pulsing-dot-loader";
import { CategorySlugs } from "@/lib/types/product";
import Support from "@/components/home/support";

const CategoryPage = () => {
  const [categorySelected, setCategorySelected] =
    useState<CategorySlugs>("mobile");
  const screenWidth = useScreenWidth();
  const router = useRouter();
  if (screenWidth && screenWidth > 1024) router.replace("/");
  return (
    <>
      <div className="mb-5"></div>
      <main className="flex justify-between bg-surface-primary relative">
        <Support />
        <Suspense fallback={<PulsingDotLoader className="w-full h-60" />}>
          <DisplayCategoryProducts categorySelected={categorySelected} />
        </Suspense>

        <div className="text-xs h-screen bg-[#e9e8e9] ">
          <CategoryCard
            categorySelected={categorySelected}
            icon={CiMobile2}
            setCategorySelected={setCategorySelected}
            categoryName={"موبایل"}
            stateCategoryName={"mobile"}
          />
          <CategoryCard
            categorySelected={categorySelected}
            icon={CiLaptop}
            setCategorySelected={setCategorySelected}
            categoryName={"لپ تاپ"}
            stateCategoryName={"laptop"}
          />
          <CategoryCard
            categorySelected={categorySelected}
            icon={CiHeadphones}
            setCategorySelected={setCategorySelected}
            categoryName={"هدفون"}
            stateCategoryName={"headphones"}
          />
          <CategoryCard
            categorySelected={categorySelected}
            icon={IoWatchOutline}
            setCategorySelected={setCategorySelected}
            categoryName={"ساعت"}
            stateCategoryName={"smartwatch"}
          />
          <CategoryCard
            categorySelected={categorySelected}
            icon={FaTabletAlt}
            setCategorySelected={setCategorySelected}
            categoryName={"تبلت"}
            stateCategoryName={"tablet"}
          />
        </div>
      </main>
    </>
  );
};

export default CategoryPage;
