import { StaticImageData } from "next/image";

import mdcloth from "./mobile/mdcloth.png";
import mdeconomicproducts from "./mobile/mdeconomicproducts.png";
import mdexternalhard from "./mobile/mdexternalhard.png";
import mdgreenhouse from "./mobile/mdgreenhouse.png";
import mdgrowthindigikala from "./mobile/mdgrowthindigikala.png";
import mdhomeproducts from "./mobile/mdhomeproducts.png";
import mdinvestingold from "./mobile/mdinvestingold.png";
import mdjet from "./mobile/mdjet.png";
import mdminimalhome from "./mobile/mdminimalhome.png";
import mdtala from "./mobile/mdtala.png";
import mdxiaomi from "./mobile/mdxiaomi.png";

import lgcloth from "./desktop/lgcloth.png";
import lgeconomichomeproducts from "./desktop/lgeconomichomeproducts.png";
import lgelectricsales from "./desktop/lgelectricsales.png";
import lggold from "./desktop/lggold.png";
import lggrowth from "./desktop/lggrowth.png";
import lghealthproducts from "./desktop/lghealthproducts.png";
import lglaptop from "./desktop/lglaptop.png";
import lgphones from "./desktop/lgphones.png";
import lgproducts from "./desktop/lgproducts.png";

type sliderImagesObject = {
  src: StaticImageData;
  alt: string;
};

const mdSliderImages: sliderImagesObject[] = [
  {
    src: mdcloth,
    alt: "انبارتکانی مد و پوشاک",
  },
  {
    src: mdhomeproducts,
    alt: "لوازم برقی اقتصادی",
  },
  {
    src: mdexternalhard,
    alt: "خرید هارد",
  },
  {
    src: mdgreenhouse,
    alt: "خانه سبز - وب",
  },
  {
    src: mdgrowthindigikala,
    alt: "پارتنرشیپ-ادز",
  },
  {
    src: mdeconomicproducts,
    alt: "لوازم بهداشتی اقتضادی",
  },
  {
    src: mdinvestingold,
    alt: "طلای دیجیتال",
  },
  {
    src: mdjet,
    alt: "jet",
  },
  {
    src: mdminimalhome,
    alt: "خونه مینیمال-وب",
  },
  {
    src: mdtala,
    alt: "پرتخفیف های طلا و نقره",
  },
  {
    src: mdxiaomi,
    alt: "محصولات شیاعومی",
  },
];

const lgSliderImages: sliderImagesObject[] = [
  {
    src: lgcloth,
    alt: "انواع پوشاک زنانه و مردانه",
  },
  {
    src: lgeconomichomeproducts,
    alt: "لوازم برقی اقتصادی",
  },
  {
    src: lggold,
    alt: "پرتخفیف های طلا و نقره",
  },
  {
    src: lgelectricsales,
    alt: "الکتروحراج",
  },
  {
    src: lggrowth,
    alt: "پارتنرشیپ-ادز",
  },
  {
    src: lghealthproducts,
    alt: "خرید سرماه سلامت پزشکی",
  },
  {
    src: lglaptop,
    alt: "لپ تاپ های متناسب",
  },
  {
    src: lgphones,
    alt: "بهترین گوشی ها",
  },
  {
    src: lgproducts,
    alt: "اقلام ضروری",
  },
];

export { mdSliderImages, lgSliderImages };
