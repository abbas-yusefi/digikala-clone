"use client";

import BackButton from "../ui/back-button";
import Image from "next/image";
import HeaderImage from "@/public/header.png";
import { useEffect, useState } from "react";
import { Icons } from "@/lib/icons";
import ShareButton from "../shared/share-button";

const DisplayProductHeader = ({
  category,
  query,
}: {
  category?: string;
  query?: string;
}) => {
  const headings: Record<string, string> = {
    mobile: "گوشی موبایل",
    tablet: "تبلت",
    laptop: "لپ تاپ",
    headphones: "هدفون، هدست و هندزفری",
    smartwatch: "ساعت هوشمند",
  };

  const heading = headings[category as keyof typeof headings] || "";
  const [handleInput, setHandleInput] = useState(query || "");

  useEffect(() => {
    const setQuery = () => {
      if (!query) return;
      setHandleInput(query);
    };
    setQuery();
  }, [query]);

  if (category)
    return (
      <>
        <div className="flex items-center justify-between px-7 py-5">
          <div className="flex gap-7 text-2xl">
            <ShareButton />
            <button onClick={() => (window.location.hash = "search")}>
              <Icons.Search className="cursor-pointer" />
            </button>
          </div>
          <div className="flex gap-7 font-bold">
            <h1>{heading && heading}</h1>
            <BackButton />
          </div>
        </div>
        <Image alt="header ad" src={HeaderImage} className="h-8 object-cover" />
      </>
    );
  return (
    <div>
      <div className="flex items-center pl-4 pr-6">
        <input
          dir="rtl"
          type="search"
          readOnly
          value={handleInput}
          onChange={(e) => setHandleInput(e.target.value)}
          placeholder="جستجو"
          className="w-full py-2.5 border px-5 mr-8 rounded-4xl border-black/15 focus:outline-none relative"
          onClick={() => (window.location.hash = "search")}
        />
        <button
          className="absolute ml-4 cursor-pointer"
          onClick={() => (window.location.hash = "search")}
        >
          <Icons.XMark className="text-lg text-black/40" />
        </button>
        <BackButton />
      </div>
    </div>
  );
};

export default DisplayProductHeader;
