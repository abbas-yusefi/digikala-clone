import { CategorySlugs } from "@/lib/types/product";
import React, { SetStateAction } from "react";
import { IconType } from "react-icons/lib";

type CategoryCardProps = {
  setCategorySelected: React.Dispatch<SetStateAction<CategorySlugs>>;
  categorySelected: string;
  stateCategoryName: CategorySlugs;
  icon: IconType;
  categoryName: string;
};

const CategoryCard = ({
  setCategorySelected,
  categorySelected,
  icon,
  stateCategoryName,
  categoryName,
}: CategoryCardProps) => {
  const Icon = icon;
  return (
    <div
      onClick={() => setCategorySelected(stateCategoryName)}
      className={`${categorySelected === stateCategoryName ? "text-brand-primary bg-surface-primary border-l-0" : "bg-surface-secondary"} flex justify-center items-center flex-col gap-2  border-b border-l py-3 px-6 border-black/10`}
    >
      <Icon className="scale-175" />
      <p>{categoryName}</p>
    </div>
  );
};

export default CategoryCard;
