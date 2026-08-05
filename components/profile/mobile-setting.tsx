import { IoMdClose } from "react-icons/io";
import brand from "@/public/other/brand.svg";
import Image from "next/image";
import SectionsRow from "./sections-row";
import { Dispatch, SetStateAction } from "react";
import { Icons } from "@/lib/icons";
import SignoutButton from "@/components/ui/signout-button";

const MobileSetting = ({
  isSetting,
  setIsSetting,
}: {
  isSetting: boolean;
  setIsSetting: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`${!isSetting ? "opacity-0 pointer-events-none" : "opacity-100"} fixed top-0 right-0 bg-surface-primary min-h-screen flex flex-col w-full transition-all duration-500 z-50`}
    >
      <div className="flex justify-between items-center w-full py-5 px-10">
        <IoMdClose
          onClick={() => setIsSetting(false)}
          className={`text-2xl cursor-pointer`}
        />
        <span className="font-semibold">تنظیمات</span>
      </div>
      <div className="mt-10 flex flex-col">
        <SectionsRow icon={Icons.Question} href="#">
          پرسش های متداول
        </SectionsRow>

        <SectionsRow icon={Icons.Lock} href="#">
          حریم خصوصی
        </SectionsRow>

        <SectionsRow icon={Icons.Notes} href="#">
          شرایط استفاده
        </SectionsRow>

        <SectionsRow icon={Icons.Phone} href="#">
          تماس با ما
        </SectionsRow>
        <SectionsRow icon={Icons.Bug} href="#">
          گزارش خطا
        </SectionsRow>
        <SignoutButton variant="setting" />
      </div>
      <Image
        className="fixed bottom-10 left-1/2 -translate-x-1/2"
        src={brand}
        alt="ایکون دیجی کالا"
        width={100}
        height={100}
      />
    </div>
  );
};

export default MobileSetting;
