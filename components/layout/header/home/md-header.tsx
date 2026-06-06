import HorizantalNav from "@/components/shared/horizantal-nav";
import { IoNotificationsOutline, IoLocationOutline } from "react-icons/io5";
import SearchBar from "@/components/ui/search-bar";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import useScrollThreshold from "@/lib/hooks/useScrollThreshold";
import SuperwebTab from "./superweb-tab";
import tabsData from "@/public/superweb";
import Link from "next/link";

const MdHeader = () => {
  const scrolled = useScrollThreshold({
    disableThreshold: 350,
    enableThreshold: 450,
  });
  return (
    <>
      <header className="text-xs font-semibold sticky top-0 z-50 bg-surface-primary">
        <nav>
          <HorizantalNav className="gap-2 px-5">
            {tabsData.map((tab) => (
              <SuperwebTab
                key={tab.href}
                alt={tab.alt}
                superTabName={tab.superTabName}
                image={tab.image}
                href={tab.href}
                bgColor={tab.bgColor}
                scrolled={scrolled}
              />
            ))}
          </HorizantalNav>

          <div
            className={`px-5 flex justify-center items-center mt-3 cursor-pointer pb-2 ${scrolled ? "border-b border-black/20" : ""}`}
          >
            <span className="p-3 border rounded-full border-black/10 mr-4 text-[1.5rem]">
              <IoNotificationsOutline />
            </span>

            <SearchBar
              placeholder="جستجو"
              divClassName="border border-black/10 p-2.5"
              inputClassName="text-right pr-7"
              searchIcon={<FiSearch />}
              iconxPosition="right-10"
              childrenxPosition="right-29"
            >
              <Image
                src={"https://www.digikala.com/brand/typography.svg"}
                width={64}
                height={64}
                alt="digikala icon"
              />
            </SearchBar>
          </div>
          <div
            className={`${scrolled ? "opacity-0 h-0" : "h-10"} flex items-center justify-end mx-5 cursor-text transition duration-100`}
          >
            &lt;انتخواب استان و شهر
            <IoLocationOutline className="ml-1 text-[1.1rem]" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default MdHeader;
