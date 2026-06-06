import Image from "next/image";
import React from "react";

type ImageVariables = {
  alt: string;
  src: string;
};

type FooterPartnerRowProps = {
  firstImg: ImageVariables;
  secondImg: ImageVariables;
  thirdImg: ImageVariables;
};

const FooterPartnerRow = ({
  firstImg,
  secondImg,
  thirdImg,
}: FooterPartnerRowProps) => {
  return (
    <div className="flex justify-between w-full">
      <div className="h-full w-[33.3%] flex justify-center items-center border border-t-0 border-l-0 border-black/10 py-5">
        <Image
          className="w-auto object-contain h-12 px-12"
          src={firstImg.src}
          alt={firstImg.alt}
          width={100}
          height={100}
        />
      </div>
      <div className="h-full w-[33.3%] flex justify-center items-center border border-t-0 border-l-0 border-black/10 py-5">
        <Image
          className="w-auto object-contain h-12 px-12"
          src={secondImg.src}
          alt={secondImg.alt}
          width={100}
          height={100}
        />
      </div>
      <div className="h-full w-[33.3%] flex justify-center items-center border border-t-0 border-black/10 py-5 border-r-0 border-l-0">
        <Image
          className="w-auto object-contain h-12 px-12"
          src={thirdImg.src}
          alt={thirdImg.alt}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default FooterPartnerRow;
