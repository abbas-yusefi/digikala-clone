"use client";

import { forwardRef } from "react";
import { FaAngleRight } from "react-icons/fa6";

type ScrollLeftButtonProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
};

const ScrollRightButton = forwardRef<HTMLButtonElement, ScrollLeftButtonProps>(
  ({ scrollContainerRef, className }, ref) => {
    const scrollRight = () => {
      scrollContainerRef.current?.scrollBy({
        left: 280,
        behavior: "smooth",
      });
    };

    return (
      <button
        ref={ref}
        onClick={scrollRight}
        className={`bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-gray-50 active:scale-95 transition-all flex-shrink-0 absolute text-black z-50 focus:outline-none ${className || "right-7 lg:right-28"}`}
        aria-label="Scroll right"
      >
        <FaAngleRight className="text-sm" />
      </button>
    );
  },
);

ScrollRightButton.displayName = "ScrollRightButton";

export default ScrollRightButton;
