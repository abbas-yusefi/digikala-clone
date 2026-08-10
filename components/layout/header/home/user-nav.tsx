import Link from "next/link";
import React, { useState } from "react";
import UserNavItem from "./user-nav-items";
import { Icons } from "@/lib/icons";
import { usePathname } from "next/navigation";
import SignoutButton from "@/components/ui/signout-button";

const Usernav = ({ username }: { username: string | null }) => {
  const [isToggeled, setIsToggeled] = useState(false);
  const path = usePathname();
  return (
    <>
      <button
        onClick={() => setIsToggeled((prev) => !prev)}
        className={`${isToggeled ? "bg-[#fdebed]" : ""} flex justify-center items-center gap-1 px-3.5 rounded-md py-3 relative`}
      >
        <Icons.DownFilled className="text-sm" />
        {isToggeled || path === "/profile" ? (
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
          <UserNavItem
            href="/profile/orders"
            icon={Icons.Bag}
            text="سفارش ها"
          />
          <UserNavItem
            href="/profile/addresses"
            icon={Icons.Address}
            text="ادرس ها"
          />
          <UserNavItem
            href="/profile/lists"
            icon={Icons.Heart}
            text="لیست ها"
          />
          <SignoutButton variant="userNav" />
        </div>
      </button>
    </>
  );
};

export default Usernav;
