"use client";
import {
  IoFlameOutline,
  IoBasketOutline,
  IoPricetagOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { CiPercent } from "react-icons/ci";
import NavComponent from "@/components/ui/nav-component";
import { useState } from "react";

const Toolbar = ({ className }: { className: string }) => {
  const [locatoinHovered, setLocationHovered] = useState(false);
  // const [categoriesHovered, setCategoriesHovered] = useState(false);

  return (
    <div
      className={`${className} max-lg:hidden transition duration-100 relative bg-surface-primary z-40 h-10 flex justify-between items-center pl-4 border-b border-black/20 shadow-md text-[0.8rem] `}
    >
      {/* chose locatoin */}
      <div
        onMouseEnter={() => setLocationHovered(true)}
        onMouseLeave={() => setLocationHovered(false)}
        className="text-[#f5801a] bg-[#fef6ef] relative flex items-center pr-8 pl-4 rounded-4xl font-semibold py-1.5 cursor-pointer lg:px-4 lg:w-44 lg:py-2"
      >
        شهر خود را انتخواب کنید
        <IoLocationOutline className="absolute right-2 scale-170 lg:right-3" />
        {locatoinHovered ? (
          <div className="absolute left-8 w-25 rounded-md text-xs/6 text-center mt-23 z-20 bg-[#474264] text-white p-2">
            <p>انتخواب آدرس</p>
          </div>
        ) : null}
      </div>
      {/* sections */}
      <div className="flex items-center h-full text-text-secondary font-semibold">
        {/* first section */}
        <div className="h-full flex items-center">
          <NavComponent className="px-3 lg:pr-4 py-2">
            !در دیجی کالا بفروشید
          </NavComponent>
          <NavComponent className="px-3 lg:pr-4  py-2">
            سوالی دارید؟
          </NavComponent>
        </div>
        <span className="h-4 w-0.5 bg-black/7"></span>
        {/* second section */}
        <div className="flex items-center h-full">
          <NavComponent icon={<IoFlameOutline />} className="pr-6 py-2 pl-4  ">
            پرفروشترین ها
          </NavComponent>
          <NavComponent icon={<IoPricetagOutline />} className="pr-6 py-2 pl-4">
            طلای دیجیتال
          </NavComponent>
          <NavComponent icon={<IoBasketOutline />} className="pr-6 py-2 pl-4">
            سوپرمارکت
          </NavComponent>
          <NavComponent
            icon={<CiPercent />}
            iconClassName="right-3"
            className="pr-8 py-2 pl-4 "
          >
            شگفت انگیزها
          </NavComponent>
          <span className="h-4 w-0.5 bg-black/7"></span>
        </div>
        {/* categorys */}
        <div>
          <div
            className="relative group cursor-pointer px-5 py-2 h-10 text-black text-sm font-semibold pr-5 mr-3"
            // onMouseEnter={() => setCategoriesHovered(true)}
            // onMouseLeave={() => setCategoriesHovered(false)}
          >
            {/* <Modal>something</Modal> */}
            دسته بندی کالاها
            <HiMenu className="absolute right-0 top-3 scale-150" />
            <span className="underline-animation"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
