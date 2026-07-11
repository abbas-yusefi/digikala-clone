import { IoMdClose } from "react-icons/io";
import brand from "@/public/other/brand.svg";
import Image from "next/image";
import SectionsRow from "./sections-row";
import { CiSquareQuestion } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { IoBugOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa6";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const MobileSetting = ({
  isSetting,
  setIsSetting,
}: {
  isSetting: boolean;
  setIsSetting: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  return (
    <div
      className={`${!isSetting ? "opacity-0 pointer-events-none" : "opacity-100"} fixed top-0 right-0 bg-surface-primary min-h-screen flex flex-col w-full px-7 transition-all duration-500 z-50`}
    >
      <div className="flex justify-between items-center w-full py-5">
        <IoMdClose
          onClick={() => setIsSetting(false)}
          className={`text-2xl cursor-pointer`}
        />
        <span className="font-semibold">تنظیمات</span>
      </div>
      <div className="mt-10 flex flex-col gap-2">
        <SectionsRow icon={CiSquareQuestion} href="#">
          پرسش های متداول
        </SectionsRow>

        <SectionsRow icon={MdLockOutline} href="#">
          حریم خصوصی
        </SectionsRow>

        <SectionsRow icon={GrNotes} href="#">
          شرایط استفاده
        </SectionsRow>

        <SectionsRow icon={IoCallOutline} href="#">
          تماس با ما
        </SectionsRow>
        <SectionsRow icon={IoBugOutline} href="#">
          گزارش خطا
        </SectionsRow>
        <button
          onClick={() => {
            signOut();
            router.replace("/");
          }}
          className="flex justify-between items-center text-brand-secondary py-4 cursor-pointer"
        >
          <FaAngleLeft className="opacity-0" />
          <div className="flex items-center gap-4 font-semibold">
            خروج از حساب کاربری
            <TbLogout className="text-2xl max-xs:text-xl" />
          </div>
        </button>
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
