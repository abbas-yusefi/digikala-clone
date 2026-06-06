import Link from "next/link";
import React from "react";
import Timer from "./timer";
import Image from "next/image";

const DiscountMdHeader = () => {
  return (
    <div className="flex justify-between items-center px-5 py-5">
      <Link href={"/"}>&lt;همه</Link>
      <div className="flex">
        <Timer />
        <div className="flex gap-2 ml-4">
          <Image
            src={
              "https://dkstatics-public.digikala.com/digikala-static/e0c05f5d67bf71be7605ec22cb3ee6be57d43e94_1746354561.svg"
            }
            alt=""
            width={110}
            height={110}
            draggable="false"
          />
          <Image
            src={
              "https://dkstatics-public.digikala.com/digikala-static/0d072059918d0c22b88320554ce4b3e07d0472f2_1746354551.svg"
            }
            alt=""
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountMdHeader;
