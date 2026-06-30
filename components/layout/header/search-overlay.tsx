"use client";

import BackButton from "@/components/ui/back-button";
import SearchBar from "@/components/ui/search-bar";
import {
  addRecenetlySearchedAction,
  deleteAllRecentSearchesAction,
  getRecentlySearchedAction,
} from "@/lib/actions/search";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

type RecentSearched = {
  search_term: string;
  id: number;
};

const SearchOverlay = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [isOpen, setIsOpen] = useState(false);
  const [searchResult, setSearchResult] = useState(query);
  const [recentSearches, setRecentSearches] = useState<RecentSearched[]>([]);
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user?.id;

  // Track the hash changes cleanly
  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === "#search");
    };

    // Sync state on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Separate effect for fetching recent searches when open & userId is available
  useEffect(() => {
    if (userId && isOpen) {
      const getRecentSearches = async () => {
        const data = await getRecentlySearchedAction(userId);
        if (data) setRecentSearches(data);
      };
      getRecentSearches();
    }
  }, [userId, isOpen]);

  const updateSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    if (userId) {
      await addRecenetlySearchedAction(searchQuery, userId);
    }

    setIsOpen(false);

    if (window.location.hash === "#search") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    const params = new URLSearchParams();
    params.set("q", searchQuery);
    router.push(`/search?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateSearch(searchResult);
    }
  };

  const handleDeleteAllRecentSearches = (id: string | undefined) => {
    if (!id) return;
    deleteAllRecentSearchesAction(id);
    setRecentSearches([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-surface-primary">
      <BackButton className="fixed top-5 right-6" />
      <div className="mr-5 pr-10 pl-4 pt-2">
        <SearchBar
          value={searchResult}
          onChange={setSearchResult}
          placeholder="جستجو در همه کالاها"
          divClassName="border border-black/10 p-2.5"
          inputClassName="text-right pr-7 font-semibold"
          onKeyDown={handleKeyPress}
          autoFocus
          searchIcon={
            <button
              onClick={() => updateSearch(searchResult)}
              className="cursor-pointer"
              type="button"
            >
              <FiSearch />
            </button>
          }
          iconxPosition="right-20"
        />
      </div>
      <div className={`${userId ? "" : "hidden"} mt-3 px-3`}>
        <div className="flex justify-between items-center mb-5">
          <button
            onClick={() => handleDeleteAllRecentSearches(userId)}
            className="text-sm text-text-secondary cursor-pointer"
            type="button"
          >
            پاک کردن
          </button>
          <h2 className="font-semibold">جستجوهای اخیر</h2>
        </div>
        <div style={{ direction: "rtl" }}>
          {recentSearches &&
            recentSearches.map((search) => (
              <button
                className="border inline-block ml-2 mb-2 rounded-4xl border-black/30 p-1 px-5 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  router.push(
                    `/search?q=${encodeURIComponent(search.search_term)}`,
                  );
                }}
                key={search.id}
                type="button"
              >
                {search.search_term}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
