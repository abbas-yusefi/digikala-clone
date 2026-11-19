import { Icons } from "@/lib/icons";
import Link from "next/link";
import React from "react";

const AddAddressButton = () => {
  return (
    <Link
      href={"/profile/addresses/add-address"}
      className="fixed bottom-20 left-5 text-sm bg-brand-secondary text-white font-semibold px-4 py-4 rounded-4xl flex justify-center items-center gap-1 w-40"
    >
      <Icons.AddMap className="text-lg" />
      ثبت آدرس جدید
    </Link>
  );
};

export default AddAddressButton;
