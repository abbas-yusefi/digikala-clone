import Image from "next/image";
import React from "react";
import SingleAd from "@/public/single-ad-pic.png";

const SingleCardAd = () => {
  return (
    <aside className="rounded-xl px-5 h-72 mt-5">
      <Image
        src={SingleAd}
        alt="تخفیف 70 درصدی"
        unoptimized
        width={100}
        height={100}
        className="object-cover w-full h-full rounded-xl"
      />
    </aside>
  );
};

export default SingleCardAd;
