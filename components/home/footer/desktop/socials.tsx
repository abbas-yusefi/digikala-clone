import bale from "@/public/other/Logo06.png";
import aparat from "@/public/other/icon--black.svg";
import { useState } from "react";
import { submitEmailSubscriptionAction } from "@/lib/actions/email-subscription-action";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/lib/icons";

const Socials = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col h-full  gap-6">
      <h3 className="font-semibold text-base" dir="rtl">
        همراه ما باشید!
      </h3>
      <div className="flex items-center justify-between gap-7 opacity-40">
        <Link href={"https://ble.ir/digikala"} className="pr-3">
          <Image alt="" src={bale} width={35} height={35} />
        </Link>
        <Link href={"https://www.aparat.com/digikala/"}>
          <Image alt="" src={aparat} width={35} height={35} />
        </Link>
        <Link href={"https://www.linkedin.com/company/digikala/mycompany/"}>
          <Icons.Linkedin className="text-4xl mx-3" />
        </Link>
        <Link href={"https://x.com/digikalacom"}>
          <Icons.Twitter className="text-4xl mx-3" />
        </Link>
        <Link href={"https://www.instagram.com/digikalacom/"}>
          <Icons.Instagram className="text-4xl ml-3" />
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
  );
};

export default Socials;
