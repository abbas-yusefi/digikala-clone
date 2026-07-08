"use clinet";

import React from "react";
import { FaChevronUp } from "react-icons/fa6";

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
        <FaChevronUp className="text-xs mr-1 mt-1" />
        رفتن به بالا
      </button>
      <button
        onClick={scrollToTop}
        className="flex justify-center items-center bg-surface-primary px-5 py-3 h-fit border border-black/25 text-black/40 rounded-md cursor-pointer max-lg:hidden"
      >
        <FaChevronUp className="mr-1.5" />
        بازگشت به بالا
      </button>
    </>
  );
};

export default ScrollBackUpButton;
