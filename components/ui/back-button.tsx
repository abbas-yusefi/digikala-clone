"use client";

import { Icons } from "@/lib/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BackButton = ({
  className,
  variant,
}: {
  className?: string;
  variant?: "x";
}) => {
  const router = useRouter();
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    const checkHistory = () => {
      if (window.history.length > 1) {
        setHasHistory(true);
      }
    };
    checkHistory();
  }, []);

  const Icon = variant === "x" ? Icons.XMark : Icons.RightArrow;

  return (
    <button
      type="button"
      className={`${className} cursor-pointer`}
      onClick={hasHistory ? () => router.back() : () => router.push("/")}
    >
      <Icon className="text-3xl" />
    </button>
  );
};

export default BackButton;
