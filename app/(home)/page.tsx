import ResponsiveImageSlider from "@/components/responsive-image-slider";
import DiscountProducts from "@/components/home/discount/discount-products";
import ProductCWrapper from "@/components/home/product-c-wrapper";
import AdvertisementGrid from "@/components/home/advertisement-grid";
import {
  firstCategories,
  secondCategories,
} from "@/public/categoriesGrid/index";
import CategoriesGrid from "@/components/home/categories-grid";
import SingleCardAd from "@/components/home/single-card-ad";
import { firstHomePageDiscount, secondHomePageDiscount } from "@/lib/querys";
import { Suspense } from "react";
import PulsingDotLoader from "@/components/ui/pulsing-dot-loader";
import Footer from "@/components/home/footer/footer";
import Brands from "@/components/home/brands";
import Image from "next/image";
import SingleAd from "@/public/single-ad-pic.png";

const page = async () => {
  const firstDiscountProducts = firstHomePageDiscount();
  const secondDiscountProducts = secondHomePageDiscount();

  return (
    <>
      <ResponsiveImageSlider
        autoSlideInterval={4000}
        wrapperClass="max-md:sticky max-md:top-46 max-md:z-10"
      />
      <main className="z-40 bg-surface-primary lg:mx-20 ">
        <ProductCWrapper />
        <Suspense fallback={<PulsingDotLoader className="h-70" />}>
          <DiscountProducts data={firstDiscountProducts} />
        </Suspense>
        <AdvertisementGrid data={firstCategories} imageClassName="rounded-md" />
        <Suspense fallback={<PulsingDotLoader className="h-70" />}>
          <DiscountProducts secondRow data={secondDiscountProducts} />
        </Suspense>
        <AdvertisementGrid
          data={secondCategories}
          imageClassName="rounded-md"
        />
        <CategoriesGrid />
        <aside className="rounded-xl px-5 mt-5  max-md:max-h-72 w-auto">
          <Image
            src={SingleAd}
            alt="تخفیف 70 درصدی"
            unoptimized
            width={100}
            height={100}
            className="object-cover w-full h-full rounded-xl"
          />
        </aside>
        <Brands />
      </main>

      <Footer />
    </>
  );
};

export default page;
