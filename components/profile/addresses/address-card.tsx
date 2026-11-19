"use client";

import { Icons } from "@/lib/icons";
import { Address } from "@/lib/types/address";
import React, { useState } from "react";
import AddressCardOptions from "./address-card-options";

const AddressCard = ({
  addressInfo,
}: {
  addressInfo: Pick<
    Address,
    | "street_address"
    | "postal_code"
    | "recipient_name"
    | "phone"
    | "id"
    | "city"
    | "state"
    | "street_address_2"
  >;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="border w-[95%] border-text-link my-3 px-5 rounded-lg py-3">
        <div className="flex justify-between text-lg">
          <button onClick={() => setOpen(true)}>
            <Icons.More className="cursor-pointer" />
          </button>
          <Icons.Map className="text-text-link" />
        </div>
        <div
          dir="rtl"
          className="flex flex-col gap-3 text-sm text-text-secondary mt-2"
        >
          <span>
            {addressInfo.state},{addressInfo.city},{addressInfo.street_address},
            {addressInfo.street_address_2}
          </span>
          <span>کد پستی: {addressInfo.postal_code}</span>
          <span>
            گیرنده: {addressInfo.recipient_name} | {addressInfo.phone}
          </span>
        </div>
      </article>
      <AddressCardOptions open={open} setOpen={setOpen} id={addressInfo.id} />
    </>
  );
};

export default AddressCard;
