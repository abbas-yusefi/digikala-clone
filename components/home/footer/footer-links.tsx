import React from "react";
import FooterList from "./footer-list";

const FooterLinks = () => {
  return (
    <>
      {/* mobile links */}
      <section className="px-3 lg:hidden">
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

      {/* desktop links */}

      <div className="max-lg:hidden">
        <div className="flex gap-5 flex-col items-end h-full text-sm font-semibold ">
          <h3 className="font-bold text-base text-black" dir="rtl">
            راهنمای خرید از دیجی کالا
          </h3>
          <span className="opacity-50">نحوه ثبت سفارش</span>
          <span className="opacity-50">رویه ارسال سفارش</span>
          <span className="opacity-50">شیوه های پرداخت</span>
        </div>
        <div className="flex gap-5 flex-col items-end h-full text-sm font-semibold">
          <h3 className="font-bold text-base text-black" dir="rtl">
            خدمات مشتریان
          </h3>
          <span className="opacity-50">پاسخ به پرسش های متداول</span>
          <span className="opacity-50">رویه های بازگرداندن کالا</span>
          <span className="opacity-50">شرایط استفاده</span>
          <span className="opacity-50">حریم خصوصی</span>
          <span className="opacity-50">گزارش باگ</span>
        </div>
        <div className="flex gap-5 flex-col items-end h-full text-sm font-semibold">
          <h3 className="font-bold text-base " dir="rtl">
            با دیجی کالا
          </h3>
          <span className="opacity-50">اتاق خبر دیجی کالا</span>
          <span className="opacity-50">فروش در دیجی کالا</span>
          <span className="opacity-50">فرصت های شغلی</span>
          <span className="opacity-50">گزارش تخلف در دیجی کالا</span>
          <span className="opacity-50">تماس با دیجی کالا</span>
          <span className="opacity-50">درباره دیجی کالا</span>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
