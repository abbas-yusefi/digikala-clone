import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

const UserNavItem = ({
  icon,
  text,
  href,
  logout,
}: {
  icon: IconType;
  text: string;
  href: string;
  logout?: boolean;
}) => {
  const Icon = icon;
  if (logout)
    return (
      <div
        onClick={() => signOut()}
        aria-label="signout button"
        className="flex justify-end items-center gap-5 text-[0.9rem] py-4 border-b border-black/5"
      >
        {text}
        <Icon className="scale-150" />
      </div>
    );
  return (
    <Link
      href={href}
      className="flex justify-end items-center gap-5 text-[0.9rem] py-4 border-b border-black/5"
    >
      {text}
      <Icon className="scale-150" />
    </Link>
  );
};

export default UserNavItem;
