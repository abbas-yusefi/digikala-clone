import { Icons } from "@/lib/icons";
import Link from "next/link";
import React from "react";
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
      <Icons.Left className="text-lg max-xs:text-sm" />
      <div className="flex items-center gap-4 font-semibold">
        {children}{" "}
        <Icon className="text-2xl max-xs:text-xl text-text-secondary" />
      </div>
    </Link>
  );
};

export default SectionsRow;
