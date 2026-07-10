import React from "react";
import { BiSupport } from "react-icons/bi";

const Support = () => {
  return (
    <span className="fixed bottom-17 left-5 bg-surface-primary rounded-full p-3 cursor-pointer bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500">
      <BiSupport className="text-2xl" color="white" />
    </span>
  );
};

export default Support;
