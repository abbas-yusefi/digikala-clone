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
    <>
      <Link href={`/search?q=${name}`} className="lg:hidden">
        <article className="bg-surface-secondary w-24 shrink-0 pt-2 rounded-xl border border-black/10 shadow-md my-2">
          <div className="h-20 w-full flex justify-center items-center px-2">
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

      <Link href={`/search?q=${name}`} className="max-lg:hidden shrink-0">
        <article className="h-40 w-48 shrink-0 flex justify-center items-center bg-surface-primary border-l border-black/7 p-4">
          <Image
            className="object-cover w-auto h-auto p-4"
            src={data.src}
            alt={data.alt}
            width={200}
            height={200}
            unoptimized
          />
        </article>
      </Link>
    </>
  );
};

export default BrandCard;
