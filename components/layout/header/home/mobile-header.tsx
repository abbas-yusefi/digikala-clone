"use client";

import HorizontalNav from "@/components/shared/horizontal-nav";
import SearchBar from "@/components/ui/search-bar";
import Image from "next/image";
import useScrollThreshold from "@/lib/hooks/useScrollThreshold";
import SuperwebTab from "./superweb-tab";
import tabsData, { TabsData } from "@/public/superweb";
import { usePathname, useSearchParams } from "next/navigation";
import SearchMobileHeader from "@/components/search/search-mobile-header";
import digikalatext from "@/public/other/digikalatext.svg";
import { Icons } from "@/lib/icons";

const MobileHeader = ({ shrinkNavs }: { shrinkNavs?: boolean }) => {
  const scrolled = useScrollThreshold({
    disableThreshold: 350,
    enableThreshold: 450,
  });

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || undefined;
  const query = searchParams.get("query") || "";

  const path = usePathname();

  if (path == "/checkout" || path == "/profile") return null;

  if (path == "/search")
    return <SearchMobileHeader category={category} query={query} />;

  return (
    <>
      <header className="lg:hidden text-xs font-semibold sticky -my-5 top-0 z-50 bg-surface-primary pt-3">
        <nav>
          <HorizontalNav className="gap-2 px-5">
            {tabsData.map((tab: TabsData) => (
              <SuperwebTab
                key={tab.href}
                alt={tab.alt}
                superTabName={tab.superTabName}
                image={tab.image}
                href={tab.href}
                bgColor={tab.bgColor}
                scrolled={shrinkNavs ? shrinkNavs : scrolled}
              />
            ))}
          </HorizontalNav>

          <div
            className={`px-5 flex justify-center items-center mt-3 cursor-pointer pb-2 ${scrolled ? "border-b border-black/20" : ""}`}
          >
            <span className="p-3 border rounded-full border-black/10 mr-4 text-[1.5rem]">
              <Icons.Bell />
            </span>

            <SearchBar
              placeholder="جستجو"
              divClassName="border border-black/10 p-2.5"
              inputClassName="text-right pr-9"
              searchIcon={<Icons.Search />}
              iconxPosition="right-10"
              childrenxPosition="right-28"
            >
              <Image
                src={digikalatext}
                width={64}
                height={64}
                priority
                alt="digikala icon"
                className="w-14 h-14"
              />
            </SearchBar>
          </div>
          <div
            className={`${scrolled || path === "/categories" ? "opacity-0 h-0" : "h-10"} flex items-center justify-end mx-5 cursor-text transition duration-100 font-semibold`}
          >
            <Icons.Left className="-mb-1.5 mr-1 text-sm" />
            انتخواب استان و شهر
            <Icons.Map className="ml-1 text-[1.1rem]" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default MobileHeader;
