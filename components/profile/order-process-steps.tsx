import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const OrderProcessSteps = ({
  children,
  image,
  alt,
  number,
  href,
}: {
  children: React.ReactNode;
  image: StaticImageData;
  alt: string;
  number: number;
  href: string;
}) => {
  return (
    <>
      {/* Mobile version */}
      <Link href={href} className="lg:hidden">
        <div className="relative">
          <Image alt={alt} src={image} />
          <span className="absolute bottom-0 left-0 w-5 rounded-sm flex justify-center items-center bg-surface-secondary z-40">
            {number}
          </span>
        </div>
        <h3 className="font-semibold flex justify-center items-center">
          {children}
        </h3>
      </Link>

      {/* Desktop version */}
      <Link href={href} className="max-lg:hidden flex ml-auto mr-5">
        <div className="flex flex-col gap-2 mr-4 justify-center">
          <span className="font-semibold text-sm" dir="rtl">
            {number} سفارش
          </span>
          <h3 className="font-normal flex justify-center items-center">
            {children}
          </h3>
        </div>
        <div className="w-fit h-fit">
          <Image alt={alt} src={image} />
        </div>
      </Link>
    </>
  );
};

export default OrderProcessSteps;
