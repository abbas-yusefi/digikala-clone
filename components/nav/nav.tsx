import { IoCart, IoCartOutline } from "react-icons/io5";
import {
  BiCategory,
  BiSolidCategory,
  BiHome,
  BiSolidHome,
  BiSupport,
} from "react-icons/bi";
import { FaRegUser, FaUser } from "react-icons/fa6";

import NavItem from "./nav-item";
import CartItemsLength from "./cart-items-length";

const Nav = async () => {
  const iconScale = 200;

  return (
    <nav className="w-full h-14 bg-surface-primary fixed bottom-0 right-0 z-50 text-xs lg:hidden border-t border-black/7">
      <div className="relative h-full">
        <span className="absolute bottom-20 left-5 bg-surface-primary rounded-full p-3 cursor-pointer bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500">
          <BiSupport className="text-2xl" color="white" />
        </span>
        <div className="px-[clamp(16px,5vw,40px)] flex justify-between items-center h-full">
          <NavItem
            href="/profile"
            iconOutline={<FaRegUser className={`scale-${iconScale}`} />}
            iconSolid={<FaUser className={`scale-${iconScale}`} />}
          >
            دیجی کالای من
          </NavItem>

          <NavItem
            href="/checkout"
            iconOutline={<IoCartOutline className={`scale-${iconScale}`} />}
            iconSolid={<IoCart className={`scale-${iconScale}`} />}
          >
            <CartItemsLength />
            سبد خرید
          </NavItem>

          <NavItem
            href="/categories"
            iconOutline={<BiCategory className={`scale-${iconScale}`} />}
            iconSolid={<BiSolidCategory className={`scale-${iconScale}`} />}
          >
            دسته بندی
          </NavItem>

          <NavItem
            href="/"
            iconOutline={<BiHome className={`scale-${iconScale}`} />}
            iconSolid={<BiSolidHome className={`scale-${iconScale}`} />}
          >
            خانه
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
