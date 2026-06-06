import jet from "@/public/productcircle/jet.png";
import gold from "@/public/productcircle/gold.png";
import plus from "@/public/productcircle/plus.png";
import digipay from "@/public/productcircle/digipay.png";
import summerstyle from "@/public/productcircle/summerstyle.png";
import powerbank from "@/public/productcircle/powerbank.png";
import motorbargh from "@/public/productcircle/motorbargh.png";
import installapp from "@/public/productcircle/installapp.png";
import { StaticImageData } from "next/image";

type circleDataProps = {
  textFirstLine: string;
  textSecondLine?: string;
  image: StaticImageData;
  href: string;
};

const circleData: circleDataProps[] = [
  {
    textFirstLine: `ارسال فوری`,
    textSecondLine: "خواربار",
    image: jet,
    href: "/",
  },
  {
    textFirstLine: "طلای دیجیتال",
    image: gold,
    href: "/",
  },
  {
    textFirstLine: "پلاس",
    image: plus,
    href: "/",
  },
  {
    textFirstLine: "وام بانکی",
    textSecondLine: "دیجی پی",
    image: digipay,
    href: "/",
  },
  {
    textFirstLine: "استایل بهاری",
    image: summerstyle,
    href: "/",
  },
  {
    textFirstLine: "انتخواب",
    textSecondLine: "پاوربانک",
    image: powerbank,
    href: "/",
  },
  {
    textFirstLine: "موتور برق",
    image: motorbargh,
    href: "/",
  },
  {
    textFirstLine: "نصب اپ",
    image: installapp,
    href: "/",
  },
];

export default circleData;
