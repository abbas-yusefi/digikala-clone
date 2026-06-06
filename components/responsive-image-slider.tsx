"use client";

import ImageSlider from "./shared/image-slider";
import { mdSliderImages, lgSliderImages } from "@/public/sliderimages";
import { useScreenWidth } from "@/lib/hooks";
import { type ImageSliderProps } from "./shared/image-slider";
import useScrollThreshold from "@/lib/hooks/useScrollThreshold";

const ResponsiveImageSlider = ({
  autoSlideInterval,
  dotNavBg,
  rounded,
  imageClass,
  selectedIndexClass,
  notSelectedIndexClass,
  wrapperClass,
}: ImageSliderProps) => {
  const screenWidth = useScreenWidth();

  const scrolled = useScrollThreshold({
    disableThreshold: 350,
    enableThreshold: 450,
  });

  if (screenWidth === undefined)
    return (
      <ImageSlider
        autoSlideInterval={autoSlideInterval}
        data={lgSliderImages}
      />
    );

  const data = screenWidth < 1024 ? mdSliderImages : lgSliderImages;

  return (
    <>
      <ImageSlider
        className={`${wrapperClass} ${scrolled ? "invisible hidden pointer-events-none" : "cursor-pointer"}`}
        autoSlideInterval={autoSlideInterval}
        data={data}
        dotNavBg={dotNavBg}
        rounded={rounded}
        imageClass={imageClass}
        selectedIndexClass={selectedIndexClass}
        notSelectedIndexClass={notSelectedIndexClass}
      />
      <div
        className={`${scrolled ? "" : "hidden"} lg:h-72 xl:h-96 bg-surface-primary w-full h-52`}
      ></div>
    </>
  );
};

export default ResponsiveImageSlider;
