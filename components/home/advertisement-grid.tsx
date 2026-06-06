import Image, { StaticImageData } from "next/image";

type Data = {
  id: number;
  image: StaticImageData;
  alt: string;
};

const AdvertisementGrid = ({
  data,
  imageClassName,
}: {
  data: Data[];
  imageClassName: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full p-5 lg:px-0 justify-center items-center">
      <div className="flex gap-3 w-full">
        <Image
          className={`${imageClassName} object-cover w-full lg:px lg:h-56 h-32 min-w-0  cursor-pointer`}
          src={data[0].image}
          alt={data[0].alt}
          title={data[0].alt}
        />
        <Image
          className={`${imageClassName} object-cover w-full lg:h-56 h-32 min-w-0  cursor-pointer`}
          src={data[1].image}
          alt={data[1].alt}
          title={data[1].alt}
        />
      </div>
      <div className="flex gap-3 w-full">
        <Image
          className={`${imageClassName} object-cover w-full lg:h-56 h-32 min-w-0  cursor-pointer`}
          src={data[2].image}
          alt={data[2].alt}
          title={data[2].alt}
        />
        <Image
          className={`${imageClassName} object-cover w-full lg:h-56 h-32 min-w-0  cursor-pointer`}
          src={data[3].image}
          alt={data[3].alt}
          title={data[3].alt}
        />
      </div>
    </div>
  );
};

export default AdvertisementGrid;
