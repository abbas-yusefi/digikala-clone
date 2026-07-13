"use client";

import { Icons } from "@/lib/icons";
import { forwardRef } from "react";

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
        className={`bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-gray-50 active:scale-95 transition-all shrink-0 absolute text-black z-40 focus:outline-none ${className || "right-7 lg:right-14"}`}
        aria-label="Scroll right"
      >
        <Icons.Right className="text-lg lg:text-2xl text-black" />
      </button>
    );
  },
);

ScrollRightButton.displayName = "ScrollRightButton";

export default ScrollRightButton;
