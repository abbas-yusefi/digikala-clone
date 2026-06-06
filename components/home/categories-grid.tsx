import Link from "next/link";
import Image from "next/image";
import mobile from "@/public/categoriesNav/phone.png";
import laptop from "@/public/categoriesNav/laptop.png";
import digital from "@/public/categoriesNav/digital.png";

const CategoriesGrid = () => {
  return (
    <section className="px-7 tracking-tight font-semibold">
      <h2 className="text-right">دسته بندی ها</h2>
      <div className="flex justify-center gap-10">
        <Link href={"/landing/mobile"}>
          <Image src={mobile} alt={"خرید گوشی"} width={70} />
        </Link>
        <Link href={"#"}>
          <Image src={laptop} alt={"خرید لپ تاپ"} width={70} />
        </Link>
        <Link href={"#"}>
          <Image src={digital} alt={"خرید کالای دیجیتال"} width={70} />
        </Link>
      </div>
    </section>
  );
};

export default CategoriesGrid;
