"use client";

import React from "react";
import SectionsRow from "../sections-row";
import { Icons } from "@/lib/icons";
import SignoutButton from "@/components/ui/signout-button";
import PersonalInfo from "../personal-info";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";

const DesktopProfileDashboard = () => {
  const path = usePathname();
  const { data: session } = useSession();
  if (!session) redirect("/");
  const section = path.split("/")[2] || "profile";

  const sections = {
    profile: {
      title: "خلاصه فعالیت ها",
      href: "/profile",
      activeName: "profile",
      icon: Icons.HomeOutline,
    },
    orders: {
      title: "سفارش ها",
      href: "/profile/orders?activeTab=in_progress",
      activeName: "orders",
      icon: Icons.Bag,
    },
    lists: {
      title: "لیست های من",
      href: "/profile/lists",
      activeName: "lists",
      icon: Icons.Heart,
    },
    addresses: {
      title: "آدرس ها",
      href: "/profile/addresses",
      activeName: "addresses",
      icon: Icons.Address,
    },
    userHistory: {
      title: "بازدید های اخیر",
      href: "/profile/user-history",
      activeName: "user-history",
      icon: Icons.Clock,
    },
    personalInfo: {
      title: "اطلاعات حساب",
      href: "/profile/personal-info",
      activeName: "personal-info",
      icon: Icons.UserOutline,
    },
  };

  return (
    <section className="max-lg:hidden bg-surface-primary border rounded-2xl border-black/10 w-full">
      <PersonalInfo session={session} />
      {Object.values(sections).map((item) => (
        <SectionsRow
          key={item.activeName}
          section={section}
          activeTab={item.activeName}
          href={item.href}
          icon={item.icon}
        >
          {item.title}
        </SectionsRow>
      ))}
      <SignoutButton />
    </section>
  );
};

export default DesktopProfileDashboard;
