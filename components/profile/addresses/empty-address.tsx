import Image from "next/image";
import React from "react";
import address from "@/public/other/address.svg";
import Link from "next/link";
import { Icons } from "@/lib/icons";

const EmptyAddress = () => {
  return (
    <div className="w-full h-full flex flex-col items-center pt-25">
      <Image alt="no address icon" src={address} />
      <h2 dir="rtl">هنوز آدرس ثبت نکرده اید.</h2>
      <Link
        href={"/profile/addresses/add-address"}
        className="border-brand-primary text-brand-primary border px-6 py-3 rounded-lg mt-4 cursor-pointer flex justify-center items-center gap-1 font-semibold"
      >
        ثبت آدرس
        <Icons.AddMap className="text-lg" />
      </Link>
    </div>
  );
};

export default EmptyAddress;
