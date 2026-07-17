import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

const UserNavItem = ({
  icon,
  text,
  href,
}: {
  icon: IconType;
  text: string;
  href: string;
  logout?: boolean;
}) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className="flex justify-end items-center gap-5 text-[0.9rem] py-4 border-b border-black/5"
    >
      {text}
      <Icon className="text-2xl" />
    </Link>
  );
};

export default UserNavItem;
