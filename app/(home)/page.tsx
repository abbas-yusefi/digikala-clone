import ResponsiveImageSlider from "@/components/responsive-image-slider";
import DiscountSection from "@/components/home/discount/discount-section";
import ProductCWrapper from "@/components/home/product-c-wrapper";
import AdvertisementGrid from "@/components/home/advertisement-grid";
import {
  firstCategories,
  secondCategories,
} from "@/public/categoriesGrid/index";
import CategoriesGrid from "@/components/home/categories-grid";
import { Suspense } from "react";
import PulsingDotLoader from "@/components/ui/pulsing-dot-loader";
import Footer from "@/components/home/footer/footer";
import Brands from "@/components/home/brands";
import AdvertisementImage from "@/components/home/advertisement-image";
import Support from "@/components/home/support";

const page = async () => {
  return (
    <>
      <ResponsiveImageSlider
        autoSlideInterval={4000}
        wrapperClass="max-md:sticky max-md:top-[11.5rem] max-md:z-10"
      />
      <main className="z-40 bg-surface-primary lg:mx-20 relative">
        <Support />
        <ProductCWrapper />
        <Suspense fallback={<PulsingDotLoader className="h-72" />}>
          <DiscountSection />
        </Suspense>
        <AdvertisementGrid data={firstCategories} imageClassName="rounded-md" />
        <Suspense fallback={<PulsingDotLoader className="h-72" />}>
          <DiscountSection secondRow />
        </Suspense>
        <AdvertisementGrid
          data={secondCategories}
          imageClassName="rounded-md"
        />
        <CategoriesGrid />
        <AdvertisementImage />
        <Brands />
      </main>

      <Footer />
    </>
  );
};

export default page;
