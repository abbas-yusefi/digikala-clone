import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretDown, FaRegUser, FaRegHeart } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { RiShoppingBagLine } from "react-icons/ri";
import { BsSignpost2 } from "react-icons/bs";
import UserNavItem from "./user-nav-items";

const Usernav = ({ username }: { username: string | null }) => {
  const [isToggeled, setIsToggeled] = useState(false);
  // const { data: session } = useSession();
  // const username = session?.user?.name;
  return (
    <>
      <button
        onClick={() => setIsToggeled((prev) => !prev)}
        className={`${isToggeled ? "bg-[#fdebed]" : ""} flex justify-center items-center gap-1 px-3.5 rounded-md py-3 relative`}
      >
        <FaCaretDown className="scale-85" />
        <FaRegUser className="scale-140" />
        <div
          className={`${isToggeled ? "" : "hidden"} w-64 h-auto bg-surface-primary shadow-lg border border-black/20 z-50 absolute top-10 left-0 rounded-md py-4 px-4 text-lg font-semibold text-[1.1rem]`}
        >
          <Link
            href={"/profile"}
            className=" flex justify-between items-center border-b border-black/10 pb-5"
          >
            <FaAngleLeft className="scale-90" />
            {username && username}
          </Link>
          <UserNavItem href="/" icon={RiShoppingBagLine} text="سفارش ها" />
          <UserNavItem href="/" icon={BsSignpost2} text="ادرس ها" />
          <UserNavItem href="/" icon={FaRegHeart} text="لیست ها" />
          <UserNavItem
            href="/"
            logout
            icon={TbLogout}
            text="خروج از حساب کاربری"
          />
        </div>
      </button>
    </>
  );
};

export default Usernav;
