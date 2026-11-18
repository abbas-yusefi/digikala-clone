import OrdersDesktop from "@/components/profile/orders/orders-desktop";
import OrdersMobile from "@/components/profile/orders/orders-mobile";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    activeTab: "in_progress" | "sent" | "returned" | "cancelled";
  }>;
}) => {
  const { activeTab } = await searchParams;
  const active_tab: "in_progress" | "sent" | "returned" | "cancelled" =
    activeTab || "in_progress";
  return (
    <>
      <OrdersDesktop active_tab={active_tab} />
      <OrdersMobile active_tab={active_tab} />
    </>
  );
};

export default page;
