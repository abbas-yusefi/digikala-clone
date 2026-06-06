"use client";

import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import digikalaIcon from "@/public/image.png";
import FooterList from "./footer-list";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mb-20 flex justify-center  flex-col text-sm text-black/60 cursor-pointer">
      <div className="flex items-center justify-center">
        <button
          className="flex justify-center items-center mb-10 bg-surface-secondary px-2 h-10 rounded-4xl cursor-pointer"
          onClick={scrollToTop}
        >
          <FaChevronUp className="scale-75 mr-1 mt-1" />
          رفتن به بالا
        </button>
      </div>
      {/* Contact */}
      <section className="px-3">
        {/* support */}
        <div className=" w-full flex justify-between items-center py-3 border-b border-black/10">
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
              <BiSupport className="scale-170" />
            </div>
          </div>
        </div>
        {/* support */}
        <div className="w-full flex justify-between items-center py-3 border-b border-black/10">
          {/* call button */}
          <button className="contact-button">دانلود</button>
          {/* right section */}
          <div className="flex items-center">
            <div
              style={{
                direction: "rtl",
              }}
            >
              <div className="font-semibold mb-2">اپیلیکیشن دیجی کالا</div>
              <div>تجربه خرید بهتر در</div>
            </div>
            {/* image */}
            <div>
              <Image
                src={digikalaIcon}
                alt="digikala icon"
                width={30}
                className="ml-2 rounded-full"
              />
            </div>
          </div>
        </div>
        <div>
          <FooterList
            sectionName="با دیجی کالا"
            sectionToggleName={"withDigikala"}
          >
            <li>اتاق خبر دیجی کالا</li>
            <li>فروش در دیجی کالا</li>
            <li>فرصت ختی شغلی</li>
            <li>گزارش تخلف در دیجی کالا</li>
            <li>تماس با دیجی کالا</li>
            <li>درباره دیجی کالا</li>
          </FooterList>
          <FooterList
            sectionName="خدمات مشتریان"
            sectionToggleName={"customerService"}
          >
            <li>پاسخ به پرسش های متداول</li>
            <li>رویه های بازگرداندن کالا</li>
            <li>شرایط استفاده</li>
            <li>حریم خصوصی</li>
            <li>گزارش باگ</li>
          </FooterList>
          <FooterList
            sectionName="راهنمای خرید از دیجی کالا"
            sectionToggleName={"shoppingGauide"}
          >
            <li>نحوه ثبت سفارش</li>
            <li>رویه ارسال سفارش</li>
            <li>شیوه های پرداخت</li>
          </FooterList>
          <FooterList
            sectionName="شرکای تجاری"
            sectionToggleName={"businessPartners"}
            partnersDropdown={true}
          ></FooterList>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
