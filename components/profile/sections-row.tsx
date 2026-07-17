import { Icons } from "@/lib/icons";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

type SectionsRowProps = {
  href: string;
  children: React.ReactNode;
  icon?: IconType;
  path?: string;
};

const SectionsRow = ({ href, children, icon, path }: SectionsRowProps) => {
  const Icon = icon ? icon : null;
  return (
    <Link
      href={href}
      className={`${path === href ? "lg:relative after:absolute after:w-[0.20rem] after:rounded-3xl after:h-10 after:bg-brand-secondary after:right-0" : ""} flex justify-between items-center border-b border-black/6 py-4 px-10 lg:px-5 hover:bg-surface-secondary `}
    >
      <Icons.Left className="text-lg max-xs:text-sm text-black/50 lg:opacity-0 pointer-events-none" />
      <div className="flex items-center gap-4 font-semibold">
        {children}
        {Icon && <Icon className="text-2xl max-xs:text-xl" />}
      </div>
    </Link>
  );
};

export default SectionsRow;
