import { Icons } from "@/lib/icons";
import React from "react";

const Support = () => {
  return (
    <span className="fixed bottom-17 left-5 bg-surface-primary rounded-full p-3 cursor-pointer bg-linear-to-br from-indigo-500 via-purple-500 to-blue-500 z-50">
      <Icons.Support className="text-2xl" color="white" />
    </span>
  );
};

export default Support;
