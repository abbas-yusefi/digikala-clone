"use client";

import { DeleteAddressAction } from "@/lib/actions/address";
import { Icons } from "@/lib/icons";
import Link from "next/link";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const AddressCardOptions = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}) => {
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  return createPortal(
    <div
      onClick={() => setOpen(false)}
      className={`${open ? "" : "hidden"} w-full h-full flex flex-col justify-end bg-black/30 fixed z-50`}
    >
      <div className="w-full h-40 bg-white rounded-t-2xl flex flex-col  items-end">
        <h3 className="p-4 pb-1">تنظیمات آدرس</h3>
        <Link
          href={`/profile/addresses/edit-address/${id}`}
          className="flex justify-end items-center gap-2 cursor-pointer w-full hover:bg-gray-200 px-4 h-12"
        >
          ویرایش
          <Icons.Edit className="text-text-secondary text-xl" />
        </Link>
        <button
          onClick={() => DeleteAddressAction(id)}
          className="flex justify-end items-center gap-2 cursor-pointer w-full hover:bg-gray-200 px-4 h-12"
        >
          حذف
          <Icons.Trash className="text-brand-primary text-xl" />
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default AddressCardOptions;
