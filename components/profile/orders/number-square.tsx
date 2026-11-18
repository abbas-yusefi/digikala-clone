import React from "react";

const NumberSquare = ({
  number,
  tabName,
  active_tab,
}: {
  number: number;
  tabName: string;
  active_tab: string;
}) => {
  return (
    <div
      className={`flex justify-center items-center  text-white w-5 h-5 text-center text-xs rounded-sm max-[425px]:w-4 max-[425px]:h-4 ${tabName === active_tab ? "bg-brand-secondary" : "bg-text-secondary"}`}
    >
      <span className="h-fit w-fit">{number || 0}</span>
    </div>
  );
};

export default NumberSquare;
