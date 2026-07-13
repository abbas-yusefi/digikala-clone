import logo from "@/public/other/logo.png";
import sib from "@/public/other/sib-app.svg";
import bazzar from "@/public/other/coffe-bazzar.svg";
import myket from "@/public/other/myket.svg";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/lib/icons";

const DownloadApp = () => {
  return (
    <div className="h-20 flex justify-between items-center bg-[#457] w-full rounded-lg px-4 my-8 ">
      <div className="flex items-center gap-4">
        <span className="flex justify-center items-center rounded-md w-[2.8rem] h-[2.8rem] bg-surface-primary">
          <Icons.Dot />
          <Icons.Dot />
          <Icons.Dot />
        </span>

        <Link href={"https://sibapp.com/applications/digikala"}>
          <Image
            alt="دانلود دیچی کالا از سیب"
            src={sib}
            className="w-36 cursor-pointer"
          />
        </Link>
        <Link href={"https://myket.ir/app/com.digikala"}>
          <Image
            alt="دانلود دیچی کالا از مایکت"
            src={myket}
            className="w-36 cursor-pointer"
          />
        </Link>
        <Link href={"https://cafebazaar.ir/app/com.digikala"}>
          <Image
            alt="دانلود دیچی کالا از بازار"
            src={bazzar}
            className="w-36 cursor-pointer rounded-md"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <h2
          className="font-bold text-surface-primary
             text-2xl"
        >
          دانلود اپلیکیشن دیجی کالا
        </h2>
        <Image
          alt="لگو دیجی کالا"
          src={logo}
          width={50}
          height={50}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
