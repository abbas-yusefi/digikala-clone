import React from "react";

const ProfileWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} flex justify-center items-center border border-black/10 bg-surface-primary rounded-2xl h-fit w-200`}
    >
      {children}
    </div>
  );
};

export default ProfileWrapper;
