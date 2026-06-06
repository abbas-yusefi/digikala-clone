import Image from "next/image";
import headerAd from "@/public/header.png";
import Link from "next/link";
import notFound from "@/public/other/notfound.png";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col object-cover">
      <Image
        alt="خرید اشتراک فیلیمو"
        src={headerAd}
        className="h-8 object-cover"
      />
      <h1 className="font-bold mt-3">!صفحه ای که دنبال آن بودید پیدا نشد</h1>
      <Link className="text-xs font-bold text-text-link my-7" href={"/"}>
        &lt; صفحه اصلی
      </Link>
      <Image src={notFound} alt="not found image" height={150} />
    </div>
  );
}
