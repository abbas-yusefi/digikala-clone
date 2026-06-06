"use client";

import { useRouter } from "next/navigation";
import { BiRightArrowAlt } from "react-icons/bi";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className={`${className} cursor-pointer`}
      onClick={() => router.back()}
    >
      <BiRightArrowAlt className="scale-200" />
    </button>
  );
};

export default BackButton;
