"use client";

import React, { useEffect, useState } from "react";

const PulsingDotLoader = ({ className }: { className?: string }) => {
  const [firstAnimate, setFirstAnimate] = useState(false);
  const [secondAnimate, setSecondAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstAnimate(true);
    }, 200);
    setTimeout(() => {
      setSecondAnimate(true);
    }, 400);
  }, []);

  return (
    <div
      className={`${className} flex justify-center items-center bg-(--color-surface-secondary)`}
    >
      <div className="bg-gray-500 rounded-full p-1 animate-pulse"></div>
      <div
        className={`bg-gray-500 rounded-full p-1 ${firstAnimate ? "animate-pulse" : ""} mx-1`}
      ></div>
      <div
        className={`bg-gray-500 rounded-full p-1 ${secondAnimate ? "animate-pulse" : ""}`}
      ></div>
    </div>
  );
};

export default PulsingDotLoader;
