"use client";

import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import digikalaIcon from "@/public/image.png";
import FooterList from "./footer/footer-list";
import { FaChevronUp } from "react-icons/fa";
import brandIcon from "@/public/other/brand.svg";
import originalProducts from "@/public/other/original-products.svg";
import daysReturn from "@/public/other/days-return.svg";
import support from "@/public/other/support.svg";
import cashOnDelivery from "@/public/other/cash-on-delivery.svg";
import expressDelivery from "@/public/other/express-delivery.svg";
import bale from "@/public/other/Logo06.png";
import aparat from "@/public/other/icon--black.svg";
import logo from "@/public/other/logo.png";
import sib from "@/public/other/sib-app.svg";
import bazzar from "@/public/other/coffe-bazzar.svg";
import myket from "@/public/other/myket.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { submitEmailSubscriptionAction } from "@/lib/actions/email-subscription-action";
import FooterPartnerRow from "./footer-partner-row";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

const partners = [
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digimag.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digipay.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digiplus.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digiclub.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/jet.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digify.svg",
    alt: "",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-static/6d8b4e67f90b80c581949f1e680aeaa60fa49d0e_1770621595.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/diginext.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/ganjeh.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digiexpress.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/smartech.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digital-gold.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digikala-service.svg",
    alt: "",
  },
  {
    src: "https://www.digikala.com/statics/img/svg/footer/digikala-business.svg",
    alt: "",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-static/e7661075abe11edde27e6d550c3507756122e1cf_1758969434.svg",
    alt: "",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-static/9814bb50f330280b887fe545a6074cc72f33388e_1758978427.svg",
    alt: "",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [email, setEmail] = useState("");

  return (
    <>
      <footer className="mb-20 flex justify-center  flex-col text-sm text-black/60 cursor-pointer lg:hidden">
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
            <button className="contact-button bg-surface-secondary">
              تماس
            </button>
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

      <footer className="px-5 max-lg:hidden text-xs w-full border-t border-black/10 pt-15 mt-15 flex flex-col gap-7 bg-surface-primary">
        <div className="flex items-center justify-between w-full h-20">
          <button
            onClick={scrollToTop}
            className="flex justify-center items-center bg-surface-primary px-5 py-3 h-fit border border-black/25 text-black/40 rounded-md cursor-pointer"
          >
            <FaChevronUp className="mr-1.5" />
            بازگشت به بالا
          </button>
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
        <div className="flex justify-around">
          <div className="flex flex-col justify-center items-center">
            <Image alt="ضمانت اصل بودن کالا" src={originalProducts} />
            <span>ضمانت اصل بودن کالا</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image alt="هفت روز ضمانت بازگشت کالا" src={daysReturn} />
            <span>هفت روز ضمانت بازگشت کالا</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image alt="7 روز هفته, 24 ساعته" src={support} />
            <span dir="rtl">7 روز هفته, 24 ساعته</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image alt="امکان پرداخت در محل" src={cashOnDelivery} />
            <span>امکان پرداخت در محل</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image alt="امکان تحویل اکسپرس" src={expressDelivery} />
            <span>امکان تحویل اکسپرس</span>
          </div>
        </div>
        <div className="flex mt-5 justify-between items-center h-60">
          <div className="flex flex-col h-full  gap-6">
            <h3 className="font-semibold text-base" dir="rtl">
              همراه ما باشید!
            </h3>
            <div className="flex items-center justify-between gap-7 opacity-40">
              <Link href={"https://ble.ir/digikala"}>
                <Image alt="" src={bale} width={35} height={35} />
              </Link>
              <Link href={"https://www.aparat.com/digikala/"}>
                <Image alt="" src={aparat} width={35} height={35} />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/digikala/mycompany/"}
              >
                <FaLinkedin className="scale-300 mx-3" />
              </Link>
              <Link href={"https://x.com/digikalacom"}>
                <FaTwitter className="scale-300 mx-3" />
              </Link>
              <Link href={"https://www.instagram.com/digikalacom/"}>
                <FaInstagram className="scale-300 ml-3" />
              </Link>
            </div>
            <h3 className="font-semibold text-base mt-2" dir="rtl">
              با ثبت ایمیل, از جدیدترین تخفیف ها باخبر شوید
            </h3>
            <div className="text-base flex">
              <button
                onClick={() => submitEmailSubscriptionAction(email)}
                className="px-4 py-3 bg-brand-discount text-surface-primary rounded-lg cursor-pointer"
              >
                ثبت
              </button>
              <input
                className="py-3  ml-3 rounded-lg text-right px-3 w-full bg-surface-secondary [&:-webkit-autofill]:bg-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_white]"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="ایمیل شما"
              />
            </div>
          </div>
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
        <div className="h-20 flex justify-between items-center bg-[#457] w-full rounded-lg px-4 my-8 ">
          <div className="flex items-center gap-4">
            <span className="flex justify-center items-center rounded-md w-[2.8rem] h-[2.8rem] bg-surface-primary">
              <GoDotFill />
              <GoDotFill />
              <GoDotFill />
            </span>

            <Link href={"https://sibapp.com/applications/digikala"}>
              <Image
                alt="دانلود دیچی کالا از سیب"
                src={sib}
                className="w-36 cursor-pointer"
              />
            </Link>
            <Link href={"https://myket.ir/app/com.digikala"}>
              <Image
                alt="دانلود دیچی کالا از مایکت"
                src={myket}
                className="w-36 cursor-pointer"
              />
            </Link>
            <Link href={"https://cafebazaar.ir/app/com.digikala"}>
              <Image
                alt="دانلود دیچی کالا از بازار"
                src={bazzar}
                className="w-36 cursor-pointer rounded-md"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <h2
              className="font-bold text-surface-primary
             text-2xl"
            >
              دانلود اپلیکیشن دیجی کالا
            </h2>
            <Image
              alt="لگو دیجی کالا"
              src={logo}
              width={50}
              height={50}
              className="object-cover"
            />
          </div>
        </div>
        <div className="-mx-5 -mb-7">
          <div className="flex">
            <FooterPartnerRow
              firstImg={partners[0]}
              secondImg={partners[1]}
              thirdImg={partners[2]}
            />
            <FooterPartnerRow
              firstImg={partners[3]}
              secondImg={partners[4]}
              thirdImg={partners[5]}
            />
            <FooterPartnerRow
              firstImg={partners[6]}
              secondImg={partners[7]}
              thirdImg={partners[8]}
            />
          </div>
          <div className="flex">
            <FooterPartnerRow
              firstImg={partners[9]}
              secondImg={partners[10]}
              thirdImg={partners[11]}
            />
            <FooterPartnerRow
              firstImg={partners[12]}
              secondImg={partners[13]}
              thirdImg={partners[14]}
            />
            <FooterPartnerRow
              firstImg={partners[15]}
              secondImg={partners[16]}
              thirdImg={partners[17]}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
