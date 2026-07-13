import Link from "next/link";
import React, { useState } from "react";
import UserNavItem from "./user-nav-items";
import { Icons } from "@/lib/icons";

const Usernav = ({ username }: { username: string | null }) => {
  const [isToggeled, setIsToggeled] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsToggeled((prev) => !prev)}
        className={`${isToggeled ? "bg-[#fdebed]" : ""} flex justify-center items-center gap-1 px-3.5 rounded-md py-3 relative`}
      >
        <Icons.DownFilled className="text-sm" />
        {isToggeled ? (
          <Icons.User className="text-2xl" />
        ) : (
          <Icons.UserOutline className="text-2xl" />
        )}
        <div
          className={`${isToggeled ? "" : "hidden"} w-64 h-auto bg-surface-primary shadow-lg border border-black/20 z-50 absolute top-10 left-0 rounded-md py-4 px-4 text-lg font-semibold text-[1.1rem]`}
        >
          <Link
            href={"/profile"}
            className=" flex justify-between items-center border-b border-black/10 pb-5"
          >
            <Icons.Left className="text-lg" />
            {username && username}
          </Link>
          <UserNavItem href="/" icon={Icons.Bag} text="سفارش ها" />
          <UserNavItem href="/" icon={Icons.Address} text="ادرس ها" />
          <UserNavItem href="/" icon={Icons.Heart} text="لیست ها" />
          <UserNavItem
            href="/"
            logout
            icon={Icons.Signout}
            text="خروج از حساب کاربری"
          />
        </div>
      </button>
    </>
  );
};

export default Usernav;
