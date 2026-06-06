"use client";

import React, { useEffect, useState } from "react";

const CartItemsLength = ({
  children,
  isLoggedIn,
}: {
  children: React.ReactNode;
  isLoggedIn: boolean;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const data = isMounted ? localStorage.getItem("cart") : null;
  const parsedData = data ? JSON.parse(data) : null;
  const localStorageItemsLength = parsedData ? parsedData.length : 0;

  useEffect(() => {
    const something = () => {
      setIsMounted(true);
    };
    something();
  }, []);
  return (
    <span className="absolute top-0 right-5 w-4 h-4 bg-brand-secondary rounded-sm flex items-center justify-center text-white text-xs z-20 outline-2">
      {isLoggedIn ? children : localStorageItemsLength}
    </span>
  );
};

export default CartItemsLength;
