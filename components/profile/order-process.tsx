import Link from "next/link";
import Returned from "@/public/orderprocess/status-returned.svg";
import Delivered from "@/public/orderprocess/status-delivered.svg";
import Processing from "@/public/orderprocess/status-processing.svg";
import OrderProcessSteps from "./order-process-steps";
import { Icons } from "@/lib/icons";

const OrderProcess = () => {
  return (
    <section className="w-full max-lg:px-4 max-lg:mt-10">
      <div className="flex lg:px-5 justify-between items-center w-full lg:mb-4 lg:py-10">
        <Link
          href={"/profile/orders"}
          className="flex items-center font-semibold text-text-link"
        >
          <Icons.Left className="text-lg max-xs:text-sm" />
          مشاهده همه
        </Link>
        <h2 className="font-semibold relative after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-brand-discount">
          سفارش های من
        </h2>
      </div>

      {/* Mobile version */}
      <div className="justify-around flex items-center py-5 mt-10 border-b border-black/10 lg:hidden">
        <OrderProcessSteps
          href="#"
          alt="سفارشات مرجوع شده"
          image={Returned}
          number={0}
        >
          مرجوع شده
        </OrderProcessSteps>
        <span className="h-20 bg-black/5 w-0.5"></span>

        <OrderProcessSteps
          href="#"
          alt="سفارشات تحویل داده شده"
          image={Delivered}
          number={0}
        >
          تحویل شده
        </OrderProcessSteps>
        <span className="h-20 bg-black/5 w-0.5"></span>

        <OrderProcessSteps
          href="#"
          alt="سفارشات جاری"
          image={Processing}
          number={0}
        >
          جاری
        </OrderProcessSteps>
      </div>

      {/* Desktop version */}
      <div className="justify-around flex items-center py-5 border-black/10 max-lg:hidden">
        <OrderProcessSteps
          href="#"
          alt="سفارشات مرجوع شده"
          image={Returned}
          number={0}
        >
          مرجوع شده
        </OrderProcessSteps>
        <span className="h-20 bg-black/5 w-0.5"></span>

        <OrderProcessSteps
          href="#"
          alt="سفارشات تحویل داده شده"
          image={Delivered}
          number={0}
        >
          تحویل شده
        </OrderProcessSteps>
        <span className="h-20 bg-black/5 w-0.5"></span>

        <OrderProcessSteps
          href="#"
          alt="سفارشات جاری"
          image={Processing}
          number={0}
        >
          جاری
        </OrderProcessSteps>
      </div>
    </section>
  );
};

export default OrderProcess;
