import toothpaste from "./toothpaste.png";
import lafarrerr from "./lafarrerr.png";
import meltedgold from "./meltedgold.png";
import style from "./style.png";

import beancan from "./beancan.png";
import onlineshop from "./onlineshop.png";
import buynowpaylater from "./buynowpaylater.png";
import digistyle from "./digistyle.png";
import { StaticImageData } from "next/image";

type Categories = {
  id: number;
  image: StaticImageData;
  alt: string;
};

const firstCategories: Categories[] = [
  {
    id: 1,
    image: toothpaste,
    alt: "پارتنرشیپ-مریدنت",
  },
  {
    id: 2,
    image: lafarrerr,
    alt: "پارتنرشیپ-لافارر",
  },
  {
    id: 3,
    image: meltedgold,
    alt: "طلای ابشده و سکه با بهترین قیمت",
  },
  {
    id: 4,
    image: style,
    alt: "استایل جدید",
  },
];

const secondCategories: Categories[] = [
  {
    id: 1,
    image: beancan,
    alt: "سوپرمارکت فوری",
  },
  {
    id: 2,
    image: onlineshop,
    alt: "فروشنده های اینستاگرام",
  },
  {
    id: 3,
    image: buynowpaylater,
    alt: "4 قسطه",
  },
  {
    id: 4,
    image: digistyle,
    alt: "دیجی استایل",
  },
];

export { firstCategories, secondCategories };
