"use client";

import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import MobileSetting from "./mobile-setting";

const ProfileHeader = () => {
  const [isSetting, setIsSetting] = useState(false);

  return (
    <>
      <header
        className={`${isSetting ? "opacity-0 pointer-events-none" : "opacity-100"} flex justify-between items-center w-full px-7 transition-all duration-500 bg-surface-primary`}
      >
        <div className="flex gap-8">
          <IoNotificationsOutline className={`text-2xl cursor-pointer`} />
          <BiSupport className={`text-2xl cursor-pointer`} />
        </div>
        <div>
          <IoSettingsOutline
            onClick={() => setIsSetting((prev) => !prev)}
            className={`text-2xl cursor-pointer`}
          />
        </div>
      </header>
      <MobileSetting isSetting={isSetting} setIsSetting={setIsSetting} />
    </>
  );
};

export default ProfileHeader;
