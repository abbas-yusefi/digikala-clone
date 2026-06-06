import React from "react";

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="submit"
      className="bg-brand-secondary w-full p-4 rounded-md text-white cursor-pointer mt-4"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
