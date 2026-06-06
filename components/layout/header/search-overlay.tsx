"use client";

import BackButton from "@/components/ui/back-button";
import SearchBar from "@/components/ui/search-bar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === "#search");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const updateSearch = (query: string) => {
    const params = new URLSearchParams();
    params.set("q", query);
    router.push(`/search?${params.toString()}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsOpen(false);
      updateSearch(searchResult);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-surface-primary">
      <BackButton className="fixed top-5 right-6" />
      <div className="mr-5 pr-10 pl-4 pt-2">
        <SearchBar
          onChange={setSearchResult}
          placeholder="جستجو در همه کالاها"
          divClassName="border border-black/10 p-2.5"
          inputClassName="text-right pr-7 font-semibold"
          onKeyDown={handleKeyPress}
          searchIcon={
            <button
              onClick={() => {
                setIsOpen(false);
                updateSearch(searchResult);
              }}
              onKeyDown={handleKeyPress}
              className="cursor-pointer"
            >
              <FiSearch />
            </button>
          }
          iconxPosition="right-20"
        />
      </div>
    </div>
  );
};

export default SearchOverlay;
