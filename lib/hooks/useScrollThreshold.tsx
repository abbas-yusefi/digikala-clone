"use client";

import { useState, useEffect } from "react";

type useScrollThreshold = {
  disableThreshold: number;
  enableThreshold: number;
};

const useScrollThreshold = ({
  disableThreshold,
  enableThreshold,
}: useScrollThreshold) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled((prev) => {
            // Only toggle at clear thresholds
            if (prev && scrollY < disableThreshold) return false; // turn off below 350
            if (!prev && scrollY > enableThreshold) return true; // turn on above 450
            return prev; // in between, don't change
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [disableThreshold, enableThreshold]);
  if (!disableThreshold || !enableThreshold)
    console.error("enable and disable threshold was not provided");
  return scrolled;
};

export default useScrollThreshold;
