import Link from "next/link";
import React from "react";

const HeaderNavItems = ({ children, icon }) => {
  return (
    <Link
      href={"/profile"}
      className=" flex justify-between items-center border-b border-black/10 pb-5"
    >
      <FaAngleLeft className="scale-90" />
      {children}
    </Link>
  );
};

export default HeaderNavItems;
