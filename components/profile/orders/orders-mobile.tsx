import OrderEmpty from "@/components/profile/order-empty";
import { Icons } from "@/lib/icons";
import Link from "next/link";
import NumberSquare from "./number-square";

const OrdersMobile = ({ active_tab }: { active_tab: string }) => {
  return (
    <div className="lg:hidden w-full h-full">
      <div
        dir="rtl"
        className="w-full flex flex-col justify-end border-b mb-4 border-gray-300"
      >
        <div className="flex items-center gap-3 my-4 px-4">
          <Link href={"/profile"}>
            <Icons.RightArrow className="text-xl bg-" />
          </Link>
          <h2 className="text-lg font-semibold">تاریخچه سفارشات</h2>
        </div>
        <div className="w-full text-text-secondary text-sm max-[425px]:text-xs flex items-center font-semibold">
          <Link
            href={"/profile/orders?activeTab=in_progress"}
            className={`${active_tab === "in_progress" ? "border-b-3 border-brand-discount text-brand-discount" : ""} cursor-pointer py-4 w-[25%] flex justify-center items-center gap-1`}
          >
            جاری
          </Link>
          <Link
            href={"/profile/orders?activeTab=sent"}
            className={`${active_tab === "sent" ? "border-b-3 border-brand-discount text-brand-discount" : ""} cursor-pointer py-4 w-[25%] flex justify-center items-center gap-1`}
          >
            تحویل شده
            <NumberSquare active_tab={active_tab} tabName="sent" number={0} />
          </Link>
          <Link
            href={"/profile/orders?activeTab=returned"}
            className={`${active_tab === "returned" ? "border-b-3 border-brand-discount text-brand-discount" : ""} cursor-pointer py-4 w-[25%] flex justify-center items-center gap-1`}
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
            className={`${active_tab === "cancelled" ? "border-b-3 border-brand-discount text-brand-discount" : ""} cursor-pointer py-4 w-[25%] flex justify-center items-center gap-1`}
          >
            لغو شده
            <NumberSquare
              tabName="cancelled"
              number={0}
              active_tab={active_tab}
            />
          </Link>
        </div>
      </div>
      <main className="h-96">
        <OrderEmpty />
      </main>
    </div>
  );
};

export default OrdersMobile;
