"use client";

import React from "react";
import SectionsRow from "../sections-row";
import { Icons } from "@/lib/icons";
import SignoutButton from "@/components/ui/signout-button";
import PersonalInfo from "../personal-info";
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";

const DesktopProfileDashboard = () => {
  const { data: session } = useSession();
  if (!session) redirect("/");
  const path = usePathname();
  return (
    <section className="max-lg:hidden bg-surface-primary border rounded-2xl border-black/10 w-full">
      <PersonalInfo session={session} />
      <SectionsRow href="/profile" path={path}>
        خلاصه فعالیت ها
        <Icons.HomeOutline className="text-2xl max-xs:text-xl" />
      </SectionsRow>
      <SectionsRow href="/profile/orders" path={path}>
        سفارش ها
        <Icons.Bag className="text-2xl max-xs:text-xl" />
      </SectionsRow>
      <SectionsRow href="/profile/lists" path={path}>
        لیست های من
        <Icons.Heart className="text-2xl max-xs:text-xl" />
      </SectionsRow>
      <SectionsRow href="/profile/addresses" path={path}>
        آدرس ها
        <Icons.Address className="text-2xl max-xs:text-xl" />
      </SectionsRow>
      <SectionsRow href="/profile/user-history" path={path}>
        بازدید های اخیر
        <Icons.Clock className="text-2xl max-xs:text-xl" />
      </SectionsRow>
      <SectionsRow href="/profile/personal-info" path={path}>
        اطلاعات حساب
        <Icons.UserOutline className="text-2xl max-xs:text-xl" />
      </SectionsRow>
      <SignoutButton />
    </section>
  );
};

export default DesktopProfileDashboard;
