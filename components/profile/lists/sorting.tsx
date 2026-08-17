"use client";

import { Icons } from "@/lib/icons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Sorting = ({
  setOrder,
  order,
  productsLength,
}: {
  setOrder: Dispatch<
    SetStateAction<"recent" | "oldest" | "highest price" | "lowest price">
  >;
  order: "recent" | "oldest" | "highest price" | "lowest price";
  productsLength: number | undefined;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const disableScrolling = () => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };
    disableScrolling();
  }, [isOpen]);

  const sortingOrder =
    order === "highest price"
      ? "گران ترین"
      : order === "lowest price"
        ? "ارزان ترین"
        : order === "oldest"
          ? "قدیمی ترین"
          : "جدید ترین";

  return (
    <>
      {/* Mobile version */}
      <div className="w-full flex items-center justify-end px-10 mb-5 py-4 border-b border-black/20 lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-xl flex items-center gap-2 cursor-pointer"
        >
          <span className="-mt-1 text-sm font-semibold">{sortingOrder}</span>
          <Icons.Sort />
        </button>
      </div>
      <div
        className={`${isOpen ? "" : "hidden"} fixed top-0 right-0 bottom-0 left-0 bg-black/20 z-50 lg:hidden`}
      >
        <div className="fixed bottom-0 right-0 left-0 bg-surface-primary h-60 flex flex-col px-4 py-6">
          <button
            className="flex justify-end items-center gap-4 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg font-semibold -mt-1">
              مرتب سازی بر اساس
            </span>
            <Icons.XMark className="text-2xl" />
          </button>
          <div className="font-semibold text-sm">
            <button
              onClick={() => {
                setOrder("recent");
                setIsOpen(false);
              }}
              className="w-full cursor-pointer mt-4 py-1 flex justify-between items-center px-8"
            >
              <Icons.Check
                className={`text-xl ${order !== "recent" ? "opacity-0" : ""}`}
              />
              جدیدترین
            </button>
            <button
              onClick={() => {
                setOrder("oldest");
                setIsOpen(false);
              }}
              className="w-full cursor-pointer mt-4 py-1 flex justify-between items-center px-8"
            >
              <Icons.Check
                className={`text-xl ${order !== "oldest" ? "opacity-0" : ""}`}
              />
              قدیمی ترین
            </button>
            <button
              onClick={() => {
                setOrder("highest price");
                setIsOpen(false);
              }}
              className="w-full cursor-pointer mt-4 py-1 flex justify-between items-center px-8"
            >
              <Icons.Check
                className={`text-xl ${order !== "highest price" ? "opacity-0" : ""}`}
              />
              گران ترین
            </button>
            <button
              onClick={() => {
                setOrder("lowest price");
                setIsOpen(false);
              }}
              className="w-full cursor-pointer mt-4 py-1 flex justify-between items-center px-8"
            >
              <Icons.Check
                className={`text-xl ${order !== "lowest price" ? "opacity-0" : ""}`}
              />
              ارزان ترین
            </button>
          </div>
        </div>
      </div>

      {/* Desktop version */}
      <div className="max-lg:hidden w-full h-12 flex justify-between items-center px-4 border-t border-black/10">
        <div className="text-xs" dir="rtl">
          {productsLength} کالا
        </div>
        <div className="flex items-center" dir="rtl">
          <Icons.Sort />
          <div className="text-xs font-semibold gap-4 flex">
            مرتب سازی:
            <button
              className={`${order === "recent" ? "text-brand-discount" : ""} cursor-pointer`}
              onClick={() => setOrder("recent")}
            >
              جدیدترین
            </button>
            <button
              className={`${order === "oldest" ? "text-brand-discount" : ""} cursor-pointer`}
              onClick={() => setOrder("oldest")}
            >
              قدیمی ترین
            </button>
            <button
              className={`${order === "highest price" ? "text-brand-discount" : ""} cursor-pointer`}
              onClick={() => setOrder("highest price")}
            >
              گران ترین
            </button>
            <button
              className={`${order === "lowest price" ? "text-brand-discount" : ""} cursor-pointer`}
              onClick={() => setOrder("lowest price")}
            >
              ارزان ترین
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorting;
