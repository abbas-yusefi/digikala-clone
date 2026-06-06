"use client";

import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type dataProps = {
  src: StaticImageData;
  alt: string;
};

export type ImageSliderProps = {
  data?: dataProps[];
  autoSlideInterval?: number;
  className?: string;
  dotNavBg?: string;
  selectedIndexClass?: string;
  notSelectedIndexClass?: string;
  imageClass?: string;
  rounded?: boolean;
  wrapperClass?: string;
};

const ImageSlider = ({
  data,
  autoSlideInterval = 2000,
  className,
  dotNavBg,
  selectedIndexClass = "bg-white",
  notSelectedIndexClass = "bg-white/60 hover:bg-white/80",
  imageClass = "max-lg:flex-[0_0_93%] flex-[0_0_100%]",
  rounded = false,
}: ImageSliderProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Embla carousel with loop and autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: autoSlideInterval,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true, // Add this
        active: true, // Add this
      }),
    ],
  );

  // Sync Embla's index with our state
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial index

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const prevSlide = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const goToSlide = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <div className={`${className}`}>
      <div
        className={`relative overflow-hidden px-0 mt-2 bg-[#f2f3f5] py-3 hide-scrollbar`}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((src, index) => (
              <div key={index} className={`${imageClass} min-w-0 max-lg:px-1`}>
                <Image
                  title={src.alt}
                  src={src.src}
                  alt={src.alt}
                  className={`w-full h-46 lg:h-72 xl:h-96 object-cover max-lg:rounded-xl ${rounded ? `rounded-xl` : ""}`}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div
          className={`${dotNavBg} absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2`}
        >
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? `w-6 ${selectedIndexClass}`
                  : `w-2 ${notSelectedIndexClass}`
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons - uncomment if needed */}
        {/* <button className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-sky-700 text-white rounded-full" onClick={prevSlide}>←</button>
      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-sky-700 text-white rounded-full" onClick={nextSlide}>→</button> */}
      </div>
    </div>
  );
};

export default ImageSlider;
