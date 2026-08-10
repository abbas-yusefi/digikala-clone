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

type RowProps = {
  img: ImageVariables;
  className?: string;
};

const Row = ({ img, className = "" }: RowProps) => (
  <div
    className={`h-full w-[33.3%] px-7  flex justify-center items-center border border-t-0 lg:bg-surface-secondary border-black/10 py-5 ${className}`}
  >
    <Image
      className={`object-contain h-12 w-full`}
      src={img.src}
      alt={img.alt}
      width={100}
      height={100}
    />
  </div>
);

const FooterPartnerRow = ({
  firstImg,
  secondImg,
  thirdImg,
}: FooterPartnerRowProps) => {
  return (
    <div className="flex justify-between w-full">
      <Row img={firstImg} className="border-l-0" />
      <Row img={secondImg} className="border-l-0" />
      <Row img={thirdImg} className="border-r-0 border-l-0" />
    </div>
  );
};

export default FooterPartnerRow;
