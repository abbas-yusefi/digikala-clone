import React from "react";
// import SignoutButton from "./signout-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { FiEdit3 } from "react-icons/fi";
import Link from "next/link";
import ProfileHeader from "@/components/profile/profile-header";
import { FaAngleLeft } from "react-icons/fa6";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/signin");

  return (
    <main className="flex flex-col items-center pb-6">
      <ProfileHeader />
      <div className="flex justify-between items-center w-full py-5 px-5">
        <Link href={"#"}>
          <FiEdit3 className={`scale-120 cursor-pointer text-text-link`} />
        </Link>
        <div className="flex flex-col" dir="rtl">
          <span className="font-semibold">{session.user?.name}</span>
          <span className="text-text-secondary text-xs">
            {session.user?.email}
          </span>
        </div>
      </div>
      <section className="w-full px-4 mt-10">
        <div className="flex justify-between items-center w-full">
          <Link
            href={"#"}
            className="flex items-center text-xs font-semibold text-text-link"
          >
            {" "}
            <FaAngleLeft />
            مشاهده همه
          </Link>
          <div className="font-semibold relative after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-brand-discount">
            سفارش های من
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
