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
    <Link href={href}>
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
  );
};

export default OrderProcessSteps;
