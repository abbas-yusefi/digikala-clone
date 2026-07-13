"use client";

import { Icons } from "@/lib/icons";
import { forwardRef } from "react";

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
        className={`bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-gray-50 active:scale-95 transition-all shrink-0 absolute z-40 focus:outline-none
         left ${className || "left-7 lg:left-14"}`}
        aria-label="Scroll"
      >
        <Icons.Left className="text-lg lg:text-2xl text-black" />
      </button>
    );
  },
);

ScrollLeftButton.displayName = "ScrollLeftButton";

export default ScrollLeftButton;
