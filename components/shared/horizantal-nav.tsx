"use client";

import React from "react";

const HorizantalNav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} my-2 flex flex-row-reverse overflow-x-auto whitespace-nowrap scroll hide-scrollbar cursor-grab`}
    >
      {children}
    </div>
  );
};

export default HorizantalNav;
