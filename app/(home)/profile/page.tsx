import React from "react";
// import SignoutButton from "./signout-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileHeader from "@/components/profile/profile-header";
import OrderProcess from "@/components/profile/order-process";
import PersonalInfo from "@/components/profile/personal-info";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/signin");

  return (
    <main className="flex flex-col items-center pb-6 text-sm max-xs:text-xs">
      <ProfileHeader />
      <PersonalInfo session={session} />
      <OrderProcess />
    </main>
  );
};

export default page;
