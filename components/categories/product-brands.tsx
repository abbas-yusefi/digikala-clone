import { useRouter } from "next/navigation";
import React from "react";

const ProductBrands = ({
  children,
  categorySelected,
  brand,
}: {
  children: React.ReactNode;
  categorySelected: string;
  brand: string;
}) => {
  const router = useRouter();
  return (
    <button
      className="w-full text-sm items-center flex justify-end  px-5 py-5 border-b border-black/10 cursor-pointer"
      onClick={() =>
        router.push(`search/?category=${categorySelected}&brand=${brand}`)
      }
    >
      {children}
    </button>
  );
};

export default ProductBrands;
