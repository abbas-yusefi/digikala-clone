import React from "react";
import SectionsRow from "../sections-row";
import { Icons } from "@/lib/icons";
import SignoutButton from "@/components/ui/signout-button";

const MobileProfileDashboard = () => {
  return (
    <section className="w-full lg:hidden">
      <SectionsRow href="/profile/orders" icon={Icons.Bag}>
        سفارش ها
      </SectionsRow>
      <SectionsRow href="/profile/lists" icon={Icons.Heart}>
        لیست های من
      </SectionsRow>
      <SectionsRow href="/profile/addresses" icon={Icons.Address}>
        آدرس ها
      </SectionsRow>
      <SectionsRow href="/profile/user-history" icon={Icons.Clock}>
        بازدید های اخیر
      </SectionsRow>
      <SectionsRow href="/profile/personal-info" icon={Icons.UserOutline}>
        اطلاعات حساب
      </SectionsRow>
      <SignoutButton />
    </section>
  );
};

export default MobileProfileDashboard;
