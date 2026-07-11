import { IoCart, IoCartOutline } from "react-icons/io5";
import {
  BiCategory,
  BiSolidCategory,
  BiHome,
  BiSolidHome,
} from "react-icons/bi";
import { FaRegUser, FaUser } from "react-icons/fa6";

import NavItem from "./nav-item";
import CartItemsLength from "./cart-items-length";

const Nav = async () => {
  return (
    <nav className="w-full h-14 bg-surface-primary fixed bottom-0 right-0 z-40 text-xs lg:hidden border-t border-black/7 pb-1.5">
      <div className="relative h-full">
        <div className="px-[clamp(16px,5vw,40px)] flex justify-between items-center h-full">
          <NavItem
            href="/profile"
            iconOutline={<FaRegUser className={"text-2xl"} />}
            iconSolid={<FaUser className={"text-2xl"} />}
          >
            دیجی کالای من
          </NavItem>

          <NavItem
            href="/checkout"
            iconOutline={<IoCartOutline className={"text-2xl"} />}
            iconSolid={<IoCart className={"text-2xl"} />}
          >
            <CartItemsLength />
            سبد خرید
          </NavItem>

          <NavItem
            href="/categories"
            iconOutline={<BiCategory className={"text-2xl"} />}
            iconSolid={<BiSolidCategory className={"text-2xl"} />}
          >
            دسته بندی
          </NavItem>

          <NavItem
            href="/"
            iconOutline={<BiHome className={"text-2xl"} />}
            iconSolid={<BiSolidHome className={"text-2xl"} />}
          >
            خانه
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
