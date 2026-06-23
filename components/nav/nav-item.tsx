"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type FooterSectionProps = {
  children: React.ReactNode;
  href: string;
  iconOutline: React.ReactNode;
  iconSolid?: React.ReactNode;
};

const NavItem = ({
  children,
  href,
  iconOutline,
  iconSolid,
}: FooterSectionProps) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`flex flex-col w-20 justify-center outline-none items-center  ${path === href ? "text-black" : "text-text-secondary"} text-xs gap-1 relative`}
    >
      {path === href ? iconSolid : iconOutline}
      {children}
    </Link>
  );
};

export default NavItem;
