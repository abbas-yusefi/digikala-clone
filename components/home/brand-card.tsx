import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Data = {
  src: StaticImageData;
  alt: string;
};

const BrandCard = ({ data }: { data: Data }) => {
  const path = data.src.src;
  const name = path.match(/media\/(.*?)\./)[1];
  return (
    <Link href={`/search?q=${name}`}>
      <article className="bg-surface-secondary w-26 shrink-0 pt-2 rounded-xl border border-black/10 shadow-md my-2">
        <div className="h-24 w-full flex justify-center items-center px-2">
          <Image
            className="w-auto h-auto object-cover"
            src={data.src}
            alt={data.alt}
            width={50}
            height={50}
            unoptimized
          />
        </div>
        <div className="flex justify-center items-center text-xs font-semibold bg-surface-primary py-3 rounded-b-xl">
          {data.alt}
        </div>
      </article>
    </Link>
  );
};

export default BrandCard;
