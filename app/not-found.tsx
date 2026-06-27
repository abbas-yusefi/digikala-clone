import Image from "next/image";
import headerAd from "@/public/header.png";
import Link from "next/link";
import notFound from "@/public/other/notfound.png";
import { FaAngleLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col object-cover lg:min-h-screen lg:pb-40 lg:gap-7">
      <Image
        alt="خرید اشتراک فیلیمو"
        src={headerAd}
        className="h-8 lg:h-fit object-cover fixed inset-0 w-full"
      />
      <div className="py-8"></div>
      <h1 className="font-bold mt-3 lg:text-2xl">
        !صفحه ای که دنبال آن بودید پیدا نشد
      </h1>
      <Link
        className="text-xs font-bold text-text-link my-7 lg:text-sm"
        href={"/"}
      >
        <FaAngleLeft className="inline" /> صفحه اصلی
      </Link>
      <Image
        src={notFound}
        alt="صفحه مورد نظر پیدا نشد"
        height={150}
        className="lg:w-96 object-cover"
      />
    </div>
  );
}
