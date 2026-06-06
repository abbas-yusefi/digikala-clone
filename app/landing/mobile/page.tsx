import ResponsiveImageSlider from "@/components/responsive-image-slider";
import Image from "next/image";
import headerAd from "@/public/header.png";
import TopProduct from "@/components/landing/mobile/top-product";
import DisplayProducts from "@/components/landing/mobile/display-products";
import { getDiscountedProductByCategory } from "@/lib/querys";

const page = async () => {
  const topProductId = 1;

  const discountedProducts = await getDiscountedProductByCategory(1);

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
