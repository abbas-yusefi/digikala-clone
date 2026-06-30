import Image from "next/image";
import React from "react";
import SingleAd from "@/public/single-ad-pic.png";

const AdvertisementImage = () => {
  return (
    <aside className="rounded-xl px-5 mt-5  max-md:max-h-72 w-auto">
      <Image
        src={SingleAd}
        alt="تخفیف 70 درصدی"
        className="object-cover w-full h-full rounded-xl"
      />
    </aside>
  );
};

export default AdvertisementImage;
