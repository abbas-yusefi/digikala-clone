import LoadingDots from "@/components/ui/loading-dots";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoadingDots />
    </div>
  );
};

export default loading;
