"use client";

import React from "react";

const LoadingDots = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} flex justify-center items-center gap-1 bg-surface-secondary`}
    >
      {[0, 0.2, 0.4].map((delay) => (
        <div
          key={delay}
          className="bg-gray-500 rounded-full p-1 animate-pulse"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;
