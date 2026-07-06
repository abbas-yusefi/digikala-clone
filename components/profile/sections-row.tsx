import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

type SectionsRowProps = {
  href: string;
  children: string;
  icon: IconType;
};

const SectionsRow = ({ href, children, icon }: SectionsRowProps) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className="flex justify-between items-center border-b border-black/6 py-4"
    >
      <FaAngleLeft />
      <div className="flex items-center gap-4 text-sm font-semibold">
        {children} <Icon className="text-2xl text-text-secondary" />
      </div>
    </Link>
  );
};

export default SectionsRow;
