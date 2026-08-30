import LoadingDots from "@/components/ui/loading-dots";
import React, { Suspense } from "react";
import SearchOverlayClient from "./search-overlay-client";

const SearchOverlayWrapper = () => {
  return (
    <Suspense fallback={<LoadingDots />}>
      <SearchOverlayClient />
    </Suspense>
  );
};

export default SearchOverlayWrapper;
