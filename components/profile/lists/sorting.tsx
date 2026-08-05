"use client";

import { Icons } from "@/lib/icons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Sorting = ({
  setOrder,
  order,
}: {
  setOrder: Dispatch<
    SetStateAction<"recent" | "oldest" | "highest price" | "lowest price">
  >;
  order: "recent" | "oldest" | "highest price" | "lowest price";
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
      <div className="w-full flex items-center justify-end px-10 mb-5 py-4 border-b border-black/20">
        <button
          onClick={() => setIsOpen(true)}
          className="text-xl flex items-center gap-2 cursor-pointer"
        >
          <span className="-mt-1 text-sm font-semibold">{sortingOrder}</span>
          <Icons.Sort />
        </button>
      </div>
      <div
        className={`${isOpen ? "" : "hidden"} fixed top-0 right-0 bottom-0 left-0 bg-black/20 z-50`}
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
    </>
  );
};

export default Sorting;
