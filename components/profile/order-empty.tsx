import Image from "next/image";
import React from "react";
import order_empty from "@/public/other/order-empty.svg";

const OrderEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full font-semibold gap-3">
      <Image alt="لیست سفارش" src={order_empty} />
      <h4>هنوز هیچ سفارشی ندادید</h4>
    </div>
  );
};

export default OrderEmpty;
