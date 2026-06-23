"use client";

import { forwardRef } from "react";
import { FaAngleLeft } from "react-icons/fa6";

type ScrollLeftButtonProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
};

const ScrollLeftButton = forwardRef<HTMLButtonElement, ScrollLeftButtonProps>(
  ({ scrollContainerRef, className }, ref) => {
    const scrollLeft = () => {
      scrollContainerRef.current?.scrollBy({
        left: -280,
        behavior: "smooth",
      });
    };

    return (
      <button
        ref={ref}
        onClick={scrollLeft}
        className={`bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-gray-50 active:scale-95 transition-all flex-shrink-0 absolute  z-50 focus:outline-none
         left ${className || "left-7 lg:left-28"}`}
        aria-label="Scroll"
      >
        <FaAngleLeft className="scale-75 text-black" />
      </button>
    );
  },
);

ScrollLeftButton.displayName = "ScrollLeftButton";

export default ScrollLeftButton;
