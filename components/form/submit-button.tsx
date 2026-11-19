import React from "react";

const SubmitButton = ({
  children,
  isSubmitting,
}: {
  children: React.ReactNode;
  isSubmitting?: boolean;
}) => {
  return (
    <button
      disabled={isSubmitting}
      type="submit"
      className={`${isSubmitting ? "bg-brand-secondary/80" : "bg-brand-secondary"} disabled:cursor-not-allowed w-full p-4 rounded-md text-white cursor-pointer mt-4`}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
