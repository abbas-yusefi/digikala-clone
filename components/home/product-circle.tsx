import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type circleDataProps = {
  textFirstLine: string;
  textSecondLine?: string;
  image: StaticImageData;
  href: string;
};

const ProductCircle = ({ data }: { data: circleDataProps }) => {
  return (
    <>
      <Link
        href={data.href}
        key={data.textFirstLine + data?.textSecondLine}
        className="px-1.5 text-xs mt-2 flex flex-col justify-start items-center cursor-pointer lg:px-[clamp(20px,2.7vw,70px)]"
      >
        <div className="w-15">
          <Image
            width={52}
            alt={data.textFirstLine + data?.textSecondLine}
            src={data.image}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-1">
          <h3>{data.textFirstLine}</h3>
          {data.textSecondLine && <h3>{data.textSecondLine}</h3>}
        </div>
      </Link>
    </>
  );
};

export default ProductCircle;
