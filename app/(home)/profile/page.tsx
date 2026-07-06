import React from "react";
import SignoutButton from "./signout-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { FiEdit3 } from "react-icons/fi";
import Link from "next/link";
import ProfileHeader from "@/components/profile/profile-header";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/signin");

  return (
    <main className="flex flex-col justify-center items-center py-6">
      <ProfileHeader />
      <div className="flex justify-between items-center w-full py-10 px-5">
        <Link href={"#"}>
          <FiEdit3 className={`scale-120 cursor-pointer`} />
        </Link>
        <div className="flex flex-col" dir="rtl">
          <span className="font-semibold">{session.user?.name}</span>
          <span className="text-text-secondary text-xs">
            {session.user?.email}
          </span>
        </div>
      </div>
    </main>
  );
};

export default page;
