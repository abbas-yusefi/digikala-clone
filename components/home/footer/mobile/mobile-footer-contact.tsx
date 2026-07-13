import React from "react";
import digikalaIcon from "@/public/image.png";
import Image from "next/image";
import { Icons } from "@/lib/icons";
const MobileFooterContact = () => {
  return (
    <>
      {/* support */}
      <div className=" w-full flex justify-between items-center py-3 border-b border-black/10 px-5">
        {/* call button */}
        <button className="contact-button bg-surface-secondary">تماس</button>
        {/* right section */}
        <div className="flex items-center">
          <div
            style={{
              direction: "rtl",
            }}
          >
            <div className="font-semibold  mb-2">تماس با پشتیبانی</div>
            <div>7روز هفته, 24 ساعته</div>
          </div>
          {/* image */}
          <div className="p-3 ml-2 bg-surface-secondary rounded-full">
            <Icons.Support className="text-2xl" />
          </div>
        </div>
      </div>
      {/* support */}
      <div className="w-full flex justify-between aitems-center py-3 border-b border-black/10 px-5">
        {/* call button */}
        <button className="contact-button">دانلود</button>
        {/* right section */}
        <div className="flex items-center">
          <div dir="rtl">
            <div className="font-semibold mb-2">اپیلیکیشن دیجی کالا</div>
            <div>تجربه خرید بهتر در</div>
          </div>
          {/* image */}
          <div>
            <Image
              src={digikalaIcon}
              alt="digikala icon"
              width={30}
              className="mx-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooterContact;
