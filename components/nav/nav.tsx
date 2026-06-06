import { auth } from "@/auth";
import { getAllCartProducts } from "@/lib/querys";
import { IoCart, IoCartOutline } from "react-icons/io5";
import {
  BiCategory,
  BiSolidCategory,
  BiHome,
  BiSolidHome,
  BiUser,
  BiSolidUser,
  BiSupport,
} from "react-icons/bi";
import NavSections from "./nav-sections";
import CartItemsLength from "./cart-items-length";

const Nav = async () => {
  const session = await auth();
  const email = session?.user?.email;
  const numberOfProducts = email ? await getAllCartProducts(email) : [];
  const iconScale = 200;

  return (
    <nav className="w-full h-14 bg-surface-primary fixed bottom-0 right-0 z-50 text-xs lg:hidden border-t border-black/7">
      <div className="relative h-full">
        <span className="absolute bottom-20 left-5 bg-surface-primary rounded-full p-3 cursor-pointer bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500">
          <BiSupport className="text-2xl" color="white" />
        </span>
        <div className="px-[clamp(16px,5vw,40px)] flex justify-between items-center h-full">
          <NavSections
            href="/profile"
            iconOutline={<BiUser className={`scale-${iconScale}`} />}
            iconSolid={<BiSolidUser className={`scale-${iconScale}`} />}
          >
            دیجی کالای من
          </NavSections>

          <NavSections
            href="/checkout"
            iconOutline={<IoCartOutline className={`scale-${iconScale}`} />}
            iconSolid={<IoCart className={`scale-${iconScale}`} />}
          >
            <CartItemsLength isLoggedIn={session ? true : false}>
              {numberOfProducts.length}
            </CartItemsLength>
            سبد خرید
          </NavSections>

          <NavSections
            href="/categories"
            iconOutline={<BiCategory className={`scale-${iconScale}`} />}
            iconSolid={<BiSolidCategory className={`scale-${iconScale}`} />}
          >
            دسته بندی
          </NavSections>

          <NavSections
            href="/"
            iconOutline={<BiHome className={`scale-${iconScale}`} />}
            iconSolid={<BiSolidHome className={`scale-${iconScale}`} />}
          >
            خانه
          </NavSections>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
