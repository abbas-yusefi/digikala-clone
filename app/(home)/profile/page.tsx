import React from "react";
// import SignoutButton from "./signout-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileHeader from "@/components/profile/profile-header";
import OrderProcess from "@/components/profile/order-process";
import PersonalInfo from "@/components/profile/personal-info";
import MobileProfileDashboard from "@/components/profile/profileDashboard/mobile-profile-dashboard";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/signin");

  return (
    <>
      <main className="flex flex-col items-center pb-14 lg:hidden">
        <ProfileHeader />
        <PersonalInfo session={session} />
        <OrderProcess />
        <MobileProfileDashboard />
      </main>
      <section className="max-lg:hidden">
        <OrderProcess />
      </section>
    </>
  );
};

export default page;
