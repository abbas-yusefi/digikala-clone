"use client";

import { Icons } from "@/lib/icons";
import { signOut } from "next-auth/react";

type SignoutButtonProps = {
  variant?: "setting" | "default" | "userNav";
};

const SignoutButton = ({ variant }: SignoutButtonProps) => {
  const handleSignout = () => signOut({ callbackUrl: "/" });

  if (variant === "setting")
    return (
      // Mobile Setting
      <button
        onClick={handleSignout}
        className="flex justify-between items-center text-brand-secondary px-10 py-4 cursor-pointer"
      >
        <Icons.Left className="opacity-0 text-lg max-xs:text-sm" />
        <div className="flex items-center gap-4 font-semibold">
          خروج از حساب کاربری
          <Icons.Signout className="text-2xl max-xs:text-xl" />
        </div>
      </button>
    );

  if (variant === "userNav")
    return (
      <div
        onClick={handleSignout}
        aria-label="signout button"
        className="flex justify-end items-center gap-5 text-[0.9rem] w-full py-4 border-b border-black/5 cursor-pointer"
      >
        خروج از حساب کاربری
        <Icons.Signout className="text-2xl" />
      </div>
    );

  return (
    // Mobile Default
    <button
      className="flex justify-between items-center border-b border-black/6 py-5 w-full px-10 lg:px-4 hover:bg-surface-secondary"
      onClick={handleSignout}
    >
      <Icons.Left className="text-lg max-xs:text-sm text-black/50 lg:opacity-0" />
      <div className="flex items-center gap-4 font-semibold">
        خروج از حساب کاربری
        <Icons.Signout className="text-2xl max-xs:text-xl" />
      </div>
    </button>
  );
};

export default SignoutButton;
