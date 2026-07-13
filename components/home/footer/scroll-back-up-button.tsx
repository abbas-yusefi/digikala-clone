"use clinet";

import { Icons } from "@/lib/icons";
import React from "react";

const ScrollBackUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        className="flex justify-center items-center mb-10 bg-surface-secondary px-2 w-fit mx-auto h-10 rounded-4xl cursor-pointer lg:hidden"
        onClick={scrollToTop}
      >
        <Icons.Up className="text-lg mr-1 mt-1" />
        رفتن به بالا
      </button>
      <button
        onClick={scrollToTop}
        className="flex justify-center items-center bg-surface-primary px-5 py-3 h-fit border border-black/25 text-black/40 rounded-md cursor-pointer max-lg:hidden"
      >
        <Icons.Up className="mr-1.5" />
        بازگشت به بالا
      </button>
    </>
  );
};

export default ScrollBackUpButton;
