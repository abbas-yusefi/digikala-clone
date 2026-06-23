import Link from "next/link";
import Image from "next/image";
import mobile from "@/public/categoriesNav/phone.png";
import laptop from "@/public/categoriesNav/laptop.png";
import digital from "@/public/categoriesNav/digital.png";

const CategoriesGrid = () => {
  const DesktopStyling = "w-32 mb-5";
  return (
    <section className="px-7 tracking-tight font-semibold">
      <h2 className="text-right lg:text-center lg:text-lg lg:text-semibold lg:my-10">
        دسته بندی ها
      </h2>
      <div className="flex justify-center lg:gap-32 gap-10">
        <Link href={"/landing/mobile"} className={`${DesktopStyling}`}>
          <Image src={mobile} alt={"خرید گوشی"} className="w-auto h-auto" />
        </Link>
        <Link href={"#"} className={`${DesktopStyling}`}>
          <Image src={laptop} alt={"خرید لپ تاپ"} className="w-auto h-auto" />
        </Link>
        <Link href={"#"} className={`${DesktopStyling}`}>
          <Image
            src={digital}
            alt={"خرید کالای دیجیتال"}
            className="w-auto h-auto"
          />
        </Link>
      </div>
    </section>
  );
};

export default CategoriesGrid;
