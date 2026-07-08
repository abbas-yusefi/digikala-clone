import Image from "next/image";
import brandIcon from "@/public/other/brand.svg";

import ScrollBackUpButton from "../scroll-back-up-button";
const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-20">
        <ScrollBackUpButton />

        <div>
          <div className="flex flex-col justify-end items-end">
            <Image
              alt="لگوی دیجی کالا"
              src={brandIcon}
              width={185}
              height={185}
            />
            <div className="flex mt-5">
              <div dir="rtl">7 روز هفته, 24 ساعت روز پاسخگوی شما هستیم</div>
              <span className="px-7 opacity-40">|</span>
              <span>021-xxxxxxxx</span>
              <span className="px-7 opacity-40">|</span>

              <div dir="rtl">
                تلفن پشتیبانی <span dir="ltr">021-xxxxxxxx</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
