"use client";

import { useState } from "react";
import MobileSetting from "./mobile-setting";
import { Icons } from "@/lib/icons";

const ProfileHeader = () => {
  const [isSetting, setIsSetting] = useState(false);

  return (
    <>
      <header
        className={`${isSetting ? "opacity-0 pointer-events-none" : "opacity-100"} flex justify-between items-center w-full px-7 transition-all duration-500 bg-surface-primary sticky inset-0 py-6 z-50`}
      >
        <div className="flex gap-8">
          <Icons.Bell className={`text-2xl cursor-pointer`} />
          <Icons.Support className={`text-2xl cursor-pointer`} />
        </div>
        <div>
          <Icons.Setting
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
