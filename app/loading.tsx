import PulsingDotLoader from "@/components/ui/pulsing-dot-loader";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <PulsingDotLoader />
    </div>
  );
};

export default loading;
