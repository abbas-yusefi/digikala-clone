"use client";

import { Icons } from "@/lib/icons";
import { useRouter } from "next/navigation";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className={`${className} cursor-pointer`}
      onClick={() => router.back()}
    >
      <Icons.RightArrow className="text-3xl" />
    </button>
  );
};

export default BackButton;
