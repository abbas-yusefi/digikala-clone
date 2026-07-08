import Image from "next/image";
import originalProducts from "@/public/other/original-products.svg";
import daysReturn from "@/public/other/days-return.svg";
import support from "@/public/other/support.svg";
import cashOnDelivery from "@/public/other/cash-on-delivery.svg";
import expressDelivery from "@/public/other/express-delivery.svg";

const WebsiteFeatures = () => {
  return (
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
  );
};

export default WebsiteFeatures;
