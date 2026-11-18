import OrderEmpty from "@/components/profile/order-empty";
import ProfileWrapper from "@/components/profile/profile-wrapper";
import Link from "next/link";
import NumberSquare from "./number-square";

const OrdersDesktop = ({ active_tab }: { active_tab: string }) => {
  return (
    <ProfileWrapper className="flex-col max-lg:hidden">
      <div
        dir="rtl"
        className="w-full flex flex-col justify-end px-4 border-b mb-4 border-gray-300"
      >
        <h2 className="text-lg font-semibold my-8">تاریخچه سفارشات</h2>
        <div className="w-full font-normal text-text-secondary text-lg flex ">
          <Link
            href={"/profile/orders?activeTab=in_progress"}
            className={`${active_tab === "in_progress" ? "border-b-3 border-brand-discount text-brand-discount" : ""} cursor-pointer px-4 py-4 flex items-center gap-1`}
          >
            جاری
          </Link>
          <Link
            href={"/profile/orders?activeTab=sent"}
            className={`${active_tab === "sent" ? "border-b-3 border-brand-discount text-brand-discount" : ""} cursor-pointer px-4 py-4 flex items-center gap-1`}
          >
            تحویل شده
            <NumberSquare number={0} tabName="sent" active_tab={active_tab} />
          </Link>
          <Link
            href={"/profile/orders?activeTab=returned"}
            className={`${active_tab === "returned" ? "border-b-3 border-brand-discount text-brand-discount" : ""} cursor-pointer px-4 py-4 flex items-center gap-1`}
          >
            مرجوع شده
            <NumberSquare
              number={0}
              tabName="returned"
              active_tab={active_tab}
            />
          </Link>
          <Link
            href={"/profile/orders?activeTab=cancelled"}
            className={`${active_tab === "cancelled" ? "border-b-3 border-brand-discount text-brand-discount" : ""} cursor-pointer px-4 py-4 flex items-center gap-1`}
          >
            لغو شده
            <NumberSquare
              number={0}
              tabName="cancelled"
              active_tab={active_tab}
            />
          </Link>
        </div>
      </div>
      <main className="h-96">
        <OrderEmpty />
      </main>
    </ProfileWrapper>
  );
};

export default OrdersDesktop;
