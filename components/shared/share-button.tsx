"use client";

import { Icons } from "@/lib/icons";

const ShareButton = () => {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(window.location.href)}
      className="cursor-pointer"
    >
      <Icons.Share />
    </button>
  );
};

export default ShareButton;
