import digikala from "@/public/superweb/digikala.png";
import services from "@/public/superweb/services.png";
import food from "@/public/superweb/food.png";
import gold from "@/public/superweb/gold.png";
import market from "@/public/superweb/market.png";
import creditbuy from "@/public/superweb/creditbuy.png";

const tabsData = [
  {
    alt: "services section",
    superTabName: "سرویس  ها",
    image: services,
    href: "/services",
    bgColor: "bg-gray-700",
  },

  {
    alt: "digikala section",
    superTabName: "دیجی کالا",
    image: digikala,
    href: "/",
    bgColor: "bg-[#e04]",
  },

  {
    alt: "services section",
    superTabName: "دقیقه ای 45",
    image: food,
    href: "/jet",
    bgColor: "bg-[#b41]",
  },

  {
    alt: "services section",
    superTabName: "طلای دیجیتال",
    image: gold,
    href: "/gold",
    bgColor: "bg-yellow-500",
  },

  {
    alt: "services section",
    superTabName: "سوپرمارکت",
    image: market,
    href: "/market",
    bgColor: "bg-[#0a5]",
  },

  {
    alt: "services section",
    superTabName: "اعتبار خرید",
    image: creditbuy,
    href: "/credit",
    bgColor: "bg-blue-600",
  },
];

export default tabsData;
