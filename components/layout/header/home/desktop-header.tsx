"use client";

import SearchBar from "@/components/ui/search-bar";
import Image from "next/image";
import Link from "next/link";
import headerImage from "@/public/header.png";
import { useSession } from "next-auth/react";
import CartItemsLength from "@/components/nav/cart-items-length";
import Usernav from "./user-nav";
import brandIcon from "@/public/other/brand.svg";
import { Icons } from "@/lib/icons";

const LgHeader = ({ scrolled }: { scrolled: boolean }) => {
  const { data: session } = useSession();

  const isAuthenticated = session?.user?.name;

  return (
    <header
      className={`max-lg:hidden sticky top-0 bg-surface-primary -mb-7 z-50 ${scrolled ? "border-b border-black/20" : ""}`}
    >
      <Image
        src={headerImage}
        alt="header ad"
        title="خرید صنایع دستی"
        priority
        className="sticky top-0 w-full"
      />
      <div className="flex justify-between items-center bg-surface-primary px-4 h-11 my-3 z-50">
        <div className="flex items-center">
          <Link href={"/checkout"} className="cursor-pointer px-3 relative">
            <Icons.CartOutline className="text-2xl" />
            <CartItemsLength position="bottom-2 right-0" />
          </Link>
          <span className="h-6 w-0.5 bg-black/10 mx-4"></span>
          {isAuthenticated ? (
            <Usernav username={isAuthenticated} />
          ) : (
            <Link
              href={"/signin"}
              className="py-2 px-4 gap-2 rounded-lg text-xs font-semibold border-black/10 border  flex items-center shadow-md cursor-pointer"
            >
              ورود | ثبت نام
              <Icons.Signin className="text-2xl" />
            </Link>
          )}

          <Icons.Bell className="text-2xl cursor-pointer mx-7" />
        </div>
        <div className="flex w-[53vw] items-center">
          <SearchBar
            placeholder="جستجو"
            searchIcon={<Icons.Search />}
            divClassName="bg-[#f0f0f1] w-40 mr-4"
            inputClassName="h-10 rounded-4xl text-right font-bold text-black/70 text-xs pr-13"
            iconxPosition="right-50"
            ariaLabel="searchbox"
          />
          <Link href={"/"} className="cursor-pointer">
            <Image
              alt="لگوی دیجی کالا"
              src={brandIcon}
              width={185}
              height={185}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LgHeader;
