import NavItem from "./nav-item";
import CartItemsLength from "./cart-items-length";
import { Icons } from "@/lib/icons";

const Nav = async () => {
  return (
    <nav className="w-full h-14 bg-surface-primary fixed bottom-0 right-0 z-40 text-xs lg:hidden border-t border-black/7 pb-1.5">
      <div className="relative h-full">
        <div className="px-[clamp(16px,5vw,40px)] flex justify-between items-center h-full">
          <NavItem
            href="/profile"
            iconOutline={<Icons.UserOutline className={"text-2xl"} />}
            iconSolid={<Icons.User className={"text-2xl"} />}
          >
            دیجی کالای من
          </NavItem>

          <NavItem
            href="/checkout"
            iconOutline={<Icons.CartOutline className={"text-2xl"} />}
            iconSolid={<Icons.Cart className={"text-2xl"} />}
          >
            <CartItemsLength />
            سبد خرید
          </NavItem>

          <NavItem
            href="/categories"
            iconOutline={<Icons.CategoryOutline className={"text-2xl"} />}
            iconSolid={<Icons.Category className={"text-2xl"} />}
          >
            دسته بندی
          </NavItem>

          <NavItem
            href="/"
            iconOutline={<Icons.HomeOutline className={"text-2xl"} />}
            iconSolid={<Icons.Home className={"text-2xl"} />}
          >
            خانه
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
