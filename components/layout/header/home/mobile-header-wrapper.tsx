import LoadingDots from "@/components/ui/loading-dots";
import React, { Suspense } from "react";
import MobileHeader from "./mobile-header";

const MobileHeaderWrapper = () => {
  return (
    <Suspense fallback={<LoadingDots className="h-20 w-full" />}>
      <MobileHeader />
    </Suspense>
  );
};

export default MobileHeaderWrapper;
