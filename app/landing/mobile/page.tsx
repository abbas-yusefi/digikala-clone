import ResponsiveImageSlider from "@/components/responsive-image-slider";
import Image from "next/image";
import headerAd from "@/public/header.png";
import TopProduct from "@/components/landing/mobile/top-product";
import DisplayProducts from "@/components/landing/mobile/display-products";
import { getFilteredProducts } from "@/lib/queries";
import { Params } from "@/lib/types/params";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خرید گوشی موبایل",
  description:
    "خرید جدیدترین گوشی‌های موبایل از برندهای سامسونگ، شیائومی، آیفون، نوکیا و هواوی با بهترین قیمت و گارانتی معتبر | مقایسه قیمت موبایل، نظرات کاربران و ارسال رایگان در دیجی‌کالا",

  openGraph: {
    title: "خرید انواع گوشی موبایل در دیجی کالا",
    description:
      "خرید جدیدترین گوشی‌های موبایل از برندهای سامسونگ، شیائومی، آیفون، نوکیا و هواوی با بهترین قیمت و گارانتی معتبر | مقایسه قیمت موبایل، نظرات کاربران و ارسال رایگان در دیجی‌کالا",
    type: "website",
    images: [
      {
        url: "/other/mobileOpengraph.png",
        width: 1200,
        height: 630,
        alt: "لوگو دیجی کالا",
      },
    ],
  },
};

const page = async () => {
  const topProductId = 1;

  const params: Params["params"] = {
    q: "",
    category: "mobile",
    brand: "",
    discount: "",
    cursor: "",
    dir: "",
  };

  const discountedProducts = await getFilteredProducts(params);

  return (
    <>
      <main>
        <Image alt="خرید اشتراک فیلیمو" src={headerAd} />
        <ResponsiveImageSlider
          imageClass="flex-[0_0_100%]"
          autoSlideInterval={4000}
          dotNavBg="bg-surface-primary p-1 rounded-2xl"
          selectedIndexClass="bg-brand-primary"
          notSelectedIndexClass="bg-gray-300"
        />
        <TopProduct id={topProductId} />
        <DisplayProducts
          sectionName={"more offers"}
          Data={discountedProducts}
        />
      </main>
    </>
  );
};

export default page;
